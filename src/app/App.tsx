import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import imgResumePic from "../imports/resume-ss.png";
import imgPortfolioPic from "../imports/Frame11/1aba2f9758ed7a034c2ea1d51dba30aca5f6a6dc.png";
import RomanceSystemPic from "../imports/romancesystem-ss.png";
import PathAnuPic from "../imports/pathanu-ss.png";
import OSOgif from "../imports/oso-gif.png"
import CMYKingdomPic from "../imports/CMYKingdom-ss.png";
import imgContactMePic from "../imports/optiontwoHeader.jpeg";
import gradientGreen from "../imports/boringwesbiteback.jpg";
import ThreeModelWrapper from './components/ThreeModel'



type ProjectPageId = `/project/${string}`;
type PageId = "/" | "/portfolio" | "/resume" | "/contact" | ProjectPageId;
type PortfolioLink = { label: string; href: string; isDownload: boolean }; // Add the isDownload property

const CONTACT_EMAIL = "yereminsasha@gmail.com";
const RESUME_DOWNLOAD_URL = `${import.meta.env.BASE_URL}resume.pdf`;
const PAPER_DOWNLOAD_URL = `${import.meta.env.BASE_URL}slome-paper.pdf`;

const SITE_THEME = {
  pageBackgroundImage: gradientGreen,
  // We change the solid colors to semi-transparent white/blue tints so the image shines through
  pageBackgroundOverlay: "radial-gradient(circle at top, rgba(186,230,253,0.45), transparent 32%), linear-gradient(180deg, rgba(248,250,252,0.6) 0%, rgba(238,242,255,0.6) 100%)",
  navbarBackground: "hsl(48, 89%, 94%)",
  greetingBackground: "hsl(48, 89%, 94%)",
  fontColor: "#0b0b0b",
  fontColor2: "hsl(48, 89%, 94%)",
};


const NAV_ITEMS: Array<{ href: PageId; label: string }> = [
  { href: "/", label: "home" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact me" },
];

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  links: PortfolioLink[];
  previewUrl?: string;
  learnMoreUrl?: string;
  detailDescription: string;
  detailImages: string[];
  notes: {
    role: string;
    problems: string[];
    solutions: string[];
  };
};

