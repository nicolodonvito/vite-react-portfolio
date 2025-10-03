import { useTranslation } from "react-i18next";
import "./Footer.css";
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Footer() {
	const { t } = useTranslation();
	const { lang } = useParams();

	return (
		<footer className="footer">
			<div className="boxed footer-content">
				<div className="footer-column">
					<h4>{t("footer.about")}</h4>
					<div className="social-icons">
						<Link href="https://github.com/nicolodonvito" target="_blank" rel="noopener noreferrer"><img src="/resources/icons/github-svgrepo-com.svg" alt="GitHub" />GitHub</Link>
						<Link href="https://www.linkedin.com/in/nicolo-donvito" target="_blank" rel="noopener noreferrer"><img src="/resources/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" />LinkedIn</Link>
					</div>
					<p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
				</div>

				<div className="footer-column">
					<h4>{t("footer.links")}</h4>
					<ul>
						<li><HashLink smooth to={`/${lang}/`}>{t("navigation.home")}</HashLink></li>
						<li><HashLink smooth to={`/${lang}/work`}>{t("navigation.hire_me")}</HashLink></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
