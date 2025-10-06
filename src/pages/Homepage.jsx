import Hero from "../components/Hero";
import SectionMultiCard from "../components/SectionMultiCard";
import SectionSplit from "../components/SectionSplit";
import AnimatedOnScroll from "../components/AnimatedOnScroll";
import SeoHead from '../components/SeoHead';

function Homepage() {
	const educationDescription = [
		'home:education.description.part_1',
		'home:education.description.part_2',
		'home:education.description.part_3',
		'home:education.description.part_4',
	];

	const educationCards = [
		{
			place: "home:home.misc.place_milan",
			yearStart: "2021",
			yearEnd: "2022",
			hook: "home:education.cards.1.edu_hook",
			description: "home:education.cards.1.edu_description",
		},
		{
			title: "home:education.cards.2.edu_title",
			place: "home:home.misc.place_milan",
			yearStart: "2015",
			yearEnd: "2020",
			hook: "home:education.cards.2.edu_hook",
			description: "home:education.cards.2.edu_description",
		}
	];

	const workDescription = [
		'home:work.description.part_2',
		'home:work.description.part_3',
		'home:work.description.part_4',
	];

	const workCards = [
		{
			title: "home:work.cards.1.work_title",
			place: "home:home.misc.place_remote",
			yearStart: "2020",
			hook: "home:work.cards.1.work_hook",
			description: "home:work.cards.1.work_description",
		},
	]

	const projectCard = [
		{
			image: "/resources/images/LaMantia_BG.jpg",
			icon: "/resources/images/LaMantiaIcon.png",
			buttonName: "home:projects.cards.7.title",
			description: "home:projects.cards.7.description",
			buttonLink: "https://lamantialuxuryrooms.com/",
			// modal: {
			// 	title: "projects.cards.7.title",
			// 	description: "projects.wip.description",
			// },
			type: "home:projects.type.website",
			tags: ["Frontend", "Backend"]
		},
		{
			image: "/resources/images/Filangeri_BG.png",
			icon: "/resources/images/FilangeriIcon.png",
			buttonName: "home:projects.cards.5.title",
			description: "home:projects.cards.5.description",
			buttonLink: "https://web.archive.org/web/20250605115322/https://filangeri.com/",
			type: "home:projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "/resources/images/CasaAdele_BG.png",
			icon: "/resources/images/CasaAdeleIcon.png",
			buttonName: "home:projects.cards.4.title",
			description: "home:projects.cards.4.description",
			buttonLink: "https://casaadele.com/",
			type: "home:projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "/resources/images/PulizieA2E_BG.png",
			icon: "/resources/images/PulizieA2EIcon.png",
			buttonName: "home:projects.cards.6.title",
			description: "home:projects.cards.6.description",
			buttonLink: "https://puliziea2e.it/",
			type: "home:projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "/resources/images/Astralia_BG.png",
			icon: "/resources/images/AstraliaIcon.png",
			buttonName: "home:projects.cards.3.title",
			description: "home:projects.cards.3.description",
			buttonLink: "https://docs.google.com/document/d/1_BuYlM4wVRQ-zlkSw1UCKRex1ci1vnG2wlv5RTdCv8I/edit?usp=sharing",
			type: "home:projects.type.game",
			tags: ["UI/UX", "Gameplay"]
		},
		{
			image: "/resources/images/Monsters_Mess_BG.png",
			icon: "/resources/images/MonstersMessIcon.png",
			buttonName: "home:projects.cards.2.title",
			description: "home:projects.cards.2.description",
			buttonLink: "https://docs.google.com/document/d/1shtIf0YjyuVf7SkV_J-5BVxPq4NBPLiRH7c4HC_Hgk4/edit?usp=sharing",
			type: "home:projects.type.game",
			tags: ["UI/UX", "Gameplay"]
		},
		{
			image: "/resources/images/Tome_Keeper_BG.png",
			icon: "/resources/images/TomeKeeperIcon.png",
			buttonName: "home:projects.cards.1.title",
			description: "home:projects.cards.1.description",
			buttonLink: "https://docs.google.com/document/d/1GCUSwcsbxRGPv06KjOwNpOus3teM1LRgJJTtlRd3Zds/edit?usp=sharing",
			type: "home:projects.type.game",
			tags: ["Level", "UI/UX", "Gameplay"]
		},
	]

	return (
		<div className="homepage">
			<SeoHead titleKey="static:seo.homepage_title" descriptionKey="static:seo.homepage_description" keywordsKey="static:seo.homepage_keywords" />
			<Hero />
			<AnimatedOnScroll>
				<SectionSplit
					title="home:education.education"
					id="more"
					splitLeft
					splitRight
					description={educationDescription}
					card={educationCards}
				/>
			</AnimatedOnScroll>
			<AnimatedOnScroll>
				<SectionSplit
					title="home:work.work"
					splitLeft
					splitRight
					isSplitReversed
					card={workCards}
					description={workDescription}
				/>
			</AnimatedOnScroll>
			<SectionMultiCard
				title="home:projects.projects"
				id="projects"
				cards={projectCard}
				buttonLink="/projects"
			/>
		</div>
	);
}

export default Homepage;
