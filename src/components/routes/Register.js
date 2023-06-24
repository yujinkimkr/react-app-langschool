import React from 'react';
import Top from '../common/Top';
import classes from './Register.module.scss';
import Talk from '../../images/talk.svg';
import arrow_right from '../../images/arrow.svg';
import arrow_down from '../../images/arrow_down.svg';
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
      <img className={classes.arrow__right} src={arrow_right} alt="arrow_right" />
      <img className={classes.arrow__down} src={arrow_down} alt="arrow_down" />
      <div className={classes.process}>
        <img className={classes.icon} src={Test} alt='Test' />
        <p>Test</p>
      </div>
      <img className={classes.arrow__right} src={arrow_right} alt="arrow_right" />
      <img className={classes.arrow__down} src={arrow_down} alt="arrow_down" />
      <div className={classes.process}>
        <img className={classes.icon} src={Result} alt='Talk' />
        <p>Result</p>
      </div>
      <img className={classes.arrow__right} src={arrow_right} alt="arrow_right" />
      <img className={classes.arrow__down} src={arrow_down} alt="arrow_down" />
      <div className={classes.process}>
        <img className={classes.icon} src={Lesson} alt='Lesson' />
        <p>Start</p>
      </div>
    </div>
  </div>
}

export default Register;