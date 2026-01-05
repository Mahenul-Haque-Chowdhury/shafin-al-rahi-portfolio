"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      // Simple scroll spy logic
      const sections = ["about", "experience", "education", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  // --- DATA PRESERVED FROM ORIGINAL ---
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

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-shafin-al-rahi-b43b5b177/",
      Icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Shafin.AR.7",
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/viper_ar_69",
      Icon: Instagram,
    },
  ];

  const experience = [
    {
      role: "Head of Marketing",
      company: "GrayVally Software Solutions",
      companyUrl: "https://grayvally.tech",
      period: "Dec 2025 — Present",
      current: true,
      bullets: ["Leading marketing initiatives and brand communication."],
    },
    {
      role: "Owner",
      company: "Vephyr (Luxury Clothing Company)",
      period: "Present",
      current: true,
      bullets: [],
    },
    {
      role: "Freight Dispatcher",
      company: "Auto Transport LLC",
      period: "Oct 2023 — Dec 2024",
      current: false,
      bullets: [
        "Managed communication between the dispatch centre and field personnel.",
        "Gave directions to drivers to help in finding client's addresses.",
        "Prepared reports for management with recommendations for strategic decision-making.",
        "Used different communication channels to convey time-critical information.",
      ],
    },
    {
      role: "Event Manager",
      company: "Shahajjer Dakpion",
      period: "Jun 2015 — Jun 2020",
      current: false,
      bullets: [
        "Managed events ranging from seminars, conferences, and donation programs.",
        "Established systems to make the flow smooth throughout the experience.",
        "Utilized strong foundation in digital/graphical presentations.",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Business Administration",
      school: "University Of Liberal Arts Bangladesh",
      period: "2021 — Current",
    },
    {
      title: "High School Diploma",
      school: "Onnesha International School & College",
      period: "2004 — 2018",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-zinc-900 selection:text-zinc-50">
      
      {/* --- FLOATING NAVIGATION --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/80 p-1.5 shadow-lg shadow-zinc-200/20 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-none">
          {["About", "Experience", "Skills", "Contact"].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, `#${id}`)}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  isActive 
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" 
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section id="about" className="flex flex-col items-center text-center space-y-8 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-zinc-200 to-zinc-400 opacity-50 blur dark:from-zinc-700 dark:to-zinc-900 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-52 sm:w-52 md:h-60 md:w-60 dark:border-zinc-900">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                priority
                sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                <MapPin size={14} /> {profile.location}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-900">
                 Student & Professional
              </span>
            </div>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {profile.headline}
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-md transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <s.Icon size={20} />
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="p-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-700 hover:shadow-md transition-all dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
              <Mail size={20} />
            </a>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION (TIMELINE) --- */}
        <section id="experience" className="scroll-mt-32 space-y-12 mb-24">
          <div className="flex items-center gap-4">
             <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <Briefcase size={24} className="text-zinc-900 dark:text-zinc-100" />
             </div>
             <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
          </div>

          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 space-y-12 ml-3">
            {experience.map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Timeline Dot */}
                <span className={`absolute -left-2.25 top-1 h-4 w-4 rounded-full border-2 border-white dark:border-zinc-950 ${item.current ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-700'}`}></span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{item.role}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded self-start sm:self-auto mt-1 sm:mt-0">
                    {item.period}
                  </span>
                </div>
                
                <div className="mb-3">
                  {item.companyUrl ? (
                    <a href={item.companyUrl} target="_blank" className="text-sm font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400 flex items-center gap-1 w-fit">
                      {item.company} <ExternalLink size={12} />
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.company}</p>
                  )}
                </div>

                {item.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-4 text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION GRID --- */}
        <section id="education" className="scroll-mt-32 space-y-8 mb-24">
          <div className="flex items-center gap-4">
             <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
                <GraduationCap size={24} className="text-zinc-900 dark:text-zinc-100" />
             </div>
             <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-colors">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
                  <Calendar size={14} /> {edu.period}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{edu.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{edu.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS & HOBBIES --- */}
        <div id="skills" className="grid gap-10 md:grid-cols-2 mb-24 scroll-mt-32">
          {/* Skills Column */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Briefcase size={20} /> Professional Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Hobbies Column */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Heart size={20} /> Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white text-zinc-600 border border-zinc-200 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-800">
                  {hobby}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="scroll-mt-32">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 p-8 sm:p-12 text-center">
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl transform translate-x-1/2 -translate-y-1/2 dark:bg-zinc-900"></div>
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold">Let&apos;s work together</h2>
              <p className="text-zinc-400 dark:text-zinc-600 max-w-lg mx-auto">
                Whether you have a question regarding logistics, event management, or just want to say hello, I&apos;ll try my best to get back to you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                  <Mail size={18} /> Send Email
                </a>
                <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-100 hover:bg-zinc-800 transition-colors dark:border-zinc-300 dark:text-zinc-900 dark:hover:bg-zinc-200">
                  <Phone size={18} /> {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
               Developed by <a href="https://grayvally.tech" className="hover:underline hover:text-zinc-900 dark:hover:text-zinc-300">GrayVally Software Solutions</a>
            </p>
        </footer>

      </main>

      {/* --- BACK TO TOP --- */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg border border-zinc-200 bg-white text-zinc-900 transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 ${
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>

    </div>
  );
}