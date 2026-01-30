

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaCode } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";





const projectsData = [
  {
    title: "Workanana",
    description: `Developed WorkAsana, a full-stack MERN task and project 
management platform with secure JWT-based authentication,
 protected routes, user-friendly dashboards
.
Built with a React frontend, Express/Node backend, and MongoDB database.`,
    image: "https://burst.shopifycdn.com/photos/business-women-working.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    tags: ["React", "Node.js", "MongoDB", "Express.js" ,"jsonwebtoken" ],
    demolink:":https://workasana-frontend-ten.vercel.app/",
    codelink:"https://github.com/vivekanand-shukla/workasana-frontend",
  },
  {
    title: "Anvaya CRM",
    description: `A full-stack Customer Relationship Management app where you can add, edit, view, and filter leads and sales agents.
Built with a React frontend, Express/Node backend, and MongoDB database.`,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    demolink:"https://frontend-anvaya-88cbjdslz-vivekanand-shuklas-projects.vercel.app/",
    codelink:"https://github.com/vivekanand-shukla/frontend_Anvaya",
  },
  {
    title: "e-Commerce",
    description:
      "A full-stack E-commerce app where you can browse, search, buy, save, and view detailed products. Built with a React frontend, Express/Node backend, MongoDB database.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    demolink:"https://e-commerce-frontend-z4yi-fpgkz8heu-vivekanand-shuklas-projects.vercel.app/",
     codelink:"https://github.com/vivekanand-shukla/E_commerce_Frontend",
  },
  
];

const techStackData = [
  { data: "HTML5", icon: "FaHtml5" ,iconSet: "Fa", },
  { data: "CSS3", icon: "FaCss3Alt" ,iconSet: "Fa", },
  { data: "JavaScript", icon: "FaJsSquare" ,iconSet: "Fa", },
  { data: "React", icon: "FaReact",iconSet: "Fa", },
  { data: "React Router", icon: "SiReactrouter" ,iconSet: "Si", },
  { data: "Node.js", icon: "FaNodeJs"  , iconSet: "Fa",},
  { data: "Express.js", icon: "SiExpress"  , iconSet: "Si",},
  { data: "Mongoose", icon: "SiMongoose" ,iconSet: "Si", },
  { data: "MongoDB", icon: "SiMongodb" ,  iconSet: "Si", },
];

const contactData = [
  { type: "Email", icon: "FaEnvelope", text: "primevivek14@gmail.com" ,gotolink :"mailto:primevivek14@gmail.com" },
  { type: "GitHub", icon: "FaGithub", text: "Follow on GitHub" , gotolink :"https://github.com/vivekanand-shukla" },
  { type: "LinkedIn", icon: "FaLinkedin", text: "Connect on LinkedIn"  , gotolink :"https://www.linkedin.com/feed/"},
  { type: "Twitter", icon: "FaTwitter", text: "Follow on Twitter" , gotolink :"primevivek14@gmail.com" },
];



