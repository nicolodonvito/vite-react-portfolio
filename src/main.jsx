import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from './i18n.js';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider

import.meta.glob('./styles/*.css', { eager: true });
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}> {/* Wrap with I18nextProvider */}
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </I18nextProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
