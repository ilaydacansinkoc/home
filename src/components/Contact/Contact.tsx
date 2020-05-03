import React from 'react';
import './Contact.scss';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

const Contact: React.FC<{}> = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-container'>
        <div className='contact-container__contact-me'>{`Contact Me`}</div>
        <hr />
        <div>
          <div className='contact-container__communicaion'>
            <a href='mailto:ilaydacansin@gmail.com'>
              <IconButton color='primary' aria-label='mail'>
                <MailIcon />
              </IconButton>
            </a>
            {`ilaydacansin@gmail.com`}
          </div>
          <div className='contact-container__communicaion'>
            <IconButton
              color='primary'
              aria-label='mail'
              onClick={() =>
                window.open('https://www.linkedin.com/in/ilaydacansinkoc')
              }>
              <LinkedInIcon />
            </IconButton>
            {`https://www.linkedin.com/in/ilaydacansinkoc`}
          </div>
          <div className='contact-container__communicaion'>
            <IconButton
              color='primary'
              aria-label='mail'
              onClick={() =>
                window.open('https://www.github.com/ilaydacansinkoc')
              }>
              <GitHubIcon />
            </IconButton>
            {`https://www.github.com/ilaydacansinkoc`}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
