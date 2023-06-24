import Card from '../UI/Card';
import FeaturedCard from '../UI/FeaturedCard';
import Button from '../UI/Button';
import Banner from '../UI/Banner';
import Top from '../common/Top';
import classes from './Courses.module.scss';
import React from 'react';

function Courses() {

  const classList = [
    {
      img_id: 'lesson1',
      field: 'GROUP / ONLINE',
      title: 'SUMMER KOREAN COURSE FOR BEGINNER 2023',
      writer: 'admin'
    },
    {
      img_id: 'lesson2',
      field: 'INDIVIDUAL / ONLINE',
      title: 'CUSTOMIZED INDIVIDUAL CLASS ONLY FOR YOU',
      writer: 'admin'
    },
    {
      img_id: 'lesson3',
      field: 'GROUP / ONLINE',
      title: 'FUN FUN! STUDYING KOREAN WITH DRAMA',
      writer: 'admin'
    },

  ]
  return <React.Fragment>
    <Top title='Courses' imgName='courses' />
    <div className={classes.courses__container}>
      <h2>LIST OF COURSES</h2>
      <div className={classes.courses}>
        <Card title='Conversation with videos' courses="23" />
        <Card title='TOPIK level up' courses="12" />
        <Card title='Group lesson with Sejong' courses="12" />
        <Card title='Individual lesson' courses="12" />
      </div>

      <div className={classes.featured__container}>
        <h1>Featured Courses</h1>
        <p>Explore our Popular Courses</p>
        <div className={classes.featured__inner}>
          {classList.map((lesson) =>
            <FeaturedCard key={lesson.img_id} field={lesson.field} title={lesson.title} writer={lesson.writer} imgName={lesson.img_id} />
          )}
        </div>
        <div className={classes.button__container}>
          <Button>View all courses</Button>
        </div>
        <div className={classes.banner__container}>
          <Banner />
        </div>
      </div>
    </div>

  </React.Fragment>
}

export default Courses;