// EDIT PROJECT CONTENT HERE: replace the text and imported image values below.
// For simple file paths, put images in public/projects and use paths like "/projects/my-image.png".
// Add up to three gallery paths to detailImages for the project detail page.
const PROJECTS: Project[] = [
  {
    slug: "cmykingdom",
    title: "CMYKingdom, Custom OpenGL Engine for a 3d Platformer Game",
    description:
      "OpenGL 3D platformer game where the main quest is to explore the world to collect cyan, magenta, and yellow crystals scattered throughout the land to restore color to the kingdom!",
    // Cover image: replace CMYKingdomPic with a path such as "/projects/cmykingdom-cover.png".
    image: CMYKingdomPic,
    links: [],
    learnMoreUrl: "https://brennanandruss.github.io/CMYKingdom/",
    detailDescription:
      "CMYKingdom is a 3D platformer built around a custom OpenGL engine. Players explore a colorful world, collect cyan, magenta, and yellow crystals, and restore color to the kingdom.",
    // Gallery images: add paths such as ["/projects/cmykingdom-1.png", "/projects/cmykingdom-2.png"].
    detailImages: [
      
    ],
    notes: {
      role: "Engine programming, gameplay systems, 3D environment work, and platformer level design.",
      problems: [
        "The custom engine needed to support a colorful 3D world while keeping platforming movement responsive.",
        "The crystal-collection quest needed clear visual feedback for players as they restored color to the kingdom.",
      ],
      solutions: [
        "Built reusable OpenGL systems for rendering, scene management, and gameplay interactions.",
        "Used the cyan, magenta, and yellow crystal objectives to connect exploration, progression, and the game's visual identity.",
      ],
    },
  },
  {
    slug: "path-of-anu",
    title: "Path of Anu, Zodiac Inspired VR Puzzle Solving Experience",
    description:
      "Unity VR experience where you cast spells in real time using hand gestures. Path of Anu is a VR spellcasting experience in which players draw magical sigils in real time using XR controls, designed for the Meta Quest 3 and Meta Quest 3 controllers.",
    // Cover image: replace PathAnuPic with a path such as "/projects/path-of-anu-cover.png".
    image: PathAnuPic,
    links: [
      { label: "github", href: "https://github.com/BrennanAndruss/PathOfAnu", isDownload: false },
      { label: "video", href: "https://youtu.be/PUcehc885bM", isDownload: false },
    ],
    detailDescription:
      "Path of Anu is a zodiac-inspired VR puzzle-solving experience for Meta Quest 3 built with Unity. Players draw magical sigils with XR controls to cast corresponding spells and solve the world’s puzzles.",
    // Gallery images: add paths such as ["/projects/path-of-anu-1.png", "/projects/path-of-anu-2.png"].
    detailImages: ["/pathofanu1.png",
      "/pathofanu2.png",
      "/pathofanu3.png"

    ],
    notes: {
      role: "Environment design, modeling, VFX/shaders, model animation, and C# scripting using an object-oriented spell system.",
      problems: [
        "Some shaders weren't working on the headset.",
        "Players would often get clipped while moving on mountainous terrain.",
        "Particle systems were too computationally expensive.",
      ],
      solutions: [
        "Simplified complex shaders by switching from alpha blend to depth-based opacity textures so the GPU doesn't sort from back to front.",
        "Made a custom script to keep the player camera rig at a consistent height and upscaled the terrain resolution for smoother movement.",
        "Fixed particle systems that used integer data types for movement calculations to floats.",
      ],
    },
  },
  {
    slug: "ocean-site-one",
    title: "Ocean Site One, Environmental Awareness VR Experience",
    description:
      "A VR minigame where the player must deliver and preserve fish eggs against predators. Set on the shores of Santa Barbara where oil rigs are present and sea life coexists with these structures.",
    // Cover image: replace OSOgif with a path such as "/projects/ocean-site-one-cover.gif".
    image: OSOgif,
    links: [{ label: "website", href: "https://laes.calpoly.edu/OSOprojects", isDownload: false }],
    detailDescription:
      "Ocean Site One is an environmental awareness VR experience set on the Santa Barbara coast. Players protect and deliver fish eggs while navigating predators and the shared space between marine life and oil rigs.",
    // Gallery images: add paths such as ["/projects/ocean-site-one-1.png", "/projects/ocean-site-one-2.png"].
    detailImages: [
     "/osopicture1.png",
     "/osopicture2.jpg",
     "/osopicture3.png"
     
    ],
    notes: {
      role: "Contributed to animation, VFX, UI layout and composition (syncronized them with game states), and modeling.",
      problems: [
        "The composition of the UI was not working with the headset.",
        "Unity would not accept deformer animations from Maya.",
      ],
      solutions: [
        "Subdividing canvases from stagnant and changing UI resulted in less draw calls, changing UI to screne space vs. world space to keep it facing user when needed, and only made necessary components a raycast target to prevent overhead.",
        "Used blend shapes instead! Though I know now that Unity has a nifty deformers package...",
      ],
    },
  },
  {
    slug: "slome-npc-system",
    title: "Romance Context-Driven NPC system (using Utility AI and PAD Emotional Model)",
    description:
      "NPC interaction system integrating Utility AI and a PAD emotional model, powered by Unity scriptable objects that hold npc-player data, curves that represent action desirability, and hand-authored system that takes npc history with player into account.",
    // Cover image: replace RomanceSystemPic with a path such as "/projects/slome-cover.png".
    image: RomanceSystemPic,
    previewUrl: PAPER_DOWNLOAD_URL,
    links: [
      { label: "paper", href: PAPER_DOWNLOAD_URL, isDownload: true },
      { label: "website", href: "https://digitalcommons.calpoly.edu/ceng_surp/155/", isDownload: false },
      { label: "github", href: "https://github.com/agrow/slome", isDownload: false },
    ],
    detailDescription:
      "SLOme is a research-driven NPC interaction system that combines Utility AI, a PAD emotional model, and ScriptableObjects for personality and love-language data. It was designed to support more emotionally nuanced NPC interactions and player choices.",
    // Gallery images: add paths such as ["/projects/slome-1.png", "/projects/slome-2.png"].
    detailImages: [],
    notes: {
      role: "Utility AI design, PAD emotional modeling, ScriptableObject architecture, and C# systems programming.",
      problems: [
        "NPC behavior needed to account for both immediate utility and the emotional context of the relationship.",
        "Player choices and prior interactions needed to influence future NPC decisions in a maintainable way.",
      ],
      solutions: [
        "Combined Utility AI action scoring with PAD emotional state to make NPC responses more context-sensitive.",
        "Stored NPC-player history and authored response curves in ScriptableObjects so the system could be tuned without rewriting core logic.",
      ],
    },
  },
];

