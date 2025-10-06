import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import Navbar from './components/Navbar';
import './i18n'; // Import the i18n configuration
import Footer from './components/Footer';
import HireMe from './pages/HireMe';
import SeoHead from './components/SeoHead';

function App() {
	return (
		<BrowserRouter>
			<SeoHead titleKey="static:seo.homepage_title" descriptionKey="static:seo.homepage_description" />
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/work" element={<HireMe />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/blog/:slug" element={<BlogPostPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
