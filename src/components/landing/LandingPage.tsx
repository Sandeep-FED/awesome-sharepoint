import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  TabList,
  Tab,
} from "@fluentui/react-components"
import {
  PeopleRegular,
  StarRegular,
  HeartRegular,
  WeatherMoonRegular,
  WeatherSunnyRegular,
} from "@fluentui/react-icons"
import { useState } from "react"
import { motion } from "framer-motion"
import { heroVariants, fadeUpVariants } from "../../animations/variants"
import { getCategoryIcon } from "./constants"
import { CategorySection } from "./CategorySection"
import type { LandingPageProps } from "./types"
import spLogo from "../../assets/SharePoint.png"
import "../../styles/landing.css"

export default function LandingPage({ categories = [] }: LandingPageProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const dark = theme === "dark"

  return (
    <FluentProvider theme={dark ? webDarkTheme : webLightTheme}>
      <div className={`sp-root ${dark ? "sp-dark" : "sp-light"}`}>
        {/* ── Animated background orbs ── */}
        <div className='orb orb-1' />
        <div className='orb orb-2' />
        <div className='orb orb-3' />

        {/* ── Nav ── */}
        <nav className='sticky top-3 z-100 px-6 max-w-[1200px] mx-auto mt-3'>
          <div className='sp-nav-inner'>
            <div className='flex items-center gap-2.5'>
              <img src={spLogo.src} alt="SharePoint" className='size-8 rounded-lg object-contain' />
              <span className='font-grotesk font-[650] text-[15px] tracking-tight'>Awesome SharePoint</span>
            </div>
            <button
              className='sp-nav-icon-btn'
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <WeatherSunnyRegular /> : <WeatherMoonRegular />}
            </button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className='relative z-1 max-w-[1200px] mx-auto px-6 pt-20 pb-12 text-center max-sm:px-5 max-sm:pt-14 max-sm:pb-9'>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <span className='inline-block px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-sm font-mono text-xs tracking-wider text-[var(--text-secondary)] mb-6'>
              Open Source Resource Hub
            </span>
            <h1 className='sp-hero-title'>
              Awesome
              <br />
              SharePoint
            </h1>
            <p className='text-[clamp(1rem,2vw,1.15rem)] max-w-[580px] mx-auto mb-9 leading-relaxed text-[var(--text-secondary)]'>
              A curated collection of essential documentation, GitHub
              repositories, tools, and community resources for SharePoint
              developers and administrators.
            </p>
            <div className='flex gap-3 justify-center flex-wrap'>
              <motion.a
                href='https://github.com/pnp'
                target='_blank'
                rel='noopener noreferrer'
                className='sp-pill-btn sp-pill-btn--primary'
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <motion.span
                  style={{ display: "inline-flex" }}
                  animate={{ rotate: [0, -15, 15, -10, 0], scale: [1, 1.2, 1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                >
                  <StarRegular />
                </motion.span>
                <span>Star on GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ── Resource Filter ── */}
        <section id='resources' className='max-w-[1200px] mx-auto px-6 pt-12 pb-4 relative z-1'>
          <TabList
            selectedValue={activeCategory ?? "all"}
            onTabSelect={(_, data) =>
              setActiveCategory(
                data.value === "all" ? null : (data.value as string),
              )
            }
            className='sp-tabs'
            size='small'
          >
            <Tab value='all'>All</Tab>
            {categories.map((cat) => (
              <Tab key={cat.id} value={cat.id} icon={getCategoryIcon(cat.id)}>
                {cat.title}
              </Tab>
            ))}
          </TabList>
        </section>

        {/* ── Resource Cards ── */}
        {categories
          .filter((cat) => activeCategory === null || activeCategory === cat.id)
          .map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}

        {/* ── CTA ── */}
        <section className='max-w-[1200px] mx-auto px-6 pt-6 pb-16 relative z-1'>
          <motion.div
            className='sp-cta'
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <div className='sp-cta-glow' />
            <div className='sp-cta-glow-2' />
            <span className='inline-block px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-sm font-mono text-xs tracking-wider text-[var(--text-secondary)] mb-5'>
              Open Source
            </span>
            <h2 className='font-grotesk text-[clamp(1.8rem,4vw,2.8rem)] font-[800] tracking-tighter mb-4 sp-hero-title' style={{ marginBottom: 16 }}>
              Contribute
            </h2>
            <p className='text-[var(--text-secondary)] text-base max-w-[460px] mx-auto mb-8 leading-relaxed'>
              Know a great SharePoint resource? Help the community grow by
              sharing your favorite tools, repos, and guides.
            </p>
            <div className='flex gap-3 justify-center flex-wrap'>
              <motion.a
                href='https://github.com/pnp'
                target='_blank'
                rel='noopener noreferrer'
                className='sp-pill-btn sp-pill-btn--primary sp-btn-shimmer'
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <motion.span
                  style={{ display: "inline-flex" }}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                >
                  <HeartRegular />
                </motion.span>
                <span>Contribute on GitHub</span>
              </motion.a>
              <motion.a
                href='https://pnp.github.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='sp-pill-btn sp-pill-btn--outline sp-btn-border-glow'
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <PeopleRegular />
                <span>Join Community</span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* ── Footer ── */}
        <footer className='px-6 py-9 text-center relative z-1'>
          <div className='sp-footer-inner'>
            <div className='flex items-center gap-2'>
              <img src={spLogo.src} alt="SharePoint" className='size-6 rounded-md object-contain' />
              <span className='font-grotesk font-[650] text-sm tracking-tight'>
                Awesome SharePoint
              </span>
            </div>
            <p className='text-[13px] text-[var(--text-muted)] m-0'>
              Built with Astro & Fluent UI. Not affiliated with Microsoft. For
              the community, by the community.
            </p>
          </div>
        </footer>
      </div>
    </FluentProvider>
  )
}
