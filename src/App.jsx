import React, { useState } from "react";
import Headshot from "./images/Headshot.jpeg";
import { projects } from "./projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "#001F3F",
        color: "white",
        minHeight: "100vh",
        padding: "3rem 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "relative",
      }}
    >
      {/* Headshot image on top right */}
      <img
        src={Headshot}
        alt="Michael Gray"
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "3px solid #FFD700",
          boxShadow: "0 0 10px rgba(255, 215, 0, 0.7)",
          zIndex: 1,
        }}
      />

      <header
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.2rem" }}>Michael Gray</h1>
        <h2 style={{ fontWeight: "300", opacity: 0.7, marginTop: 0 }}>
          Mechanical Engineer &amp; Aspiring Creative Designer
        </h2>

        <hr
          style={{
            borderColor: "#FFD700",
            borderWidth: "2px",
            width: "60px",
            margin: "1.5rem 0",
            opacity: 0.8,
          }}
        />
      </header>

      <section
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p>
          Welcome to my portfolio! I specialize in mechanical engineering projects that combine technical precision with creative design.
        </p>
        <p>
          Please explore my projects and feel free to{" "}
          <a href="/contact" style={{ color: "#FFD700", textDecoration: "underline" }}>
            get in touch
          </a>.
        </p>

        {/* Resume Download Link */}
        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-block",
            backgroundColor: "#FFD700",
            color: "#001F3F",
            padding: "0.6rem 1.2rem",
            borderRadius: "4px",
            fontWeight: "bold",
            textDecoration: "none",
            marginTop: "1rem",
            cursor: "pointer",
          }}
        >
          Download My Resume
        </a>
      </section>

      {/* Projects Gallery */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "3rem auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            style={{
              backgroundColor: "#003366",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "6px",
                marginBottom: "0.8rem",
              }}
            />
            <h3 style={{ margin: "0 0 0.4rem 0" }}>{project.title}</h3>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: "0 0 0.6rem 0" }}>
              {project.date}
            </p>
          </div>
        ))}
      </section>

      {/* Modal popup */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#001F3F",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "100%",
              padding: "2rem",
              color: "white",
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.8)",
              overflowY: "auto",
              maxHeight: "90vh",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                color: "#FFD700",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 style={{ marginTop: 0 }}>{selectedProject.title}</h2>
            <p style={{ fontStyle: "italic", opacity: 0.7 }}>{selectedProject.date}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "6px",
                marginBottom: "1rem",
              }}
            />
            <p>{selectedProject.description}</p>
            <p style={{ fontWeight: "600", marginTop: "1rem" }}>Technologies Used:</p>
            <p>{selectedProject.tech}</p>
            {selectedProject.demo && (
              <p>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFD700", textDecoration: "underline" }}
                >
                  Watch Demo
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
