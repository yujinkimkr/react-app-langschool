import React from 'react';
import Top from '../common/Top';
import classes from './Register.module.scss';
import Talk from '../../images/talk.svg';
import Arrow from '../../images/arrow.svg';
import Test from '../../images/test.svg';
import Lesson from '../../images/lesson.svg';
import Result from '../../images/result.svg';

const Register = () => {
  return <div>
    <Top title='Register' imgName='register' />
    <h1>Process of Resgister</h1>
    <div className={classes.process_container}>
      <div className={classes.process}>
        <img className={classes.icon} src={Talk} alt='Talk' />
        <p>Consulting</p>
      </div>
      <img className={classes.icon} src={Arrow} alt="arrow" />
      <div className={classes.process}>
        <img className={classes.icon} src={Test} alt='Test' />
        <p>Test</p>
      </div>
      <img className={classes.icon} src={Arrow} alt="Arrow" />
      <div className={classes.process}>
        <img className={classes.icon} src={Result} alt='Talk' />
        <p>Result</p>
      </div>
      <img className={classes.icon} src={Arrow} alt="Arrow" />
      <div className={classes.process}>
        <img className={classes.icon} src={Lesson} alt='Lesson' />
        <p>Start</p>
      </div>
    </div>
  </div>
}

export default Register;