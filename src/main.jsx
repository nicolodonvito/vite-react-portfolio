import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import i18n from './i18n.js';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}> {/* Wrap with I18nextProvider */}
          <Routes>
            <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
            <Route path="/:lang/*" element={<App />} />
          </Routes>
        </I18nextProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
