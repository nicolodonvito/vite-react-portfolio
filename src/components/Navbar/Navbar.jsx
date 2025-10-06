import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { FaGlobeAmericas } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarMobile from './NavbarMobile'; // Import the mobile navbar
import "./Navbar.css";

function Navbar() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State for screen size
	const { t, i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || i18n.language); // Track selected language

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	const toggleLanguageMenu = () => {
		setLanguageMenuOpen(prevState => !prevState);
	};

	const handleLanguageSelect = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('language', lng);
		setSelectedLanguage(lng); // Set the selected language
		setLanguageMenuOpen(false);
		navigate(pathname); // Navigate to the new language path
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	// Update mobile state on window resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Render mobile or desktop navbar
	if (isMobile) {
		return (
			<NavbarMobile
				theme={theme}
				toggleTheme={toggleTheme}
				handleLanguageSelect={handleLanguageSelect}
				isLanguageMenuOpen={isLanguageMenuOpen}
				toggleLanguageMenu={toggleLanguageMenu}
			/>
		);
	}

	return (
		<>
			<nav className="navbar">
				<div className="boxed">
					<div className="nav-left">
						<HashLink smooth to={`/`}>{t("navigation.home")}</HashLink>
						<HashLink smooth to={`/#projects`}>{t("navigation.projects")}</HashLink>
						<HashLink smooth to={`/work`}>{t("navigation.hire_me")}</HashLink>
					</div>
					<div className="nav-right">
						<button onClick={toggleTheme} title={theme === 'light' ? t('navigation.dark_mode') : t('navigation.light_mode')}>
							{theme === 'light' ? <FaRegMoon size={24} /> : <ImSun size={24} />}
						</button>
						<div className="language-menu">
							<button onClick={toggleLanguageMenu} className="language-toggle" title="Select language">
								<FaGlobeAmericas size={24} />
							</button>
							<ul className={`language-dropdown ${isLanguageMenuOpen ? 'active' : ''}`}>
								<li onClick={() => handleLanguageSelect('en')} className={selectedLanguage === 'en' ? 'active' : ''}>
									<img src="/resources/images/English.png" alt="English" />
									<span>English</span>
								</li>
								<li onClick={() => handleLanguageSelect('it')} className={selectedLanguage === 'it' ? 'active' : ''}>
									<img src="/resources/images/Italian.png" alt="Italian" />
									<span>Italiano</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div className="spacer-60" />
		</>
	);
}

export default Navbar;
