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
    category: "Cross-Platform",
    items: ["Kotlin Multiplatform", "Reusable Components", "Design Systems"],
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
      "Production ready React Native mobile dashboard for managing strategy-game alliance operations.",
    impact: "Helps leaders track members, assign event roles, and monitor weekly participation",
    tech: ["React Native", "TypeScript", "Expo", "iOS", "Android"],
  },
  {
    title: "Ryn",
    description:
      "React Native application that allows users to connect and chat.",
    impact: "Build connections and relationships through an easy to use interface",
    tech: ["React Native", "TypeScript", "iOS", "Android"],
  },
  {
    title: "Cross-Platform Component Toolkit",
    description:
      "Reusable components designed to improve consistency, speed up development, and support scalable mobile products.",
    impact: "Improved development velocity and UI consistency",
    tech: ["React", "React Native", "TypeScript", "Kotlin"],
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
            <p className="pill">Mobile & Frontend Engineer</p>

            <h1>
              I build polished apps with{" "}
              <span>React, React Native, and TypeScript.</span>
            </h1>

            <p className="heroDescription">
              I’m a product-minded engineer focused on clean architecture,
              responsive interfaces, scalable mobile apps, and user experiences
              that feel fast, thoughtful, and reliable.
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

          <aside className="heroPanel" aria-label="Professional highlights">
            <div className="orb orbOne" />
            <div className="orb orbTwo" />

            <div className="glassCard featuredCard">
              <p className="cardLabel">Core Strength</p>
              <h2>Cross-platform product engineering</h2>
              <p>
                React Native, React, TypeScript, reusable systems, debugging,
                and shipping production-ready mobile experiences.
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
            <p className="pill">About Me</p>
            <h2 className="sectionTitle">
              A developer who cares about both code quality and user experience.
            </h2>
          </div>

          <div className="aboutText">
            <p>
              I specialize in building modern web and mobile applications with a
              focus on maintainability, performance, and polished interfaces. My
              work sits at the intersection of frontend engineering, mobile
              architecture, and product execution.
            </p>

            <p>
              I enjoy taking complex requirements and turning them into clear,
              reliable, user-friendly experiences. Whether I’m building a
              responsive web interface or debugging a tricky native mobile
              issue, I care about details that make software feel professional.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHeader">
            <p className="pill">Skills</p>
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
            <p className="pill">Projects</p>
            <h2 className="sectionTitle">Selected work</h2>
          </div>

          <div className="projectsGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
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
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <p className="pill">Contact</p>

          <h2 className="sectionTitle">
            Interested in building something together?
          </h2>

          <p>
            I’m open to frontend, mobile, and React Native engineering
            opportunities where I can help create thoughtful, polished products.
          </p>

          <div className="contactActions">
            <a
              className="button primary"
              href="mailto:ryan@ryankoch.me"
            >
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
          </div>
        </section>
      </main>
    </div>
  );
}
