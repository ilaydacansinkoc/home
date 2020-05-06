import React from 'react';
import './Education.scss';
import Experience from '../../common/Experience';
import IYTELogo from '../../static/images/iyte.png';

const Education: React.FC<{}> = () => {
  return (
    <div className='education' id='education'>
      <div className='education__content'>
        <div className='education__title'>{'Education'}</div>
        <Experience
          duration='September 2014 - June 2019'
          organisation='Izmir Institue of Technology'
          position='Bachelor of Science'
          explanation='Computer Engineering'
          logo={IYTELogo}
          logoDesc='iyte'
          utilised={[
            'GPA: 3.26/4.00',
            'Graduated as Honor Student.',
            'Programming Coursework: Analysis and Design of Algorithms, Data Structures, Building Software Systems, Software Quality Management,Project Management',
          ]}
        />
      </div>
    </div>
  );
};

export default Education;
