// src/projects.js

import Ball from "./images/ball.jpg";
import Draw from "./images/draw.jpg";
import Scoot from "./images/scoot.jpg";
import Rock from "./images/rock.jpg";
import Chair from "./images/chair.jpg";
import Rmc from "./images/rmc.jpg";

export const projects = [
  {
    id: "ball-to-target",
    title: "Ball-to-Target Accuracy Challenge",
    image: Ball,
    date: "Fall 2020",
    description:
      "In my first college project (during COVID-era remote learning), my team of four was challenged to design four devices that would launch balls to meet at a randomly placed target—at the exact same time. We had only one minute’s notice before the launch. I led ramp design and programmed the Arduino in C++, learning most of the syntax on the fly. I used trigonometric functions to calculate launch angles and timing based on coordinates and synchronized the release using servo motors. Our system was selected as the most accurate and consistent in the class.",
    tech: "Servo motors, C++, SolidWorks, Laser Cutter",
    demo: "https://youtu.be/aWvpmiVKFuI",
  },
  {
    id: "drawing-robot",
    title: "Drawing Robot",
    image: Draw,
    date: "Fall 2020",
    description:
      "As part of my freshman projects course, my team designed a robot that recreates user-drawn shapes from a touchscreen input. Using MATLAB, we mapped the touchscreen data into coordinates and sent them to an Arduino-controlled robot. The robot used stepper motors for precise movement and a servo motor to raise or lower a whiteboard marker. I contributed to both software logic and mechanical design, including SolidWorks modeling and friction-optimized rubber wheels.",
    tech: "Servo motors, Stepper Motors, Arduino, C++, MatLab, SolidWorks",
    demo: "https://youtu.be/6z_uAA4uiqg",
  },
  {
    id: "drill-powered-scooter",
    title: "Drill-Powered Scooter",
    image: Scoot,
    date: "Fall 2022",
    description:
      "As project manager in my Component Design class, I led a team of six to design and build a scooter powered by a cordless drill. We used bike components, waterjet-cut mounting plates, and a steel frame that we bent and welded ourselves. I performed finite element analysis to ensure the frame met a 2x safety factor and optimized for torque and endurance. Our team placed 6th out of 30 teams in the endurance challenge.",
    tech: "SolidWorks, welding, metal bending, water jet cutting, design for assembly, mechanical assembly",
    demo: "https://youtu.be/TO9I26OUGec",
  },
  {
    id: "senior-capstone-rock",
    title: "Senior Capstone: Project R.O.C.K.",
    image: Rock,
    date: "2023–2024 Academic Year",
    description:
      "For my senior capstone, I managed a team of 10 in delivering a prototype for the U.S. Army. Our device used a 3-stage sensing suite to detect approaching vehicles and launch a tracking module onto the undercarriage. I designed, 3D printed, and tested multiple iterations of the housing and launch system in SolidWorks, led client meetings, created deadlines, built test plans, and coordinated a live demonstration. The final product met all eight Army-specified requirements, including safety, reliability, aesthetics, and thermal performance.",
    tech: "SolidWorks, 3D Printing, Design for Assembly, Mechanical Assembly, Engineering Management, GANTT Chart, Microsoft Office",
    demo: "https://tinyurl.com/3vbwj5sn",
  },
  {
    id: "hand-cranked-chairlift",
    title: "Hand-Cranked Chairlift Model",
    image: Chair,
    date: "Spring 2025",
    description:
      "As a personal project, I designed and built a working hand-cranked model ski lift. I engineered towers, wheels, and axles in SolidWorks and designed the parts to be printed in segments using my BambuLab A1 Mini 3D printer. Tolerances were optimized for smooth assembly and mechanical function.",
    tech: "SolidWorks, 3D Printing, Design for Assembly, Mechanical Assembly",
    demo: "",
  },
  {
    id: "roller-coaster-train-model",
    title: "Roller Coaster Train Model",
    image: Rmc,
    date: "Fall 2024 to Spring 2025",
    description:
      "Over several months, I designed and assembled a static roller coaster model. While I 3D printed pre-designed footers and beams, I modeled the rest— including the train —from scratch in SolidWorks using reference images. The final model balances aesthetic accuracy with modular assembly for large-scale 3D printing.",
    tech: "SolidWorks, 3D Printing, Design for Assembly, Mechanical Assembly",
    demo: "",
  },
];
