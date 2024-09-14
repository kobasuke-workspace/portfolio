import React from 'react';
import { Github } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/yourusername" className={styles.githubLink}>
        <Github size={24} />
      </a>
      <p className={styles.updateInfo}>Last updated: {new Date().toLocaleDateString()}</p>
      <p className={styles.copyright}>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  );
}