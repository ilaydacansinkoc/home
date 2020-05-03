import React from 'react';
import './Career.scss';
import Experience from '../../common/Experience';
import TebLogo from '../../static/images/teb.png';

const Career: React.FC<{}> = () => {
  return (
    <div className='career' id={'career'}>
      <div className='career__title'>{`Experiences`}</div>
      <Experience
        duration={'August 2019 - Currently'}
        organisation={'Turkish Economy Bank'}
        position={'Full-Time Software Engineer'}
        logo={TebLogo}
        explanation={`Worked on re-developing the screen that is mostly used among the bank employees with the new front-end technologies.`}
        utilised={[
          'Standardized all output with a new, responsive mobile-first approach and strategy.',
          'Assessed UI/UX designs for technical feasibility.',
          'Leveraged knowledge in Front-end Web Development, CSS Layouting, React.js, Redux',
        ]}
      />
      <Experience
        duration={'March 2019 - July 2019'}
        organisation={'Turkish Economy Bank'}
        position={'Part-Time Software Engineer'}
        logo={TebLogo}
        explanation={`Worked on a Cash Collection Platform development that corporate enterprises and SMEs can use for their internal transactions.`}
        utilised={[
          'Implemented a responsive single page web application that can be used both mobile and desktop devices by using relevant CSS Layouting methods.',
          'Utilized Redux to centralize the application’s state and logic.',
          'Utilized Immutable.js library in order to increase predictability and performance of the code.',
          'Implemented all the back-end developments in Java and used JPA/JPQL within the Service-Oriented architecture.',
          'Leveraged knowledge in Full Stack Web development, JavaScript, React.js, Immutable.js, Redux, PostgreSQL, REST API, Spring Boot.',
        ]}
      />
      <Experience
        duration={'June 2018 - August 2018'}
        organisation={'Turkish Economy Bank'}
        position={'Software Engineering Internship'}
        logo={TebLogo}
        explanation={`Worked on Smart Dashboard SPA which is a utility tool for visualizing ongoing projects’ status and details. The dashboard is also used for keeping track of employees and their assigned task’s status in order to increase the team velocity.
        `}
        utilised={[
          'Utilized RESTful API in order to create a simple lightweight architecture that has basic CRUD functions.',
          'Implemented an Excel import mechanism in order to operate on given document gathered from internal Agile development tool.',
          'Developed a dashboard by using the popular charting library Chart.js to visualizing data.',
          'Leveraged knowledge in Full Stack Web development, JavaScript, Vue.js, REST API, Spring Boot',
        ]}
      />
    </div>
  );
};

export default Career;
