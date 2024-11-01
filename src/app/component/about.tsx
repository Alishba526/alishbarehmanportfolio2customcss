import Image from "next/image";
import about from '../../public/image hi to h.png'
import './about.css'
function About() {
  return (
    <section id="about" className="about">
      <div className="img-about">
        <Image
          src={about}
          alt="Description of image"
          width={300} // Desired width
          height={400} // Desired height
        />
        <div className="info-about1">
          <span>10+</span>
          <p>years of exprience</p>
        </div>
        <div className="info-about2">
          <span>150+</span>
          <p>project complete</p>
        </div>
        <div className="info-about3">
          <span>200+</span>
          <p>Happy cionts</p>
        </div>
      </div>
      <div className="about-content">
        <span>Let me Indrojuce myself</span>
        <h2>About me</h2>
        <h3>A Story Of Good</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          aliquid amet quo dolorum iusto, nulla esse ab provident eligendi
          dolorem quisquam! Laudantium quisquam iure laboriosam culpa voluptatum
          ut quis molestiae.
        </p>
        <div className="btn-box">
            <a href="#" className="btn">Read More!</a>
        </div>
      </div>
    </section>
  );
}

export default About;
