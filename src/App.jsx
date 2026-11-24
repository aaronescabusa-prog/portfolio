import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  X,
  FileText,
  Code2,
} from "lucide-react";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { experience } from "./data/experience";
import "./App.css";
import "./preview.css";

const nav = [
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
];
const resume = "/contact";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" id="top">
      <div className="nav-wrap container">
        <Link className="brand" to="/" aria-label="Portfolio home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>[Aaron Escabusa]</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link
          className="button button-small button-outline resume-nav"
          to={resume}
        >
          Resume <ArrowRight size={15} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
        >
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
              <ArrowRight size={16} />
            </NavLink>
          ))}
          <Link to={resume} onClick={() => setOpen(false)}>
            Resume not provided <ArrowRight size={16} />
          </Link>
        </nav>
      )}
    </header>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark">&lt;/&gt;</span>[Your Name]
          </Link>
          <p>
            Aspiring full-stack developer
            <br />
            Seeking internship / OJT opportunities.
          </p>
        </div>
        <div>
          <span className="eyebrow">NAVIGATE</span>
          <div className="footer-links">
            {nav.map(([label, path]) => (
              <Link key={path} to={path}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <span className="eyebrow">CONNECT</span>
          <div className="footer-links">
            <span className="unavailable">GitHub · add profile URL</span>
            <span className="unavailable">LinkedIn · add profile URL</span>
            <span className="unavailable">Email · add address</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} [Your Name]</span>
        <a href="#top">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
function Shell({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
function SectionTitle({ eyebrow, title, copy, action }) {
  return (
    <div className="section-title">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {action}
    </div>
  );
}
function SocialLinks() {
  return (
    <div className="social-row">
      <span className="social-placeholder">
        <GitBranch size={17} /> GitHub <small>add URL</small>
      </span>
      <span className="social-placeholder">
        <span className="linkedin-icon">in</span> LinkedIn{" "}
        <small>add URL</small>
      </span>
      <span className="social-placeholder">
        <Mail size={17} /> Email <small>add address</small>
      </span>
    </div>
  );
}
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        className="project-image"
        to={project.path}
        aria-label={`View ${project.title} project details`}
      >
        <div className="image-placeholder">
          <Code2 size={30} />
          <span>{project.title}</span>
          <small>Project preview to be added</small>
        </div>
      </Link>
      <div className="project-card-content">
        <span className="eyebrow">{project.category}</span>
        <h3>
          <Link to={project.path}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.technologies.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <Link className="text-link" to={project.path}>
          Explore project <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
function Home() {
  const reduced = useReducedMotion();
  const transition = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45 },
      };
  return (
    <>
      <section className="hero container">
        <motion.div className="hero-copy" {...transition}>
          <span className="eyebrow">
            <span className="status-dot" /> ASPIRING FULL-STACK DEVELOPER ·
            [LOCATION]
          </span>
          <h1>
            Building applications.
            <br />
            <span>Solving problems.</span>
            <br />
            Creating meaningful digital experiences.
          </h1>
          <p className="hero-lead">
            I’m <strong>[Your Name]</strong>, an aspiring developer interested
            in building practical software from interface to database.
          </p>
          <div className="availability">
            <span className="availability-dot" /> Open to internship / OJT
            opportunities
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              Explore projects <ArrowRight size={17} />
            </Link>
            <Link className="button button-secondary" to={resume}>
              <FileText size={17} /> Resume not provided
            </Link>
          </div>
          <SocialLinks />
        </motion.div>
        <motion.div
          className="hero-visual hero-preview-placeholder"
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.12, duration: 0.5 },
              })}
        >
          <div className="preview-placeholder-inner">
            <span className="eyebrow">SELECTED WORK · CERESGO</span>
            <Code2 size={34} />
            <b>Project screenshots will appear here</b>
            <p>
              Real application captures will be added after they’re supplied.
            </p>
            <Link to="/projects/ceresgo">
              Explore CeresGo <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="facts container">
        <div>
          <span className="eyebrow">FOCUS</span>
          <b>Full-stack development</b>
        </div>
        <div>
          <span className="eyebrow">PROJECTS</span>
          <b>Web & desktop applications</b>
        </div>
        <div>
          <span className="eyebrow">SEEKING</span>
          <b>Internship / OJT placement</b>
        </div>
      </section>
      <section className="section container" id="projects">
        <SectionTitle
          eyebrow="SELECTED PROJECTS"
          title="Projects built around real workflows"
          copy="A closer look at the systems and interfaces I’m working on."
          action={
            <Link className="text-link" to="/projects">
              All projects <ArrowRight size={16} />
            </Link>
          }
        />
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="section container split-section">
        <div>
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>Learning by building useful software.</h2>
          <p>
            I’m developing my skills through practical academic and personal
            projects, with interests across frontend interfaces, backend
            workflows, and data modeling.
          </p>
          <Link className="text-link" to="/about">
            More about me <ArrowRight size={16} />
          </Link>
        </div>
        <div className="toolkit">
          <span className="eyebrow">CORE TOOLKIT · PROVIDED SKILLS</span>
          <div className="toolkit-line">
            <b>Frontend</b>
            <span>HTML · CSS · JavaScript · React</span>
          </div>
          <div className="toolkit-line">
            <b>Backend</b>
            <span>PHP · Laravel · Java</span>
          </div>
          <div className="toolkit-line">
            <b>Data</b>
            <span>MySQL · SQLite</span>
          </div>
          <Link className="text-link" to="/skills">
            View all skills <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="contact-cta container">
        <div>
          <span className="eyebrow">NEXT STEP</span>
          <h2>Let’s talk about an internship opportunity.</h2>
          <p>Reach out by email or review my resume and project work.</p>
        </div>
        <div>
          <Link className="button button-primary" to="/contact">
            Get in touch <ArrowRight size={17} />
          </Link>
          <Link className="button button-secondary" to={resume}>
            <FileText size={16} /> Resume not provided
          </Link>
        </div>
      </section>
    </>
  );
}
function PageIntro({ eyebrow, title, copy }) {
  return (
    <div className="page-intro container">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  );
}
function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT"
        title="A little about me"
        copy="An aspiring full-stack developer learning to create useful software through hands-on projects."
      />
      <section className="container page-content two-col">
        <div className="prose">
          <h2>How I approach development</h2>
          <p>
            I enjoy exploring how an application works from its interface
            through its data and business workflows. My current project work
            spans web applications and a Java desktop system.
          </p>
          <p>
            I value clear interfaces, understandable code, and software that
            helps people complete real tasks. I’m continuing to strengthen my
            fundamentals by building, reviewing, and improving practical
            projects.
          </p>
          <h2>Development interests</h2>
          <p>
            Frontend development, backend workflows, database design, and
            applications that organize everyday services and events.
          </p>
          <h2>Career objective</h2>
          <p>
            I’m seeking an internship / OJT opportunity where I can contribute
            to a development team, learn professional practices, and grow
            through real software work.
          </p>
        </div>
        <aside className="info-card">
          <GraduationCap />
          <span className="eyebrow">EDUCATION</span>
          <h3>Education details</h3>
          <p>
            Add your program, school, year level, and expected graduation when
            ready.
          </p>
          <div className="placeholder-field">
            [Program / School / Graduation]
          </div>
        </aside>
      </section>
    </>
  );
}
function SkillsPage() {
  return (
    <>
      <PageIntro
        eyebrow="SKILLS"
        title="Tools I use to build software"
        copy="A working inventory of technologies and concepts. Proficiency levels are intentionally not rated."
      />
      <section className="container page-content">
        <div className="legend">
          <span>
            <i className="legend-dot" /> Listed skills · confirm current
            proficiency
          </span>
          <span>
            <i className="legend-outline" /> Currently learning · add topics
          </span>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <article className="skill-card" key={s.group}>
              <span className="eyebrow">{s.group.toUpperCase()}</span>
              <div className="tag-row">
                {s.items.map((i) => (
                  <span className="tag" key={i}>
                    {i}
                  </span>
                ))}
              </div>
              <small>
                Skills provided for this portfolio. Adjust to reflect current
                experience.
              </small>
            </article>
          ))}
        </div>
        <div className="learning-note">
          <span className="eyebrow">CURRENTLY LEARNING</span>
          <p>Add specific topics here when you’re ready to identify them.</p>
        </div>
      </section>
    </>
  );
}
function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="PORTFOLIO"
        title="Selected projects"
        copy="Software concepts and applications focused on practical workflows. Feature scope should be confirmed against each implementation."
      />
      <section className="container page-content">
        <div className="project-grid project-grid-page">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="BACKGROUND"
        title="Experience & education"
        copy="Project experience is the current focus. Add verified education, coursework, training, and certifications as applicable."
      />
      <section className="container page-content experience-layout">
        <div>
          <span className="eyebrow">PROJECT EXPERIENCE</span>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-dot" />
                <span className="eyebrow">{item.type}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="info-card">
          <GraduationCap />
          <span className="eyebrow">EDUCATION</span>
          <h3>Add verified details</h3>
          <p>
            School, program, dates, relevant coursework, training, and
            certifications can be added here. No credentials have been supplied
            yet.
          </p>
        </aside>
      </section>
    </>
  );
}
function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title="Let’s connect"
        copy="I’m seeking an internship / OJT opportunity and welcome a conversation about software development roles."
      />
      <section className="container page-content contact-layout">
        <div className="contact-card">
          <span className="eyebrow">EMAIL</span>
          <h2>Start a conversation</h2>
          <p>
            Add your professional email address before publishing to enable
            direct contact.
          </p>
          <span className="button button-disabled" aria-disabled="true">
            Email address not configured <Mail size={17} />
          </span>
          <small>
            Set the email in <code>src/App.jsx</code> before publishing.
          </small>
        </div>
        <div className="contact-aside">
          <div className="contact-row disabled">
            <span>
              <Mail />
            </span>
            <div>
              <small>EMAIL</small>
              <b>Address to be added</b>
            </div>
          </div>
          <div className="contact-row disabled">
            <span>
              <GitBranch />
            </span>
            <div>
              <small>GITHUB</small>
              <b>Profile URL to be added</b>
            </div>
          </div>
          <div className="contact-row disabled">
            <span className="linkedin-icon">in</span>
            <div>
              <small>LINKEDIN</small>
              <b>Profile URL to be added</b>
            </div>
          </div>
          <div className="contact-row disabled">
            <span>
              <FileText />
            </span>
            <div>
              <small>RESUME</small>
              <b>PDF not supplied</b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <NotFound />;
  const index = projects.findIndex((x) => x.slug === slug),
    prev = projects[(index + projects.length - 1) % projects.length],
    next = projects[(index + 1) % projects.length];
  return (
    <>
      <div className="container detail-top">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} /> All projects
        </Link>
        <div className="detail-heading">
          <span className="eyebrow">{p.category.toUpperCase()}</span>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
          <div className="tag-row">
            {p.technologies.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <span className="scope-warning">{p.status}</span>
        </div>
      </div>
      <div className="container detail-image">
        <div className="image-placeholder">
          <Code2 size={34} />
          <span>{p.title}</span>
          <small>Application screenshot to be added</small>
        </div>
      </div>
      <section className="container detail-layout">
        <div className="prose">
          <h2>Overview</h2>
          <p>{p.overview}</p>
          <h2>Problem</h2>
          <p>{p.problem}</p>
          <h2>Objectives</h2>
          <ul>
            {p.objectives.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h2>System features</h2>
          <p className="scope-warning inline-warning">
            Supplied feature scope · confirm each item is implemented before
            publication
          </p>
          <ul>
            {p.features.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          {p.planned.length > 0 && (
            <>
              <h3>Planned</h3>
              <ul>
                {p.planned.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </>
          )}
          <h2>Architecture</h2>
          <p>{p.architecture}</p>
          <h2>Database</h2>
          <p>{p.database}</p>
          <h2>Technical challenges</h2>
          <p>{p.challenges}</p>
          <h2>Lessons learned</h2>
          <p>{p.lessons}</p>
          <h2>Future improvements</h2>
          <ul>
            {p.improvements.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h2>Application screenshots</h2>
          <p>
            Verified application screenshots will be added here. No placeholder
            product interface is being presented as a real capture.
          </p>
        </div>
        <aside className="detail-aside">
          <div className="info-card">
            <span className="eyebrow">PROJECT DETAILS</span>
            <h3>Technology</h3>
            <div className="tag-row">
              {p.technologies.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <hr />
            <h3>Repository</h3>
            <p>Repository link not supplied.</p>
            <h3>Live demo</h3>
            <p>No demo URL supplied.</p>
            <h3>My contribution</h3>
            <p>Add your verified role and contribution.</p>
          </div>
        </aside>
      </section>
      <div className="container project-pagination">
        <Link to={prev.path}>
          <span className="eyebrow">PREVIOUS</span>
          <b>
            <ArrowLeft size={15} />
            {prev.title}
          </b>
        </Link>
        <Link to={next.path}>
          <span className="eyebrow">NEXT</span>
          <b>
            {next.title}
            <ArrowRight size={15} />
          </b>
        </Link>
      </div>
    </>
  );
}
function NotFound() {
  return (
    <section className="container not-found">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>That page isn’t here.</h1>
      <p>The address may have changed, or the page may not exist.</p>
      <Link className="button button-primary" to="/">
        Return home <ArrowRight size={16} />
      </Link>
    </section>
  );
}
const descriptions = {
  "/": "Aspiring full-stack developer portfolio for internship and OJT opportunities.",
  "/about": "About the aspiring full-stack developer and career goals.",
  "/skills": "Frontend, backend, database, and development skills.",
  "/projects": "Featured web and desktop software projects.",
  "/experience": "Project experience and education.",
  "/contact": "Contact for internship and OJT opportunities.",
};
function AppRoutes() {
  const loc = useLocation();
  useEffect(() => {
    const p = projects.find((x) => x.path === loc.pathname);
    document.title = p
      ? `${p.title} · [Your Name]`
      : `${
          loc.pathname === "/"
            ? "Portfolio"
            : "Portfolio · " +
              loc.pathname
                .slice(1)
                .replaceAll("-", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
        }`;
    let meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.content =
        descriptions[loc.pathname] ||
        "Project details for a developer portfolio.";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [loc.pathname]);
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
