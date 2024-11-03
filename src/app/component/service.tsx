

import './service.css'; // Importing as a global CSS file

function Service() {
  const services = [
    {
      icon: "📐",
      title: "Graphic Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam optio nisi perferendis animi dolores nostrum ut doloribus et harum!",
    },
    {
      icon: "💻",
      title: "Web Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam optio nisi perferendis animi dolores nostrum ut doloribus et harum!",
    },
    {
      icon: "🖥️",
      title: "UI/UX Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam optio nisi perferendis animi dolores nostrum ut doloribus et harum!",
    },
  ];

  return (
    <section id="service" className="servicesSection"> {/* Set the ID here */}
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
