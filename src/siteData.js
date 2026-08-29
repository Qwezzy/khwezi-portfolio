export function getSiteData({ Layers, Smartphone, Cpu, Zap }) {
  const projects = [
    {
      year: '2025',
      client: 'USAASA',
      title: 'SharePoint HR Onboarding Automation',
      blurb:
        'End-to-end automation of new-hire workflows for a state agency — from candidate intake through document signoff to system provisioning.',
      tags: ['SharePoint', 'Power Automate', 'HR Systems'],
      stage: 'Scoped and accepted',
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
      year: 'Apr–Dec 2025',
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
      includes: ['Discovery & scoping', 'Design & build', 'User training', 'Documentation', '30-day support window'],
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
      includes: ['Reserved monthly hours', 'Priority response', 'SharePoint & M365 admin', 'Iterative builds', 'Monthly review'],
      cta: 'Lock in capacity',
      featured: false,
    },
  ];

  const capabilities = [
    {
      group: 'Microsoft',
      icon: Layers,
      items: ['SharePoint Online', 'Power Automate', 'Power Apps', 'Power BI', 'Power Pages', 'Microsoft 365', 'Azure'],
    },
    {
      group: 'Web & Mobile',
      icon: Smartphone,
      items: ['React', 'React Native', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      group: 'AI & Automation',
      icon: Cpu,
      items: ['LLM integration', 'MCP servers', 'n8n workflows', 'JotForm pipelines', 'Custom agents'],
    },
    {
      group: 'Integration',
      icon: Zap,
      items: ['REST & GraphQL', 'SOAP / legacy', 'Postman tooling', 'MiX Telematics', 'Sage Cloud', 'Keyloop'],
    },
  ];

  const experience = [
    { period: 'Apr 2025 — Dec 2025', role: 'Developer · Microsoft 365 & Digital Transformation', org: 'Goscor Group · contract' },
    { period: 'Mar 2018 — Nov 2020', role: 'SharePoint Administrator', org: 'Motus Holdings Limited' },
    { period: 'Jan 2017 — Mar 2018', role: 'Microsoft 365 Administrator', org: 'Motus Holdings Limited' },
    { period: 'Jun 2008 — Dec 2011', role: 'Web Developer', org: 'SANBI' },
    { period: '2006 — Now', role: 'Independent consultant & developer', org: 'Contracts across private and public sector' },
  ];

  const stats = [
    { num: '15+', label: 'Years across contracts' },
    { num: 'Motus', label: 'SharePoint Online rollout' },
    { num: '961', label: 'People served at Goscor' },
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

  const proof = [
    {
      org: 'Motus Holdings Limited',
      period: '2017 — 2020',
      line: 'Microsoft 365 administrator, then organisation-wide SharePoint Online rollout and governance.',
    },
    {
      org: 'SANBI',
      period: '2008 — 2011',
      line: 'SABIF web portal, server infrastructure and GBIF stakeholder integrations.',
    },
    {
      org: 'Goscor Group',
      period: 'Apr — Dec 2025 · contract',
      line: 'HR pipelines on JotForm and SharePoint rollouts across a ~961-person group.',
    },
    {
      org: 'USAASA',
      period: '2025',
      line: 'SharePoint HR onboarding workflow — scoped and accepted for a state agency.',
    },
    {
      org: 'Telkom / BCX',
      period: 'Contract',
      line: 'Independent Microsoft and web work delivered through a national systems integrator.',
    },
    {
      org: 'Flatela (Pty) Ltd',
      period: 'Vehicle for new work',
      line: '2026/291183/07 · B-BBEE Level 1 EME · CSD MAAA1734821 · Benoni.',
    },
  ];

  const trustClients = [
    { name: 'Motus', color: '#0033A0', font: 'sans-serif', weight: '800' },
    { name: 'SANBI', color: '#2E7D32', font: 'sans-serif', weight: '700' },
    { name: 'Goscor Group', color: '#E31E24', font: 'sans-serif', weight: '800' },
    { name: 'USAASA', color: '#005A32', font: 'serif', weight: '700' },
    { name: 'Kusasa Cleaning', color: '#00A4E4', font: 'sans-serif', weight: '600' },
    { name: 'Grandeur Listings', color: '#D4AF37', font: 'serif', weight: '400' },
  ];

  return { projects, services, capabilities, experience, stats, methodology, proof, trustClients };
}
