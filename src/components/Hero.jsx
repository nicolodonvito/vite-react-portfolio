import { FaCog } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Hero() {
	const { t } = useTranslation();

	const time = new Date().getHours();
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		if (time >= 4 && time < 12) {
			setGreeting(t("home:home.greetings.good_morning"));
		} else if (time >= 12 && time < 18) {
			setGreeting(t("home:home.greetings.good_afternoon"));
		} else if (time >= 18 && time < 23) {
			setGreeting(t("home:home.greetings.good_evening"));
		} else {
			setGreeting(t("home:home.greetings.welcome"));
		}
	}, [time, t]);

	return (
		<div className="hero">
			<div className="hero-content boxed">
				<div className="hero-left">
					<Link to={`/work`} className="pill">
						<div className="pill-cta">
							<div className="icon">
								<FaCog />
							</div>
							<div className="pill-text">
								<h3>{t("home:home.looking")}</h3>
								<h6>{t("home:home.click_to_contact")}</h6>
							</div>
							<div className="pill-chevron">
								<IoChevronForward size={32} />
							</div>
						</div>
					</Link>
					<div className="intro">
						<h1>{greeting}!</h1>
						<h1>{t("home:home.i_am")} Nicolò</h1>
					</div>
					<p>{t("home:home.introduction")}</p>

					<div className="cta-buttons">
						<HashLink smooth to={`/#projects`} className="btn primary-btn">
							{t("home:home.cta_projects")}
						</HashLink>
						<HashLink smooth to={`/#more`} className="btn secondary-btn">
							{t("home:home.cta_more")}
						</HashLink>
					</div>
				</div>

				<div className="hero-right">
					<img src="/resources/images/pfp.jpg" alt="Nicolò Donvito's profile picture" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
