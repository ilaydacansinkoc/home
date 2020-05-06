import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

interface IProps {
  rating: string;
}

const StarRating: React.FC<IProps> = (props) => {
  const skillStars: number = Math.round(Number(props.rating));
  const generateStars = (skillStars: number) => {
    let stars = [];
    for (let i = 0; i < skillStars; i++) {
      stars.push(
        <span role='img' aria-label='stars' key={Math.random() * 999 + 10}>
          <StarIcon
            style={{ color: '#673ab7', width: '.75em', height: '.75em' }}
          />
        </span>
      );
    }
    for (let i = 0; i < 10 - skillStars; i++) {
      stars.push(
        <span role='img' aria-label='stars' key={Math.random() * 999 + 10}>
          <StarBorderIcon
            style={{
              color: '#673ab7',
              width: '.75em',
              height: '.75em',
            }}
          />
        </span>
      );
    }
    return stars;
  };
  return (
    <>
      <div className='star-rating-container'>{generateStars(skillStars)}</div>
    </>
  );
};

export default StarRating;
