import React from "react";
import { useEffect, useContext } from "react";
import { IsOpenContext } from "../context/IsOpenContext";
import "../styles/Home.css";

function Home() {
  const { setBurger } = useContext(IsOpenContext);
  useEffect(() => {
    setBurger(false);
  }, []);
  return (
    <div className="home">
      <div className="first">
        <div className="home-intro">
          <h1>Frontend Developer.</h1>
          <p>I build scalable and well designed products</p>
        </div>
        <div className="skills">
          <img src="/html-icon.svg" />
          <img src="/css-icon.svg" />
          <img src="/javascript-programming-language-icon.svg" />
          <img src="/typescript-programming-language-icon.svg" />
          <img src="/sass-icon.svg" />
          <img src="/tailwind-css-icon.svg" />
          <img src="/bootstrap-5-logo-icon.svg" />
          <img src="/react-js-icon.svg" />
          <img src="/nextjs-icon.svg" />
          <img src="/sb.svg" />
          <img src="/jest-js-icon.svg" />
          <img src="/git-icon.svg" />
          <img src="/github-icon (2).svg" />
          <img src="/vite.svg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
