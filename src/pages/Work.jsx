import { useEffect, useContext } from "react";
import { IsOpenContext } from "../context/IsOpenContext";
import { projects } from "./projects";
import "../styles/Work.css";
import { Link } from "react-router-dom";

export function Work() {
  const { setBurger } = useContext(IsOpenContext);
  useEffect(() => {
    setBurger(false);
  }, []);
  const project = projects.map((data) => {
    return (
      <div className="project">
        <img src={data.image} loading="lazy" />
        <h3>{data.name}</h3>
        <div className="project--link">
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
