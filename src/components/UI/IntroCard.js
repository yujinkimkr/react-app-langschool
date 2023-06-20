import classes from './IntroCard.module.scss';
import reading from '../../images/reading2.svg';

const IntroCard = props => {
  return <div className={classes.intro__card}>
    <div>
      <img src={reading} alt="idea" />
    </div>
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
}

export default IntroCard;