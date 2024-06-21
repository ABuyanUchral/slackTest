import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layouts/Layout';
import GetStarted from './components/GetStarted';
import LearnMore from './components/LearnMore';
import MeetPercent from './components/MeetPercent';
import Quote from './components/Quote';
import Blog from './components/Blog';
import Accom from './components/Accom';

function App() {
  return (
    <Layout>
      <GetStarted />
      <LearnMore />
      <MeetPercent />
      <Quote />
      <Blog />
      <Accom />
    </Layout>
  );
}

export default App;
