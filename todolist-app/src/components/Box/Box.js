import React, { useState, useEffect } from 'react';
import styles from './Box.module.css';

const Box = (props) => {

const [date,setDate] = useState(new Date().toLocaleString());
const [text,setText] = useState("");

  return(
    <div className={styles.Box}>
      <h3>Exemple de titre de note</h3>
      <textarea>
        Amet do laboris mollit excepteur sunt do eiusmod eu proident minim reprehenderit consectetur. 
        Qui reprehenderit est qui consectetur eiusmod enim cupidatat consectetur excepteur. 
        Nisi nostrud deserunt et id mollit qui deserunt sunt non consectetur fugiat deserunt. 
        Enim pariatur occaecat officia deserunt enim commodo amet labore dolore duis amet minim. 
        Cupidatat eu commodo incididunt non magna sit fugiat in adipisicing commodo dolore et in. 
        Ipsum irure nostrud aliquip sint non aliqua aliqua labore reprehenderit nostrud deserunt eu Lorem.
      </textarea>
      <p>{date}</p>
    </div>
  );
};

export default Box;
