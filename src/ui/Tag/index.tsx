import React from 'react';
import styles from './styles.module.scss';

interface ITag {
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

export const Tag = ({ text, onClick, isActive = false }: ITag) => {
  return (
    <div
      className={`${styles.wrapper} ${isActive && styles.active}`}
      onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};
