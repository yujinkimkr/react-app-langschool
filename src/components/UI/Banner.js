import React from 'react';
import classes from './Banner.module.scss';
import Button from './Button';

const Banner = (props) => {
  return <div className={classes.banner}>
    <div>
      Hello!! <br /> Let’s Start With Kadza Academy!
    </div>
    <div>
      <Button>I'm a student</Button>
      <Button>I'm a teacher</Button>
    </div>
  </div>
}

export default Banner;