function getProjectPath(slug: string): ProjectPageId {
  return `/project/${slug}`;
}

function getPageFromHash() {
  const rawHash = window.location.hash.replace(/^#/, "");

  if (rawHash === "/portfolio" || rawHash === "/resume" || rawHash === "/contact" || rawHash.startsWith("/project/")) {
    return rawHash;
  }

  return "/";
}

function usePage() {
  const [page, setPage] = useState<PageId>(() => getPageFromHash());

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "/";
    }

    const handleHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = (href: PageId) => {
    window.location.hash = href;
  };

  return { page, navigate };
}

function PageShell({
  title,
  eyebrow,
  children,
  action,
}: {
  title: React.ReactNode;
  eyebrow: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="grid gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-2">
          <p className="font-['Camilafont'] text-sm uppercase tracking-[0.35em] text-slate-500">{eyebrow}</p>
          <h1 className="font-['Camilafont'] text-[clamp(3rem,4vw,6rem)] leading-none text-slate-950 2xl:text-[clamp(3.75rem,3vw,7rem)]">{title}</h1>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project, onNavigate }: { project: Project; onNavigate: (href: PageId) => void }) {
  return (
    <SurfaceCard className="grid gap-5 2xl:p-8">
      <div className="aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-100">
        <img alt={`${project.title} preview`} className="h-full w-full object-cover" src={project.image} />
      </div>
      <div className="grid gap-3">
        <h2 className="font-['Camilafont'] text-[clamp(1.75rem,1.6vw,2.35rem)] leading-tight text-slate-950">{project.title}</h2>
        <p className="text-slate-600">{project.description}</p>
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={`${project.title}-${link.label}`}
                href={link.href}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                download={link.isDownload}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={project.learnMoreUrl ?? `#${getProjectPath(project.slug)}`}
            aria-label={`Learn more about ${project.title}`}
            title="Learn more"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-purple-600 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </SurfaceCard>
  );
}

function NavLink({ href, label, active, onNavigate }: { href: PageId; label: string; active: boolean; onNavigate: (href: PageId) => void }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(href)}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
}

function SurfaceCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}



function HomePage() {
  const catModelUrl = new URL('../assets/cat02.fbx', import.meta.url).href

  return (
  <div className="mx-auto grid w-full max-w-6xl gap-14 2xl:max-w-7xl">
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
    
    {/* LEFT COLUMN: Groups the text card and the 3D model together */}
    <div className="grid grid-cols-1 gap-8">
      
      {/* First Card: Greeting */}
      <SurfaceCard className="relative overflow-hidden p-10" style={{ background: SITE_THEME.greetingBackground }}> 
        <div className="relative grid gap-6 text-center"> 
          <h2 className="font-['Camilafont'] text-[clamp(2.9rem,3.8vw,5.75rem)] leading-[0.95] text-slate-950">hello! my name is camila.</h2> 
          <p className="mx-auto max-w-2xl text-[clamp(1.25rem,1.2vw,1.50rem)] leading-8 text-slate-600"> 
            welcome to my website! I love technical art, working in real time environments, and tool creation :) 
          </p> 
        </div> 
      </SurfaceCard> 

      {/* 3D Cat Model: Positioned perfectly below the left greeting card */}
      <ThreeModelWrapper modelUrl={catModelUrl} /> 
      
    </div>

    {/* RIGHT COLUMN: Contains the Demo Reel video card */}
    <SurfaceCard className="relative overflow-hidden p-10" style={{ background: SITE_THEME.greetingBackground }}> 
      <div className="relative grid gap-6 text-center"> 
        <h2 className="font-['Camilafont'] text-[clamp(2.9rem,3.8vw,5.75rem)] leading-[0.95] text-slate-950"> demo reel :D</h2> 
        
        {/* Fixed: Removed h-full so aspect-video can render the 16:9 box correctly */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-inner"> 
          <iframe 
            className="w-full h-full border-0" 
            src="https://youtube.com/embed/v9ytFpMBHS4" 
            title="2026 demo reel" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen 
          /> 
        </div> 
      </div> 
    </SurfaceCard>

    </div>
  </div>
);


  
    
}

