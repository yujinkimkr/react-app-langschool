import Top from '../common/Top';
import Button from '../UI/Button';
// import MainImg from '../../images/home_background.png';
import MainImg from '../../images/main_image.png';
import classes from './Home.module.scss';
function Home() {
  return <div>
    <div className={classes.home__container}>
      <div>
        <h1>100% SATISFACTION GUARANTEE</h1>
        <p>JOIN ONE OF OUR QUALIFIED COURSES</p>
        <p>No more inefficient classes until now, learn Korean from a professional teacher and in a fun way.
          It's been a while since I started Korean, but if I still haven't gotten out of the beginner's level, it's an opportunity to make Korean mine with systematic lessons!</p>
        <Button>Check Available Lessons</Button>
      </div>
      <div>
        <img src={MainImg} alt="introduction main" />
      </div>
    </div>
  </div>
}

export default Home;