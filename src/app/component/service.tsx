import "./service.css"; // Importing as a global CSS file

function Service() {
  const services = [
    {
      icon: "📐",
      title: "Figma Designer",
      description:
        "I am a Figma designer focused on creating visually appealing and user-friendly interfaces, collaborating to bring ideas to life through detailed designs and prototypes.",
    },
    {
      icon: "💻",
      title: "Web Developer",
      description:
        "Passionate about building responsive and user-friendly web applications",
    },
    {
      icon: "🖥️",
      title: "UI/UX Designer",
      description:
        "I specialize in UI/UX design, creating intuitive and engaging interfaces that enhance user experiences and ensure seamless interaction with digital products",
    },
  ];

  return (
    <section id="service" className="servicesSection">
      <h2 className="subheading">What I Will Do for You</h2>
      <h3 className="heading">Our Services</h3>
      <div className="servicesGrid">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="iconCircle">
              <span className="icon">{service.icon}</span>
            </div>
            <h4 className="title">{service.title}</h4>
            <p className="description">{service.description}</p>
            <button className="readMore">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
