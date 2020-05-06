import React from 'react';
import './Experience.scss';

interface IProps {
  duration: string;
  organisation: string;
  position: string;
  explanation: string;
  logo: string;
  utilised?: string[] | undefined;
  logoDesc?: string;
}
const Experience: React.FC<IProps> = ({
  duration,
  organisation,
  position,
  explanation,
  logo,
  utilised,
  logoDesc,
}) => {
  return (
    <div className='experience'>
      <div className='experience-container'>
        <div className='experience__location'>
          <div>
            <div className='experience__location__organisation'>
              {organisation}
            </div>
            <div className='experience__location__duration'>{duration}</div>
          </div>
          <div
            className='experience__location__logo'
            onClick={() => {
              if (logoDesc === 'iyte') {
                window.open('https://en.iyte.edu.tr/');
              } else {
                window.open('https://www.teb.com.tr');
              }
            }}>
            <img src={logo} alt='logo' style={{ width: '100%' }} />
          </div>
        </div>
        <div className='experience__detail'>
          <div className='experience__detail__position'>{position}</div>
          <div>{explanation}</div>
          <div style={{ marginTop: '20px' }}>
            {utilised?.map((item: string, index: number) => {
              return (
                <li key={index} className='list-item'>
                  {item}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
