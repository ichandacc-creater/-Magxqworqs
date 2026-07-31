import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import './styles.css'

const projects = [
  {
    title: 'Portfolio Spread 01',
    category: 'Identity / Digital',
    year: '2026',
    type: 'Identity',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0006.jpg',
    className: 'project-card project-card--wide',
  },
  {
    title: 'Portfolio Spread 02',
    category: 'Editorial / Art Direction',
    year: '2023',
    type: 'Editorial',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0010.jpg',
    className: 'project-card project-card--tall',
  },
  {
    title: 'Portfolio Spread 03',
    category: 'Campaign / Packaging',
    year: '2026',
    type: 'Campaign',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0015.jpg',
    className: 'project-card project-card--small',
  },
  {
    title: 'Portfolio Spread 04',
    category: 'Art Direction / Print',
    year: '2022',
    type: 'Editorial',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0025.jpg',
    className: 'project-card project-card--medium',
  },
  {
    title: 'Portfolio Spread 05',
    category: 'Identity / Campaign',
    year: '2026',
    type: 'Identity',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0036.jpg',
    className: 'project-card project-card--wide',
  },
  {
    title: 'Portfolio Spread 06',
    category: 'Editorial / Brand',
    year: '2025',
    type: 'Editorial',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0039.jpg',
    className: 'project-card project-card--tall',
  },
  {
    title: 'Portfolio Spread 07',
    category: 'Campaign / Social',
    year: '2024',
    type: 'Campaign',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0040.jpg',
    className: 'project-card project-card--small',
  },
  {
    title: 'Portfolio Spread 08',
    category: 'Art Direction / Print',
    year: '2023',
    type: 'Editorial',
    image: './Works/Genius Mambwe - Graphic Designer Portfolio 20266_page-0043.jpg',
    className: 'project-card project-card--medium',
  },
]

