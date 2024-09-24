import { useEffect, useState } from "react";
import "./Navbar.css"
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

function Navbar({ t }) {
	// Get initial theme from localStorage or default to 'light'
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	// Toggle between light and dark mode
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);  // Save preference
	};

	// Apply the theme to the body when it changes
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<>
			<nav className="navbar">
				<div className="boxed">
					<div className="nav-left">
						<Link to="/">{t("navigation.home")}</Link>
						<Link to="/home#projects">{t("navigation.projects")}</Link>
						<Link to="/work">{t("navigation.hire_me")}</Link>
					</div>
					<div className="nav-right">
						<button onClick={toggleTheme}>
							{theme == 'light' ? <FaRegMoon size={24} /> : <ImSun size={24} />}
						</button>
					</div>
				</div>
			</nav>
			<div className="spacer-80" />
		</>
	)
}

export default withTranslation()(Navbar)