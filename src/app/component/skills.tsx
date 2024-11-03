"use client";
import React, { useEffect } from "react";
import "./skills.css"; 

const Skills: React.FC = () => {
  useEffect(() => {
    const circles = document.querySelectorAll<HTMLElement>(".circle");

    circles.forEach((elem) => {
      const dots = elem.getAttribute("data-dots");
      const marked = elem.getAttribute("data-percent");

      if (dots && marked) {
        const dotsCount = parseInt(dots, 10);
        const markedCount = parseInt(marked, 10);
        const percent = Math.floor((dotsCount * markedCount) / 100);
        let points = "";
        const rotate = 360 / dotsCount;

        for (let i = 0; i < dotsCount; i++) {
          points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg;"></div>`;
        }

        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll<HTMLElement>(".points");
        for (let i = 0; i < percent; i++) {
          pointsMarked[i]?.classList.add("marked"); // Optional chaining to avoid errors
        }
      }
    });
  }); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section id="skills" className="skills">
      <div className="main-text">
        <span>Technical and professional</span>
        <h3>My Skills</h3>
      </div>
      <div className="skill-main">
        <div className="skill-left">
          <h3>Technical Skills</h3>
          <div className="skill-bar">
            <div className="info">
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>CSS</p>
              <p>81%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>JavaScript</p>
              <p>84%</p>
            </div>
            <div className="bar">
              <span className="javascript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>TypeScript</p>
              <p>88%</p>
            </div>
            <div className="bar">
              <span className="typescript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Figma</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Tailwind</p>
              <p>94%</p>
            </div>
            <div className="bar">
              <span className="tailwind"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Next.js</p>
              <p>89%</p>
            </div>
            <div className="bar">
              <span className="tailwind"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>React.js</p>
              <p>98%</p>
            </div>
            <div className="bar">
              <span className="tailwind"></span>
            </div>
          </div>
        </div>
        
        <div className="skill-right">
          <h3>Professional Skills</h3>
          <div className="professional">
            <div className="box">
              <div className="circle" data-dots="90" data-percent="20"></div>
              <div className="text">
                <big>19%</big>
                <small>Team work</small>
              </div>
            </div>
            <div className="box">
              <div className="circle" data-dots="90" data-percent="80"></div>
              <div className="text">
                <big>80%</big>
                <small>Creativity</small>
              </div>
            </div>
            <div className="box">
              <div className="circle" data-dots="80" data-percent="70"></div>
              <div className="text">
                <big>70%</big>
                <small>Cummunication</small>
              </div>
            </div>
            <div className="box">
              <div className="circle" data-dots="80" data-percent="85"></div>
              <div className="text">
                <big>85%</big>
                <small>Working exprience</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
