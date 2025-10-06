import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogPage from './components/Blog/BlogPage';
import BlogPostPage from './components/Blog/BlogPostPage';
import Navbar from './components/Navbar/Navbar';
import './i18n'; // Import the i18n configuration
import './App.css';
import Footer from './components/Footer/Footer';
import HireMe from './pages/HireMe';
import SeoHead from './components/SeoHead/SeoHead';

function App() {
	return (
		<>
			<SeoHead titleKey="seo.homepage_title" descriptionKey="seo.homepage_description" />
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/work" element={<HireMe />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/blog/:slug" element={<BlogPostPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