const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const Portfolio = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Base container width adjustments
  const mainStyle = {
    margin: isMobile ? "0px" : "0px 180px",
    padding: isMobile ? "0 16px" : "0px",
  };

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* Navbar */}
      <style>
        {`
        
        /* ==== Media Queries for Responsive Design ==== */
        
        /* Projects Grid - 3 columns to 2 columns */
        @media (max-width: 1024px) and (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Projects Grid - 2 columns to 1 column */
        @media (max-width: 767px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Tech Stack Grid - 4 columns to 3 columns */
        @media (max-width: 992px) and (min-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        /* Tech Stack Grid - 3 columns to 2 columns */
        @media (max-width: 767px) and (min-width: 480px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Tech Stack Grid - 2 columns to 1 column for very small screens */
        @media (max-width: 479px) {
          .tech-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Contact Grid - 2 columns to 1 column */
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Hero Section Typography */
        @media (max-width: 767px) {
          .hero-title {
            font-size: 42px !important;
          }
          .hero-subtitle {
            font-size: 18px !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 32px !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
          }
        }
        
        /* Section Headings */
        @media (max-width: 767px) {
          .section-heading {
            font-size: 36px !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-heading {
            font-size: 28px !important;
          }
        }
        
        /* Button Group - Stack vertically on small screens */
        @media (max-width: 480px) {
          .button-group {
            flex-direction: column !important;
          }
          .button-group button,
          .button-group a {
            width: 100% !important;
          }
        }
        
        /* Scroll to Top Button */
        @media (max-width: 480px) {
          .scroll-top-btn {
            bottom: 20px !important;
            right: 20px !important;
            width: 45px !important;
            height: 45px !important;
          }
        }
        
        `}
      </style>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: "rgba(0,0,0,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "16px 20px",
        }}
      >
        <div className="container">
          <a
            className="navbar-brand"
             href="#home"
            style={{ fontSize: 18, fontWeight: 600, color: "white" }}
          >
            <span style={{ color: "#10b981" }}>&lt;&gt;</span> Vivekanand Shukla
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "Projects", "Tech Stack", "Contact"].map((item, i) => (
                <li key={i} className="nav-item">
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    style={{
                      color: "#d1d5db",
                      fontSize: 15,
                      marginLeft: 12,
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div style={mainStyle}>
        {/* Hero */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "100px 20px 40px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <h1
              className="hero-title"
              style={{
                fontSize: isMobile ? 42 : 64,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Vivekanand Shukla
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: isMobile ? 18 : 24,
                color: "#9ca3af",
                marginBottom: 16,
              }}
            >
              Full Stack Dev
            </p>
            <div
              style={{
                width: 80,
                height: 4,
                background: "linear-gradient(90deg, #10b981, #059669)",
                margin: "24px 0",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "#d1d5db",
                lineHeight: 1.8,
                maxWidth: 650,
                marginBottom: 16,
              }}
            >
              Passionate full-stack developer crafting intuitive digital
              experiences with modern technologies.
            </p>
            <p
              style={{
                fontSize: 18,
                color: "#d1d5db",
                lineHeight: 1.8,
                maxWidth: 650,
                marginBottom: 16,
              }}
            >
              Specializing in React, Node.js, and MongoDB to build scalable and
              user-centered applications.
            </p>
            <div className="button-group" style={{ display: "flex", gap: 16, marginTop: 32 }}>
              <button
                style={{
                  padding: "12px 28px",
                  borderRadius: 6,
                  fontSize: 16,
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "#10b981",
                  color: "white",
                }}
              >
                Contact Me
              </button>
              <button
                style={{
                  padding: "12px 28px",
                  borderRadius: 6,
                  fontSize: 16,
                  fontWeight: 500,
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  color: "#9ca3af",
                  border: "1px solid #374151",
                }}
              >
               <a style={{textDecoration:"none" ,  backgroundColor: "transparent",
                  color: "#9ca3af",}} href={`https://docs.google.com/document/d/1oRI1FnABIoW2axnTPXz4ytkHifWWTUyd5JLAx18vpXs/edit?tab=t.0`}>Resume</a>
              </button>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          style={{
      
            padding: "80px 20px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <h2 className="section-heading" style={{ fontSize: 48, fontWeight: 700, marginBottom: 12 }}>
              Projects
            </h2>
            <p style={{ fontSize: 18, color: "#9ca3af", marginBottom: 16 }}>
              Building solutions that solve real-world problems
            </p>
            <div
              style={{
                width: 80,
                height: 4,
                background: "linear-gradient(90deg, #10b981, #059669)",
                margin: "24px 0",
              }}
            />
            <div
              className="projects-grid"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: 32,
                marginTop: 60,
              }}
            >
              {projectsData.map((project, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#111",
                    border: "1px solid #1f2937",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: 24 }}>
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        marginBottom: 12,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "#9ca3af",
                        fontSize: 15,
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 20,
                      }}
                    >
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          style={{
                            backgroundColor: "#252526",
                            color: "white",
                            padding: "6px 12px",
                            borderRadius: 4,
                            fontSize: 13,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 12 }}>
                      <a href={`${project.demolink}`}
                        style={{
                          flex: 1,
                          padding: "10px 16px",
                          borderRadius: 6,
                          backgroundColor: "transparent",
                          color: "white",
                          border: "none",
                          textDecoration: "none"
                        }}
                      >
                        👁 Demo
                      </a>
                      <a href={`${project.codelink}`}
                        style={{
                          flex: 1,
                          padding: "10px 16px",
                          borderRadius: 6,
                          backgroundColor: "transparent",
                          color: "white",
                        border: "none",
                        textDecoration: "none"
                        }}
                      >
                        <FaCode /> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="techstack" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <h2 className="section-heading" style={{ fontSize: 48, fontWeight: 700, marginBottom: 12 }}>
              Tech Stack
            </h2>
            <p style={{ fontSize: 18, color: "#9ca3af", marginBottom: 16 }}>
              Technologies and tools I work with
            </p>
            <div
              style={{
                width: 80,
                height: 4,
                background: "linear-gradient(90deg, #10b981, #059669)",
                margin: "24px 0",
              }}
            />
            <div
              className="tech-grid"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                gap: 16,
                marginTop: 60,
              }}
            >
              {techStackData.map((tech, i) => {
  const IconComponent =
    tech.iconSet === "Fa"
      ? FaIcons[tech.icon]
      : SiIcons[tech.icon];

  return (
    <div key={i} style={{ textAlign: "center", padding: 16 }}>
      <div className="d-flex gap-3">

      {IconComponent && <IconComponent size={28}  />}
      <div>{tech.data}</div>
      </div>
    </div>
  );
})}

            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          style={{
            
            padding: "80px 20px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <h2 className="section-heading" style={{ fontSize: 48, fontWeight: 700, marginBottom: 12 }}>
              Connect
            </h2>
            <p style={{ fontSize: 18, color: "#9ca3af", marginBottom: 16 }}>
              Let's collaborate on something amazing together
            </p>
            <div
              style={{
                width: 80,
                height: 4,
                background: "linear-gradient(90deg, #10b981, #059669)",
                margin: "24px 0",
              }}
            />
            <div
              className="contact-grid"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: 24,
                marginTop: 60,
              }}
            >
           

{contactData.map((c, i) => {
  const IconComponent = FaIcons[c.icon];
  return (
    <div
      key={i}
      style={{
        backgroundColor: "#111",
        border: "1px solid #1f2937",
        borderRadius: 12,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        {IconComponent && <IconComponent size={24} color="#10b981" />}
        <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>{c.type}</h3>
      </div>
      <p style={{ color: "#9ca3af", fontSize: 15 }}> <a style={{textDecoration: "none" ,color: "#9ca3af"}} href={`${c.gotolink}`} >{c.text}</a> </p>
    </div>
  );
})}

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: "40px 20px",
            textAlign: "center",
           
          }}
        >
          <p style={{ color: "white", fontSize: 17, marginBottom: 8 }}>
            © 2025 Vivekanand Shukla • All rights reserved
          </p>
          <p style={{ color: "white", fontSize: 17, marginBottom: 8 }}>
            Built with ❤️ using Bootstrap and  React
          </p>
          <p style={{ color: "white", fontSize: 17 }}>
            Learning full stack development at{" "}
            <a
              href="https://neog.camp"
              style={{ color: "#10b981", textDecoration: "none" }}
            >
              neog.camp
            </a>
          </p>
        </footer>
      </div>

      {/* Scroll Top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            width: 50,
            height: 50,
            backgroundColor: "#10b981",
            border: "none",
            borderRadius: "50%",
            color: "white",
            fontSize: 20,
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Portfolio;
