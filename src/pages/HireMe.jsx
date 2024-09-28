import { IoGameControllerOutline, IoGlobeOutline } from "react-icons/io5";
import SectionSplitAlt from "../components/SectionSplitAlt/SectionSplitAlt";

import { FaCheckCircle } from "react-icons/fa"; // Example icon library
import { RxDesktop } from "react-icons/rx";
import ContactForm from "../components/ContactForm/ContactForm";

const workCards = [
	{
		title: "projects.type.games",
		description: "hire_me.game_subtitle",
		skills: [
			{ name: "hire_me.services_list.gameplay_design", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.uiux_design", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.accessibility", icon: <FaCheckCircle /> },
		],

		icon: <IoGameControllerOutline size={34} /> // Main icon for "Games"
	},
	{
		title: "projects.type.websites",
		description: "hire_me.website_subtitle",
		skills: [
			{ name: "hire_me.services_list.web_design", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.frontend", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.backend", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.hosting", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.assistance", icon: <FaCheckCircle /> },
		],

		icon: <IoGlobeOutline size={34} /> // Main icon for "Websites"
	},
	{
		title: "projects.type.pc_building",
		description: "hire_me.pc_build_subtitle",
		skills: [
			{ name: "hire_me.services_list.pc_design", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.build", icon: <FaCheckCircle /> },
			{ name: "hire_me.services_list.overclock", icon: <FaCheckCircle /> }
		],

		icon: <RxDesktop size={34} /> // Main icon for "PC Builds"
	}
];



export default function Work() {
	return (
		<div>
			<SectionSplitAlt
				title="hire_me.title"
				subtitle="hire_me.subtitle"
				workCards={workCards}
			/>
			<ContactForm />
		</div>
	);
}
