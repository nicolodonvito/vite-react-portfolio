import { withTranslation } from "react-i18next";
import "./SectionMultiCard.css";
import { Link } from "react-router-dom";
import { IoChevronForward, IoFilterSharp, IoGameControllerOutline, IoGlobeOutline } from "react-icons/io5";
import { useState } from "react"; // Import useState to manage filter state
import { FaComputer } from "react-icons/fa6";
import { RxDesktop } from "react-icons/rx";
import { IoIosInfinite } from "react-icons/io";

function SectionMultiCard({ t, title, subtitle, cards }) {
	const [filter, setFilter] = useState(""); // Manage the selected filter state
	const [fade, setFade] = useState(false); // Handle fade-out animation

	const predefinedTagOrder = [
		"Gameplay",
		"Level",
		"UI/UX",
		"Frontend",
		"Backend",
		"Server",
		"Consumer"
	];

	// Function to filter cards based on type
	const filteredCards = filter
		? cards.filter(card => card.type === filter)
		: cards;

	// Handle button click with fade effect
	const handleFilterClick = (newFilter) => {
		setFade(true); // Trigger fade-out
		setTimeout(() => {
			setFilter(newFilter); // Change filter after fade-out
			setFade(false); // Fade back in
		}, 300); // Match transition duration
	};

	return (
		<section className="section-centered">
			<div className="boxed centered">
				<div className="section-header">
					<h1>{t(title)}</h1>
					{subtitle && <p>{t(subtitle)}</p>}

					<div className="filter-buttons-container">
						<div className="filter-buttons">
							<button onClick={() => handleFilterClick("")}><IoIosInfinite size={22} />{t("projects.type.show_all")}</button>
							<div className="separator" />
							<button onClick={() => handleFilterClick("projects.type.game")}><IoGameControllerOutline size={22} /> {t("projects.type.games")}</button>
							<button onClick={() => handleFilterClick("projects.type.website")}><IoGlobeOutline size={22} /> {t("projects.type.websites")}</button>
							<button onClick={() => handleFilterClick("projects.type.pc_build")}><RxDesktop size={22} /> {t("projects.type.pc_builds")}</button>
						</div>

						{/* Mobile Dropdown for Filters */}
						<div className="filter-dropdown">
							<IoFilterSharp size={32} />
							<select onChange={(e) => handleFilterClick(e.target.value)}>
								<option value="">{t("projects.type.show_all")}</option>
								<option value="projects.type.game">{t("projects.type.games")}</option>
								<option value="projects.type.website">{t("projects.type.websites")}</option>
								<option value="projects.type.pc_build">{t("projects.type.pc_builds")}</option>
							</select>
						</div>
					</div>
				</div>

				<div className={`card-list ${fade ? "fade-out" : "fade-in"}`}>
					{filteredCards && filteredCards.map((part, index) => {
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
										<img src={part.image} alt={part.image} className="" />
									</div>
									<div className="icon">
										<img src={part.icon} alt={part.icon} />
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
													<span key={index} className={`tag ${tag.toLowerCase().replace(/[\s\/]+/g, '-')}`}>
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
