import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  Button,
  Badge,
  Divider,
  TabList,
  Tab,
} from "@fluentui/react-components"
import {
  PeopleRegular,
  StarRegular,
  ArrowRightRegular,
  HeartRegular,
  BookOpenRegular,
  WeatherMoonRegular,
  WeatherSunnyRegular,
} from "@fluentui/react-icons"
import { useState } from "react"
import { useReveal } from "../../hooks/useReveal"
import { getCategoryIcon } from "./constants"
import { CategorySection } from "./CategorySection"
import type { LandingPageProps } from "./types"
import "../../styles/landing.css"

export default function LandingPage({ categories = [] }: LandingPageProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const dark = theme === "dark"

  const heroRef = useReveal<HTMLDivElement>()
  const ctaRef = useReveal<HTMLDivElement>()

  return (
    <FluentProvider theme={dark ? webDarkTheme : webLightTheme}>
      <div className={`sp-root ${dark ? "sp-dark" : "sp-light"}`}>
        {/* ── Animated background orbs ── */}
        <div className='orb orb-1' />
        <div className='orb orb-2' />
        <div className='orb orb-3' />

        {/* ── Nav ── */}
        <nav className='sp-nav'>
          <div className='sp-nav-inner'>
            <div className='sp-logo-group'>
              <div className='sp-logo-mark'>SP</div>
              <span className='sp-logo-text'>Awesome SharePoint</span>
            </div>
            <div className='sp-nav-actions'>
              <Button
                appearance='subtle'
                size='small'
                icon={dark ? <WeatherSunnyRegular /> : <WeatherMoonRegular />}
                onClick={() => setTheme(dark ? "light" : "dark")}
              >
                {dark ? "Light" : "Dark"}
              </Button>
              <Button
                appearance='primary'
                size='small'
                icon={<StarRegular />}
                as='a'
                href='https://github.com/pnp'
                target='_blank'
                className='sp-github-btn'
              >
                Star on GitHub
              </Button>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className='sp-hero'>
          <div ref={heroRef} className='reveal-target sp-hero-content'>
            <Badge
              appearance='outline'
              color='brand'
              size='large'
              className='sp-hero-badge'
            >
              Open Source Resource Hub
            </Badge>
            <h1 className='sp-hero-title'>
              Awesome
              <br />
              SharePoint
            </h1>
            <p className='sp-hero-sub'>
              A curated collection of essential documentation, GitHub
              repositories, tools, and community resources for SharePoint
              developers and administrators.
            </p>
            <div className='sp-hero-actions'>
              <Button
                appearance='primary'
                size='large'
                icon={<ArrowRightRegular />}
                iconPosition='after'
                as='a'
                href='#resources'
                className='sp-btn-primary'
              >
                Explore Resources
              </Button>
              <Button
                appearance='outline'
                size='large'
                icon={<BookOpenRegular />}
                as='a'
                href='https://learn.microsoft.com/en-us/sharepoint/'
                target='_blank'
                className='sp-btn-outline'
              >
                Official Docs
              </Button>
            </div>
          </div>
        </section>

        <Divider className='sp-divider' />

        {/* ── Resources Header + Filter ── */}
        <section id='resources' className='sp-resources-header'>
          <h2 className='sp-section-title'>Resources</h2>
          <p className='sp-section-sub'>
            Everything you need for SharePoint development and administration
          </p>
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
        <section className='sp-cta-wrapper'>
          <div ref={ctaRef} className='reveal-target sp-cta'>
            <div className='sp-cta-glow' />
            <h2 className='sp-cta-title'>Contribute to Awesome SharePoint</h2>
            <p className='sp-cta-desc'>
              Know a great SharePoint resource that's missing? Contributions are
              welcome! Help the community by sharing your favorite tools, repos,
              and guides.
            </p>
            <div className='sp-cta-actions'>
              <Button
                appearance='primary'
                size='large'
                icon={<HeartRegular />}
                as='a'
                href='https://github.com/pnp'
                target='_blank'
                className='sp-btn-primary'
              >
                Contribute
              </Button>
              <Button
                appearance='outline'
                size='large'
                icon={<PeopleRegular />}
                as='a'
                href='https://pnp.github.io/'
                target='_blank'
                className='sp-btn-outline'
              >
                Join PnP Community
              </Button>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className='sp-footer'>
          <div className='sp-footer-inner'>
            <div className='sp-footer-brand'>
              <div className='sp-logo-mark sp-logo-mark--sm'>SP</div>
              <span className='sp-logo-text sp-logo-text--sm'>
                Awesome SharePoint
              </span>
            </div>
            <p className='sp-footer-copy'>
              Built with Astro & Fluent UI. Not affiliated with Microsoft. For
              the community, by the community.
            </p>
          </div>
        </footer>
      </div>
    </FluentProvider>
  )
}
