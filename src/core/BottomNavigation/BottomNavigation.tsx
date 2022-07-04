import * as React from 'react'
import { Link } from "react-router-dom";
import { CreateIcon } from '../../icons/Create';
import { HomeIcon } from '../../icons/Home';
import { ListIcon } from '../../icons/List';

import styles from './BottomNavigation.module.css'

export const BottomNavigation = () => {
  return <div className={styles.wrapper}>
    <Link className={styles.link} to="/"><button className={styles.button}>
      <HomeIcon />
      <span>Home</span>
    </button></Link>
    <Link className={styles.link} to="/create"><button className={styles.button}>
      <CreateIcon />
      <span>Create</span>
    </button></Link>
    <Link className={styles.link} to="/list"><button className={styles.button}>
      <ListIcon />
      <span>List</span>
    </button></Link>
  </div>
}