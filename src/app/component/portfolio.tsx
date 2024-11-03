import "./portfolio.css";
import Link from "next/link";
import pharmacy from "../../public/pharmacy .jpg";
import agency from "../../public/agency.png";
import alishbaport from "../../public/alishba.png";
import burger from "../../public/burgerweb.png";
import coffee from "../../../src/public/coffee.jpg";
import onlinehtoh from "../../../src/public/onlinehtoh.png";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text">
        <span>What I will do for you</span>
        <h3>My Latest Projects</h3>
      </div>
      <div className="portfolio-gallery">
        <div className="port-box">
          <div className="port-img">
            <Image
              src={pharmacy}
              alt="Pharmacy Project"
              width={500}
              height={400}
            />
          </div>
          <div className="port-content">
            <h3>website Designer</h3>
            <p>
              I’m a website designer focused on creating clean, modern, and
              responsive designs that provide a seamless user experience on any
              device
            </p>
            <Link href="https://react-website-pharmeas4.netlify.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image src={coffee} alt="coffee" width={500} height={400} />
          </div>
          <div className="port-content">
            <h3>website creater</h3>
            <p>
              I create responsive, user-friendly websites that look great and
              perform well on all devices, using modern technologies to bring
              ideas to life
            </p>
            <Link href="https://web-coffee-website.netlify.app">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image src={agency} alt="Agency Project" width={500} height={600} />
          </div>
          <div className="port-content">
            <h3> UI/UX Designer</h3>
            <p>
              I’m a UI/UX designer dedicated to crafting intuitive and engaging
              user experiences with clean, modern, and responsive designs.
            </p>
            <Link href="https://alishba526-alishba526-alishba526-q2mil-alishbarehman-s-projects.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image
              src={alishbaport}
              alt="Alishba's Portfolio Project"
              width={500}
              height={700}
            />
          </div>
          <div className="port-content">
            <h3>MY PORTFOLIO</h3>
            <p>
              My portfolio highlights my work as a web developer, featuring
              responsive and user-friendly websites, including e-commerce and
              restaurant projects
            </p>
            <Link href="https://alishbarehmanportfolio-pegw.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image
              src={burger}
              alt="Burger Web Project"
              width={500}
              height={400}
            />
          </div>
          <div className="port-content">
            <h3>RESTAURANT</h3>
            <p>
              I design restaurant websites that showcase menus, ambiance, and
              services, providing a user-friendly experience that helps attract
              customers and enhance online reservations
            </p>
            <Link href="https://figmafirstrestuarantwebsite.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>

        <div className="port-box">
          <div className="port-img">
            <Image
              src={onlinehtoh}
              alt="Coffee Project"
              width={500}
              height={400}
            />
          </div>
          <div className="port-content">
            <h3>Onlinewebsite</h3>
            <p>
              I create e-commerce websites that are easy to navigate, visually
              appealing, and optimized for smooth shopping experiences, helping
              businesses reach customers and drive sales online
            </p>
            <Link href="https://online-store-website-full.vercel.app/">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
