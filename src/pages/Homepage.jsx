import Hero from "../components/Hero/Hero";
import SectionMultiCard from "../components/SectionMultiCard/SectionMultiCard";
import SectionSplit from "../components/SectionSplit/SectionSplit";

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
			image: "projects/Filangeri_BG.png",
			icon: "projects/FilangeriIcon.png",
			buttonName: "projects.cards.5.title",
			description: "projects.cards.5.description",
			// buttonLink: "https://casaadele.com/",
			type: "projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "projects/CasaAdele_BG.png",
			icon: "projects/CasaAdeleIcon.png",
			buttonName: "projects.cards.4.title",
			description: "projects.cards.4.description",
			buttonLink: "https://casaadele.com/",
			type: "projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "projects/PulizieA2E_BG.png",
			icon: "projects/PulizieA2EIcon.png",
			buttonName: "projects.cards.6.title",
			description: "projects.cards.6.description",
			buttonLink: "https://puliziea2e.it/",
			type: "projects.type.website",
			tags: ["Frontend"]
		},
		{
			image: "projects/Astralia_BG.png",
			icon: "projects/AstraliaIcon.png",
			buttonName: "projects.cards.3.title",
			description: "projects.cards.3.description",
			buttonLink: "https://docs.google.com/document/d/1_BuYlM4wVRQ-zlkSw1UCKRex1ci1vnG2wlv5RTdCv8I/edit?usp=sharing",
			type: "projects.type.game",
			tags: ["UI/UX", "Gameplay"]
		},
		{
			image: "projects/Monsters_Mess_BG.png",
			icon: "projects/MonstersMessIcon.png",
			buttonName: "projects.cards.2.title",
			description: "projects.cards.2.description",
			buttonLink: "https://docs.google.com/document/d/1shtIf0YjyuVf7SkV_J-5BVxPq4NBPLiRH7c4HC_Hgk4/edit?usp=sharing",
			type: "projects.type.game",
			tags: ["UI/UX", "Gameplay"]
		},
		{
			image: "projects/Tome_Keeper_BG.png",
			icon: "projects/TomeKeeperIcon.png",
			buttonName: "projects.cards.1.title",
			description: "projects.cards.1.description",
			buttonLink: "https://docs.google.com/document/d/1GCUSwcsbxRGPv06KjOwNpOus3teM1LRgJJTtlRd3Zds/edit?usp=sharing",
			type: "projects.type.game",
			tags: ["Level", "UI/UX", "Gameplay"]
		},
	]

	return (
		<div className="homepage">
			<Hero />
			<SectionSplit
				title="education.education"
				id="more"
				splitLeft
				splitRight
				description={educationDescription}
				card={educationCards}
			/>
			<SectionSplit
				title="work.work"
				splitLeft
				splitRight
				isSplitReversed
				card={workCards}
				description={workDescription}
			/>
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
