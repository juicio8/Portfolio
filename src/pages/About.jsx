import { useEffect, useContext } from "react";
import { IsOpenContext } from "../context/IsOpenContext";
import "../styles/About.css";
import { NavLink } from "react-router-dom";

function About() {
  const { setBurger } = useContext(IsOpenContext);
  useEffect(() => {
    setBurger(false);
  }, []);
  return (
    <div className="about">
      <div className="text-container">
        <h1 className="heading">About Me</h1>
        <p>
          Hey, I'm a Frontend Developer. I enjoy creating and building web
          apllications. I also love learning new technologies and things.
        </p>
        <p>
          I have a background in computer science and software engineering. I
          trained with Zuri for 4 months and have been internining with HNG. I
          have built a lot of web applications.
        </p>
        <p className="sorry">Sorry, Not taken a picture yet!</p>
      </div>
      <div className="view-container">
        <NavLink to="/works">
          <button className="view-works">See His Works</button>
        </NavLink>
      </div>
    </div>
  );
}

export default About;
