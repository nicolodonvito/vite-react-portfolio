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

		// Determine the language that *should* be active
		let desiredLanguage = lang;
		if (!desiredLanguage && storedLanguage) {
			desiredLanguage = storedLanguage;
		} else if (!desiredLanguage && !storedLanguage) {
			desiredLanguage = systemLanguage;
		}

		// If the i18n language is different from the determined language, change it
		if (i18n.language !== desiredLanguage) {
			i18n.changeLanguage(desiredLanguage);
			localStorage.setItem('language', desiredLanguage);
		}

		// Construct the canonical path segment from the *current* URL
		let currentPathname = window.location.pathname;
		let pathSegment = '';

		// Remove the language prefix from the pathSegment
		// Use 'lang' from useParams to identify the language part in the current URL
		if (lang && currentPathname.startsWith(`/${lang}`)) {
			pathSegment = currentPathname.substring(`/${lang}`.length);
		} else if (lang === undefined && currentPathname.startsWith('/')) {
			pathSegment = ''; // Root path without language prefix
		}

		// Canonicalize pathSegment (remove trailing slash if not empty)
		if (pathSegment.endsWith('/') && pathSegment.length > 0) {
			pathSegment = pathSegment.slice(0, -1);
		}

		// Construct the ideal URL using the *desiredLanguage*
		const idealUrl = `/${desiredLanguage}${pathSegment}`;

		// Navigate if the current URL is not the ideal URL OR if i18n.language is not yet desiredLanguage
		if (currentPathname !== idealUrl || i18n.language !== desiredLanguage) {
			navigate(idealUrl, { replace: true });
		}

	}, [lang, i18n, navigate]); // Add i18n.language to dependencies

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
