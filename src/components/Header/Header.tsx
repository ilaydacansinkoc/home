import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC<{}> = () => {
  const [clickedIndex, setClickedIndex] = useState<number>(-1);
  const titles = [
    'About Me',
    'Career',
    'Education',
    'Skills',
    'Interests',
    'Contact',
  ];

  return (
    <div className='header'>
      {titles.map((title: string, index: number) => {
        return (
          <button
            className={`header__title ${
              clickedIndex === index ? 'header__title--active' : ''
            }`}
            onClick={() => {
              setClickedIndex(index);
            }}>
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default Header;
