import { useEffect, useState } from "react";

import imgResumePic from "../imports/resume-ss.png";
import imgPortfolioPic from "../imports/Frame11/1aba2f9758ed7a034c2ea1d51dba30aca5f6a6dc.png";
import RomanceSystemPic from "../imports/romancesystem-ss.png";
import PathAnuPic from "../imports/pathanu-ss.png";
import CMYKingdomPic from "../imports/CMYKingdom-ss.png";
import imgContactMePic from "../imports/haidog-ss.png";
import gradientGreen from "../imports/Gradientgreen.gif";
import ThreeModelWrapper from './components/ThreeModel'



type PageId = "/" | "/portfolio" | "/resume" | "/contact";
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
};


const NAV_ITEMS: Array<{ href: PageId; label: string }> = [
  { href: "/", label: "home" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact me" },
];

function getPageFromHash() {
  const rawHash = window.location.hash.replace(/^#/, "");

  if (rawHash === "/portfolio" || rawHash === "/resume" || rawHash === "/contact") {
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
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="grid gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-2">
          <p className="font-['Camilafont'] text-sm uppercase tracking-[0.35em] text-slate-500">{eyebrow}</p>
          <h1 className="font-['Camilafont'] text-5xl leading-none text-slate-950 md:text-7xl">{title}</h1>
        </div>
        {action}
      </div>
      {children}
    </section>
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



function HomePage({ onNavigate }: { onNavigate: (href: PageId) => void }) {
  const catModelUrl = new URL('../assets/cat02.fbx', import.meta.url).href

  return (
    <div className=" mx-auto grid max-w-2x2 gap-8">
      <SurfaceCard className="relative overflow-hidden p-8 md:p-12" style={{ background: SITE_THEME.greetingBackground }}>
        <div className="relative grid gap-6 text-center">
          <h2 className="font-['Camilafont'] text-5xl leading-[0.95] text-slate-950 md:text-7xl">hello! my name is camila.</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            welcome to my website! I love technical art, working in real time environments, and tool creation :)
          </p>
        </div>
      </SurfaceCard>
      <ThreeModelWrapper modelUrl={catModelUrl} />  
    </div>   
  );
}

function PortfolioPage() {
  const projects: Array<{
    title: string;
    description: string;
    image: string;
    links: PortfolioLink[];
  }> = [
    {
      title: "Path of Anu, Zodiac Inspired VR Puzzle Solving Experience",
      description:
        "A VR experience where you cast spells in real time using hand gestures. Path of Anu is a VR spellcasting experience in which players draw magical sigils in real time using XR controls, designed for the Meta Quest 3 and Meta Quest 3 controllers.",
      image: PathAnuPic,
      links: [
        { label: "github", href: "https://github.com/BrennanAndruss/PathOfAnu",
          isDownload: false // Add this flag
         },
        { label: "video", href: "https://youtu.be/PUcehc885bM",
          isDownload: false // Add this flag
         },
      ],
    },
    {
      title: "CMYKingdom, Custom OpenGL Engine for a 3d Platformer Game",
      description:
        "OpenGL 3D platformer game where the main quest is to explore the world to collect cyan, magenta, and yellow crystals scattered throughout the land to restore color to the kingdom!",
      image: CMYKingdomPic,
      links: [
        { label: "github/website", href: "https://github.com/BrennanAndruss/CMYKingdom", 
          isDownload: false // Add this flag
        },
      ],
    },
    {
      title: "SLOme, NPC-player interaction system",
      description:
        "NPC interaction system built by integrating Utility AI and PAD emotional model, also powered by scriptable objects (data) that holds information about each NPC's personality type (MBTI) and love languages. Built with the intention to drive more emotionally nuanced NPC interactions and player choices in games.",
      image: RomanceSystemPic,
      links: [{
        label: "paper", 
        href: PAPER_DOWNLOAD_URL,
        isDownload: true // Add this flag,
    },
    {
      label: "github",
      href: "https://github.com/agrow/slome",
      isDownload: false // Add this flag
    }
  
  
  ]
    
    },
  ];

  return (
    <PageShell
      eyebrow="portfolio"
      title="selected work"
      action={<p className="max-w-sm text-sm text-slate-500">Contact me if you have any questions about these projects!</p>}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <SurfaceCard key={project.title} className="grid gap-5">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-100">
              <img alt="portfolio preview" className="h-full w-full object-cover" src={project.image} />
            </div>
            <div className="grid gap-3">
              <h2 className="font-['Camilafont'] text-3xl leading-tight text-slate-950">{project.title}</h2>
              <p className="text-slate-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
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
            </div>
          </SurfaceCard>
        ))}
      </div>
    </PageShell>
  );
}

function ResumePage() {
  return (
    <PageShell
      eyebrow="resume"
      title="resume"
      action={<p className="max-w-sm text-sm text-slate-500">Make the preview and download action the focus here.</p>}
    >
      <div className="mx-auto grid max-w-4xl gap-6">
        <SurfaceCard className="overflow-hidden p-0">
          <div className="bg-slate-950 p-6 text-white md:p-8">
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/80">download area:</p>
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
                <p className="font-['Camilafont'] text-4xl leading-tight text-slate-950">resume preview</p>
                <p className="text-slate-600">Drop in the PDF, a detailed image, or a live embedded version later.</p>
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
      title="let’s talk :D"
      action={<p className="max-w-sm text-sm text-slate-500">Use the form or email me directly at {CONTACT_EMAIL}.</p>}
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
              <textarea name="message" className="min-h-[180px] rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-400" placeholder="Tell me what you need, what you're building, or how you'd like to connect." />
            </label>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                send message
              </button>
              <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
                email me
              </a>
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
              <p className="text-sm text-slate-500">welcome</p>
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
            {page === "/" && <HomePage onNavigate={navigate} />}
            {page === "/portfolio" && <PortfolioPage />}
            {page === "/resume" && <ResumePage />}
            {page === "/contact" && <ContactPage />}
          </div>
        </main>
      </div>
    </div>
  );
}
