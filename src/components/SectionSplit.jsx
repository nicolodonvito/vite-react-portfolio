import { useTranslation } from "react-i18next";


function SectionSplit({ title, id, subtitle, splitLeft, splitRight, splitTitle1, splitTitle2, description, card, isSplitReversed }) {
	const { t } = useTranslation();

	return (
		<section className="section-content" id={id}>
			<div className="content boxed">
				<div>
					<h1>{t(title)}</h1>
					{subtitle && <p>{t(subtitle)}</p>}
				</div>
				<div className={`section-split ${isSplitReversed ? "reverse" : ""}`}>
					{splitLeft && <div className="section-left">
						{splitTitle1 && <><h2>{t(splitTitle1)}</h2><br /></>}


						{description && description.map((part, index) =>
							<p key={index}>{t(part)}</p>
						)}
					</div>
					}
					{splitRight && <div className="section-right">
						{splitTitle2 && <><h2>{t(splitTitle2)}</h2><br /></>}
						{card && card.map((part, index) =>
							<div className="card" key={index}>
								<h3>{t(part.title)}</h3>
								<h4>{t(part.place)} | {part.yearStart} - {part.yearEnd ? part.yearEnd : t('home.misc.ongoing')}</h4>
								<br />
								<h5>{t(part.hook)}</h5>
								<p>{t(part.description)}</p>
							</div>
						)}
					</div>
					}
				</div>

			</div>
		</section>
	)
}

export default SectionSplit;