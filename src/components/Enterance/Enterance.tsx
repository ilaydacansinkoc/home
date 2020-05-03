import React from 'react';
import './Enterance.scss';

const Enterance: React.FC<{}> = () => {
  return (
    <div className='enterance'>
      <div className='enterance__introduction'>
        {`İlayda Cansın Koç`}
        <hr className='hr' />
        <div className='enterance__introduction__title'>{`Interactive Resume`}</div>
      </div>
    </div>
  );
};

export default Enterance;
