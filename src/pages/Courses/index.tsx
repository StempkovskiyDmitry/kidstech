import React, { useEffect } from 'react';
import { BlockTags } from './components';
import styles from './styles.module.scss';
import { useGetCoursesQuery } from 'services/modules';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setTags } from 'store/App';
import { ListCourse } from './components/ListCourse/ListCourse';

export const Courses = () => {
  const coursesQuery = useGetCoursesQuery();
  const dispatch = useAppDispatch();
  const { listCourse } = useAppSelector(store => store.app);

  useEffect(() => {
    if (coursesQuery.data) {
      dispatch(setTags(coursesQuery.data));
    }
  }, [coursesQuery.data]);

  const courses = listCourse.length ? listCourse : coursesQuery.data;

  return (
    <div className={styles.wrapper}>
      <BlockTags />
      <ListCourse courses={courses || []} />
    </div>
  );
};
