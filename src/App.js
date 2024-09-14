import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={IntroductionPage} />
            <Route path="/works" component={WorksPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}