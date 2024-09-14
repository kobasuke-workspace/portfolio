import React from 'react';
import styles from './IntroductionPage.module.css';

export default function IntroductionPage() {
  return (
    <div className={styles.introductionPage}>
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.photo}`}>
          <img src="/placeholder.svg?height=200&width=200" alt="Your Name" />
        </div>
        <div className={`${styles.bentoItem} ${styles.intro}`}>
          <h1>Your Name</h1>
          <p>A brief introduction about yourself and your expertise.</p>
        </div>
        <div className={`${styles.bentoItem} ${styles.skills}`}>
          <h2>Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>
        <div className={`${styles.bentoItem} ${styles.timeline}`}>
          <h2>Timeline</h2>
          <ul>
            <li>2023: Achievement 1</li>
            <li>2022: Achievement 2</li>
            <li>2021: Achievement 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}