const brandingProjects = [
  {
    title: 'Branding Study 01',
    category: 'Identity / Strategy',
    year: '2026',
    type: 'Identity',
    image: './Branding/bran.jpg',
    className: 'project-card project-card--wide',
  },
  {
    title: 'Branding Study 02',
    category: 'Identity / Brand Systems',
    year: '2025',
    type: 'Editorial',
    image: './Branding/bran1.jpg',
    className: 'project-card project-card--tall',
  },
  {
    title: 'Branding Study 03',
    category: 'Campaign / Packaging',
    year: '2026',
    type: 'Campaign',
    image: './Branding/bran2.jpg',
    className: 'project-card project-card--small',
  },
  {
    title: 'Branding Study 04',
    category: 'Brand / Print',
    year: '2024',
    type: 'Editorial',
    image: './Branding/bran3.jpg',
    className: 'project-card project-card--medium',
  },
  {
    title: 'Branding Study 05',
    category: 'Identity / Campaign',
    year: '2026',
    type: 'Identity',
    image: './Branding/Genius Mambwe - Graphic Designer Portfolio 20266_page-0022.jpg',
    className: 'project-card project-card--wide',
  },
  {
    title: 'Branding Study 06',
    category: 'Editorial / Visual System',
    year: '2025',
    type: 'Editorial',
    image: './Branding/Genius Mambwe - Graphic Designer Portfolio 20266_page-0036.jpg',
    className: 'project-card project-card--tall',
  },
  {
    title: 'Branding Study 07',
    category: 'Campaign / Social',
    year: '2024',
    type: 'Campaign',
    image: './Branding/Genius Mambwe - Graphic Designer Portfolio 20266_page-0037.jpg',
    className: 'project-card project-card--small',
  },
  {
    title: 'Branding Study 08',
    category: 'Art Direction / Print',
    year: '2023',
    type: 'Editorial',
    image: './Branding/Genius Mambwe - Graphic Designer Portfolio 20266_page-0040.jpg',
    className: 'project-card project-card--medium',
  },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const filters = ['All work', 'Identity', 'Editorial', 'Campaign']
  const visibleProjects = activeFilter === 'All work' ? projects : projects.filter((project) => project.type === activeFilter)

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="EAMAI home"><img src="./LOGO Black.png" alt="EAMAI" /></a>
        <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#clientelle" onClick={() => setMenuOpen(false)}>Clientelle</a>
          <a href="#principles" onClick={() => setMenuOpen(false)}>Principles</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skill set</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero" id="top">
        <img className="hero-watermark" src="./symbol logo edited.png" alt="" aria-hidden="true" />
        <div className="hero-topline"><span>Independent graphic designer</span></div>
        <div className="hero-content">
          <div className="hero-kicker">Selected practice <span className="cross">✳</span> 2020—26</div>
          <h1>Ideas with<br /><em>a pulse.</em></h1>
          <div className="hero-note">Visual identities, art direction<br />&amp; books for people with<br />something to say.</div>
        </div>
        <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDownRight size={18} /></a>
        <div className="hero-sticker" aria-hidden="true"><span>Make it</span><strong>matter.</strong><i>✳</i></div>
      </section>

      <section className="about-creative" id="about">
        <div className="about-creative-copy">
          <p className="eyebrow">01 / About the creative</p>
          <h2>About<br /><em>Creative.</em></h2>
          <p className="about-lede">Genius Mambwe is a Creative Lead and Head of MagiqWorqs, a premium branding and marketing agency focused on high-impact brand experiences.<br /><br />Born on 27th February 1997 in Kitwe, Zambia, he works with ambitious, high-end brands, elevating them through strategic creative direction, branding, PR, and marketing.<br /><br />At MagiqWorqs, he develops brand identities and campaigns that not only look exceptional but deliver real results, turning brands into trusted, memorable experiences.</p>
          <a className="text-link" href="#contact">Work with me <ArrowUpRight size={17} /></a>
        </div>
        <div className="about-portrait">
          <img src="./genius-mambwe.jpg.png" alt="Portrait of Genius Mambwe" />
          <span className="portrait-caption">Genius Mambwe / Creative Lead &amp; Head of MagiqWorqs</span>
        </div>
        <div className="service-folders" aria-label="Creative services">
          {['Creative Lead', 'Events', 'Branding', 'Consultancy', 'Design', 'Marketing'].map((service, index) => (
            <a className={`service-folder service-folder--${index % 3}`} href={service === 'Branding' ? '#branding' : '#work'} key={service}>
              <span className="folder-shape" />
              <span>{service}</span>
            </a>
          ))}
        </div>
        <div className="about-creative-meta"><span>Kitwe, Zambia</span><span>Head of MagiqWorqs</span></div>
      </section>

      <section className="principles-section" id="principles">
        <div className="principles-heading">
          <p className="eyebrow">02 / Brand principles</p>
          <h2>Purpose<br /><em>with weight.</em></h2>
        </div>
        <div className="principles-copy">
          <article className="principle-statement"><p className="principle-label">Mission</p><p>To become a leading force in shaping premium African brands, setting the standard for creative excellence, brand influence, and market leadership.</p></article>
          <article className="principle-statement"><p className="principle-label">Vision</p><p>To elevate brands through strategic creativity, refined design, and impactful marketing, delivering work that not only looks exceptional but drives measurable growth and long term brand equity.</p></article>
        </div>
        <div className="values-grid" aria-label="MAGXQWORQS values">
          <article><span>01</span><h3>Excellence</h3><p>Every output meets a premium standard - no compromise on quality or detail.</p></article>
          <article><span>02</span><h3>Creativity with Purpose</h3><p>Design and ideas are driven by strategy, not just aesthetics.</p></article>
          <article><span>03</span><h3>Brand Integrity</h3><p>Consistency, authenticity, and clarity in every brand touchpoint.</p></article>
          <article><span>04</span><h3>Results-Driven Thinking</h3><p>Creative work must translate into real business impact.</p></article>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-header">
          <p className="eyebrow">03 / Skill set</p>
          <h2>Tools for<br /><em>the work.</em></h2>
          <p className="skills-intro">A practical mix of creative direction, design craft and production knowledge, used to turn ambitious ideas into memorable brand experiences.</p>
        </div>
        <div className="skills-board">
          <img src="./skill set.jpg" alt="Genius Mambwe skill set including Adobe tools, Procreate, printing and marketing" />
        </div>
        <div className="skills-list" aria-label="Skill set list">
          <span>Creative direction</span><span>Brand identity</span><span>Adobe Photoshop</span><span>Adobe Illustrator</span><span>Adobe InDesign</span><span>CorelDRAW</span><span>Digital marketing</span><span>Print production</span><span>Art direction</span>
        </div>
      </section>

      <section className="clientelle-section" id="clientelle">
        <div className="clientelle-header">
          <p className="eyebrow">04 / Brands I’ve worked with</p>
          <img className="clientelle-logo" src="./LOGO white.png" alt="MAGXQWORQS" />
          <h2>Built for<br /><em>bold brands.</em></h2>
          <p className="clientelle-intro">A selection of ambitious teams and organisations shaped through strategy, identity, campaigns and memorable experiences.</p>
        </div>
        <div className="clientelle-board">
          <img src="./clientelle.jpg" alt="Clientelle board showing brands Genius Mambwe has worked with" />
          <span className="clientelle-caption">Selected clientelle / 2020—26</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-header"><div><p className="eyebrow">05 / Selected work</p><h2>A few things<br /><em>made recently.</em></h2></div><div className="filters" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
        <div className="project-grid">{visibleProjects.map((project) => <article className={project.className} key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} project artwork`} /><span className="project-index">0{projects.indexOf(project) + 1}</span><span className="project-arrow"><ArrowUpRight size={21} /></span></div><div className="project-info"><h3>{project.title}</h3><p>{project.category}</p><span>{project.year}</span></div></article>)}</div>
      </section>

      <section className="branding-section" id="branding">
        <div className="section-header"><div><p className="eyebrow">05 / Branding focus</p><h2>Branding<br /><em>in motion.</em></h2></div></div>
        <div className="project-grid branding-grid">{brandingProjects.map((project) => <article className={project.className} key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} project artwork`} /><span className="project-index">0{brandingProjects.indexOf(project) + 1}</span><span className="project-arrow"><ArrowUpRight size={21} /></span></div><div className="project-info"><h3>{project.title}</h3><p>{project.category}</p><span>{project.year}</span></div></article>)}</div>
      </section>

      <section className="contact-section" id="contact"><p className="eyebrow">06 / Start a conversation</p><img className="contact-symbol" src="./symbol logo edited.png" alt="" aria-hidden="true" /><div className="contact-layout"><h2>Have a good<br /><em>one?</em></h2><div className="contact-detail"><p>For collaborations, commissions<br />or a friendly hello:</p><a href="mailto:hellocreata@gmail.com">hellocreata@gmail.com <ArrowUpRight size={19} /></a><a href="tel:+260974571168">+260 974 571 168 <ArrowUpRight size={19} /></a></div></div><div className="footer-line"><span>© 2026 MAGXQWORQS</span><a className="instagram-link" href="https://www.instagram.com/magiqdepartment/" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg> follow @magiqdepartment</a><span>Lusaka, Zambia <span className="green-dot" /></span></div></section>
    </main>
  )
}

export default App

const rootElement = document.getElementById('root')
const root = rootElement._reactRoot ?? createRoot(rootElement)
rootElement._reactRoot = root
root.render(<App />)
