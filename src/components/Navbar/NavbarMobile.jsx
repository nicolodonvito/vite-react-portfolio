import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { FiMenu, FiX } from "react-icons/fi"; // Import Hamburger and Close icons
import "./NavbarMobile.css";

function NavbarMobile({ theme, toggleTheme, handleLanguageSelect }) {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
	const { t, i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Initialize with current language

	// Toggle the mobile menu
	const toggleMobileMenu = () => {
		setMobileMenuOpen(prevState => !prevState);
	};

	// Close the mobile menu
	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	// Handle language change
	const selectLanguage = (lang) => {
		setSelectedLanguage(lang); // Update the selected language state
		handleLanguageSelect(lang); // Trigger the actual language change function (coming from props)
	};

	useEffect(() => {
		setSelectedLanguage(i18n.language); // Update state when the language changes externally
	}, [i18n.language]);

	return (
		<>
			{/* Hamburger menu button or close button */}
			<button className="hamburger" onClick={toggleMobileMenu} title={isMobileMenuOpen ? "Close menu" : "Open menu"}>
				{isMobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
			</button>

			{/* Fullscreen mobile menu overlay */}
			{isMobileMenuOpen && (
				<div className="mobile-menu ">
					<div className="mobile-menu-content boxed">
						<div className="pages">
							<h2>{t('navigation.pages')}</h2>
							<HashLink smooth to="/" onClick={closeMobileMenu} className="menu-item">
								<span>{t("navigation.home")}</span>
								<span className="menu-arrow">→</span>
							</HashLink>
							<HashLink smooth to="/#projects" onClick={closeMobileMenu} className="menu-item">
								<span>{t("navigation.projects")}</span>
								<span className="menu-arrow">→</span>
							</HashLink>
							<HashLink smooth to="/work" onClick={closeMobileMenu} className="menu-item">
								<span>{t("navigation.hire_me")}</span>
								<span className="menu-arrow">→</span>
							</HashLink>

						</div>

						{/* Space between links and buttons */}
						<div className="menu-buttons">


							<div className="language">
								<h2>{t('navigation.language')}</h2>
								<div className="language-list">
									<li
										onClick={() => selectLanguage('en')}
										className={selectedLanguage === 'en' ? 'active' : ''}
									>
										<img src="/images/English.png" alt="English" />
										<span>English</span>
									</li>
									<li
										onClick={() => selectLanguage('it')}
										className={selectedLanguage === 'it' ? 'active' : ''}
									>
										<img src="/images/Italian.png" alt="Italian" />
										<span>Italiano</span>
									</li>
								</div>
							</div>
							{/* Theme Toggle */}
							<button onClick={toggleTheme} title={theme === 'light' ? t('navigation.dark_mode') : t('navigation.light_mode')}>
								{theme === 'light' ? <FaRegMoon size={24} /> : <ImSun size={24} />}
								<h3>{theme === 'light' ? t('navigation.dark_mode') : t('navigation.light_mode')}</h3>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default NavbarMobile;
