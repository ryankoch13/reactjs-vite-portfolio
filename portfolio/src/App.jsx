// src/App.jsx

import { useEffect, useMemo, useState } from "react";

import "./App.css";

import {
  about,
  brand,
  colorSchemes,
  contact,
  hero,
  navigation,
  professionalHighlights,
  projectsSection,
  skillsSection,
} from "./strings";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const [colorScheme, setColorScheme] = useState(() => {
    return localStorage.getItem("portfolio-color-scheme") || "aurora";
  });

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-scheme", colorScheme);
    localStorage.setItem("portfolio-color-scheme", colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const changeColorScheme = () => {
    setColorScheme((currentScheme) => {
      const currentIndex = colorSchemes.indexOf(currentScheme);
      const nextIndex = (currentIndex + 1) % colorSchemes.length;

      return colorSchemes[nextIndex];
    });
  };

  const themeLabel = useMemo(() => {
    return isDark ? "Switch to light mode" : "Switch to dark mode";
  }, [isDark]);

  return (
    <div className="siteShell">
      <header className="header">
        <a href="#home" className="brand" aria-label={brand.homeAriaLabel}>
          <span className="brandMark">{brand.initials}</span>
          <span>{brand.name}</span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <button
            className="schemeToggle"
            onClick={changeColorScheme}
            aria-label="Change color scheme"
          >
            <span className="themeText">Color</span>
          </button>

          <button
            className="themeToggle"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={themeLabel}
            aria-pressed={!isDark}
          >
            <span>{isDark ? "☀️" : ""}</span>
            <span className="themeText">{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroCopy">
            <h1>
              {hero.title} <span>{hero.titleHighlight}</span>
            </h1>

            <p className="heroDescription">{hero.description}</p>

            <div className="heroActions">
              {hero.actions.map((action) => (
                <a
                  key={action.label}
                  className={`button ${action.variant}`}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <aside
            className="heroPanel section"
            aria-label={professionalHighlights.ariaLabel}
          >
            <div className="orb orbOne" />
            <div className="orb orbTwo" />

            <div className="glassCard featuredCard">
              <p className="cardLabel">{professionalHighlights.cardLabel}</p>
              <h2>{professionalHighlights.title}</h2>
              <p>{professionalHighlights.description}</p>
            </div>

            <div className="statsGrid">
              {professionalHighlights.stats.map((stat) => (
                <div className="statCard" key={`${stat.value}-${stat.label}`}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="section aboutSection">
          <div>
            <h2 className="sectionTitle">{about.title}</h2>
          </div>

          <div className="aboutText">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">{skillsSection.title}</h2>
          </div>

          <div className="skillsGrid">
            {skillsSection.groups.map((group) => (
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
            <h2 className="sectionTitle">{projectsSection.title}</h2>
          </div>

          <div className="projectsGrid">
            {projectsSection.projects.map((project) => (
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

                <span className="cardLabel">{projectsSection.repositoryCta}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <h2 className="sectionTitle">{contact.title}</h2>
          <p>{contact.description}</p>

          <div className="contactActions">
            {contact.actions.map((action) => (
              <a
                key={action.label}
                className={`button ${action.variant}`}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}