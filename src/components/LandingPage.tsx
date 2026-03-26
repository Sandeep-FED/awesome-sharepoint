import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  Button,
  Card,
  Badge,
  Divider,
} from "@fluentui/react-components";
import {
  OpenRegular,
  CodeRegular,
  PeopleRegular,
  RocketRegular,
  ShieldCheckmarkRegular,
  StarRegular,
  BoxRegular,
  GridRegular,
  DataBarVerticalRegular,
  SettingsRegular,
  SearchRegular,
  ArrowRightRegular,
  HeartRegular,
  BookOpenRegular,
  ChatRegular,
  WeatherMoonRegular,
  WeatherSunnyRegular,
} from "@fluentui/react-icons";
import React, { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════
   SCROLL-REVEAL HOOK
   ═══════════════════════════════════════ */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════
   DATA
   ═══════════════════════════════════════ */
const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <RocketRegular />,
    description: "Essential resources to begin your SharePoint journey",
    items: [
      { title: "SharePoint Documentation", description: "Official Microsoft documentation for SharePoint Online and SharePoint Server.", url: "https://learn.microsoft.com/en-us/sharepoint/", tag: "Docs", tagColor: "brand" as const },
      { title: "SharePoint Look Book", description: "Discover beautiful, powerful SharePoint site designs and templates.", url: "https://lookbook.microsoft.com/", tag: "Templates", tagColor: "important" as const },
      { title: "SharePoint Admin Guide", description: "Comprehensive guide for SharePoint Online administration.", url: "https://learn.microsoft.com/en-us/sharepoint/sharepoint-online", tag: "Admin", tagColor: "severe" as const },
      { title: "SharePoint Modernization", description: "Tools and guidance to modernize classic SharePoint sites.", url: "https://learn.microsoft.com/en-us/sharepoint/dev/transform/modernize-classic-sites", tag: "Guide", tagColor: "brand" as const },
    ],
  },
  {
    id: "spfx",
    title: "SharePoint Framework (SPFx)",
    icon: <CodeRegular />,
    description: "Build modern web parts and extensions with SPFx",
    items: [
      { title: "SPFx Documentation", description: "Official documentation for the SharePoint Framework development model.", url: "https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview", tag: "Docs", tagColor: "brand" as const },
      { title: "sp-dev-fx-webparts", description: "Community-driven samples of SharePoint Framework client-side web parts.", url: "https://github.com/pnp/sp-dev-fx-webparts", tag: "GitHub", tagColor: "success" as const },
      { title: "sp-dev-fx-extensions", description: "SharePoint Framework extensions samples — command sets, field customizers & more.", url: "https://github.com/pnp/sp-dev-fx-extensions", tag: "GitHub", tagColor: "success" as const },
      { title: "SPFx Fast Serve", description: "Speed up your SPFx development with fast-serve — hot reloading for SPFx.", url: "https://github.com/nickvdyck/spfx-fast-serve", tag: "Tool", tagColor: "warning" as const },
    ],
  },
  {
    id: "pnp",
    title: "PnP (Patterns & Practices)",
    icon: <PeopleRegular />,
    description: "Community-driven tools, libraries, and guidance from Microsoft 365 PnP",
    items: [
      { title: "PnPjs", description: "Fluent JavaScript library for consuming SharePoint, Graph, and Microsoft 365 REST APIs.", url: "https://github.com/pnp/pnpjs", tag: "Library", tagColor: "brand" as const },
      { title: "PnP PowerShell", description: "Cross-platform PowerShell module for SharePoint Online, Teams, Planner, and more.", url: "https://github.com/pnp/powershell", tag: "GitHub", tagColor: "success" as const },
      { title: "PnP Provisioning Engine", description: "Template-based provisioning for SharePoint sites — automate site creation at scale.", url: "https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/pnp-provisioning-engine-and-the-core-library", tag: "Docs", tagColor: "brand" as const },
      { title: "PnP Modern Search", description: "Open-source modern search web parts for SharePoint Online.", url: "https://github.com/microsoft-search/pnp-modern-search", tag: "GitHub", tagColor: "success" as const },
    ],
  },
  {
    id: "apis",
    title: "APIs & Graph",
    icon: <DataBarVerticalRegular />,
    description: "Interact with SharePoint data through REST APIs and Microsoft Graph",
    items: [
      { title: "SharePoint REST API", description: "Reference for SharePoint REST endpoints — working with lists, items, files & more.", url: "https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service", tag: "Docs", tagColor: "brand" as const },
      { title: "Microsoft Graph - SharePoint", description: "Use Microsoft Graph to access SharePoint sites, lists, drives, and content.", url: "https://learn.microsoft.com/en-us/graph/api/resources/sharepoint?view=graph-rest-1.0", tag: "Docs", tagColor: "brand" as const },
      { title: "Graph Explorer", description: "Interactive tool to explore and test Microsoft Graph API calls in the browser.", url: "https://developer.microsoft.com/en-us/graph/graph-explorer", tag: "Tool", tagColor: "warning" as const },
      { title: "SharePoint CSOM", description: "Client-Side Object Model reference for SharePoint Server and Online.", url: "https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code", tag: "Docs", tagColor: "brand" as const },
    ],
  },
  {
    id: "governance",
    title: "Governance & Security",
    icon: <ShieldCheckmarkRegular />,
    description: "Best practices for governance, compliance, and securing your SharePoint environment",
    items: [
      { title: "SharePoint Security Guide", description: "Security best practices for SharePoint Online administration.", url: "https://learn.microsoft.com/en-us/sharepoint/security-for-sharepoint-server/security-for-sharepoint-server", tag: "Docs", tagColor: "brand" as const },
      { title: "Sensitivity Labels", description: "Apply sensitivity labels to protect SharePoint sites and documents.", url: "https://learn.microsoft.com/en-us/purview/sensitivity-labels-sharepoint-onedrive-files", tag: "Guide", tagColor: "important" as const },
      { title: "Sharing & Permissions", description: "Configure external sharing and manage permissions across site collections.", url: "https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off", tag: "Admin", tagColor: "severe" as const },
      { title: "Information Barriers", description: "Set up information barrier policies in SharePoint and OneDrive.", url: "https://learn.microsoft.com/en-us/purview/information-barriers-sharepoint", tag: "Guide", tagColor: "important" as const },
    ],
  },
  {
    id: "community",
    title: "Community & Learning",
    icon: <ChatRegular />,
    description: "Connect, learn, and grow with the SharePoint community",
    items: [
      { title: "Microsoft 365 PnP Community", description: "Join the Patterns & Practices community — calls, samples, and guidance.", url: "https://pnp.github.io/", tag: "Community", tagColor: "brand" as const },
      { title: "SharePoint StackExchange", description: "Q&A community for SharePoint developers and administrators.", url: "https://sharepoint.stackexchange.com/", tag: "Q&A", tagColor: "warning" as const },
      { title: "Microsoft 365 Developer Blog", description: "Latest news and updates from the Microsoft 365 dev team.", url: "https://devblogs.microsoft.com/microsoft365dev/", tag: "Blog", tagColor: "important" as const },
      { title: "SharePoint Framework Training", description: "Free Microsoft Learn modules for SPFx development.", url: "https://learn.microsoft.com/en-us/training/modules/sharepoint-spfx-get-started/", tag: "Training", tagColor: "success" as const },
    ],
  },
];

