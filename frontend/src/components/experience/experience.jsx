import React from 'react';
import './experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'python js expert',
      image: 'https://i1.wp.com/qavalidation.com/wp-content/uploads/2018/02/python-logo.png',
    },
    {
      title: 'C/C++ Intermediate',
      image: 'https://wallpapercave.com/wp/wp4521293.png',
    },
    {
      title: '  JavaScript(React Native)',
      image: 'https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png',
    },
    {
      title: 'PyTorch',
      image: 'https://shiftlab.github.io/pytorch/assets/images/pytorch-logo.png',
    },
    {
      title: 'Database',
      image: 'https://lazyprogrammer.me/wp-content/uploads/2015/12/Database_iStock_000020783950XSmall_0.jpg',
    },
    {
      title: 'Information System Design',
      image: 'http://huytonwithrobyce.co.uk/wp-content/uploads/2015/09/cartoon-laptop-computer-1408040.jpg',
    },
    {
      title: 'UI/UX Design',
      image: 'https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg',
    },
  ];

  return (
    <section id="experience">
      <h3>Experience</h3><br /><br />
      <div className="experience__container">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience__card">
            <img src={experience.image} alt={experience.title} className="experience__image" />
            <h4 className="experience__title">{experience.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
