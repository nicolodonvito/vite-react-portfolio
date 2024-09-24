import { withTranslation } from "react-i18next";
import "./Footer.css";
import { FiExternalLink } from "react-icons/fi";

function Footer({ t }) {
	return (
		<footer className="footer">
			<div className="boxed footer-content">
				<div className="footer-column">
					<h4>{t("footer.about")}</h4>
					<div className="flex">
						<p>{t("footer.changelog")}</p>
						<FiExternalLink />
					</div>
					<div className="social-icons">
						<a href="https://github.com/nicolodonvito" target="_blank" rel="noopener noreferrer">GitHub</a>
						<a href="https://www.linkedin.com/in/nicolo-donvito" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					</div>
					<p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
				</div>

				<div className="footer-column">
					<h4>{t("footer.links")}</h4>
					<ul>
						<li><a href="/">{t("navigation.home")}</a></li>
						<li><a href="/home#projects">{t("navigation.projects")}</a></li>
						<li><a href="/contact">{t("navigation.hire_me")}</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default withTranslation()(Footer);
