import React from 'react';
import styles from './styles.module.scss';
import { Tag } from 'ui/Tag';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setActiveTag, setFilterCourse } from 'store/App';
import { useGetCoursesQuery } from 'services/modules';

export const BlockTags = () => {
  const { tags, activeTag } = useAppSelector(store => store.app);
  const { data } = useGetCoursesQuery();
  const dispatch = useAppDispatch();

  const onClick = (tag: string) => {
    dispatch(setActiveTag(tag));
    data && dispatch(setFilterCourse({ tag, courses: data }));
  };

  return (
    <div className={styles.wrapper}>
      {tags.map(tag => (
        <Tag
          key={tag}
          isActive={tag === activeTag}
          text={tag}
          onClick={() => onClick(tag)}
        />
      ))}
    </div>
  );
};
