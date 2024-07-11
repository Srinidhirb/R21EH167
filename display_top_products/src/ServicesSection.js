import React from 'react';
import './ServicePage.css';



const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Customized web design solutions for your e-commerce store.',

  },
  {
    id: 2,
    title: 'E-commerce Development',
    description: 'Build and launch your online store with our e-commerce solutions.',

  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'Improve your website’s visibility on search engines with our SEO services.',

  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Grow your online presence and drive sales with our digital marketing strategies.',

  },
];


function ServiceCard({ service }) {



  return (
    <div className="service-card">

      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}


function ServicesSection() {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <p className="about-company">
        Welcome to ProductStore, your premier destination for all things e-commerce. At ProductStore, we are dedicated to helping businesses thrive in the digital marketplace. With a team of passionate experts, we specialize in providing tailored solutions that cater to your online business needs.

        Whether you're looking to launch your first, we're here to guide you every step of the way. From web design and development to SEO optimization and digital marketing strategies, our comprehensive services are designed to maximize your online visibility and drive growth.


        Join us on this journey to success. Contact ProductStore today and discover how we can transform your e-commerce ambitions into reality.


      </p>
    </div>
  );
}

export default ServicesSection;
