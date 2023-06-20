import React from 'react';
import classes from './Top.module.scss';

const Top = (props) => {
  const imgName = props.imgName;
  return (
    <div className={classes.top__container}>
      <div>{props.title}</div>
      <div>
        {imgName === 'about' &&
          <img className={classes.top__img} src={require('../../images/about.svg').default} alt={imgName} />
        }
        {imgName === 'courses' &&
          <img className={classes.top__img} src={require('../../images/courses.svg').default} alt={imgName} />
        }
        {imgName === 'hom' &&
          <img className={classes.top__img} src={require('../../images/hom.svg').default} alt={imgName} />
        }
        {imgName === 'home_background' &&
          <img className={classes.top__img} src={require('../../images/home_background.png').default} alt={imgName} />
        }
        {imgName === 'contact' &&
          <img className={classes.top__img} src={require('../../images/contact.svg').default} alt={imgName} />
        }
        {imgName === 'register' &&
          <img className={classes.top__img} src={require('../../images/register.svg').default} alt={imgName} />
        }
      </div>
    </div>
  );
};

export default Top;