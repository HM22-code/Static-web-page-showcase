import React from 'react';
import styles from './AddButton.module.css';
import { TfiPlus } from 'react-icons/tfi'

const AddButton = () => (
  <div className={styles.AddButton}>
      <button>
        <TfiPlus />
      </button>
  </div>
);

export default AddButton;
