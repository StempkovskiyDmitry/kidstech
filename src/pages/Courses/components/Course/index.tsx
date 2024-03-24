import { ICourse } from 'models';
import React from 'react';
import styles from './styles.module.scss';

export const Course = ({ name, image, bgColor }: ICourse) => {
  return (
    <div
      className={styles.wrapper}
      style={{ background: bgColor }}>
      <img
        className={styles.image}
        src={image}
      />
      <div className={styles.name}>{name}</div>
    </div>
  );
};
