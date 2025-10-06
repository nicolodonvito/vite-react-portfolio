import { useTranslation } from "react-i18next";

import { HashLink } from 'react-router-hash-link';

import { Link } from "react-router-dom";

function Footer() {
	const { t } = useTranslation();


	return (
		<footer className="footer">
			<div className="boxed footer-content">
				<div className="footer-column">
					<h4>{t("static:footer.about")}</h4>
					<div className="social-icons">
						<Link to="https://github.com/nicolodonvito" target="_blank" rel="noopener noreferrer"><img src="/resources/icons/github-svgrepo-com.svg" alt="GitHub" />GitHub</Link>
						<Link to="https://www.linkedin.com/in/nicolo-donvito" target="_blank" rel="noopener noreferrer"><img src="/resources/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" />LinkedIn</Link>
					</div>
					<p>© {new Date().getFullYear()} {t("static:footer.copyright")}</p>
				</div>

				<div className="footer-column">
					<h4>{t("static:footer.links")}</h4>
					<ul>
						<li><HashLink smooth to={`/`}>{t("static:navigation.home")}</HashLink></li>
						<li><HashLink smooth to={`/work`}>{t("static:navigation.hire_me")}</HashLink></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
