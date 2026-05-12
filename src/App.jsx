import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  GraduationCap,
  HeartPulse,
  LineChart,
  MapPin,
  Menu,
  MessageCircle,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  X,
  Zap,
} from "lucide-react";

const nav = ["Services", "Founder", "Results", "Industries", "FAQ", "Contact"];

const services = [
  ["AI Search Optimization", "Position your brand for Google AI Overviews, answer engines, and AI discovery.", SearchCheck],
  ["Google AI Overview Ranking", "Entity optimization, topical depth, schema, and authority signals for AI results.", Sparkles],
  ["AI Ads Management", "Google Ads and AI-assisted campaigns built for qualified pipeline and ROAS.", Target],
  ["AI Website Development", "Fast, conversion-focused websites with modern UX and AI-ready technical SEO.", Globe2],
  ["AI Lead Generation", "Landing pages, CRM flows, lead magnets, and automated nurturing systems.", LineChart],
  ["AI Automation", "Automate intake, reporting, content workflows, follow-ups, and operations.", Bot],
  ["Healthcare Marketing", "Growth systems for hospitals, clinics, doctors, and healthcare brands.", HeartPulse],
  ["Local Business Growth", "Local SEO, GBP, reviews, ads, and AI visibility for nearby demand.", MapPin],
];

const metrics = [
  ["1M+", "Leads Generated"],
  ["6.8x", "ROAS"],
  ["420+", "Websites Ranked"],
  ["92%", "AI Visibility Score"],
];

const industries = [
  ["Healthcare", HeartPulse],
  ["Real Estate", Building2],
  ["Immigration", Globe2],
  ["Local Businesses", MapPin],
  ["Education", GraduationCap],
  ["E-commerce", CircleDollarSign],
];

const faqs = [
  ["What is AI Search Optimization?", "It makes your brand understandable, authoritative, and eligible for AI-powered search results like Google AI Overviews and generative engines."],
  ["Do you still work on traditional SEO?", "Yes. Technical SEO, content architecture, local signals, and authority building still matter. We modernize them for AI-first discovery."],
  ["Which industries do you specialize in?", "Healthcare is a major specialty, along with real estate, immigration, education, e-commerce, and local businesses."],
  ["Can you manage ads and automation together?", "Yes. Paid acquisition works best when landing pages, CRM workflows, nurturing, and measurement operate together."],
];

