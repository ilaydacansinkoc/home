import React from 'react';

interface ISection {
  title: string;
  subtitle: string;
  id: string;
}

const Section: React.FC<ISection> = ({ title, subtitle, id }) => {
  return (
    <div className='section'>
      <div className='section-content' id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
