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
	const { i18n } = useTranslation();

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