const testimonials = [
  ["Their AI visibility strategy changed how patients discovered our clinic. Search traffic improved, and inquiry quality improved even more.", "Clinic Director", "Healthcare Brand"],
  ["We moved from random marketing activity to a real growth system. Ads, SEO, automation, and reporting finally worked together.", "Founder", "Real Estate Firm"],
  ["The personal branding and AI content engine helped us show up with authority across search, social, and sales conversations.", "Managing Partner", "Immigration Company"],
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left" aria-label="Home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 shadow-glow">
            <BrainCircuit className="h-5 w-5 text-electric" />
          </span>
          <span>
            <span className="block font-display text-sm font-semibold text-white">AI Markating Agency</span>
            <span className="block text-xs text-white/45">www.ai-markatingagency.com</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-sm text-white/68 transition hover:text-white">
              {item}
            </button>
          ))}
        </div>

        <button onClick={() => scrollToSection("contact")} className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-electric lg:inline-flex">
          Book Strategy Call
        </button>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-5 lg:hidden">
          {nav.map((item) => (
            <button key={item} onClick={() => { setOpen(false); scrollToSection(item.toLowerCase()); }} className="block w-full rounded-xl px-3 py-3 text-left text-sm text-white/75 hover:bg-white/10">
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-electric">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">{text}</p>}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55 }}
      className={`group rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric/35 hover:bg-white/[0.08] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,60,255,.34),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(19,215,255,.24),transparent_28%),radial-gradient(circle_at_50%_96%,rgba(182,108,255,.18),transparent_36%)]" />
      <motion.div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/20" animate={{ rotate: 360 }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute left-[8%] top-[18%] hidden h-40 w-64 rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl md:block" animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <div className="mb-4 flex items-center gap-2 text-xs text-white/55"><span className="h-2 w-2 rounded-full bg-electric" /> AI Overview Index</div>
        <div className="space-y-3"><div className="h-2 rounded-full bg-white/15"><div className="h-full w-4/5 rounded-full bg-electric" /></div><div className="h-2 rounded-full bg-white/15"><div className="h-full w-3/5 rounded-full bg-violet" /></div><div className="h-2 rounded-full bg-white/15"><div className="h-full w-11/12 rounded-full bg-aurora" /></div></div>
      </motion.div>
      <motion.div className="absolute bottom-[16%] right-[7%] hidden h-48 w-72 rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl lg:block" animate={{ y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex items-center justify-between text-xs text-white/55"><span>Generative Demand</span><span className="text-electric">+318%</span></div>
        <div className="mt-5 flex h-24 items-end gap-2">{[46, 62, 54, 78, 66, 92, 84, 100].map((h, i) => <span key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-violet to-electric" style={{ height: `${h}%` }} />)}</div>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(3,4,10,.84))]" />
    </div>
  );
}

export default function App() {
  const [activeFaq, setActiveFaq] = useState(0);

  function handleContactSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hi AI Markating Agency, I want to book a strategy call.",
      "",
      `Name: ${data.get("name") || ""}`,
      `Website: ${data.get("website") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Growth Priority: ${data.get("priority") || ""}`,
      `Message: ${data.get("message") || ""}`,
    ].join("\n");
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <Navbar />

      <section id="home" className="relative flex min-h-screen items-center pt-28">
        <HeroBackdrop />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-electric" /></span>
              AI SEO, GEO, ads, automation, and growth systems
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.75 }} className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Your Business Needs AI Visibility, Not Old SEO
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.75 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              We help brands rank in Google AI Overviews, ChatGPT results, and AI-powered search ecosystems.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.75 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => scrollToSection("contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ink shadow-glow transition hover:bg-electric">Book Strategy Call <ArrowRight className="h-4 w-4" /></button>
              <button onClick={() => scrollToSection("services")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-7 py-4 text-sm font-bold backdrop-blur-xl transition hover:border-electric/50 hover:bg-white/10">View Services <ChevronDown className="h-4 w-4" /></button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative hidden min-h-[540px] lg:block">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-violet backdrop-blur-xl" />
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#ffbd2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" /></div><span className="rounded-full border border-electric/20 bg-electric/10 px-3 py-1 text-xs text-electric">Live AI Visibility Engine</span></div>
              <div className="grid gap-4">
                {[["Google AI Overview", "Healthcare keyword cluster", 91], ["ChatGPT Results", "Brand entity confidence", 88], ["GEO Authority", "Citation and topical depth", 94]].map(([title, detail, score]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"><div className="mb-3 flex items-center justify-between"><div><p className="font-medium">{title}</p><p className="text-sm text-white/45">{detail}</p></div><p className="font-display text-2xl font-semibold text-electric">{score}</p></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-violet via-aurora to-electric" initial={{ width: 0 }} animate={{ width: `${score}%` }} transition={{ delay: 0.8, duration: 1.2 }} /></div></div>
                ))}
                <div className="grid grid-cols-2 gap-4 pt-2"><div className="rounded-2xl border border-white/10 bg-electric/10 p-5"><Zap className="mb-4 h-6 w-6 text-electric" /><p className="text-3xl font-semibold">37%</p><p className="text-sm text-white/52">Lower cost per lead</p></div><div className="rounded-2xl border border-white/10 bg-violet/10 p-5"><BarChart3 className="mb-4 h-6 w-6 text-aurora" /><p className="text-3xl font-semibold">4.2x</p><p className="text-sm text-white/52">Search visibility lift</p></div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative px-5 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(19,215,255,.12),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="AI Services" title="Modern growth systems for an AI-first search world" text="Every service is designed to improve discoverability, conversion, and operational speed across organic, paid, and automated channels." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map(([title, text, Icon]) => <GlassCard key={title}><div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-electric transition group-hover:scale-110"><Icon className="h-6 w-6" /></div><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/58">{text}</p></GlassCard>)}</div>
        </div>
      </section>

      <section id="founder" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <GlassCard className="relative min-h-[500px] overflow-hidden p-0"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(19,215,255,.22),transparent_27%),radial-gradient(circle_at_50%_65%,rgba(124,60,255,.34),transparent_33%)]" /><div className="absolute left-1/2 top-20 grid h-52 w-52 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.06] shadow-glow backdrop-blur-xl"><UserRound className="h-24 w-24 text-white/70" /></div><div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/35 p-7 backdrop-blur-xl"><p className="font-display text-2xl font-semibold">Mohit Dhiman</p><p className="mt-2 text-white/58">AI Marketing Strategist</p></div></GlassCard>
          <div className="flex flex-col justify-center"><div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-electric"><ShieldCheck className="h-3.5 w-3.5" /> Founder Introduction</div><h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">Built by a strategist who understands SEO, ads, healthcare, and AI systems.</h2><p className="mt-6 text-lg leading-8 text-white/62">Mohit Dhiman is an AI Marketing Strategist with 10+ years of experience in digital marketing, SEO, Google Ads, healthcare marketing, and business growth systems. He has worked with hospitals, clinics, real estate businesses, immigration companies, and local businesses.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["10+ years experience", "100+ clients", "Healthcare industry expertise", "AI marketing systems"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4"><BadgeCheck className="h-5 w-5 text-electric" /><span className="text-sm text-white/76">{item}</span></div>)}</div></div>
        </div>
      </section>

      <section id="results" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-violet backdrop-blur-xl md:p-10"><div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-electric">Results</p><h2 className="font-display text-3xl font-semibold md:text-5xl">Numbers that point to momentum</h2></div><p className="max-w-xl text-white/58">Track the metrics that matter: pipeline, return, visibility, and technical growth.</p></div><div className="grid gap-4 md:grid-cols-4">{metrics.map(([value, label]) => <div key={label} className="rounded-3xl border border-white/10 bg-black/25 p-6"><p className="font-display text-4xl font-semibold">{value}</p><p className="mt-2 text-sm text-white/52">{label}</p></div>)}</div></div></section>

      <section id="industries" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Industries" title="Specialized marketing for high-intent industries" text="From local clinics to real estate and immigration brands, every strategy is shaped around trust, demand, and conversion." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(([industry, Icon]) => <GlassCard key={industry} className="flex items-center gap-5"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet/40 to-electric/25"><Icon className="h-7 w-7" /></div><p className="font-display text-xl font-semibold">{industry}</p></GlassCard>)}</div></div></section>

      <section className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Testimonials" title="Built for businesses that need measurable growth" /><div className="grid gap-5 lg:grid-cols-3">{testimonials.map(([quote, name, role]) => <GlassCard key={name}><div className="mb-6 flex gap-1 text-electric">{[0, 1, 2, 3, 4].map((star) => <Sparkles key={star} className="h-4 w-4 fill-current" />)}</div><p className="leading-8 text-white/72">"{quote}"</p><div className="mt-7 border-t border-white/10 pt-5"><p className="font-semibold">{name}</p><p className="text-sm text-white/45">{role}</p></div></GlassCard>)}</div></div></section>

      <section id="faq" className="px-5 py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-electric">FAQ</p><h2 className="font-display text-3xl font-semibold md:text-5xl">Questions before the first strategy call</h2></div><div className="space-y-4">{faqs.map(([question, answer], index) => <div key={question} className="rounded-3xl border border-white/10 bg-white/[0.055] backdrop-blur-xl"><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"><span className="font-display text-lg font-semibold">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-electric transition ${activeFaq === index ? "rotate-180" : ""}`} /></button>{activeFaq === index && <p className="px-6 pb-6 leading-8 text-white/60">{answer}</p>}</div>)}</div></div></section>

      <section id="contact" className="px-5 pb-16 pt-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,60,255,.22),transparent_28%),rgba(255,255,255,.05)] p-6 shadow-violet backdrop-blur-xl md:p-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="flex flex-col justify-center"><p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-electric">Contact</p><h2 className="font-display text-3xl font-semibold md:text-5xl">Build your AI visibility growth plan.</h2><p className="mt-5 max-w-xl leading-8 text-white/62">Share your business goal and we will map the fastest path across AI search, ads, automation, website conversion, and content systems.</p><a href="https://wa.me/?text=Hi%20AI%20Markating%20Agency%2C%20I%20want%20to%20book%20a%20strategy%20call." target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-6 py-3 text-sm font-bold text-electric transition hover:bg-electric hover:text-ink"><MessageCircle className="h-5 w-5" /> Continue on WhatsApp</a></div>
          <form onSubmit={handleContactSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-black/25 p-5 md:p-7">
            {[["Full Name", "text", "name"], ["Business Website", "url", "website"], ["Email Address", "email", "email"], ["Phone / WhatsApp", "tel", "phone"]].map(([label, type, name]) => <label key={label} className="grid gap-2 text-sm text-white/68">{label}<input type={type} name={name} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-electric/60" placeholder={label} required={name === "name" || name === "phone"} /></label>)}
            <label className="grid gap-2 text-sm text-white/68">Growth Priority<select name="priority" className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition focus:border-electric/60"><option>AI Search Optimization</option><option>AI SEO and GEO</option><option>AI Ads Management</option><option>AI Automation</option><option>Website Development</option></select></label>
            <label className="grid gap-2 text-sm text-white/68">Message<textarea name="message" rows="4" className="resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-electric/60" placeholder="Tell us about your target market, current challenges, and goals." /></label>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ink transition hover:bg-electric">Submit Strategy Request <Rocket className="h-4 w-4" /></button>
          </form>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-2 py-10 text-sm text-white/42 md:flex-row"><p>(c) 2026 AI Markating Agency. All rights reserved.</p><div className="flex items-center gap-4"><span>AI SEO</span><span>GEO</span><span>AI Ads</span><span>Automation</span></div></footer>
      </section>
    </main>
  );
}
