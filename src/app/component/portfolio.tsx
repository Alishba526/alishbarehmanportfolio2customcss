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

      <div className="container">
        <div className="filter-buttons">
          <button className="btn">All</button>
          <button className="btn">Product</button>
          <button className="btn">Interacting</button>
          <button className="btn">Web app</button>
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
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci eos quod accusamus quam ipsam dignissimos rem rerum
                blanditiis perferendis.
              </p>
              <Link href="react-website-pharmeas4.netlify.app">
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>

          <div className="port-box">
            <div className="port-img">
              <Image src={coffee} alt="coffee" width={500} height={400} />
            </div>
            <div className="port-content">
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci eos quod accusamus quam ipsam dignissimos rem rerum
                blanditiis perferendis.
              </p>
              <Link href="https://web-coffee-website.netlify.app">
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>

          <div className="port-box">
            <div className="port-img">
              <Image
                src={agency}
                alt="Agency Project"
                width={500}
                height={400}
              />
            </div>
            <div className="port-content">
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci eos quod accusamus quam ipsam dignissimos rem rerum
                blanditiis perferendis.
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
                height={400}
              />
            </div>
            <div className="port-content">
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci eos quod accusamus quam ipsam dignissimos rem rerum
                blanditiis perferendis.
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
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci eos quod accusamus quam ipsam dignissimos rem rerum
                blanditiis perferendis.
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
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci eos quod accusamus quam ipsam dignissimos rem rerum
                blanditiis perferendis.
              </p>
              <Link href="https://online-store-website-full.vercel.app/">
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;