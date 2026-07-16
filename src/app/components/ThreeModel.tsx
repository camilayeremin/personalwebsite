import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useFBX, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import catModelUrl from '../../assets/cat02.fbx'
import b0TextureUrl from '../../assets/mBody.png'
import clothTextureUrl from '../../assets/mTops.png'
import eTextureUrl from '../../assets/mEye.png'
import mTextureUrl from '../../assets/mMouth.png'

class ModelErrorBoundary extends React.Component<
    { children: React.ReactNode; fallback: React.ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: unknown) {
        console.error('3D model render failed:', error)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }

        return this.props.children
    }
}


function RiggedScene({ scene }: { scene: THREE.Object3D }) {
  const headRef = useRef<THREE.Object3D | null>(null)
  const target = useRef({ x: 0, y: 0 })
  const bounds = useRef(new THREE.Box3())
  const size = useRef(new THREE.Vector3())
  const center = useRef(new THREE.Vector3())

  // 1. Load all 4 textures from your public/textures/ folder
  const textures = useTexture({
    mBody: b0TextureUrl,
    mTops: clothTextureUrl,
    mEye: eTextureUrl,
    mMouth: mTextureUrl,
  })

  Object.values(textures).forEach((tex) => {
    tex.colorSpace = THREE.SRGBColorSpace
    tex.flipY = true              // FIX 1: Flips the texture right side up vertically
    tex.wrapS = THREE.RepeatWrapping // FIX 2: Enables horizontal repeating for patterns
    tex.wrapT = THREE.RepeatWrapping // FIX 3: Enables vertical repeating for patterns
  })

  useEffect(() => {
    
      scene.position.set(0, -1, 0) // Centers the cat and lowers it slightly into frame
      scene.scale.setScalar(0.05)     // Converts Maya's huge centimeters to standard Three.js meters

    // 2. Map through every sub-mesh and hook up the correct material texture
    scene.traverse((child) => {
  if ((child as THREE.Mesh).isMesh) {
    const mesh = child as THREE.Mesh
    mesh.castShadow = true
    mesh.receiveShadow = true

    if (mesh.material) {
      // Ensure we treat everything uniformly as an array
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]

      materials.forEach((mat: any) => {
        // 1. CRITICAL: Stop vertex colors from overriding your manual coloring
        mat.vertexColors = false
        mat.side = THREE.DoubleSide
        
        // Ensure the base multiplier color is pure white so textures don't get darkened
        if (mat.color) mat.color.set('#ffffff')

        const matName = (mat.name || '').toLowerCase().trim()

        // 2. TEXTURE ASSIGNMENTS
        if (matName.includes('mtops')) {
          mat.map = textures.mTops
        } else if (matName.includes('meye')) {
          mat.map = textures.mEye
        } else if (matName.includes('mmouth')) {
          mat.map = textures.mMouth
        } else if (matName.includes('mbody')) {
          mat.map = textures.mBody
        } else {
          // 3. THE ULTIMATE FIX: If an unnamed material slot handles the paws/feet,
          // disconnect the texture map and force-tint the base shader color to blue.
          mat.map = null
          if (mat.color) mat.color.set('#6a7eff') // Forces the existing material to change color
        }

        mat.needsUpdate = true
      })
    }
  }
})

    headRef.current =
      scene.getObjectByName('head') ||
      scene.getObjectByName('Head') ||
      scene.getObjectByName('neck') ||
      scene.getObjectByName('chest') ||
      scene.getObjectByName('base') ||
      scene.getObjectByName('root') ||
      scene
  }, [scene, textures])

  // Keep your existing mouse pointer tracking logic
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      target.current.x = nx
      target.current.y = ny
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, delta) => {
    if (!headRef.current) return
    const rx = target.current.x * 0.25
    const ry = -target.current.y * 0.4
    headRef.current.rotation.x += (rx - headRef.current.rotation.x) * 12 * delta
    headRef.current.rotation.y += (ry - headRef.current.rotation.y) * 12 * delta
  })

  return <primitive object={scene} />
}


function RiggedGltfModel({ url }: { url: string }) {
    const { scene } = useGLTF(url) as { scene: THREE.Object3D }
    return <RiggedScene scene={scene} />
}

function RiggedFbxModel({ url }: { url: string }) {
    const scene = useFBX(url)
    return <RiggedScene scene={scene} />
}

export default function ThreeModelWrapper({ modelUrl = '../assets/cat02.fbx' }: { modelUrl?: string }) {
    const isFbx = modelUrl.toLowerCase().endsWith('.fbx')

    return (
        <div style={{ width: '100%', height: 340, marginTop: 12 }}>
            <ModelErrorBoundary
                fallback={
                    <div className="grid h-full place-items-center rounded-[1.5rem] border border-slate-200 bg-white/70 text-center text-sm text-slate-600">
                        <p>3D model could not load. The rest of the page is still working.</p>
                    </div>
                }
            >
                <Canvas camera={{ position: [0, 1.0, 3.1], fov: 40 }} gl={{ alpha: true }}>
                    <ambientLight intensity={2.5} />
                    <directionalLight position={[0, 6, 0]} intensity={1} />
                    <Suspense fallback={null}>
                        {isFbx ? <RiggedFbxModel url={modelUrl} /> : <RiggedGltfModel url={modelUrl} />}
                    </Suspense>
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
                </Canvas>
            </ModelErrorBoundary>
        </div>
    )
}