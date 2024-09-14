import React from 'react';
import Carousel from '../components/Carousel';
import styles from './WorksPage.module.css';

const works = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of Project 1',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project 2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    image: '/placeholder.svg?height=300&width=400',
  },
  // Add more projects as needed
];

export default function WorksPage() {
  return (
    <div className={styles.worksPage}>
      <Carousel items={works} />
    </div>
  );
}