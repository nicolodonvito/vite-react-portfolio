import { withTranslation } from "react-i18next";
import "./SectionMultiCard.css";
import { Link } from "react-router-dom";
import { IoChevronForward, IoGameControllerOutline, IoGlobeOutline } from "react-icons/io5";
import { RxDesktop } from "react-icons/rx";
import { useState } from "react";
import { IoIosInfinite } from "react-icons/io";

function SectionMultiCard({ t, id, title, subtitle, cards }) {
	const [filter, setFilter] = useState("");
	const [fade, setFade] = useState(false);

	const predefinedTagOrder = [
		"Gameplay",
		"Level",
		"UI/UX",
		"Frontend",
		"Backend",
		"Server",
		"Consumer",
	];

	const filteredCards = filter ? cards.filter((card) => card.type === filter) : cards;

	const handleFilterClick = (newFilter) => {
		setFade(true);
		setTimeout(() => {
			// Toggle filter: If the clicked filter is the same as the current one, reset filter
			if (filter === newFilter) {
				setFilter("");
			} else {
				setFilter(newFilter);
			}
			setFade(false);
		}, 200);
	};

	return (
		<section className="section-multi-card section-centered">
			<div className="boxed centered" id={id}>
				<div className="section-header">
					<h1>{t(title)}</h1>
					{subtitle && <p>{t(subtitle)}</p>}

					<div className="filter-buttons-container">
						<div className="filter-buttons scrollable-filter-buttons">
							<button
								onClick={() => handleFilterClick("")}
								className={filter === "" ? "active" : ""}
							>
								<IoIosInfinite size={22} />
								<h3>{t("projects.type.show_all")}</h3>
							</button>
							<div className="separator" />
							<button
								onClick={() => handleFilterClick("projects.type.game")}
								className={filter === "projects.type.game" ? "active" : ""}
							>
								<IoGameControllerOutline size={24} />
								<h3>{t("projects.type.games")}</h3>
							</button>
							<button
								onClick={() => handleFilterClick("projects.type.website")}
								className={filter === "projects.type.website" ? "active" : ""}
							>
								<IoGlobeOutline size={24} />
								<h3>{t("projects.type.websites")}</h3>
							</button>
							<button
								onClick={() => handleFilterClick("projects.type.pc_build")}
								className={filter === "projects.type.pc_build" ? "active" : ""}
							>
								<RxDesktop size={24} />
								<h3>{t("projects.type.pc_builds")}</h3>
							</button>
						</div>
					</div>
				</div>

				<div className={`card-list ${fade ? "fade-out" : "fade-in"}`}>
					{filteredCards &&
						filteredCards.map((part, index) => {
							const sortedTags = part.tags
								? part.tags.slice().sort((a, b) => {
									const indexA = predefinedTagOrder.indexOf(a);
									const indexB = predefinedTagOrder.indexOf(b);
									if (indexA === -1) return 1;
									if (indexB === -1) return -1;
									return indexA - indexB;
								})
								: [];

							return (
								<Link to={part.buttonLink} key={index}>
									<div className="buttonCard">
										<div className="image">
											<img src={part.image} alt={part.buttonName} />
										</div>
										<div className="icon">
											<img src={part.icon} alt={part.type} />
											<span>{t(part.type)}</span>
										</div>
										<div className="cardDescription">
											<div className="description">
												<div>
													<h3>{t(part.buttonName)}</h3>
													<p>{t(part.description)}</p>
												</div>
												<div className="tags">
													{sortedTags.map((tag, index) => (
														<span
															key={index}
															className={`tag ${tag.toLowerCase().replace(/[\s\/]+/g, "-")}`}
														>
															{t(tag)}
														</span>
													))}
												</div>
											</div>
											<IoChevronForward size={42} className="chevron" />
										</div>
									</div>
								</Link>
							);
						})}
				</div>
			</div>
		</section>
	);
}

export default withTranslation()(SectionMultiCard);
