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
          Achiadeni Wisdom Ochiche is a Frontend Developer. He enjoys creating
          and building web apllications. He loves learning new technologies and
          things.
        </p>
        <p>
          Deni has a background in computer science and software engineering. He
          trained with Zuri for 4 months and has been internining with HNG. He
          has built a lot of web applications.
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
