import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentItem = items[currentIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselItem}>
        <img src={currentItem.image} alt={currentItem.title} className={styles.carouselImage} />
        <div className={styles.carouselContent}>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.description}</p>
          <div className={styles.technologies}>
            {currentItem.technologies.map((tech) => (
              <span key={`${currentItem.id}-${tech}`} className={styles.technology}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
      <button className={`${styles.carouselButton} ${styles.left}`} onClick={goToPrevious}>
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.carouselButton} ${styles.right}`} onClick={goToNext}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};