import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IsOpenContext } from "../context/IsOpenContext";
import { FaArrowCircleRight } from "react-icons/fa";
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
          <a href="https://html.com/" target="_blank">
            <img src="/html-icon.svg" title="html" alt="html" />
          </a>
          <a href="https://web.dev/learn/css/" target="_blank">
            <img src="/css-icon.svg" title="css" alt="css" />
          </a>
          <a href="https://www.w3schools.com/js/" target="_blank">
            <img
              src="/javascript-programming-language-icon.svg"
              title="javascript"
              alt="javascript"
            />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img
              src="/typescript-programming-language-icon.svg"
              title="typescript"
              alt="typescript"
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank">
            <img src="/sass-icon.svg" title="sass" alt="sass" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img src="/tailwind-css-icon.svg" title="tailwind" alt="tailwind" />
          </a>
          <a href="https://getbootstrap.com/" target="_blank">
            <img
              src="/bootstrap-5-logo-icon.svg"
              title="bootstrap"
              alt="bootstrap"
            />
          </a>
          <a href="https://jquery.com/" target="_blank">
            <img src="/jquery-icon.svg" title="jquery" alt="jquery" />
          </a>
          <a href="https://www.php.net/" target="_blank">
            <img
              src="/php-programming-language-icon.svg"
              title="php"
              alt="php"
            />
          </a>
          <a href="https://www.mysql.com/" target="_blank">
            <img src="/mysql-icon.svg" title="mysql" alt="mysql" />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img src="/react-js-icon.svg" title="react" alt="react" />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <img src="/nextjs-icon.svg" title="nextjs" alt="nextjs" />
          </a>
          <a href="https://storybook.js.org/" target="_blank">
            <img src="/sb.svg" title="storybook" alt="storybook" />
          </a>
          <a href="https://jestjs.io/" target="_blank">
            <img src="/jest-js-icon.svg" title="jest" alt="jest" />
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <img src="/git-icon.svg" title="git" alt="git" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src="/github-icon (2).svg" title="github" alt="github" />
          </a>
          <a href="https://vitejs.dev/" target="_blank">
            <img src="/vite.svg" title="vite" alt="vite" />
          </a>
        </div>
      </div>
      <Link to="/works" className="project-arrow" aria-label="go to works">
        <FaArrowCircleRight />
      </Link>
    </div>
  );
}

export default Home;
