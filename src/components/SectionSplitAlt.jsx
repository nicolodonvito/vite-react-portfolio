import { useTranslation } from "react-i18next";


function SectionSplitAlt({ title, subtitle, workCards }) {
	const { t } = useTranslation();

	return (
		<section className="section-alt-content">
			<div className="content boxed">
				<div>
					<h1>{t(title)}</h1>
					{subtitle && <p>{t(subtitle)}</p>}
				</div>
				<div className="work-details-container">
					{workCards.map((card, index) => (
						<div key={index} className="work-details">
							<div className="icon-container">
								{card.icon}
								<h2>{t(card.title)}</h2>
							</div>
							<p className="work-description">{t(card.description)}</p>

							<div className="skills">
								<h3>{t("work:hire_me.services")}</h3>
								<div>
									{card.skills.map((skill, i) => (
										<div key={i} className="skill-item">
											<span className="skill-icon">{skill.icon}</span>
											<span>{t(skill.name)}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionSplitAlt;
