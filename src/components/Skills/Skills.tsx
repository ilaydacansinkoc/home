import React from 'react';
import './Skills.scss';
import StarRating from '../../common/StarRating';

const Skills: React.FC<{}> = () => {
  const generateSkill = (rowTitle: string, rating: any) => {
    return (
      <div
        className={`skills-container__row ${
          rowTitle !== '' ? 'skills-container__row-main' : ''
        }`}>
        {rowTitle && (
          <div className='skills-container__row__title'>{rowTitle}</div>
        )}
        {rating.map((elem: any) => {
          return (
            <div className='skills-container__row-detailed'>
              {elem.title}
              <div className='rating'>
                <StarRating rating={elem.rating} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='skills' id='skills'>
      <div className='skills__title'>{'Skills'}</div>
      <div className='skills-container'>
        {generateSkill('Front End', [
          { title: 'JavaScript', rating: 7 },
          { title: 'React.js', rating: 6 },
          { title: 'Redux', rating: 6 },
          { title: 'TypeScript', rating: 6 },
          { title: 'HTML5', rating: 6 },
          { title: 'CSS', rating: 6 },
          { title: 'SASS', rating: 6 },
        ])}
      </div>
      <div className='skills-container'>
        {generateSkill('Back End', [
          { title: 'Java', rating: 6 },
          { title: 'Spring Boot', rating: 5 },
          { title: 'REST API', rating: 5 },
          { title: 'Object Oriented Programming', rating: 5 },
        ])}
      </div>
      <div className='skills-container'>
        {generateSkill('Version Contol', [
          { title: 'TFS', rating: 6 },
          { title: 'Git', rating: 4 },
        ])}
      </div>
      <div className='skills-container'>
        {generateSkill('Methodologies & Practices', [
          { title: 'Agile', rating: 7 },
          { title: 'Scrum', rating: 7 },
        ])}
      </div>
      <div className='skills-container'>
        {generateSkill('Languages', [
          { title: 'Turkish (Native)', rating: 10 },
          { title: 'Engilsh (Working Proficiency)', rating: 8 },
        ])}
      </div>
    </div>
  );
};

export default Skills;
