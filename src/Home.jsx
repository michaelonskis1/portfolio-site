import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ball-to-Target Accuracy Challenge",
    image: "/src/images/ball.jpg",
    date: "Fall 2020",
  },
  {
    id: 2,
    title: "Drawing Robot",
    image: "/src/images/draw.jpg",
    date: "Fall 2020",
  },
  // Add other projects here similarly with id, title, image, date
];

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "0.5rem" }}>
              <h3>{project.title}</h3>
              <p>{project.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
