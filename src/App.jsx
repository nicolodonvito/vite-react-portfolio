import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import './i18n'; // Import the i18n configuration
import './App.css';
import Footer from './components/Footer/Footer';
import HireMe from './pages/HireMe';
import { withTranslation } from 'react-i18next';

function App({ i18n }) {
	useEffect(() => {
		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			i18n.changeLanguage(storedLanguage);
		} else {
			const systemLanguage = navigator.language.split('-')[0]; // Get the language code
			i18n.changeLanguage(systemLanguage);
			localStorage.setItem('language', systemLanguage);
		}
	}, [i18n]);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/work" element={<HireMe />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default withTranslation()(App);
