import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faBrain } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      title: 'Backend Development',
      icon: faCode,
    },
    {
      title: 'Data Analytics',
      icon: faDatabase,
    },
    {
      title: 'Machine Learning',
      icon: faBrain,
    },
  ];

  return (
    <section id="services">
      <h3>Services</h3>
      <div className="services__container">
        {services.map((service, index) => (
          <div key={index} className="service__card">
            <FontAwesomeIcon icon={service.icon} className="service__icon" />
            <h4 className="service__title">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
