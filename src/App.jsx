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
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

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
    },
    {
      year: '2025',
      client: 'Kusasa Cleaning',
      title: 'On-Demand Service Mobile App',
      blurb:
        'Customer-facing mobile app and operations dashboard for a Gauteng cleaning service — booking, payments, scheduling, and field-team management.',
      tags: ['React Native', 'Mobile', 'Service Marketplace'],
      stage: 'In delivery',
    },
    {
      year: '2025',
      client: 'Grandeur Listings',
      title: 'Redefine Properties API & Site Optimisation',
      blurb:
        'Listing-feed integration with Redefine Properties and a top-to-bottom performance pass on the Grandeur platform.',
      tags: ['API Integration', 'Real Estate', 'Performance'],
      stage: 'Delivered',
    },
    {
      year: '2022 — 2025',
      client: 'Goscor Group',
      title: 'Group-Wide Digital Transformation',
      blurb:
        'Digitised HR recruitment across a 961-employee organisation. Four production-grade JotForm pipelines (E1, PD1, PD2, PD3) and SharePoint rollouts across divisions.',
      tags: ['SharePoint', 'JotForm', 'Power Platform'],
      stage: 'Delivered',
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
      items: ['React', 'React Native', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      group: 'AI & Automation',
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

  const trustClients = [
    'Goscor Group',
    'USAASA',
    'Kusasa Cleaning',
    'Grandeur Listings',
    'Redefine Properties',
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
                href="#services"
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
            className="marquee flex gap-12 whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {[...trustClients, ...trustClients, ...trustClients].map((c, i) => (
              <span
                key={i}
                className="display"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--ink-soft)' }}
              >
                {c} <span style={{ color: 'var(--sienna)' }}>·</span>
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
            <div
              className="grid md:grid-cols-2 gap-10 text-lg"
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
                <span className="num-badge mr-2">02</span> Selected work
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
              <a
                key={i}
                href="#contact"
                className="card group p-8 md:p-10 rounded-2xl block"
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
                    className="opacity-30 transition-all"
                    style={{ color: 'var(--ink)' }}
                  />
                </div>
                <h3
                  className="display mb-4"
                  style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.4rem)' }}
                >
                  {p.title}
                </h3>
                <p className="text-base mb-7 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs uppercase" style={{ ...wide, color: 'var(--sienna)' }}>
                  {p.stage}
                </div>
              </a>
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
                <span className="num-badge mr-2">03</span> Services
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
                  href="#contact"
                  className={`px-5 py-3 rounded-full text-sm inline-flex items-center justify-center gap-2 ${
                    s.featured ? 'btn-on-dark' : 'btn-ghost'
                  }`}
                >
                  {s.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
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
                <span className="num-badge num-badge-dark mr-2">04</span> Capabilities
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display section-display">
                The toolkit <em className="ital">behind the work</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {capabilities.map((cap) => (
              <div key={cap.group}>
                <h3
                  className="display mb-6 pb-4"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                    borderBottom: '1px solid rgba(242, 237, 227, 0.18)',
                  }}
                >
                  {cap.group}
                </h3>
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
                <span className="num-badge mr-2">05</span> Experience
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
            <span className="num-badge mr-2">06</span> Start a conversation
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
                href="mailto:khwezi@khwezi.online?subject=AI%20Quick-Win%20Audit"
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
