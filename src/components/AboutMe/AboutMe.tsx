import React from 'react';
import './AboutMe.scss';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const AboutMe: React.FC<{}> = () => {
  return (
    <div className='aboutme' id={'about-me'}>
      <div className='aboutme__content'>
        <div className='aboutme__content__profile'>
          <div className='aboutme__content__title'>{`Profile`}</div>
          <div className='aboutme__content__small-title'>{`I am Frontend Development Engineer & Enthusiast`}</div>
          <hr className='hr' />
        </div>
        <div className='aboutme__content__details'>
          <div className='aboutme__content__details__subdetail-container'>
            <div className='aboutme__content__title--medium'>{`About Me`}</div>
            <div className='aboutme__content__details__subdetail'>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Cras sed quam in orci fermentum condimentum eget et ligula. 
              Nulla facilisis faucibus nulla sit amet dictum. 
              Pellentesque congue nisl vitae dui pharetra tincidunt. 
              Donec non consectetur augue, vitae finibus tellus. 
              Fusce sollicitudin, enim vel tempor ullamcorper, 
              libero ligula ultrices neque, ut aliquet sem quam sed tellus.`}
            </div>
          </div>

          <div className='aboutme__content__photo-container'>
            <div className='aboutme__content__photo'></div>
          </div>

          <div className='aboutme__content__summary'>
            <div className='aboutme__content__title--medium'>{`Details`}</div>
            <div className='aboutme__content__small-container'>
              <div className='aboutme__content__green-small-title'>{`Name:`}</div>
              <div className='text'>{`İlayda Cansın Koç`}</div>
            </div>
            <div className='aboutme__content__small-container'>
              <div className='aboutme__content__green-small-title'>{`Age:`}</div>
              <div className='text'>{`24 years`}</div>
            </div>
            <div className='aboutme__content__small-container'>
              <div className='aboutme__content__green-small-title'>{`Location:`}</div>
              <div className='text'>{`Izmir, Turkey`}</div>
            </div>
            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={() =>
                window.open('https://linkedin.com/in/ilaydacansinkoc')
              }
              style={{ textTransform: 'none', marginRight: '10px' }}
              startIcon={<LinkedInIcon />}>
              {`LinkedIn`}
            </Button>
            <Button
              variant='contained'
              color='primary'
              size='small'
              onClick={() => window.open('https://github.com/ilaydacansinkoc')}
              style={{ textTransform: 'none' }}
              startIcon={<GitHubIcon />}>
              {`Github`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
