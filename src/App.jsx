import "./App.css";

function App() {
  const projects = [
    {
      title: "Car Rental Booking System",
      type: "Featured Full-Stack Project",
      description:
        "A full-stack booking application where users can browse vehicles, select pickup and return dates, and create reservations. Includes admin features for managing cars, customers, and bookings.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/YOUR_USERNAME/car-rental-app",
      live: "https://your-live-demo-link.com",
      image: "/project-preview.png",
      buttons: ["GitHub", "Live Demo"],
    },
    {
      title: "Course Booking API",
      type: "Backend API Project",
      description:
        "A REST API for managing users, courses, and enrollments. Built with authentication, protected routes, controllers, routes, and database models.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/YOUR_USERNAME/course-booking-api",
      docs: "https://documenter.getpostman.com/your-docs-link",
      image: "/project-preview.png",
      buttons: ["GitHub", "API Docs"],
    },
    {
      title: "E-Commerce Website",
      type: "Frontend Project",
      description:
        "A responsive ecommerce interface with product cards, cart-style UI, clean layout, and reusable React components.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/YOUR_USERNAME/ecommerce-app",
      live: "https://your-live-demo-link.com",
      image: "/project-preview.png",
      buttons: ["GitHub", "Live Demo"],
    },
  ];

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          <img src="air21-logo.png" alt="AIR21 logo" />
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">React Developer</p>

          <h1>
            Hi, I'm Ian Artis.
            <br />
            I build responsive web apps, dashboards, and booking systems.
          </h1>

          <p className="hero-description">
            I build practical full-stack projects using React, JavaScript,
            Node.js, Express, and MySQL. I enjoy turning real-world problems
            into clean, user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="/Ian-Artis-Resume.pdf" className="btn outline" target="_blank">
              Resume
            </a>

            <a href="mailto:ian.stephen.artis@gmail.com" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p>Featured Project</p>
          <h2>Car Rental Booking System</h2>

          <ul>
            <li>Booking date logic</li>
            <li>Admin dashboard</li>
            <li>MySQL database</li>
          </ul>

          <span>React • Express • MySQL</span>
        </div>
      </section>

      <section id="about" className="section about">
        <p className="section-label">About Me</p>
        <h2>From technician background to web development.</h2>

        <p>
          I am a career shifter from Mechatronic Technician to Software
          Engineering. I currently build projects that help me practice
          real-world development skills such as responsive UI, REST APIs,
          authentication, database integration, and admin dashboards.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">Skills</p>
        <h2>Technologies I work with</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS, Responsive Design</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST APIs, Authentication</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MySQL, MongoDB, Mongoose</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Vite, Postman, VS Code</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Projects</p>
        <h2>Featured work</h2>

        <p className="section-description">
          Projects focused on practical features such as CRUD operations,
          booking flows, REST APIs, database integration, and responsive UI.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>

              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>

                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}

                  {project.docs && (
                    <a href={project.docs} target="_blank" rel="noreferrer">
                      API Docs
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">Contact</p>
        <h2>Let's build something.</h2>

        <p>
          I am open to front-end developer, junior full-stack developer, and web
          developer opportunities.
        </p>

        <div className="contact-links">
          <a href="mailto:ian.stephen.artis@gmail.com">Email</a>
          <a href="https://github.com/ian-artis" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ian-stephen-artis/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;