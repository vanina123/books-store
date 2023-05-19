import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from '../styles/navigation.module.css';

const Navigation = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.head}>BookStore CMS</h1>
    <ul>
      <li>
        <Link className={styles.menu} to="/Categories">Categories</Link>
      </li>
      <li>
        <Link className={styles.menu} to="/">Books</Link>
      </li>
      <button className={styles.pic} type="button">
        <FaUser height={20} width={40} color="#0290ff" />
      </button>
    </ul>
  </nav>
);

export default Navigation;
