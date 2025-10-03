import Hero from "../components/Hero/Hero";
import SectionMultiCard from "../components/SectionMultiCard/SectionMultiCard";
import SectionSplit from "../components/SectionSplit/SectionSplit";
import AnimatedOnScroll from "../components/AnimatedOnScroll/AnimatedOnScroll";
import SeoHead from '../components/SeoHead/SeoHead';

function Homepage() {
	const educationDescription = [
		'education.description.part_1',
		'education.description.part_2',
		'education.description.part_3',
		'education.description.part_4',
	];

	const educationCards = [
		{
			title: "education.cards.1.edu_title",
			place: "home.misc.place_milan",
			yearStart: "2021",
			yearEnd: "2022",
			hook: "education.cards.1.edu_hook",
			description: "education.cards.1.edu_description",
		},
		{
			title: "education.cards.2.edu_title",
			place: "home.misc.place_milan",
			yearStart: "2015",
			yearEnd: "2020",
			hook: "education.cards.2.edu_hook",
			description: "education.cards.2.edu_description",
		}
	];

	const workDescription = [
		'work.description.part_2',
		'work.description.part_3',
		'work.description.part_4',
	];

	const workCards = [
		{
			title: "work.cards.1.work_title",
			place: "home.misc.place_remote",
			yearStart: "2020",
			hook: "work.cards.1.work_hook",
			description: "work.cards.1.work_description",
		},
	]

	const projectCard = [
		{
			image: "/images/LaMantia_BG.jpg",
			icon: "/images/LaMantiaIcon.png",
			buttonName: "projects.cards.7.title",
			description: "projects.cards.7.description",
			buttonLink: "https://lamantialuxuryrooms.com/",
			// modal: {
			// 	title: "projects.cards.7.title",
			// 	description: "projects.wip.description",
			// },
			type: "projects.type.website",
			tags: ["Frontend", "Backend"]
		},
		{
			image: "/images/Filangeri_BG.png",
			icon: "/images/FilangeriIcon.png",
			buttonName: "projects.cards.5.title",
			description: "projects.cards.5.description",
			buttonLink: "https://web.archive.org/web/20250605115322/https://filangeri.com/",
			type: "projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "/images/CasaAdele_BG.png",
			icon: "/images/CasaAdeleIcon.png",
			buttonName: "projects.cards.4.title",
			description: "projects.cards.4.description",
			buttonLink: "https://casaadele.com/",
			type: "projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "/images/PulizieA2E_BG.png",
			icon: "/images/PulizieA2EIcon.png",
			buttonName: "projects.cards.6.title",
			description: "projects.cards.6.description",
			buttonLink: "https://puliziea2e.it/",
			type: "projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "/images/Astralia_BG.png",
			icon: "/images/AstraliaIcon.png",
			buttonName: "projects.cards.3.title",
			description: "projects.cards.3.description",
			buttonLink: "https://docs.google.com/document/d/1_BuYlM4wVRQ-zlkSw1UCKRex1ci1vnG2wlv5RTdCv8I/edit?usp=sharing",
			type: "projects.type.game",
			tags: ["UI/UX", "Gameplay"]
		},
		{
			image: "/images/Monsters_Mess_BG.png",
			icon: "/images/MonstersMessIcon.png",
			buttonName: "projects.cards.2.title",
			description: "projects.cards.2.description",
			buttonLink: "https://docs.google.com/document/d/1shtIf0YjyuVf7SkV_J-5BVxPq4NBPLiRH7c4HC_Hgk4/edit?usp=sharing",
			type: "projects.type.game",
			tags: ["UI/UX", "Gameplay"]
		},
		{
			image: "/images/Tome_Keeper_BG.png",
			icon: "/images/TomeKeeperIcon.png",
			buttonName: "projects.cards.1.title",
			description: "projects.cards.1.description",
			buttonLink: "https://docs.google.com/document/d/1GCUSwcsbxRGPv06KjOwNpOus3teM1LRgJJTtlRd3Zds/edit?usp=sharing",
			type: "projects.type.game",
			tags: ["Level", "UI/UX", "Gameplay"]
		},
	]

	return (
		<div className="homepage">
			<SeoHead titleKey="seo.homepage_title" descriptionKey="seo.homepage_description" keywordsKey="seo.homepage_keywords" />
			<Hero />
			<AnimatedOnScroll>
				<SectionSplit
					title="education.education"
					id="more"
					splitLeft
					splitRight
					description={educationDescription}
					card={educationCards}
				/>
			</AnimatedOnScroll>
			<AnimatedOnScroll>
				<SectionSplit
					title="work.work"
					splitLeft
					splitRight
					isSplitReversed
					card={workCards}
					description={workDescription}
				/>
			</AnimatedOnScroll>
			<SectionMultiCard
				title="projects.projects"
				id="projects"
				cards={projectCard}
				buttonLink="/projects"
			/>
		</div>
	);
}

export default Homepage;
