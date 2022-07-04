import * as React from 'react'
import { Link } from "react-router-dom";
import { CreateIcon } from '../../icons/Create';
import { HomeIcon } from '../../icons/Home';
import { ListIcon } from '../../icons/List';

import styles from './BottomNavigation.module.css'

export const BottomNavigation = () => {
  return <nav className={styles.wrapper}>
    <Link className={styles.link} to="/">
      <HomeIcon />
      <span>Home</span>
    </Link>
    <Link className={styles.link} to="/create">
      <CreateIcon />
      <span>Create</span>
    </Link>
    <Link className={styles.link} to="/list">
      <ListIcon />
      <span>List</span>
    </Link>
  </nav>
}