import { useEffect, useMemo, useState } from "react";
import "./App.css";

const skills = [
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Mobile",
    items: [
      "React Native",
      "iOS",
      "Android",
      "Mobile UI",
      "App Store Releases",
    ],
  },
  {
    category: "AI-Enhanced Development",
    items: [
      "AI-Assisted Debugging",
      "Prompt Engineering",
      "OpenAI API",
      "Workflow Automation",
    ],
  },
  {
    category: "Backend & Tools",
    items: ["Python", "APIs", "Git", "CI/CD", "Debugging"],
  },
];

const projects = [
  {
    title: "Alliance Ops",
    description:
      "Role-based collaborative mobile operations dashboard with Supabase auth, Postgres, row-level security, shared alliance data, daily stat tracking, event scheduling, and assignment history.",
    impact:
      "Built around real alliance management workflows, not just a demo concept",
    tech: ["React Native", "TypeScript", "Expo", "iOS", "Android"],
    link: "https://github.com/ryankoch13/last-war-tracker",
  },
  {
    title: "Ryn",
    description:
      "A mobile chat application focused on simple connection flows, clean messaging screens, and a smooth cross-platform user experience.",
    impact:
      "Designed to make connecting and communicating feel fast and approachable",
    tech: ["React Native", "TypeScript", "iOS", "Android"],
    link: "https://github.com/ryankoch13/ryn",
  },
  {
    title: "ChatGPT React Native",
    description:
      "Simplifies mobile AI integration with reusable components, hooks, and backend examples.",
    impact:
      "A starter kit for building AI-powered mobile apps with React Native and the OpenAI API",
    tech: ["React Native", "OpenAI API", "Express", "Next.js"],
    link: "https://github.com/ryankoch13/chatgpt-react-native",
  },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const colorSchemes = ["aurora", "violet", "cyber", "sunset"];

  const [colorScheme, setColorScheme] = useState(() => {
    return localStorage.getItem("portfolio-color-scheme") || "aurora";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-scheme", colorScheme);
    localStorage.setItem("portfolio-color-scheme", colorScheme);
  }, [colorScheme]);

  const changeColorScheme = () => {
    setColorScheme((currentScheme) => {
      const currentIndex = colorSchemes.indexOf(currentScheme);
      const nextIndex = (currentIndex + 1) % colorSchemes.length;
      return colorSchemes[nextIndex];
    });
  };

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const themeLabel = useMemo(() => {
    return isDark ? "Switch to light mode" : "Switch to dark mode";
  }, [isDark]);

  return (
    <div className="siteShell">
      <header className="header">
        <a href="#home" className="brand" aria-label="Go to homepage">
          <span className="brandMark">RK</span>
          <span>Ryan Koch</span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="headerActions">
          <button
            className="schemeToggle"
            onClick={changeColorScheme}
            aria-label="Change color scheme"
          >
            🎨
            <span className="themeText">Color</span>
          </button>

          <button
            className="themeToggle"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={themeLabel}
            aria-pressed={!isDark}
          >
            <span>{isDark ? "☀️" : "🌙"}</span>
            <span className="themeText">{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroCopy">
            <h1>
              I build practical, production-ready apps with{" "}
              <span>React, React Native, and TypeScript.</span>
            </h1>

            <p className="heroDescription">
              React Native Mobile Engineer with 4+ years shipping production iOS
              and Android apps, specializing in TypeScript, native mobile
              debugging, release workflows, secure digital identity products,
              and AI-assisted development.
            </p>

            <div className="heroActions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside
            className="heroPanel section"
            aria-label="Professional highlights"
          >
            <div className="orb orbOne" />
            <div className="orb orbTwo" />

            <div className="glassCard featuredCard">
              <p className="cardLabel">What I Do Best</p>
              <h2>Mobile engineering for real-world products</h2>
              <p>
                React Native, TypeScript, production mobile development, native
                iOS/Android debugging, reusable UI systems, and reliable app
                releases from feature work through deployment.
              </p>
            </div>

            <div className="statsGrid">
              <div className="statCard">
                <strong>6+</strong>
                <span>Years Programming</span>
              </div>
              <div className="statCard">
                <strong>iOS</strong>
                <span>Mobile Delivery</span>
              </div>
              <div className="statCard">
                <strong>Android</strong>
                <span>Mobile Delivery</span>
              </div>
              <div className="statCard">
                <strong>UX</strong>
                <span>Product Focus</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section aboutSection">
          <div>
            <h2 className="sectionTitle">
              Looking for a mobile engineer who can help ship?
            </h2>
          </div>

          <div className="aboutText">
            <p>
              I’m a React Native Mobile Engineer focused on building
              production-ready iOS and Android applications with React Native,
              React, TypeScript, and modern frontend tooling. My work sits at
              the intersection of product development, UI implementation, mobile
              architecture, release support, and native troubleshooting.
            </p>

            <p>
              I enjoy building software that feels simple to use but is
              thoughtfully structured underneath. Whether I’m improving an
              existing app, creating reusable components, debugging
              cross-platform issues, or taking a feature from idea to release, I
              care about making the end result reliable, maintainable, and
              genuinely useful.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Technical toolkit</h2>
          </div>

          <div className="skillsGrid">
            {skills.map((group) => (
              <article className="glassCard skillGroup" key={group.category}>
                <h3>{group.category}</h3>

                <div className="skillTags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Selected work</h2>
          </div>

          <div className="projectsGrid">
            {projects.map((project) => (
              <a
                className="projectCard"
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} repository`}
              >
                <div>
                  <p className="cardLabel">{project.impact}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="techStack">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <h2 className="sectionTitle">Let’s build something useful.</h2>

          <p>
            I’m open to React Native, mobile, and frontend engineering roles
            where I can contribute to practical products, strong user
            experiences, and reliable cross-platform applications.
          </p>

          <div className="contactActions">
            <a className="button primary" href="mailto:ryan@ryankoch.me">
              Email Me
            </a>

            <a
              className="button secondary"
              href="https://www.linkedin.com/in/ryan-koch13/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="button secondary"
              href="https://github.com/ryankoch13"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button secondary"
              href="/Ryan_Koch_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
