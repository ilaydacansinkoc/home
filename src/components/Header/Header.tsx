import React from 'react';
import './Header.scss';
import { Link } from 'react-scroll';

interface IHeader {
  titles: any;
}

const Header: React.FC<IHeader> = ({ titles }) => {
  //const [clickedIndex, setClickedIndex] = useState<number>(0);

  return (
    <div className='header'>
      {titles.map((title: any, index: number) => {
        return (
          <button className='header__title' key={index}>
            <Link
              activeClass='active'
              to={title.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              {title.title}
            </Link>
          </button>
        );
      })}
    </div>
  );
};

export default Header;
