/**
 * App.jsx — application root
 * Imports global styles and renders the router
 */

import React from 'react';
import AppRouter from './routes/AppRouter';

// Global styles (must be imported before Bootstrap so overrides apply)
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => <AppRouter />;

export default App;
