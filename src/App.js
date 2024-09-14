import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroductionPage from './pages/IntroductionPage';
import WorksPage from './pages/WorksPage';
import styles from './App.module.css';

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}