"use client";

import Image from "next/image";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import {
  ArrowRight,
  Briefcase,
  CalendarRange,
  ExternalLink,
  Facebook,
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Phone,
} from "lucide-react";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import Header from "@/components/Header";

function GlobalNetwork() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.15;
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.08;
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.45} floatIntensity={0.45}>
        <mesh>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial color="#18181b" wireframe transparent opacity={0.1} />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[2.4, 0.02, 16, 100]} />
          <meshStandardMaterial color="#18181b" emissive="#18181b" emissiveIntensity={0.15} transparent opacity={0.12} />
        </mesh>

        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.6, 0.02, 16, 100]} />
          <meshStandardMaterial color="#18181b" emissive="#18181b" emissiveIntensity={0.1} transparent opacity={0.08} />
        </mesh>
      </Float>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Home() {

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
      desc: "Founded and managing a luxury fashion brand, overseeing supply chain, design, and sales.",
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
      <Header />

      <main>
        <section
          id="about"
          className="relative flex flex-col items-center justify-start overflow-hidden pb-8 pt-18 md:pb-10 md:pt-20"
        >
          <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <GlobalNetwork />
              <ambientLight intensity={0.5} />
            </Canvas>
          </div>

          <div className="z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-10">
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-linear-to-r from-amber-500/35 to-orange-500/35 blur-sm md:hidden" />
                  <div className="relative h-48 w-44 overflow-hidden rounded-2xl border border-zinc-600/80 bg-linear-to-b from-zinc-700 to-zinc-900 p-1.5 shadow-2xl sm:h-52 sm:w-48 md:h-80 md:w-60 md:rounded-none md:border-zinc-700 md:p-1">
                    <Image
                      src={profile.photo}
                      alt={profile.name}
                      fill
                      className="rounded-xl object-cover object-[50%_70%] md:rounded-none md:object-center"
                      sizes="(min-width: 768px) 240px, (min-width: 640px) 192px, 176px"
                      priority
                    />
                    <div className="absolute bottom-2 right-2 rounded-full border border-zinc-800 bg-amber-500 p-1.5 shadow-lg md:bottom-1 md:right-1 md:border-2 md:border-zinc-950">
                      <Globe size={14} className="text-zinc-950" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-center md:text-left">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 backdrop-blur-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-zinc-400">Open for Business Opportunities</span>
                  </div>

                  <h1 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                    Strategic
                    <br />
                    <span className="bg-linear-to-r from-amber-200 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                      Logistics & Brand
                    </span>
                    <br />
                    Management
                  </h1>

                  <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:mx-0 md:text-lg">
                    Hello, I am Shafin. Studied BBA from ULAB, Dhaka. A Business Admin & Logistics Specialist with proven skills in
                    <strong> Freight Dispatching</strong>, <strong>Event Management</strong>, and <strong>Luxury Brands (VEPHYR)</strong>.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
                  <SmoothScrollLink
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 px-7 py-3 font-semibold text-white shadow-lg shadow-amber-900/20 transition-all hover:bg-amber-700 sm:w-auto"
                  >
                    Let&apos;s Talk <ArrowRight size={18} />
                  </SmoothScrollLink>
                  <SmoothScrollLink
                    href="#experience"
                    className="w-full rounded-lg border border-zinc-700 px-7 py-3 text-center font-medium text-zinc-300 transition-all hover:bg-zinc-800 sm:w-auto"
                  >
                    View Portfolio
                  </SmoothScrollLink>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 z-10 h-20 w-full bg-linear-to-t from-zinc-950 to-transparent md:h-24" />
        </section>

        <section className="relative z-20 mx-auto mb-14 mt-6 max-w-6xl px-4 sm:px-6 md:mb-24 md:mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { label: "Logistics", sub: "Dispatching & Routing", icon: Package },
              { label: "Management", sub: "Events & Teams", icon: Briefcase },
              { label: "Business", sub: "BBA Candidate", icon: GraduationCap },
            ].map((stat) => (
              <div key={stat.label} className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-md transition-colors hover:border-amber-500/30">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-zinc-400 transition-colors group-hover:text-amber-500">
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{stat.label}</h3>
                  <p className="text-sm text-zinc-500">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto mb-16 max-w-5xl scroll-mt-24 px-4 sm:px-6 md:mb-28">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Professional History</h2>
            <div className="ml-8 h-px flex-1 bg-zinc-800" />
          </div>

          <div className="grid gap-6">
            {experience.map((job, idx) => (
              <div
                key={`${job.role}-${idx}`}
                className={`group rounded-2xl border p-6 transition-all duration-300 md:p-8 ${
                  job.isCurrent ? "border-amber-900/30 bg-zinc-900/40 hover:border-amber-500/50" : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                }`}
              >
                <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-amber-400">{job.role}</h3>
                    <div className="mt-1 flex items-center gap-2">
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-medium text-zinc-400 hover:underline">
                          {job.company} <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="font-medium text-zinc-400">{job.company}</span>
                      )}
                      {job.subtitle && <span className="text-zinc-500">• {job.subtitle}</span>}
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-mono ${
                      job.isCurrent ? "border-amber-900/50 bg-amber-950/30 text-amber-500" : "border-zinc-800 bg-zinc-950 text-zinc-500"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto mb-16 max-w-5xl scroll-mt-24 px-4 sm:px-6 md:mb-28">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-white">
                <Briefcase size={20} className="text-amber-500" /> Competencies
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="cursor-default rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-zinc-600 hover:text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-white">
                <GraduationCap size={20} className="text-amber-500" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={`${edu.degree}-${idx}`} className="border-l-2 border-zinc-800 pl-4">
                    <h3 className="font-medium text-white">{edu.degree}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{edu.school}</p>
                    <p className="mt-2 flex items-center gap-1 text-xs text-zinc-600">
                      <CalendarRange size={12} /> {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-800 bg-zinc-900 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Let&apos;s Work Together</h2>
            <p className="mx-auto mb-10 max-w-lg text-zinc-400">
              Whether you need logistics strategies, event coordination, or brand management, I am ready to assist.
            </p>

            <div className="mb-12 grid gap-4 md:grid-cols-2">
              <a href={`mailto:${profile.email}`} className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:border-amber-500/50">
                <Mail className="mb-4 text-zinc-500 transition-colors group-hover:text-amber-500" size={32} />
                <span className="text-lg font-medium text-white">{profile.email}</span>
                <span className="mt-1 text-sm text-zinc-500">Email Me</span>
              </a>
              <a href="tel:+8801703363032" className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:border-amber-500/50">
                <Phone className="mb-4 text-zinc-500 transition-colors group-hover:text-amber-500" size={32} />
                <span className="text-lg font-medium text-white">{profile.phone}</span>
                <span className="mt-1 text-sm text-zinc-500">Call Me</span>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-800 bg-zinc-950 p-3 text-zinc-400 transition-all hover:border-white hover:text-white"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <p className="mt-12 text-sm text-zinc-600">
              © {new Date().getFullYear()} Shafin Al Rahi. <br />
              <span className="opacity-50">
                <MapPin size={12} className="mr-1 inline-block" />
                {profile.location}
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
