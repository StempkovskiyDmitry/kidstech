import { ICourse } from 'models';
import React, { memo } from 'react';
import { Course } from '../Course';
import styles from './styles.module.scss';
import _ from 'lodash';

interface IListCourse {
  courses: ICourse[];
}

const Courses = ({ courses }: IListCourse) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.courses}>
        {courses?.map(item => {
          return (
            <Course
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export const ListCourse = memo(Courses, (prev, next) => {
  return _.isEqual(prev, next);
});
