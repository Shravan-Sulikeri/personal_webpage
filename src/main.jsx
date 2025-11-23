import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
}
