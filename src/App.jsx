import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

import Homepage from './pages/Homepage'
import Navbar from './components/Navbar/Navbar'
import './i18n'; // Import the i18n configuration

import './App.css'
import Footer from './components/Footer/Footer';

function App({ i18n }) {

	// Get language from localStorage or from user's device
	useEffect(() => {
		// Check for a stored language in localStorage
		const storedLanguage = localStorage.getItem('language');

		if (storedLanguage) {
			// If a language is stored, use it
			i18n.changeLanguage(storedLanguage);
		} else {
			// Otherwise, detect the system language and set it as default
			const systemLanguage = navigator.language.split('-')[0]; // Get the language code (e.g., "en", "it", "fr")
			i18n.changeLanguage(systemLanguage);
			localStorage.setItem('language', systemLanguage);
		}
	}, [i18n]);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default withTranslation()(App);
