import { IoGameControllerOutline, IoGlobeOutline } from "react-icons/io5";
import SectionSplitAlt from "../components/SectionSplitAlt";

import { FaCheckCircle } from "react-icons/fa"; // Example icon library
import { RxDesktop } from "react-icons/rx";
import ContactForm from "../components/ContactForm";
import SeoHead from '../components/SeoHead';

const workCards = [
	{
		title: "home:projects.type.games", description: "work:hire_me.game_subtitle",
		skills: [
			{ name: "work:hire_me.services_list.gameplay_design", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.uiux_design", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.accessibility", icon: <FaCheckCircle /> },
		],

		icon: <IoGameControllerOutline size={34} /> // Main icon for "Games"
	},
	{
		title: "home:projects.type.websites", description: "work:hire_me.website_subtitle",
		skills: [
			{ name: "work:hire_me.services_list.web_design", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.frontend", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.backend", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.hosting", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.assistance", icon: <FaCheckCircle /> },
		],

		icon: <IoGlobeOutline size={34} /> // Main icon for "Websites"
	},
	{
		title: "home:projects.type.pc_building", description: "work:hire_me.pc_build_subtitle",
		skills: [
			{ name: "work:hire_me.services_list.pc_design", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.build", icon: <FaCheckCircle /> },
			{ name: "work:hire_me.services_list.overclock", icon: <FaCheckCircle /> }
		],

		icon: <RxDesktop size={34} /> // Main icon for "PC Builds"
	}
];



export default function Work() {
	return (
		<div>
			<SeoHead titleKey="static:seo.hireme_title" descriptionKey="static:seo.hireme_description" keywordsKey="static:seo.hireme_keywords" />
			<SectionSplitAlt
				title="work:hire_me.title"
				subtitle="work:hire_me.subtitle"
				workCards={workCards}
			/>
			<ContactForm />
		</div>
	);
}
