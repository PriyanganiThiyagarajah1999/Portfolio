// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
// ✅ Correct (Standard TypeScript/React practice)
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);