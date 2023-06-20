import React from 'react';
import Top from '../common/Top';
import IntroCard from '../UI/IntroCard';
import MemberCard from '../UI/MemberCard';
import classes from './About.module.scss';
import Namsan from '../../images/Namsan.jpg';

const About = (props) => {
  return <React.Fragment>
    <Top title='Kadza Koreański Academy' imgName='about' />

    <div className={classes.about__container}>
      <div className={classes.intro__container}>
        <IntroCard title='Learn Anything' content='We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms' />
        <IntroCard title='Flexible Learning' content='We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms' />
        <IntroCard title='Learn With Experts' content='We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms' />
      </div>
      <div className={classes.video__container}>
        <img src={Namsan} alt="Namsan Tower" />
      </div>
      <div className={classes.goal}>
        <h1>Our goals. Our mission.</h1>
        <h3>a language that broadens one's eyes on the world</h3>
        <p>sharing emotions in the same language
          Take your growth to the next level with "language"
          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        </p>
      </div>
      <div className={classes.members}>
        <h1>Meet our teachers</h1>
        <p>Explore our awesome teachers</p>
        <div className={classes.memberList}>
          <MemberCard profile="profile1" memberName="Paulina" />
          <MemberCard profile="profile2" memberName="Jay" />
          <MemberCard profile="profile3" memberName="Zbigniew" />
          <MemberCard profile="profile4" memberName="Ola" />
        </div>
      </div>
      <div className={classes.welcome}>
      </div>
    </div>
  </React.Fragment>
}

export default About;