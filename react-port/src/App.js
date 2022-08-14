import * as React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import avatar from "./assets/avatar.PNG";
import demonDog from "./assets/demonDog.jpg";
import demonDog2 from "./assets/demonDog2.jpg";
import faye from "./assets/faye.jpg";
import flash from "./assets/flash.jpg";
import heartGirl from "./assets/heartGirl.JPG";
import lunaMoth from "./assets/lunaMoth.jpg";
import moonBunny from "./assets/moonBunny.jpg";
import rebuildAsuka from "./assets/rebuildAsuka.JPG";
import sunsetMoth from "./assets/sunsetMoth.jpg";
import yelan from "./assets/yelan.JPG";
import betterWeather from "./assets/betterWeather.png";
import budgetTracker from "./assets/budgetTracker.png";
import cloudwords from "./assets/cloudwords.png";
import coderace from "./assets/coderace.png";
import eCommerce from "./assets/eCommerce.png";
import noteTaker from "./assets/noteTaker.png";
import portfolio from "./assets/portfolio.png";
import READMEgenerator from "./assets/READMEgenerator.png";
import socialNetwork from "./assets/socialNetwork.png";
import streamline from "./assets/streamline.png";
import where2 from "./assets/where2.png";
import gatherTheMagic from "./assets/gatherTheMagic.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/react-port"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function Resume() {
  return (
    <div id="resumeList">
      <div id="frontEndBox">
        <p>front end</p>
          <br />
            <ul id="frontEndList">
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                javascript
              </li>
              <li>
                jQuery
              </li>
              <li>
                jQuery UI
              </li>
              <li>
                moment.js
              </li>
              <li>
                bootstrap
              </li>
              <li>
                reactstrap
              </li>
              <li>
                foundation
              </li>
            </ul>
          </div>
        <br />
        <div id="backEndBox">
          <p>back end</p>
            <ul id="backEndList">
              <li>
                API's
              </li>
              <li>
                node
              </li>
              <li>
                NPM
              </li>
              <li>
                express
              </li>
              <li>
                handlebars
              </li>
              <li>
                MySQL 
              </li>
              <li>
                sequelize
              </li>
              <li>
                mongoDB
              </li>
              <li>
                mongoDB atlas
              </li>
              <li>
                mongoose
              </li>
              <li>
                heroku
              </li>
              <li>
                react
              </li>
            </ul>
          </div>
        <br />
        <div id="otherTechBox">
          <p>other tech</p>
            <br />
              <ul id="otherTechList">
                <li>
                  jira
                </li>
                <li>
                  confluence
                </li>
                <li>
                  insomnia
                </li>
                <li>
                  jest
                </li>
                <li>
                  chrome devtools
                </li>
              </ul>
          </div>
      </div>
  );
}

function About() {
  return (
    <div id="aboutBox">
        <div>
            <img 
                alt="digital artwork of a girl wearing chunky sneakers and a cat hat carrying a heart, drawn by Jenna"
                id="avatarImg"
                src={avatar}
            ></img>
        </div>
        <div>
            <div id="bio">
                <p>jenna anderson | 22 | united states</p>
                <p>code. keebs. games.</p>
            </div>
            <div id="expBox">
                <p id="exp">experience</p>
                <div>
                    <Resume />
                </div>
            </div>
        </div>
    </div>
  );
}

function Contact() {
  const phoneRef = "sms:+17162459658&body=Hello!%20%20My%20name%20is...";
  const emailRef = "mailto:jennaanderson00@gmail.com";

  return (
    <div id="contactInformation">
      <div id="contP">
        <p id="contactHeader">
          contact me
        </p>
        <p id="contactInf">text and email available 9:00 - 18:00 CST.  text, call, and email avaliable 18:00 - 9:00 CST.</p>
      </div>
      <div className="contactInfo">
        <section id="phone">
          <a href={phoneRef}>phone: +1-716-245-9658</a>
        </section>
        <section id="email">
          <a href={emailRef}>email: jennaanderson00@gmail.com</a>
        </section>
      </div>
    </div> 
  );
}

