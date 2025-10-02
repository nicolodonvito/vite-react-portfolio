import { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
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

	useEffect(() => {
		const storedLanguage = localStorage.getItem('language');
		if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
    } else if (storedLanguage && storedLanguage !== i18n.language) {
			i18n.changeLanguage(storedLanguage);
		} else {
			const systemLanguage = navigator.language.split('-')[0]; // Get the language code
			i18n.changeLanguage(systemLanguage);
			localStorage.setItem('language', systemLanguage);
		}
	}, [lang, i18n]);

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
