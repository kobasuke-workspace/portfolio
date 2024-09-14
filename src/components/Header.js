import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Your Name</div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>About</Link>
        <Link to="/works" className={styles.navLink}>Works</Link>
      </nav>
    </header>
  );
}