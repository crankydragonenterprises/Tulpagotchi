import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { DragonProvider } from './contexts/dragons.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DragonProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </DragonProvider>
    </BrowserRouter>
  </React.StrictMode>
);