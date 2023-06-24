import React from 'react';
import classes from './MemberCard.module.scss';

const MemberCard = (props) => {
  return <div className={classes.profile__container}>
    {
      props.profile === 'profile1' &&
      <img className={classes.profile} src={require('../../images/profile1.svg').default} alt='profile1' />
    }
    {
      props.profile === 'profile2' &&
      <img className={classes.profile} src={require('../../images/profile2.svg').default} alt='profile2' />
    }
    {
      props.profile === 'profile3' &&
      <img className={classes.profile} src={require('../../images/profile3.svg').default} alt='profile3' />
    }
    {
      props.profile === 'profile4' &&
      <img className={classes.profile} src={require('../../images/profile4.svg').default} alt='profile4' />
    }

    <p>{props.memberName}</p>

  </div>
}

export default MemberCard;