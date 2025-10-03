import { useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import './i18n'; // Import the i18n configuration
import './App.css';
import Footer from './components/Footer/Footer';
import HireMe from './pages/HireMe';
import SeoHead from './components/SeoHead/SeoHead';
import { useTranslation } from 'react-i18next';

function App() {
	const { lang } = useParams();
	const { i18n } = useTranslation();
	const navigate = useNavigate(); // Get navigate hook

	useEffect(() => {
		const storedLanguage = localStorage.getItem('language');
		const systemLanguage = navigator.language.split('-')[0];

		// Prioritize URL parameter 'lang'
		if (lang && i18n.language !== lang) {
			i18n.changeLanguage(lang);
			localStorage.setItem('language', lang);
		} else if (!lang && storedLanguage && i18n.language !== storedLanguage) {
			// If no 'lang' in URL but a stored language exists, use it
			i18n.changeLanguage(storedLanguage);
		} else if (!lang && !storedLanguage && i18n.language !== systemLanguage) {
			// If no 'lang' or stored language, use system language
			i18n.changeLanguage(systemLanguage);
			localStorage.setItem('language', systemLanguage);
		}

		// Ensure URL reflects current i18n language if it's not already
		if (lang !== i18n.language) {
			navigate(`/${i18n.language}${window.location.pathname.substring(lang ? 3 : 0)}`, { replace: true });
		}

	}, [lang, i18n, navigate]); // Add navigate to dependencies

	return (
		<>
			<SeoHead titleKey="seo.homepage_title" descriptionKey="seo.homepage_description" />
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/work" element={<HireMe />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
