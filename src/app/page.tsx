"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import {
  Briefcase,
  GraduationCap,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  Package,
  CalendarRange,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

// --- 3D COMPONENT: Logistics Globe ---
function GlobalNetwork() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* The World Sphere */}
        <mesh>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial color="#18181b" wireframe transparent opacity={0.1} />
        </mesh>
        
        {/* Longitudinal Lines / Routes */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[2.4, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#18181b"
            emissive="#18181b"
            emissiveIntensity={0.15}
            transparent
            opacity={0.12}
          />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.6, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#18181b"
            emissive="#18181b"
            emissiveIntensity={0.1}
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- DATA ---
  const profile = {
    name: "Mohammad Shafin Al Rahi",
    role: "Business Admin & Logistics Specialist",
    location: "Dhaka, Bangladesh",
    email: "shafin148@gmail.com",
    phone: "+880 170 336 3032",
    photo: "/shafin.jpg", 
  };

  const experience = [
    {
      role: "Head of Marketing",
      company: "GrayVally Software Solutions",
      link: "https://grayvally.tech",
      period: "Dec 2025 — Present",
      isCurrent: true,
      desc: "Leading strategic brand communication and market positioning for a growing software firm.",
    },
    {
      role: "Owner",
      company: "Vephyr",
      subtitle: "Luxury Clothing Company",
      period: "Present",
      isCurrent: true,
      desc: "founded and managing a luxury fashion brand, overseeing supply chain, design, and sales.",
    },
    {
      role: "Freight Dispatcher",
      company: "Auto Transport LLC",
      period: "Oct 2023 — Dec 2024",
      isCurrent: false,
      desc: "Coordinated field personnel and optimized delivery routes. Prepared strategic reports for management.",
    },
    {
      role: "Event Manager",
      company: "Shahajjer Dakpion",
      period: "Jun 2015 — Jun 2020",
      isCurrent: false,
      desc: "Managed large-scale seminars and donation programs, establishing smooth operational workflows.",
    },
  ];

  const skills = [
    "Logistics Dispatching",
    "Event Coordination",
    "Strategic Planning",
    "Luxury Brand Management",
    "Customer Relations",
    "Report Preparation",
  ];

  const education = [
    {
      degree: "Bachelor of Business Administration",
      school: "University Of Liberal Arts Bangladesh",
      year: "2021 — Current",
    },
    {
      degree: "High School Diploma",
      school: "Onnesha International School & College",
      year: "2004 — 2018",
    },
  ];

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-shafin-al-rahi-b43b5b177/" },
    { icon: Facebook, href: "https://www.facebook.com/Shafin.AR.7" },
    { icon: Instagram, href: "https://www.instagram.com/viper_ar_69" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-zinc-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-linear-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white text-xs font-serif">
              SR
            </span>
            <span>Shafin Al Rahi</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {["About", "Experience", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden text-zinc-300">
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/90 backdrop-blur-sm md:hidden"
          onClick={() => setIsNavOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="h-full w-full flex flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {["About", "Experience", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsNavOpen(false)}
                className="text-2xl font-bold text-zinc-400 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <main>
        {/* --- HERO SECTION --- */}
        <section id="about" className="relative flex flex-col items-center justify-start overflow-hidden pt-20 md:pt-24 pb-10 md:pb-12">
          
          {/* 3D Background */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <GlobalNetwork />
              <ambientLight intensity={0.5} />
            </Canvas>
          </div>

          <div className="z-10 px-4 sm:px-6 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Profile Image */}
              <div className="flex justify-center md:justify-start">
                <div className="w-32 h-44 sm:w-36 sm:h-48 md:w-60 md:h-80 relative overflow-hidden p-1 bg-linear-to-b from-zinc-700 to-zinc-900 border border-zinc-700 shadow-2xl">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    className="object-cover p-1"
                    sizes="(min-width: 768px) 240px, (min-width: 640px) 144px, 128px"
                    priority
                  />
                  <div className="absolute bottom-1 right-1 bg-amber-500 p-1.5 rounded-full border-2 border-zinc-950">
                    <Globe size={14} className="text-zinc-950" />
                  </div>
                </div>
              </div>

              {/* Right: Hero Content */}
              <div className="text-center md:text-left space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-zinc-400">Open for Business Opportunities</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Strategic Logistics <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-500 to-orange-600">
                      & Brand Management
                    </span>
                  </h1>

                  <p className="text-lg text-zinc-400 max-w-2xl md:mx-0 mx-auto leading-relaxed">
                    Business Administration professional with a proven track record in 
                    <strong> Freight Dispatching</strong>, <strong>Event Management</strong>, 
                    and building <strong>Luxury Brands</strong>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Let&apos;s Talk <ArrowRight size={18} />
                  </a>
                  <a
                    href="#experience"
                    className="px-8 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-800 transition-all text-center w-full sm:w-auto"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="pointer-events-none absolute bottom-0 w-full h-24 md:h-32 bg-linear-to-t from-zinc-950 to-transparent z-5"></div>
        </section>

        {/* --- STATS / EXPERTISE --- */}
        <section className="relative z-20 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 max-w-6xl mx-auto mb-16 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Logistics", sub: "Dispatching & Routing", icon: Package },
              { label: "Management", sub: "Events & Teams", icon: Briefcase },
              { label: "Business", sub: "BBA Candidate", icon: GraduationCap },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex items-center gap-4 hover:border-amber-500/30 transition-colors group">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 group-hover:text-amber-500 transition-colors">
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{stat.label}</h3>
                  <p className="text-sm text-zinc-500">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="px-4 sm:px-6 max-w-5xl mx-auto mb-20 md:mb-32 scroll-mt-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Professional History</h2>
            <div className="h-px flex-1 bg-zinc-800 ml-8"></div>
          </div>

          <div className="grid gap-6">
            {experience.map((job, idx) => (
              <div 
                key={idx} 
                className={`group p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  job.isCurrent 
                    ? "bg-zinc-900/40 border-amber-900/30 hover:border-amber-500/50" 
                    : "bg-zinc-900/20 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {job.link ? (
                        <a href={job.link} target="_blank" className="text-zinc-400 font-medium hover:underline flex items-center gap-1">
                          {job.company} <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-zinc-400 font-medium">{job.company}</span>
                      )}
                      {job.subtitle && <span className="text-zinc-500">• {job.subtitle}</span>}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono border ${
                    job.isCurrent 
                      ? "bg-amber-950/30 text-amber-500 border-amber-900/50" 
                      : "bg-zinc-950 text-zinc-500 border-zinc-800"
                  }`}>
                    {job.period}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS & EDUCATION --- */}
        <section id="skills" className="px-4 sm:px-6 max-w-5xl mx-auto mb-20 md:mb-32 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Briefcase size={20} className="text-amber-500" /> Competencies
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 hover:text-white hover:border-zinc-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <GraduationCap size={20} className="text-amber-500" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="pl-4 border-l-2 border-zinc-800">
                    <h3 className="text-white font-medium">{edu.degree}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{edu.school}</p>
                    <p className="text-xs text-zinc-600 mt-2 flex items-center gap-1">
                      <CalendarRange size={12} /> {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT FOOTER --- */}
        <section id="contact" className="py-16 md:py-20 bg-zinc-900 border-t border-zinc-800">
          <div className="px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
            <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
              Whether you need logistics strategies, event coordination, or brand management, I am ready to assist.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <a href={`mailto:${profile.email}`} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-colors group">
                <Mail className="mb-4 text-zinc-500 group-hover:text-amber-500 transition-colors" size={32} />
                <span className="text-lg font-medium text-white">{profile.email}</span>
                <span className="text-sm text-zinc-500 mt-1">Email Me</span>
              </a>
              <a href="tel:+8801703363032" className="flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-colors group">
                <Phone className="mb-4 text-zinc-500 group-hover:text-amber-500 transition-colors" size={32} />
                <span className="text-lg font-medium text-white">{profile.phone}</span>
                <span className="text-sm text-zinc-500 mt-1">Call Me</span>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              {socials.map((s, i) => (
                <a 
                  key={i} 
                  href={s.href} 
                  target="_blank"
                  className="p-3 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white transition-all"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
            
            <p className="mt-12 text-sm text-zinc-600">
              © {new Date().getFullYear()} Shafin Al Rahi. <br />
              <span className="opacity-50">Dhaka, Bangladesh</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}