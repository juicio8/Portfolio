import { useEffect, useContext } from "react";
import { IsOpenContext } from "../context/IsOpenContext";
import { projects } from "../../projects";
import "../styles/Work.css";
import { Link } from "react-router-dom";

export function Work() {
  const { setBurger } = useContext(IsOpenContext);
  useEffect(() => {
    setBurger(false);
  }, []);
  const project = projects.map((data, index) => {
    return (
      <div key={index} className="project">
        <img
          src={data.image}
          className="project--logo"
          loading="lazy"
          alt="project"
        />
        <h3>{data.name}</h3>
        <div className="tech-icon__container">
          {data.tech?.map((tech, index) => (
            <img className="tech-icon" src={tech} alt="tech-icon" />
          ))}
        </div>
        <div className="project-mobile">
          <a href={data.link} target="_blank" aria-label="link">
            <img src="/popup-link-icon.svg" alt="external link" />
          </a>
          <a href={data.git} target="_blank" aria-label="github">
            <img src="/github-icon(2).svg" alt="github" />
          </a>
        </div>
        <div className="project--link project-desktop">
          <a href={data.link} target="_blank">
            <img src="/popup-link-icon.svg" alt="" />
          </a>
          <a href={data.git} target="_blank">
            <img src="/github-icon(2).svg" alt="" />
          </a>
        </div>
      </div>
    );
  });
  return (
    <>
      <Link to="/">
        <button className="go-home">Go Home</button>
      </Link>

      <div className="work">
        <h1>Projects Built</h1>
        <div className="projects">{project}</div>
      </div>
    </>
  );
}