function Footer() {
  return (
    <footer>
      <div id="linkBox">
        <a 
          id="gitHubLink"
          href="https://github.com/jennaanderson00"
          target="blank"
        >
          <FaGithub size={40}/>
        </a>
        <a
          id="linkedInLink"
          href="https://www.linkedin.com/in/jenna-anderson-b5333020b/"
          target="blank"
        >
          <FaLinkedin size={40}/>
        </a>
        <a
          id="instaLink"
          href="https://www.instagram.com/milknbl00d/"
          target="blank"
        >
          <FaInstagram size={40}/>
        </a>
      </div>
    </footer>
  );
}

function Home() {
  return (
      <div>
          <div id="art">
              <img
                  alt="a dog with hooves and a ribbon tail"
                  src={demonDog}
              ></img>
              <img 
                  alt="a dog with tall ears and smoke coming from its mouth"
                  src={demonDog2}
              ></img>
              <img
                  alt="faye valentine from cowboy bebop"
                  src={faye}
              ></img>
              <img 
                  alt="a cat, a cow girl, an alien, an animal crossing house"
                  src={flash}
              ></img>
              <img 
                  alt="a girl with a cat hat holding a heart"
                  src={heartGirl}
              ></img>
              <img
                  alt="a luna moth with flowers"
                  src={lunaMoth}
              ></img>
              <img 
                  alt="a bunny with a horn"
                  src={moonBunny}
              ></img>
              <img
                  alt="asuka from the evangelion rebuilds"
                  src={rebuildAsuka}
              ></img>
              <img 
                  alt="a moth with flowers"
                  src={sunsetMoth}
              ></img>
              <img 
                  alt="yelan from genshin impact"
                  src={yelan}
              ></img>
          </div>
      </div>
  );
}

function Navbar() {
  return (
      <header>
          <Nav>
              <header>
                  <p id='navHeader'>offpudding</p>
              </header>
              <div className="links">
                  <NavLink
                      id="homeLink"
                      to="/home"
                      activeClassName="highlighted"
                  >
                      home
                  </NavLink>
                  <NavLink
                      id="aboutLink"
                      to="/about"
                      activeClassName="highlighted"
                  >
                      about
                  </NavLink>
                  <NavLink
                      id="projectsLink"
                      to="/projects"
                      activeClassName="highlighted"
                  >
                      projects
                  </NavLink>
                  <NavLink
                      id="contactLink"
                      to="/contact"
                      activeClassName="highlighted"
                  >
                      contact
                  </NavLink>
              </div>
          </Nav>
      </header>
  );
}