function PortfolioPage({ onNavigate }: { onNavigate: (href: PageId) => void }) {
  return (
    <PageShell
      eyebrow="portfolio"
      title={<span style={{ color: SITE_THEME.fontColor2 }}>selected work</span>}
      action={<p className="max-w-sm text-sm text-slate-500">Contact me if you have any questions about these projects!</p>}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project) => <ProjectCard key={project.slug} project={project} onNavigate={onNavigate} />)}
      </div>
    </PageShell>
  );
}

function ProjectDetailPage({ project, onNavigate }: { project: Project; onNavigate: (href: PageId) => void }) {
  if (project.previewUrl) {
    return (
      <section className="mx-auto grid w-full max-w-6xl gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-['Camilafont'] text-3xl text-slate-200">view preview</p>
          <button
            type="button"
            onClick={() => onNavigate("/portfolio")}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            back to portfolio
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="overflow-hidden p-0">
            <iframe
              title={`${project.title} paper preview`}
              className="h-[min(78vh,900px)] w-full border-0 bg-white"
              src={`${project.previewUrl}#view=FitH`}
            />
          </SurfaceCard>
          <SurfaceCard className="grid content-start gap-4">
            <p className="font-['Camilafont'] text-3xl text-slate-950">Overview</p>
            <p className="leading-8 text-slate-600">{project.detailDescription}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.isDownload}
                  className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="project details" title={<span className="text-slate-200">{project.title}</span>} action={<button type="button" onClick={() => onNavigate("/portfolio")} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700"><ArrowLeft size={16} aria-hidden="true" /> back to portfolio</button>}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard className="overflow-hidden p-0">
          {project.previewUrl ? (
            <iframe
              title={`${project.title} paper preview`}
              className="h-[520px] w-full border-0 bg-white"
              src={`${project.previewUrl}#view=FitH`}
            />
          ) : (
            <img alt={`${project.title} detail`} className="h-full min-h-[360px] w-full object-cover" src={project.image} />
          )}
        </SurfaceCard>
        <SurfaceCard className="grid content-start gap-4">
          <p className="font-['Camilafont'] text-3xl text-slate-950">Overview</p>
          <p className="leading-8 text-slate-600">{project.detailDescription}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.map((link) => <a key={link.label} href={link.href} download={link.isDownload} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">{link.label}</a>)}
          </div>
        </SurfaceCard>
      </div>
      <section className="grid gap-6" aria-labelledby="project-notes-heading">
        <h2 id="project-notes-heading" className="font-['Camilafont'] text-4xl text-slate-200">project notes and images</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((slot) => (
            <div key={slot} className="grid min-h-56 place-items-center rounded-[2rem] border-2 border-dashed border-purple-300 bg-white/50 p-6 text-center text-sm text-slate-500">
              {project.detailImages[slot] ? <img alt={`${project.title} gallery ${slot + 1}`} className="h-full w-full object-cover" src={project.detailImages[slot]} /> : `Add project image ${slot + 1} here`}
            </div>
          ))}
        </div>
        <SurfaceCard>
          <p className="font-['Camilafont'] text-3xl text-slate-950">Notes about project:</p> 
          <p className="mt-1 leading-normal text-slate-680">My role: {project.notes.role}</p>
          <div className="mt-2">
            <p className="leading-normal font-medium text-slate-680">Problems:</p>
            <ul className="list-inside list-disc pl-4 leading-normal text-slate-680">
              {project.notes.problems.map((problem) => <li key={problem}>{problem}</li>)}
            </ul>
          </div>
          <div className="mt-2">
            <p className="leading-normal font-medium text-slate-680">Solutions:</p>
            <ul className="list-inside list-disc pl-4 leading-normal text-slate-680">
              {project.notes.solutions.map((solution) => <li key={solution}>{solution}</li>)}
            </ul>
          </div>
        </SurfaceCard>
      </section>
    </PageShell>
  );
}

function ResumePage() {
  return (
    <PageShell
      //eyebrow="resume"
      title={<span style={{ color: SITE_THEME.fontColor2 }}>resume</span>}
      action={<p className="max-w-sm text-sm text-slate-500"> :D</p>}
    >
      <div className="mx-auto grid max-w-4xl gap-6">
        <SurfaceCard className="overflow-hidden p-0">
          <div className="bg-slate-950 p-6 text-white md:p-8">
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/80"></p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/80">
              Resume updated for summer 2026!
            </p>
          </div>
          <div className="grid gap-0 bg-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-slate-100 p-4 md:p-6">
              <img alt="resume preview" className="h-full w-full rounded-[1.4rem] border border-slate-200 object-cover" src={imgResumePic} />
            </div>
            <div className="flex flex-col justify-center gap-6 p-6 md:p-8">
              <div className="grid gap-3">
                  <p className="font-['Camilafont'] text-[clamp(2rem,2vw,2.75rem)] leading-tight text-slate-950">resume preview</p>
                <p className="text-slate-600"></p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={RESUME_DOWNLOAD_URL} download className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                  download resume
                </a>
                <a href="#/contact" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                  contact me
                </a>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Website inquiry${name ? ` from ${name}` : ""}`);
    const body = encodeURIComponent([
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      message,
    ].filter(Boolean).join("\n"));

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell
      eyebrow="contact me"
      title={<span style= {{color: SITE_THEME.fontColor2}}>let's talk :D</span>}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <SurfaceCard>
          <form className="grid gap-4" onSubmit={handleSend}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                name
                <input name="name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-400" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                email
                <input name="email" type="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-400" placeholder="you@example.com" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              message
              <textarea name="message" className="min-h-[180px] rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-400" placeholder="say whatever!" />
            </label>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                send message
              </button>
              
            </div>
          </form>
        </SurfaceCard>

        <div className="grid gap-6">
          <SurfaceCard>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
              <img alt="contact me illustration" className="h-full w-full object-cover opacity-90" src={imgContactMePic} />
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-sm text-slate-600">
              Direct email: <a className="font-semibold text-slate-950 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </PageShell>
  );
}

export default function App() {
  const { page, navigate } = usePage();
  const pageBackgroundStyle: React.CSSProperties = {
    // 1.  put the image FIRST so it sits on top of the solid gradient
    // 2. removed the extra double quotes inside url() just in case Vite encounters spaces
    backgroundImage: SITE_THEME.pageBackgroundImage
      ? `url(${SITE_THEME.pageBackgroundImage}), ${SITE_THEME.pageBackgroundOverlay}`
      : SITE_THEME.pageBackgroundOverlay,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // Optional: keeps the background steady while scrolling!
  };


  return (
    <div className="min-h-screen text-slate-950" style={{ ...pageBackgroundStyle, color: SITE_THEME.fontColor }}>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-8 py-8 sm:px-6 lg:px-8">
        <header
          className="sticky top-4 z-10 rounded-[2rem] border border-white/70 px-8 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur md:px-6"
          style={{ background: SITE_THEME.navbarBackground }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button type="button" onClick={() => navigate("/")} className="text-left">
              <p className="font-['Camilafont'] text-2xl leading-none">camila's website</p>
            </button>
            <nav className="flex flex-wrap gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} active={page === item.href} onNavigate={navigate} />
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 py-8 md:py-10">
          <div className="grid gap-8">
            {page === "/" && <HomePage />}
            {page === "/portfolio" && <PortfolioPage onNavigate={navigate} />}
            {page.startsWith("/project/") && (() => {
              const project = PROJECTS.find((item) => getProjectPath(item.slug) === page);
              return project ? <ProjectDetailPage project={project} onNavigate={navigate} /> : <PortfolioPage onNavigate={navigate} />;
            })()}
            {page === "/resume" && <ResumePage />}
            {page === "/contact" && <ContactPage />}
          </div>
        </main>
      </div>
    </div>
  );
}
