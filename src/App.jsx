import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  MapPin,
  Calendar,
  Linkedin,
  Github,
  Twitter,
  Download,
  Check,
  Layers,
  Smartphone,
  Cpu,
  Zap,
  ShieldCheck,
  Quote,
  FileText,
} from 'lucide-react';

const AutomationCalculator = () => {
  const [hours, setHours] = useState(2);
  const [frequency, setFrequency] = useState('weekly');
  const [hourlyRate, setHourlyRate] = useState(450);

  const freqMultiplier = {
    daily: 260, // working days
    weekly: 52,
    monthly: 12,
  };

  const annualHours = hours * freqMultiplier[frequency];
  const annualSavings = annualHours * hourlyRate;

  return (
    <div className="mt-24 p-8 md:p-12 rounded-3xl border border-[var(--rule)] bg-white/40 backdrop-blur-sm" style={{ fontFamily: 'var(--tech-font)' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="display mb-6" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>
            What’s the <em className="ital">cost of the status quo?</em>
          </h3>
          <p className="text-sm mb-10 leading-relaxed text-[var(--ink-soft)] max-w-md">
            Input a repetitive task you do today. Most businesses save 150+ hours per year on just
            one automated workflow.
          </p>

          <div className="space-y-8">
            <div>
              <label className="text-xs uppercase block mb-3 tracking-widest text-[var(--ink-faint)]">
                Hours per task
              </label>
              <input
                type="range"
                min="0.5"
                max="20"
                step="0.5"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-[var(--sienna)]"
              />
              <div className="flex justify-between mt-2 text-sm font-medium">
                <span>0.5h</span>
                <span className="text-[var(--sienna)]">{hours} hours</span>
                <span>20h</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase block mb-3 tracking-widest text-[var(--ink-faint)]">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full bg-transparent border-b border-[var(--rule)] py-2 text-sm focus:outline-none focus:border-[var(--ink)]"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase block mb-3 tracking-widest text-[var(--ink-faint)]">
                  Hourly Rate (R)
                </label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full bg-transparent border-b border-[var(--rule)] py-2 text-sm focus:outline-none focus:border-[var(--ink)]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--ink)] text-[var(--bone)] p-10 rounded-2xl">
          <div className="mb-10">
            <div className="text-xs uppercase mb-2 opacity-50 tracking-widest">
              Annual Time Reclaimed
            </div>
            <div className="display text-5xl md:text-6xl text-[var(--sienna-soft)]">
              {Math.round(annualHours)}
              <span className="text-2xl ml-2 opacity-70">hrs</span>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 opacity-50 tracking-widest">
              Potential Yearly Savings
            </div>
            <div className="display text-5xl md:text-6xl">
              R{annualSavings.toLocaleString()}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs opacity-60 leading-relaxed mb-6">
              *Estimate based on standard working days and full automation of the task. The
              Quick-Win Audit identifies 3-5 of these opportunities.
            </p>
            <a
              href="https://calendly.com/khwezi-flatela/meet-with-khwezi-flatela"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-on-dark w-full py-4 rounded-full text-sm font-medium inline-flex justify-center items-center gap-2"
            >
              Book the audit to start saving <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const projects = [
    {
      year: '2025',
      client: 'USAASA',
      title: 'SharePoint HR Onboarding Automation',
      blurb:
        'End-to-end automation of new-hire workflows for a state agency — from candidate intake through document signoff to system provisioning.',
      tags: ['SharePoint', 'Power Automate', 'HR Systems'],
      stage: 'Proposal accepted · R65,000',
      problem:
        'Manual HR onboarding took 15+ hours per hire, involving 4 departments and significant paper trail risks.',
      solution:
        'Built a SharePoint-native workflow with Power Automate that triggers on contract sign-off, auto-provisioning system access and digital file creation.',
    },
    {
      year: '2025',
      client: 'Kusasa Cleaning',
      title: 'On-Demand Service Mobile App',
      blurb:
        'Customer-facing mobile app and operations dashboard for a Gauteng cleaning service — booking, payments, scheduling, and field-team management.',
      tags: ['React Native', 'Mobile', 'Service Marketplace'],
      stage: 'In delivery',
      problem:
        'Reliance on WhatsApp for bookings led to scheduling conflicts and missed payments during peak times.',
      solution:
        'Developed a custom React Native app with integrated Stripe payments and a real-time dispatcher dashboard for field teams.',
    },
    {
      year: '2025',
      client: 'Grandeur Listings',
      title: 'Redefine Properties API & Site Optimisation',
      blurb:
        'Listing-feed integration with Redefine Properties and a top-to-bottom performance pass on the Grandeur platform.',
      tags: ['API Integration', 'Real Estate', 'Performance'],
      stage: 'Delivered',
      problem:
        'Property listings were delayed by 48 hours due to manual sync, causing Grandeur to lose leads to faster competitors.',
      solution:
        'Implemented a high-frequency API sync and optimized Next.js image handling, reducing listing delay to under 10 minutes.',
    },
    {
      year: '2022 — 2025',
      client: 'Goscor Group',
      title: 'Group-Wide Digital Transformation',
      blurb:
        'Digitised HR recruitment across a 961-employee organisation. Four production-grade JotForm pipelines (E1, PD1, PD2, PD3) and SharePoint rollouts across divisions.',
      tags: ['SharePoint', 'JotForm', 'Power Platform'],
      stage: 'Delivered',
      problem:
        'Recruitment for 900+ employees was handled via email attachments, making compliance audits and candidate tracking impossible.',
      solution:
        'Engineered four secure JotForm pipelines feeding into a central SharePoint repository with automated compliance scoring and status tracking.',
    },
  ];

  const services = [
    {
      tag: 'Start here',
      name: 'AI Quick-Win Audit',
      price: 'R3,500',
      cadence: 'One-week diagnostic',
      description:
        'A fixed-fee audit of your operations. I find 3–5 high-impact automation or AI opportunities and hand you a roadmap your team can run with.',
      includes: [
        '1-hour discovery call',
        'Process & systems review',
        '3–5 prioritised opportunities',
        '5-page audit roadmap',
        'Implementation estimates',
      ],
      cta: 'Book the audit',
      featured: true,
    },
    {
      tag: 'Project work',
      name: 'Fixed-Scope Engagements',
      price: 'R15k — 55k',
      cadence: 'Per project',
      description:
        'SharePoint rollouts, Power Platform builds, custom web and mobile apps, API integrations. Scoped, priced, delivered on a clear timeline.',
      includes: [
        'Discovery & scoping',
        'Design & build',
        'User training',
        'Documentation',
        '30-day support window',
      ],
      cta: 'Discuss a project',
      featured: false,
    },
    {
      tag: 'Ongoing',
      name: 'Monthly Retainers',
      price: 'R8k — 20k',
      cadence: 'Per month',
      description:
        'For businesses that need ongoing tech capacity without the headcount. SharePoint admin, Power Platform iteration, dev hours, fast turnaround.',
      includes: [
        'Reserved monthly hours',
        'Priority response',
        'SharePoint & M365 admin',
        'Iterative builds',
        'Monthly review',
      ],
      cta: 'Lock in capacity',
      featured: false,
    },
  ];

  const capabilities = [
    {
      group: 'Microsoft',
      icon: Layers,
      items: [
        'SharePoint Online',
        'Power Automate',
        'Power Apps',
        'Power BI',
        'Power Pages',
        'Microsoft 365',
        'Azure',
      ],
    },
    {
      group: 'Web & Mobile',
      icon: Smartphone,
      items: ['React', 'React Native', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      group: 'AI & Automation',
      icon: Cpu,
      items: [
        'LLM integration',
        'MCP servers',
        'n8n workflows',
        'JotForm pipelines',
        'Custom agents',
      ],
    },
    {
      group: 'Integration',
      icon: Zap,
      items: [
        'REST & GraphQL',
        'SOAP / legacy',
        'Postman tooling',
        'MiX Telematics',
        'Sage Cloud',
        'Keyloop',
      ],
    },
  ];

  const experience = [
    {
      period: '2008 — Now',
      role: 'Founder & Principal Consultant',
      org: 'Khemo IT Solutions',
    },
    {
      period: '2022 — 2025',
      role: 'Developer · SharePoint Admin',
      org: 'Goscor Group',
    },
    {
      period: '2014 — 2022',
      role: 'Independent Web Developer',
      org: 'Various clients · ZA & international',
    },
  ];

  const stats = [
    { num: '15+', label: 'Years shipping software' },
    { num: '100+', label: 'Engagements delivered' },
    { num: '961', label: 'Employees served at Goscor' },
    { num: 'R3,500', label: 'Quick-Win Audit entry' },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Diagnostic & ROI Audit',
      desc: 'We start with a surgical look at your current operations. I identify the 3–5 highest-leverage automation opportunities and provide an ROI roadmap.',
      duration: '1 Week',
    },
    {
      step: '02',
      title: 'Solution Architecture',
      desc: 'I map out the M365 tenant configuration, security protocols, and AI integration paths. This ensures the solution is scalable and compliant.',
      duration: '2-3 Weeks',
    },
    {
      step: '03',
      title: 'Surgical Implementation',
      desc: 'Solutions are built within your environment. No downtime, no data leaks — just professional software deployed into production.',
      duration: 'Varies',
    },
    {
      step: '04',
      title: 'Governance & Handover',
      desc: 'Training your team and signing off on documentation. I ensure your staff are empowered to own the system once it is live.',
      duration: 'Ongoing',
    },
  ];

  const testimonials = [
    {
      quote: "Khwezi doesn't just write code; he understands the business bottlenecks. His automation of our HR recruitment pipeline at Goscor was a game-changer for compliance and efficiency.",
      author: "Operations Lead",
      org: "Goscor Group",
    },
    {
      quote: "The SharePoint automation built for USAASA simplified a complex, multi-departmental workflow into a single, secure process. Professional, secure, and delivered on time.",
      author: "Project Manager",
      org: "USAASA",
    },
    {
      quote: "A rare find in the South African market. A developer who prioritizes enterprise security and POPIA compliance as much as the UI.",
      author: "Technical Director",
      org: "Mid-Market Client",
    }
  ];

  const trustClients = [
    { name: 'Goscor Group', color: '#E31E24', font: 'sans-serif', weight: '800' },
    { name: 'USAASA', color: '#005A32', font: 'serif', weight: '700' },
    { name: 'Kusasa Cleaning', color: '#00A4E4', font: 'sans-serif', weight: '600' },
    { name: 'Grandeur Listings', color: '#D4AF37', font: 'serif', weight: '400' },
    { name: 'Redefine Properties', color: '#003366', font: 'sans-serif', weight: '700' },
  ];

  const wide = { letterSpacing: '0.2em' };

  return (
    <div
      className="body-font grain"
      style={{
        background: 'var(--bone)',
        color: 'var(--ink)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 transition-all duration-500"
        style={{
          zIndex: 50,
          background: scrolled ? 'rgba(242, 237, 227, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-baseline gap-2">
            <span className="display" style={{ fontSize: '1.6rem' }}>
              Khwezi Flatela
            </span>
            <span
              className="text-xs uppercase hidden sm:inline"
              style={{ ...wide, color: 'var(--ink-faint)' }}
            >
              · ZA
            </span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-sm">
            <a href="#work" className="underline-grow">Work</a>
            <a href="#methodology" className="underline-grow">Methodology</a>
            <a href="#testimonials" className="underline-grow">Testimonials</a>
            <a href="#services" className="underline-grow">Services</a>
            <a href="#about" className="underline-grow">About</a>
            <a href="#contact" className="underline-grow">Contact</a>
          </div>
          <a
            href="#contact"
            className="btn-primary px-4 py-2 text-sm rounded-full hidden sm:flex items-center gap-2"
          >
            Start a conversation <ArrowUpRight size={14} />
          </a>
          <a
            href="#contact"
            className="btn-primary px-3 py-2 text-xs rounded-full sm:hidden flex items-center gap-1"
          >
            Talk <ArrowUpRight size={12} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="section relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        <div
          className="blob absolute"
          style={{
            top: '12%',
            right: '-6%',
            width: 'min(80vw, 620px)',
            height: 'min(80vw, 620px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--sienna) 0%, transparent 65%)',
            opacity: 0.22,
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />
        <div className="max-w-7xl mx-auto w-full relative" style={{ zIndex: 2 }}>
          <div className="grid grid-cols-12 gap-y-8">
            <div className="col-span-12 md:col-span-2 rise rise-1">
              <div className="text-xs uppercase" style={{ ...wide, color: 'var(--ink-faint)' }}>
                <div>Khemo IT</div>
                <div>Solutions</div>
                <div className="mt-2">Est. 2008</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-10 rise rise-2">
              <h1 className="display hero-display">
                Software, SharePoint <br />
                and AI <em className="ital">that pays</em>
                <br />
                for itself.
              </h1>
            </div>

            <div className="col-span-12 md:col-start-3 md:col-span-7 rise rise-3 mt-2">
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--ink-soft)' }}
              >
                I'm <strong style={{ color: 'var(--ink)' }}>Khwezi Flatela</strong> — a
                digital-transformation consultant and developer based in Benoni, South Africa.
                Fifteen years building production systems for state agencies, mid-market businesses,
                and ambitious founders.
              </p>
            </div>

            <div className="col-span-12 md:col-start-3 md:col-span-9 rise rise-4 mt-4 flex flex-wrap gap-3 items-center">
              <a
                href="https://calendly.com/khwezi-flatela/meet-with-khwezi-flatela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3.5 rounded-full text-sm flex items-center gap-2"
              >
                Book a Quick-Win Audit · R3,500 <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="btn-ghost px-6 py-3.5 rounded-full text-sm flex items-center gap-2"
              >
                <Download size={14} /> Download CV
              </a>
              <a
                href="#work"
                className="px-6 py-3.5 text-sm flex items-center gap-2 underline-grow"
              >
                See selected work <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div
            className="mt-24 md:mt-32 flex justify-between items-end text-xs uppercase"
            style={{ ...wide, color: 'var(--ink-faint)' }}
          >
            <div>Benoni · Gauteng · ZA</div>
            <div className="hidden md:block">Scroll ↓</div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY MARQUEE */}
      <section
        className="py-12 border-y"
        style={{ borderColor: 'var(--rule)', position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6">
          <div className="text-xs uppercase" style={{ ...wide, color: 'var(--ink-faint)' }}>
            Selected engagements
          </div>
        </div>
        <div className="ticker overflow-hidden">
          <div
            className="marquee flex gap-12 items-center whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {[...trustClients, ...trustClients, ...trustClients].map((c, i) => (
              <span
                key={i}
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                  color: 'var(--ink-soft)',
                  fontFamily: c.font === 'serif' ? 'var(--display-font)' : 'var(--body-font)',
                  fontWeight: c.weight,
                  opacity: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <span style={{ color: c.color }}>{c.name}</span>
                <span style={{ color: 'var(--rule)', fontSize: '1.5rem' }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="section py-24 md:py-32 px-6 md:px-10"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-3">
            <div
              className="text-xs uppercase flex items-center"
              style={{ ...wide, color: 'var(--ink-faint)' }}
            >
              <span className="num-badge mr-2">01</span> About
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display section-display mb-12">
              Fifteen years deep <em className="ital">into the work</em>.
            </h2>
            
            <div className="grid md:grid-cols-12 gap-10 items-start mb-16">
              <div className="col-span-12 md:col-span-5 mb-8 md:mb-0">
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--rule)]">
                    <img 
                      src="/Khwezi-Flatela.JPG" 
                      alt="Khwezi Flatela" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Decorative element */}
                  <div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[var(--sienna)] rounded-br-2xl opacity-40"
                  />
                </div>
              </div>
              
              <div className="col-span-12 md:col-span-7">
                <div
                  className="space-y-6 text-lg"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  <p>
                    I founded Khemo IT Solutions in 2008 and have spent the years since shipping
                    software for South African organisations: state agencies, listed groups, law firms,
                    and founder-led businesses. The work spans SharePoint rollouts, Power Platform
                    builds, custom web and mobile apps, API integrations, and — increasingly — AI-driven
                    automation.
                  </p>
                  <p>
                    Most recently I led digital-transformation work at{' '}
                    <strong style={{ color: 'var(--ink)' }}>Goscor Group</strong> across 961 employees:
                    four production HR pipelines on JotForm and SharePoint rollouts across divisions.
                    I'm now full-time on Khemo, while open to senior contract or specialist roles for
                    the right fit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 pt-12"
              style={{ borderTop: '1px solid var(--rule)' }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div
                    className="display mono-num"
                    style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs uppercase mt-3"
                    style={{ ...wide, color: 'var(--ink-faint)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section
        id="methodology"
        className="section py-24 md:py-32 px-6 md:px-10 border-t"
        style={{ borderColor: 'var(--rule)', position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-xs uppercase flex items-center"
                style={{ ...wide, color: 'var(--ink-faint)' }}
              >
                <span className="num-badge mr-2">02</span> Methodology
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display">
                The Transformation <em className="ital">Blueprint</em>.
              </h2>
              <p className="text-lg max-w-2xl mt-8" style={{ color: 'var(--ink-soft)' }}>
                Consulting isn’t just about the code — it’s about the process. I follow a 
                disciplined framework designed to minimize risk and maximize ROI in every build.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
            {methodology.map((m, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-4xl display mb-6" style={{ color: 'var(--sienna-soft)' }}>
                  {m.step}
                </div>
                <h3 className="display text-2xl mb-4">{m.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ink-soft)' }}>
                  {m.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-[var(--rule-soft)]">
                  <span className="text-[10px] uppercase tracking-widest opacity-50">Timeline</span>
                  <div className="text-sm font-medium mt-1" style={{ fontFamily: 'var(--tech-font)' }}>{m.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="section py-24 md:py-32 px-6 md:px-10"
        style={{ background: 'var(--bone-deep)', position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-8 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-xs uppercase flex items-center"
                style={{ ...wide, color: 'var(--ink-faint)' }}
              >
                <span className="num-badge mr-2">03</span> Selected work
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display">
                A few <em className="ital">recent builds</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                className={`card group p-8 md:p-10 rounded-2xl block cursor-pointer transition-all duration-500 ${
                  expandedProject === i ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-7">
                  <div
                    className="text-xs uppercase flex items-center"
                    style={{ ...wide, color: 'var(--ink-faint)' }}
                  >
                    <span className="num-badge mr-2" style={{ fontSize: '1rem' }}>
                      /{String(i + 1).padStart(2, '0')}
                    </span>
                    {p.client} · {p.year}
                  </div>
                  <ArrowUpRight
                    size={22}
                    className={`transition-all ${
                      expandedProject === i ? 'rotate-45 text-[var(--sienna)]' : 'opacity-30'
                    }`}
                  />
                </div>
                <h3 className="display mb-4" style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)' }}>
                  {p.title}
                </h3>
                <p className="text-base mb-7 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {p.blurb}
                </p>

                {expandedProject === i && (
                  <div className="mt-8 pt-8 border-t border-[var(--rule)] grid md:grid-cols-2 gap-8 rise">
                    <div>
                      <h4
                        className="text-xs uppercase mb-3 tracking-widest text-[var(--sienna)]"
                        style={{ fontWeight: 600 }}
                      >
                        The Bottleneck
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                        {p.problem}
                      </p>
                    </div>
                    <div>
                      <h4
                        className="text-xs uppercase mb-3 tracking-widest text-[var(--sienna)]"
                        style={{ fontWeight: 600 }}
                      >
                        The Build
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                        {p.solution}
                      </p>

                      <a 
                        href={`mailto:khwezi@khwezi.online?subject=Requesting%20Case%20Study:%20${p.title}`}
                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] hover:text-[var(--sienna)] transition-colors"
                      >
                        <FileText size={14} /> Request Full Case Study (PDF)
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-8 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center border-t border-[var(--rule-soft)] pt-5">
                  <div className="text-xs uppercase" style={{ ...wide, color: 'var(--sienna)' }}>
                    {p.stage}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    {expandedProject === i ? 'Close details —' : 'View case study +'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="section py-24 md:py-32 px-6 md:px-10 border-t"
        style={{ borderColor: 'var(--rule)', position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-xs uppercase flex items-center"
                style={{ ...wide, color: 'var(--ink-faint)' }}
              >
                <span className="num-badge mr-2">04</span> Client Voice
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display">
                Feedback from <em className="ital">the field</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-8">
                  <Quote size={32} className="text-[var(--sienna-soft)] opacity-30" />
                </div>
                <p className="text-lg leading-relaxed italic flex-1 mb-10" style={{ color: 'var(--ink-soft)' }}>
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-[var(--rule-soft)]">
                  <div className="font-bold text-sm uppercase tracking-wider">{t.author}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--ink-faint)' }}>{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="section py-24 md:py-32 px-6 md:px-10"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-8 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-xs uppercase flex items-center"
                style={{ ...wide, color: 'var(--ink-faint)' }}
              >
                <span className="num-badge mr-2">05</span> Services
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display mb-6">
                Three ways <em className="ital">to work together</em>.
              </h2>
              <p className="text-lg max-w-2xl" style={{ color: 'var(--ink-soft)' }}>
                From a one-week diagnostic to multi-month transformation engagements. Pick the
                doorway that fits where you are.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl flex flex-col ${s.featured ? 'card-dark' : 'card'}`}
                style={
                  s.featured
                    ? { boxShadow: '0 18px 60px -20px rgba(17,17,16,0.35)' }
                    : {}
                }
              >
                <div
                  className="text-xs uppercase mb-7"
                  style={{
                    ...wide,
                    color: s.featured ? 'var(--sienna-soft)' : 'var(--sienna)',
                  }}
                >
                  {s.tag}
                </div>
                <h3
                  className="display mb-3"
                  style={{ fontSize: 'clamp(1.8rem, 2.4vw, 2.2rem)' }}
                >
                  {s.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="display mono-num"
                    style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)' }}
                  >
                    {s.price}
                  </span>
                </div>
                <div className="text-sm mb-7" style={{ opacity: 0.7 }}>
                  {s.cadence}
                </div>
                <p className="text-sm mb-8 leading-relaxed" style={{ opacity: 0.85 }}>
                  {s.description}
                </p>
                <ul className="space-y-3 mb-9 flex-1">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex gap-3 text-sm">
                      <Check
                        size={15}
                        className="flex-shrink-0 mt-1"
                        style={{
                          opacity: 0.6,
                          color: s.featured ? 'var(--sienna-soft)' : 'var(--sienna)',
                        }}
                      />
                      <span style={{ opacity: 0.92 }}>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={s.name === 'AI Quick-Win Audit' ? 'https://calendly.com/khwezi-flatela/meet-with-khwezi-flatela' : '#contact'}
                  target={s.name === 'AI Quick-Win Audit' ? '_blank' : '_self'}
                  rel={s.name === 'AI Quick-Win Audit' ? 'noopener noreferrer' : ''}
                  className={`px-5 py-3 rounded-full text-sm inline-flex items-center justify-center gap-2 ${
                    s.featured ? 'btn-on-dark' : 'btn-ghost'
                  }`}
                >
                  {s.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* CALCULATOR */}
          <AutomationCalculator />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="py-24 md:py-32 px-6 md:px-10"
        style={{
          background: 'var(--ink)',
          color: 'var(--bone)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-8 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-xs uppercase flex items-center"
                style={{ ...wide, opacity: 0.55 }}
              >
                <span className="num-badge num-badge-dark mr-2">06</span> Capabilities
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display">
                The toolkit <em className="ital">behind the work</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14" style={{ fontFamily: 'var(--tech-font)' }}>
            {/* SECURITY PILLAR - High Trust Card */}
            <div className="md:col-span-2 p-8 md:p-10 rounded-2xl bg-[var(--sienna)] text-[var(--bone)] mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-4 bg-white/10 rounded-xl">
                  <ShieldCheck size={40} className="text-[var(--bone)]" />
                </div>
                <div>
                  <h3 className="display text-3xl mb-4">Enterprise AI Security & Governance</h3>
                  <p className="text-base opacity-90 leading-relaxed max-w-3xl">
                    I build AI and automation solutions that live <strong className="text-white">inside your existing M365 tenant</strong>. Your data never leaves your secure environment, never trains public models, and remains fully compliant with POPIA and enterprise governance standards.
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--sienna-soft)]" />
                      <span className="text-xs uppercase tracking-widest font-medium">Tenant-Native Execution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--sienna-soft)]" />
                      <span className="text-xs uppercase tracking-widest font-medium">POPIA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--sienna-soft)]" />
                      <span className="text-xs uppercase tracking-widest font-medium">Zero Public Model Training</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {capabilities.map((cap) => (
              <div key={cap.group}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <cap.icon size={20} className="text-[var(--sienna-soft)]" />
                  <h3
                    className="display"
                    style={{
                      fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                    }}
                  >
                    {cap.group}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <span key={item} className="chip chip-dark">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="py-24 md:py-32 px-6 md:px-10"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-x-8 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div
                className="text-xs uppercase flex items-center"
                style={{ ...wide, color: 'var(--ink-faint)' }}
              >
                <span className="num-badge mr-2">07</span> Experience
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display">
                Where I've <em className="ital">put in the hours</em>.
              </h2>
            </div>
          </div>

          <div>
            {experience.map((e, i) => (
              <div
                key={i}
                className="row-hover grid grid-cols-12 gap-x-8 py-9"
                style={{
                  borderTop: '1px solid var(--rule)',
                  borderBottom:
                    i === experience.length - 1 ? '1px solid var(--rule)' : 'none',
                }}
              >
                <div
                  className="col-span-12 md:col-span-3 text-sm uppercase mono-num mb-3 md:mb-0"
                  style={{ ...wide, color: 'var(--ink-faint)' }}
                >
                  {e.period}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div
                    className="display"
                    style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)' }}
                  >
                    {e.role}
                  </div>
                </div>
                <div
                  className="col-span-12 md:col-span-3 text-base flex items-center md:justify-end mt-2 md:mt-0"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  {e.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="section py-24 md:py-32 px-6 md:px-10"
        style={{ background: 'var(--bone-deep)', position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-xs uppercase mb-8 flex items-center"
            style={{ ...wide, color: 'var(--ink-faint)' }}
          >
            <span className="num-badge mr-2">08</span> Start a conversation
          </div>
          <h2 className="display big-display mb-16 max-w-5xl">
            Two doorways. <em className="ital">Pick yours</em>.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="card p-10 rounded-2xl">
              <div className="text-xs uppercase mb-5" style={{ ...wide, color: 'var(--sienna)' }}>
                For businesses
              </div>
              <h3
                className="display mb-5"
                style={{ fontSize: 'clamp(1.9rem, 2.6vw, 2.4rem)' }}
              >
                Book the AI Quick-Win Audit.
              </h3>
              <p
                className="text-base mb-9 leading-relaxed"
                style={{ color: 'var(--ink-soft)' }}
              >
                R3,500. One week. A clear roadmap of the 3–5 highest-impact automations or AI plays
                for your business — costed and prioritised.
              </p>
              <a
                href="https://calendly.com/khwezi-flatela/meet-with-khwezi-flatela"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
              >
                Book the audit <ArrowRight size={14} />
              </a>
            </div>

            <div className="card p-10 rounded-2xl">
              <div className="text-xs uppercase mb-5" style={{ ...wide, color: 'var(--sienna)' }}>
                For employers & recruiters
              </div>
              <h3
                className="display mb-5"
                style={{ fontSize: 'clamp(1.9rem, 2.6vw, 2.4rem)' }}
              >
                Reviewing me for a role?
              </h3>
              <p
                className="text-base mb-9 leading-relaxed"
                style={{ color: 'var(--ink-soft)' }}
              >
                Senior contract, Microsoft Specialist, or full-time engagements. CV available on
                request — happy to do a discovery call to understand fit.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:khwezi@khwezi.online?subject=Role%20enquiry"
                  className="btn-ghost px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
                >
                  <Mail size={14} /> Send an email
                </a>
                <a
                  href="mailto:khwezi@khwezi.online?subject=CV%20request"
                  className="btn-ghost px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
                >
                  <Download size={14} /> Request CV
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-20 grid md:grid-cols-3 gap-8 text-sm"
            style={{ borderTop: '1px solid var(--rule)', paddingTop: '2.5rem' }}
          >
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5" style={{ opacity: 0.55 }} />
              <div>
                <div
                  className="text-xs uppercase mb-1"
                  style={{ ...wide, color: 'var(--ink-faint)' }}
                >
                  Email
                </div>
                <a href="mailto:khwezi@khwezi.online" className="underline-grow">
                  khwezi@khwezi.online
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5" style={{ opacity: 0.55 }} />
              <div>
                <div
                  className="text-xs uppercase mb-1"
                  style={{ ...wide, color: 'var(--ink-faint)' }}
                >
                  Based
                </div>
                <div>Benoni · Gauteng · South Africa</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={18} className="mt-0.5" style={{ opacity: 0.55 }} />
              <div>
                <div
                  className="text-xs uppercase mb-1"
                  style={{ ...wide, color: 'var(--ink-faint)' }}
                >
                  Working hours
                </div>
                <div>Mon — Fri · SAST (UTC+2)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-14 px-6 md:px-10"
        style={{
          background: 'var(--ink)',
          color: 'var(--bone)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="display mb-3" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}>
              Khwezi Flatela
            </div>
            <div className="text-sm max-w-md" style={{ opacity: 0.65 }}>
              Khemo IT Solutions — building digital infrastructure for South African businesses
              since 2008.
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5">
            <div className="flex gap-2.5">
              {[
                {
                  Icon: Linkedin,
                  href: 'https://www.linkedin.com/in/khwezi',
                  label: 'LinkedIn',
                },
                {
                  Icon: Twitter,
                  href: 'https://twitter.com/Khwestar',
                  label: 'Twitter',
                },
                {
                  Icon: Github,
                  href: 'https://github.com/qwezzy',
                  label: 'GitHub',
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(242, 237, 227, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bone)';
                    e.currentTarget.style.color = 'var(--ink)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--bone)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
              <a
                href="https://www.behance.net/Khwezi"
                aria-label="Behance"
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs transition-all"
                style={{ border: '1px solid rgba(242, 237, 227, 0.2)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bone)';
                  e.currentTarget.style.color = 'var(--ink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--bone)';
                }}
              >
                Bē
              </a>
            </div>
            <div className="text-xs" style={{ opacity: 0.45 }}>
              © 2008 — 2026 · Khemo IT Solutions · All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
