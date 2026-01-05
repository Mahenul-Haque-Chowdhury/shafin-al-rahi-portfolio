"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart, // Added for Hobbies
} from "lucide-react";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };

    if (!isNavOpen) return;

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isNavOpen]);

  // UPDATED: Skills based on your request
  const skills = [
    "Organising events",
    "Volunteering",
    "Event coordination",
    "Customer service",
    "Communication management",
    "Report preparation",
    "Multitasker",
    "Dispatching procedures",
  ];

  // NEW: Hobbies Array
  const hobbies = [
    "Travelling",
    "Trekking",
    "Swimming",
    "Football",
  ];

  const profile = {
    name: "Shafin Al Rahi",
    role: "BBA Student • Logistics Dispatching • Event Management",
    headline:
      "Business Administration student and experienced professional with a background in Logistics Dispatching and Event Management. Strong in coordination, communication, and strategic decision-making.",
    location: "Dhaka, Bangladesh",
    email: "shafin148@gmail.com",
    phone: "+880 170 336 3032",
    photo: {
      src: "/shafin.jpg",
      alt: "Shafin Al Rahi",
    },
  };

  // NOTE: You will need to add your actual profile links here
  const socials = [
    {
      label: "LinkedIn",
      href: "#", // Add your LinkedIn URL
      Icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "#", // Add your Facebook URL
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: "#", // Add your Instagram URL
      Icon: Instagram,
    },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  // UPDATED: Experience from the uploaded Resume image
  const experience = [
    {
      role: "Freight Dispatcher",
      company: "Auto Transport LLC",
      period: "Oct 2023 — Dec 2024",
      bullets: [
        "Managed communication between the dispatch centre and field personnel, facilitating effective response to calls for service.",
        "Gave directions to drivers to help in finding client's addresses.",
        "Prepared reports for management with recommendations for strategic decision-making.",
        "Used different communication channels and devices to convey time-critical information.",
      ],
    },
    {
      role: "Event Manager",
      company: "Shahajjer Dakpion",
      period: "Jun 2015 — Jun 2020",
      bullets: [
        "Gained sufficient expertise in managing events of different occasions ranging from seminars, conferences, and donation programs.",
        "Established basic systems and procedures necessary to make the flow smooth throughout the experience.",
        "Utilized strong foundation in digital/graphical presentations and communication skills to gain a wide group of clients.",
      ],
    },
  ];

  // UPDATED: Education from the uploaded Resume image
  const education = [
    {
      title: "Bachelor of Business Administration",
      school: "University Of Liberal Arts Bangladesh",
      period: "2021 — Current",
      details: [],
    },
    {
      title: "High School Diploma",
      school: "Onnesha International School & College",
      period: "2004 — 2018",
      details: [],
    },
  ];

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white"
    >
      <header className="border-b border-zinc-200/70 dark:border-zinc-800/70">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Portfolio
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {profile.role}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 sm:block">
              <button
                type="button"
                className="sm:hidden inline-flex items-center justify-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/40 px-4 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                aria-label="Toggle navigation"
                aria-expanded={isNavOpen}
                onClick={() => setIsNavOpen((v) => !v)}
              >
                Menu
                <span className="ml-3 flex flex-col gap-1">
                  <span className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100" />
                  <span className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100" />
                  <span className="h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100" />
                </span>
              </button>

              <div className="hidden sm:flex sm:flex-wrap sm:gap-2">
              {navLinks.map((item) => (
                <SmoothScrollLink
                  key={item.label}
                  href={item.href}
                  className="shrink-0 whitespace-nowrap rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 px-3 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  {item.label}
                </SmoothScrollLink>
              ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {isNavOpen ? (
        <div className="sm:hidden fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/20"
            aria-label="Close navigation"
            onClick={() => setIsNavOpen(false)}
          />
          <div className="absolute left-4 right-4 top-6 rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-xl p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Navigation
              </p>
              <button
                type="button"
                className="rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/40 px-3 py-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                onClick={() => setIsNavOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="mt-3 grid gap-2">
              {navLinks.map((item) => (
                <SmoothScrollLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/40 px-4 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                >
                  {item.label}
                </SmoothScrollLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-10">
            <div className="rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-100 dark:bg-zinc-900 aspect-square">
                  <Image
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 80vw, 340px"
                    className="object-cover"
                  />
                </div>

                <p className="mt-4 font-semibold leading-tight">{profile.name}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {profile.role}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {profile.headline}
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
                >
                  <Mail size={18} />
                  <span className="break-all">{profile.email}</span>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
                >
                  <Phone size={18} />
                  <span className="wrap-break-word">{profile.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <MapPin size={18} /> {profile.location}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <s.Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <Heart size={14} /> Interests
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/30 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            <section id="about" className="scroll-mt-24">
              <div className="rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm p-6 md:p-8">
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  About
                </h2>

                <p className="mt-4 text-lg font-semibold tracking-tight">
                  Logistics dispatching, event coordination, and clear communication.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  I am a Business Administration student and experienced professional with a background in Logistics Dispatching and Event Management. I excel in coordination, communication, and strategic decision-making.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Get in touch <Mail size={18} />
                  </Link>
                  <Link
                    href="#experience"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    See experience <Briefcase size={18} />
                  </Link>
                </div>
              </div>
            </section>

            <section id="skills" className="scroll-mt-24">
              <div className="rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    Skills
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Core strengths
                  </p>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/40 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="experience" className="scroll-mt-24">
              <div className="rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm overflow-hidden">
                <div className="p-6 md:p-8 border-b border-zinc-200/70 dark:border-zinc-800/70">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                    <Briefcase size={16} /> Experience
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    A snapshot of roles and impact.
                  </p>
                </div>

                <div className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
                  {experience.map((item) => (
                    <div
                      key={`${item.role}-${item.company}`}
                      className="p-6 md:p-8"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-base font-bold tracking-tight">
                            {item.role}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {item.company}
                          </p>
                        </div>
                        <span className="w-fit rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                          {item.period}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="education" className="scroll-mt-24">
              <div className="rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm overflow-hidden">
                <div className="p-6 md:p-8 border-b border-zinc-200/70 dark:border-zinc-800/70">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                    <GraduationCap size={16} /> Education
                  </h2>
                </div>

                <div className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
                  {education.map((item) => (
                    <div
                      key={`${item.title}-${item.school}`}
                      className="p-6 md:p-8"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {item.school}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="contact"
              className="scroll-mt-24 rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm p-6 md:p-8"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Contact
              </h2>
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                Want to collaborate or hire? Send a message and I’ll reply as soon as possible.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 hover:bg-zinc-100/70 dark:hover:bg-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Mail size={18} /> Email
                  </div>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {profile.email}
                  </p>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 hover:bg-zinc-100/70 dark:hover:bg-zinc-900 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Phone size={18} /> Phone
                  </div>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {profile.phone}
                  </p>
                </a>
              </div>

              <p className="mt-10 text-xs text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} {profile.name}. All rights reserved.
              </p>

              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                Developed by{" "}
                <a
                  href="https://grayvally.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                  GrayVally Software Solutions
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <SmoothScrollLink
        href="#top"
        className={`fixed bottom-5 right-5 z-50 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-950/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-950 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Back to top
      </SmoothScrollLink>
    </div>
  );
}