function Projects() {
  return(
      <div className="projContBox">
          <div className="container">
              <div className="content">
                  <a 
                      href="#"
                      target="_blank"
                  >
                  <div className="contentOverlay"></div>
                      <img 
                          alt="better weather site"
                          className="contentImg"
                          src={betterWeather}
                      ></img>
                      <div className="contentDetails fadeIn-top">
                          <p className="projTitle">better weather</p>
                          <p className="projDesc">pulls data from the OpenWeather API to display weather conditions for a searched location</p>
                          <p className="projTech">Bootstrap | OpenWeather API | jQuery | JS</p>
                          <div className="projLinks">
                              <a
                                  href="https://github.com/jennaanderson00/weather-dashboard"
                                  target="blank"
                              >
                                  <FaGithub />
                                  github repo
                              </a>
                              <a
                                  href="https://jennaanderson00.github.io/weather-dashboard/"
                                  target="blank"
                              >
                                  <GiSpiderWeb />
                                  github site
                              </a>
                          </div>
                      </div>
                      </a>
                  </div>
              </div>
          <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="budget tracker site"
                      className="contentImg"
                      src={budgetTracker}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">budget tracker</p>
                      <p className="projDesc">focused on creating the back end for a budget tracking application with offline functionality.</p>
                      <p className="projTech">MongoDB | MongoDB Atlas | Mongoose | Express | Node | NPM | Heroku | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/budgetTracker"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://mysterious-ocean-24530.herokuapp.com/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              heroku site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="cloud words site"
                      className="contentImg"
                      src={cloudwords}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">cloudwords</p>
                      <p className="projDesc">creates passwords for Users based on selected criteria - Users can choose from uppercase letters, lowercase letters, numbers, and special characters.</p>
                      <p className="projTech">HTML | CSS | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/passwordGen"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://jennaanderson00.github.io/passwordGen/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              github site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="code race site"
                      className="contentImg"
                      src={coderace}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">coderace</p>
                      <p className="projDesc">features a timed 10 question quiz that tests basic coding knowledge.</p>
                      <p className="projTech">HTML | CSS | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/code-quiz"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://jennaanderson00.github.io/code-quiz/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              github site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="ecommerce site"
                      className="contentImg"
                      src={eCommerce}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">eCommerce</p>
                      <p className="projDesc">serves funcitonal routes for the backend of an eCommerce site.</p>
                      <p className="projTech">MySQL | Sequelize | Express | Node | NPM | Insomnia | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/eCommerceBackEnd"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://drive.google.com/file/d/1ea0Lixxu9S2o7MgF0Krn6gRxtHzzHiU2/view"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              demo video
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="gather the magic site"
                      className="contentImg"
                      src={gatherTheMagic}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">gather the magic</p>
                      <p className="projDesc">a react application which displays MTG cards to Users.</p>
                      <p className="projTech">React | Node | NPM | Heroku | MongoDB | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/patrickarcher414/gather-the-magic"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="note taker site"
                      className="contentImg"
                      src={noteTaker}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">noteTaker</p>
                      <p className="projDesc">used cloned front end code and provided a funcitonal back end.</p>
                      <p className="projTech">Express | Node | NPM | Heroku | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/noteTaker"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://mighty-castle-49512.herokuapp.com/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              heroku site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="css portfolio site"
                      className="contentImg"
                      src={portfolio}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">css portfolio</p>
                      <p className="projDesc">a vanilla CSS portfolio displaying some of my coding projects and artwork.</p>
                      <p className="projTech">HTML | CSS | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/portfolio-site"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://jennaanderson00.github.io/portfolio-site/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              github site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="read me generator site"
                      className="contentImg"
                      src={READMEgenerator}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">README generator</p>
                      <p className="projDesc">a command-line application designed to help Users quickly create an attractive README for their project.</p>
                      <p className="projTech">Node | NPM | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/READMEgenerator"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="social network insomnia testing"
                      className="contentImg"
                      src={socialNetwork}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">social network</p>
                      <p className="projDesc">built backend routing for a social network site.</p>
                      <p className="projTech">Express | MongoDB | Mongoose | Node | NPM | Insomnia | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/jennaanderson00/socialNetwork"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://drive.google.com/file/d/17nSr13jOM30mgfCcLLNtedSSNhONjkdn/view"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              demo video
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="streamline site"
                      className="contentImg"
                      src={streamline}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">streamline</p>
                      <p className="projDesc">a collaborative project that created a website which allows Users to browse available media across multiple streaming platforms.</p>
                      <p className="projTech">MySQL | Sequelize | Node | Bootstrap | Handlebars | Cloudinary | jQuery | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/aubree-alexander/streamline"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://peaceful-earth-43575.herokuapp.com/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              heroku site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
      <div className="container">
          <div className="content">
                  <div className="contentOverlay"></div>
                  <img 
                      alt="where two site"
                      className="contentImg"
                      src={where2}
                  ></img>
                  <div className="contentDetails fadeIn-top">
                      <p className="projTitle">where2</p>
                      <p className="projDesc">a collaborative project which created a site that travelers can use to find more information about potential vacation spots.</p>
                      <p className="projTech">Foundation | OpenWeather API | jQuery | JS</p>
                      <div className="projLinks">
                          <a
                              href="https://github.com/bennettem/where2"
                              target="blank"
                          >
                              <FaGithub />
                              github repo
                          </a>
                          <a
                              href="https://bennettem.github.io/where2/"
                              target="blank"
                          >
                              <GiSpiderWeb />
                              github site
                          </a>
                      </div>
                  </div>
          </div>
      </div>
  </div>
  );
}

export default App;
