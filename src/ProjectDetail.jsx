import React from "react";
import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ball-to-Target Accuracy Challenge",
    image: "/src/images/ball.jpg",
    date: "Fall 2020",
    description:
      "In my first college project (during COVID-era remote learning), my team of four was challenged to design four devices that would launch balls to meet at a randomly placed target—at the exact same time. We had only one minute’s notice before the launch. I led ramp design and programmed the Arduino in C++, learning most of the syntax on the fly. I used trigonometric functions to calculate launch angles and timing based on coordinates and synchronized the release using servo motors. Our system was selected as the most accurate and consistent in the class.",
  },
  {
    id: 2,
    title: "Drawing Robot",
    image: "/src/images/draw.jpg",
    date: "Fall 2020",
    description:
      "As part of my freshman projects course, my team designed a robot that recreates user-drawn shapes from a touchscreen input. Using MATLAB, we mapped the touchscreen data into coordinates and sent them to an Arduino-controlled robot. The robot used stepper motors for precise movement and a servo motor to raise or lower a whiteboard marker. I contributed to both software logic and mechanical design, including SolidWorks modeling and friction-optimized rubber wheels.",
  },
  // Add other projects similarly with id, title, image, date, description
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Project not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/" style={{ textDecoration: "underline", marginBottom: "1rem", display: "inline-block" }}>
        ← Back to Projects
      </Link>
      <h1>{project.title}</h1>
      <p><em>{project.date}</em></p>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", maxWidth: "600px", height: "auto", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>{project.description}</p>
    </div>
  );
}