const quickLinks = [
  { label: "SPFx Docs", url: "https://learn.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview", icon: <CodeRegular /> },
  { label: "PnPjs", url: "https://github.com/pnp/pnpjs", icon: <BoxRegular /> },
  { label: "Graph Explorer", url: "https://developer.microsoft.com/en-us/graph/graph-explorer", icon: <SearchRegular /> },
  { label: "SP Look Book", url: "https://lookbook.microsoft.com/", icon: <GridRegular /> },
  { label: "PnP PowerShell", url: "https://github.com/pnp/powershell", icon: <SettingsRegular /> },
  { label: "SP Starter Kit", url: "https://github.com/pnp/sp-starter-kit", icon: <RocketRegular /> },
];

const stats = [
  { value: "6+", label: "Categories" },
  { value: "24+", label: "Resources" },
  { value: "10+", label: "GitHub Repos" },
  { value: "100%", label: "Free & Open" },
];

/* ═══════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════ */
export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const dark = theme === "dark";

  const heroRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();
  const quickRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <FluentProvider theme={dark ? webDarkTheme : webLightTheme}>
      <div className={`sp-root ${dark ? "sp-dark" : "sp-light"}`}>

        {/* ── Animated background orbs ── */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* ── Nav ── */}
        <nav className="sp-nav">
          <div className="sp-nav-inner">
            <div className="sp-logo-group">
              <div className="sp-logo-mark">SP</div>
              <span className="sp-logo-text">Awesome SharePoint</span>
            </div>
            <div className="sp-nav-actions">
              <Button
                appearance="subtle"
                size="small"
                icon={dark ? <WeatherSunnyRegular /> : <WeatherMoonRegular />}
                onClick={() => setTheme(dark ? "light" : "dark")}
              >
                {dark ? "Light" : "Dark"}
              </Button>
              <Button
                appearance="primary"
                size="small"
                icon={<StarRegular />}
                as="a"
                href="https://github.com/pnp"
                target="_blank"
                className="sp-github-btn"
              >
                Star on GitHub
              </Button>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="sp-hero">
          <div ref={heroRef} className="reveal-target sp-hero-content">
            <Badge appearance="outline" color="brand" size="large" className="sp-hero-badge">
              Open Source Resource Hub
            </Badge>
            <h1 className="sp-hero-title">
              Awesome<br />SharePoint
            </h1>
            <p className="sp-hero-sub">
              A curated collection of essential documentation, GitHub repositories, tools,
              and community resources for SharePoint developers and administrators.
            </p>
            <div className="sp-hero-actions">
              <Button
                appearance="primary"
                size="large"
                icon={<ArrowRightRegular />}
                iconPosition="after"
                as="a"
                href="#resources"
                className="sp-btn-primary"
              >
                Explore Resources
              </Button>
              <Button
                appearance="outline"
                size="large"
                icon={<BookOpenRegular />}
                as="a"
                href="https://learn.microsoft.com/en-us/sharepoint/"
                target="_blank"
                className="sp-btn-outline"
              >
                Official Docs
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal-target sp-stats">
            {stats.map((s, i) => (
              <div key={s.label} className="sp-stat" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="sp-stat-value">{s.value}</span>
                <span className="sp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick Links ── */}
        <section ref={quickRef} className="reveal-target sp-quick-section">
          <div className="sp-quick-links">
            {quickLinks.map((link, i) => (
              <Button
                key={link.label}
                as="a"
                href={link.url}
                target="_blank"
                appearance="subtle"
                icon={link.icon}
                size="medium"
                className="sp-quick-pill"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </section>

        <Divider className="sp-divider" />

        {/* ── Resources Header + Filter ── */}
        <section id="resources" className="sp-resources-header">
          <h2 className="sp-section-title">Resources</h2>
          <p className="sp-section-sub">Everything you need for SharePoint development and administration</p>
          <div className="sp-filter-pills">
            <Button
              appearance={activeCategory === null ? "primary" : "subtle"}
              size="small"
              shape="circular"
              onClick={() => setActiveCategory(null)}
              className="sp-pill"
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                appearance={activeCategory === cat.id ? "primary" : "subtle"}
                size="small"
                shape="circular"
                icon={cat.icon}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className="sp-pill"
              >
                {cat.title}
              </Button>
            ))}
          </div>
        </section>

        {/* ── Resource Cards ── */}
        {categories
          .filter((cat) => activeCategory === null || activeCategory === cat.id)
          .map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}

        {/* ── CTA ── */}
        <section className="sp-cta-wrapper">
          <div ref={ctaRef} className="reveal-target sp-cta">
            <div className="sp-cta-glow" />
            <h2 className="sp-cta-title">Contribute to Awesome SharePoint</h2>
            <p className="sp-cta-desc">
              Know a great SharePoint resource that's missing? Contributions are welcome!
              Help the community by sharing your favorite tools, repos, and guides.
            </p>
            <div className="sp-cta-actions">
              <Button
                appearance="primary"
                size="large"
                icon={<HeartRegular />}
                as="a"
                href="https://github.com/pnp"
                target="_blank"
                className="sp-btn-primary"
              >
                Contribute
              </Button>
              <Button
                appearance="outline"
                size="large"
                icon={<PeopleRegular />}
                as="a"
                href="https://pnp.github.io/"
                target="_blank"
                className="sp-btn-outline"
              >
                Join PnP Community
              </Button>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="sp-footer">
          <div className="sp-footer-inner">
            <div className="sp-footer-brand">
              <div className="sp-logo-mark sp-logo-mark--sm">SP</div>
              <span className="sp-logo-text sp-logo-text--sm">Awesome SharePoint</span>
            </div>
            <p className="sp-footer-copy">
              Built with Astro & Fluent UI. Not affiliated with Microsoft. For the community, by the community.
            </p>
          </div>
        </footer>
      </div>

      {/* ══════════════════════ STYLES ══════════════════════ */}
      <style>{`
        /* ─── CSS Variables ─── */
        .sp-dark {
          --bg-primary: #0a0e17;
          --bg-secondary: #111827;
          --bg-card: rgba(255,255,255,0.04);
          --bg-card-hover: rgba(255,255,255,0.07);
          --bg-nav: rgba(10,14,23,0.82);
          --border-subtle: rgba(255,255,255,0.06);
          --border-hover: rgba(3,131,135,0.4);
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --text-muted: #64748b;
        }
        .sp-light {
          --bg-primary: #f8fafb;
          --bg-secondary: #ffffff;
          --bg-card: rgba(255,255,255,0.85);
          --bg-card-hover: rgba(255,255,255,1);
          --bg-nav: rgba(255,255,255,0.82);
          --border-subtle: rgba(0,0,0,0.07);
          --border-hover: rgba(3,131,135,0.35);
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --text-muted: #94a3b8;
        }

        /* ─── Root ─── */
        .sp-root {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* ─── Animated Orbs ─── */
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }
        .sp-light .orb { opacity: 0.3; }
        .orb-1 {
          width: 600px; height: 600px;
          top: -200px; left: -100px;
          background: radial-gradient(circle, rgba(3,131,135,0.25), transparent 70%);
          animation: orbFloat1 20s ease-in-out infinite;
        }
        .orb-2 {
          width: 500px; height: 500px;
          top: 40%; right: -150px;
          background: radial-gradient(circle, rgba(55,169,135,0.2), transparent 70%);
          animation: orbFloat2 25s ease-in-out infinite;
        }
        .orb-3 {
          width: 400px; height: 400px;
          bottom: -100px; left: 30%;
          background: radial-gradient(circle, rgba(3,131,135,0.15), transparent 70%);
          animation: orbFloat3 22s ease-in-out infinite;
        }
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, 60px) scale(1.1); }
          66% { transform: translate(-40px, 30px) scale(0.95); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, -40px) scale(1.05); }
          66% { transform: translate(40px, 50px) scale(0.9); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.1); }
        }

        /* ─── Scroll Reveal ─── */
        .reveal-target {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-target.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Nav ─── */
        .sp-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          background: var(--bg-nav);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0 24px;
        }
        .sp-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .sp-logo-group { display: flex; align-items: center; gap: 12px; }
        .sp-logo-mark {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, #038387, #37a987);
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px; font-weight: 600; color: #fff;
          box-shadow: 0 2px 12px rgba(3,131,135,0.3);
        }
        .sp-logo-mark--sm { width: 26px; height: 26px; font-size: 10px; border-radius: 7px; }
        .sp-logo-text { font-weight: 650; font-size: 17px; letter-spacing: -0.3px; }
        .sp-logo-text--sm { font-size: 14px; }
        .sp-nav-actions { display: flex; align-items: center; gap: 8px; }
        .sp-github-btn {
          border-radius: 10px !important;
          background: linear-gradient(135deg, #038387, #005b70) !important;
        }

        /* ─── Hero ─── */
        .sp-hero {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px 40px;
          text-align: center;
        }
        .sp-hero-badge {
          margin-bottom: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px !important;
          letter-spacing: 0.5px;
          animation: badgePulse 3s ease-in-out infinite;
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(3,131,135,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(3,131,135,0); }
        }
        .sp-hero-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.05;
          margin: 12px 0 24px;
          letter-spacing: -2px;
          background: linear-gradient(135deg, #038387 0%, #37a987 40%, #038387 80%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .sp-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 640px;
          margin: 0 auto 36px;
          line-height: 1.75;
          color: var(--text-secondary);
        }
        .sp-hero-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .sp-btn-primary {
          border-radius: 14px !important;
          padding: 14px 30px !important;
          background: linear-gradient(135deg, #038387, #005b70) !important;
          font-weight: 600 !important;
          transition: transform 0.2s, box-shadow 0.2s !important;
        }
        .sp-btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(3,131,135,0.35) !important;
        }
        .sp-btn-outline {
          border-radius: 14px !important;
          padding: 14px 30px !important;
          font-weight: 600 !important;
          transition: transform 0.2s !important;
        }
        .sp-btn-outline:hover { transform: translateY(-2px) !important; }

        /* ─── Stats ─── */
        .sp-stats {
          display: flex;
          justify-content: center;
          gap: 56px;
          margin-top: 64px;
          flex-wrap: wrap;
        }
        .sp-stat { text-align: center; }
        .sp-stat-value {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(135deg, #038387, #37a987);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sp-stat-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* ─── Quick Links ─── */
        .sp-quick-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 24px 44px;
          position: relative; z-index: 1;
        }
        .sp-quick-links {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .sp-quick-pill {
          border-radius: 24px !important;
          border: 1px solid var(--border-subtle) !important;
          background: var(--bg-card) !important;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease !important;
        }
        .sp-quick-pill:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 16px rgba(3,131,135,0.12) !important;
        }

        /* ─── Divider ─── */
        .sp-divider { max-width: 1200px; margin: 0 auto; opacity: 0.2; position: relative; z-index: 1; }

        /* ─── Resources Header ─── */
        .sp-resources-header {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px 16px;
          text-align: center;
          position: relative; z-index: 1;
        }
        .sp-section-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 750;
          letter-spacing: -1px;
          margin: 0 0 8px;
        }
        .sp-section-sub {
          color: var(--text-muted);
          font-size: 15px;
          margin: 0 0 28px;
        }
        .sp-filter-pills {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .sp-pill { transition: all 0.2s ease !important; }
        .sp-pill:hover { transform: translateY(-1px) !important; }

        /* ─── Category Section ─── */
        .sp-category {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 56px;
          position: relative; z-index: 1;
        }
        .sp-category-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .sp-category-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(3,131,135,0.15), rgba(55,169,135,0.15));
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; color: #038387;
          transition: transform 0.3s ease;
        }
        .sp-category-header:hover .sp-category-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .sp-category-title {
          font-size: 20px;
          font-weight: 650;
          letter-spacing: -0.3px;
          margin: 0;
        }
        .sp-category-desc {
          font-size: 13px;
          color: var(--text-muted);
          margin: 2px 0 0;
        }

        /* ─── Card Grid ─── */
        .sp-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .sp-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          opacity: 0;
          transform: translateY(20px);
          animation: cardReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes cardReveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .sp-card {
          padding: 22px !important;
          height: 100%;
          border-radius: 18px !important;
          border: 1px solid var(--border-subtle) !important;
          background: var(--bg-card) !important;
          backdrop-filter: blur(12px);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          position: relative;
          overflow: hidden;
        }
        .sp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #038387, #37a987, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .sp-card:hover::before { opacity: 1; }
        .sp-card:hover {
          transform: translateY(-4px) !important;
          border-color: var(--border-hover) !important;
          background: var(--bg-card-hover) !important;
          box-shadow: 0 12px 40px rgba(3,131,135,0.12),
                      0 4px 12px rgba(0,0,0,0.08) !important;
        }
        .sp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }
        .sp-card-arrow {
          opacity: 0.25;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        .sp-card:hover .sp-card-arrow {
          opacity: 0.7;
          transform: translate(2px, -2px);
        }
        .sp-card-title {
          font-weight: 620;
          letter-spacing: -0.2px;
          margin-bottom: 6px;
        }
        .sp-card-desc {
          color: var(--text-muted);
          line-height: 1.65;
          font-size: 13px;
        }

        /* ─── CTA ─── */
        .sp-cta-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 24px 64px;
          position: relative; z-index: 1;
        }
        .sp-cta {
          border-radius: 28px;
          padding: 56px 36px;
          text-align: center;
          background: linear-gradient(
            135deg,
            rgba(3,131,135,0.08),
            rgba(55,169,135,0.04)
          );
          border: 1px solid rgba(3,131,135,0.15);
          position: relative;
          overflow: hidden;
        }
        .sp-cta-glow {
          position: absolute;
          top: -100px; right: -100px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(3,131,135,0.15), transparent 70%);
          pointer-events: none;
          animation: orbFloat1 15s ease-in-out infinite;
        }
        .sp-cta-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.5px;
          margin: 0 0 12px;
        }
        .sp-cta-desc {
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 28px;
          line-height: 1.7;
        }
        .sp-cta-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ─── Footer ─── */
        .sp-footer {
          border-top: 1px solid var(--border-subtle);
          padding: 36px 24px;
          text-align: center;
          position: relative; z-index: 1;
        }
        .sp-footer-inner { max-width: 1200px; margin: 0 auto; }
        .sp-footer-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .sp-footer-copy {
          font-size: 13px;
          color: var(--text-muted);
          margin: 0;
        }

        /* ─── Responsive ─── */
        @media (max-width: 640px) {
          .sp-hero { padding: 64px 20px 32px; }
          .sp-hero-title { letter-spacing: -1px; }
          .sp-stats { gap: 32px; }
          .sp-stat-value { font-size: 28px; }
          .sp-card-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </FluentProvider>
  );
}

/* ═══════════════════════════════════════
   CATEGORY SUB-COMPONENT (with its own reveal)
   ═══════════════════════════════════════ */
function CategorySection({
  category,
}: {
  category: (typeof categories)[number];
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal-target sp-category">
      <div className="sp-category-header">
        <div className="sp-category-icon">{category.icon}</div>
        <div>
          <h3 className="sp-category-title">{category.title}</h3>
          <p className="sp-category-desc">{category.description}</p>
        </div>
      </div>
      <div className="sp-card-grid">
        {category.items.map((item, i) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-card-link"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <Card className="sp-card">
              <div className="sp-card-top">
                <Badge appearance="filled" color={item.tagColor} size="small">
                  {item.tag}
                </Badge>
                <OpenRegular className="sp-card-arrow" />
              </div>
              <div className="sp-card-title">{item.title}</div>
              <div className="sp-card-desc">{item.description}</div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
