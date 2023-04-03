import React from 'react';
import AddButton from '../AddButton/AddButton';
import styles from './SideBar.module.css';

const SideBar = () => (
  <div className={styles.SideBar}>
    <AddButton></AddButton>
  </div>
);

export default SideBar;
