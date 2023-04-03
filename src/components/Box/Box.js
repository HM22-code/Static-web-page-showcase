import React, { useState, useEffect } from 'react';
import styles from './Box.module.css';

const Box = (props) => {

const [date,setDate] = useState(new Date().toLocaleString());
const [text,setText] = useState("Amet do laboris mollit excepteur sunt do eiusmod eu proident minim reprehenderit consectetur.");
const [title, setTitle] = useState("Exemple de titre");

  return(
    <div className={styles.Box}>
      <h3>{title}</h3>
      <textarea>{text}</textarea>
      <p>{date}</p>
    </div>
  );
};

export default Box;
