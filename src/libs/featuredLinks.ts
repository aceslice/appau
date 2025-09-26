import marketmateLogo from "../assets/marketmate_logo.png";
import whispurrLogo from "../assets/whispurr_logo.png";
import larryLogo from "../assets/larrysmshub_logo.png";

const featuredLinks = [
	{
		title: "Larry SMS Hub",
		description:
			"Branded bulk SMS for businesses — send messages under your business name, simply and reliably.",
		link: "/projects/larry-sms-hub",
		footer: "Sender IDs • Bulk campaigns • Delivery reports",
		icon: "i-lucide-message-circle",
		logo: larryLogo.src,
		tags: ["Sender ID", "Bulk campaigns", "Delivery reports", "Business messaging","Beta"],
	},
	{
		title: "MarketMate",
		description:
			"Data‑driven supply chain for Ghana’s local food — curated weekly boxes, COCO hub‑and‑spoke logistics, and farmer analytics.",
		link: "https://getmarketmate.com",
		footer: "Infrastructure, not delivery. Built for resilience.",
		icon: "i-lucide-shopping-bag",
		logo: marketmateLogo.src,
		tags: ["Weekly boxes", "COCO hub‑and‑spoke", "Farmer analytics", "Starting soon"],
	},
	// {
	// 	title: "Devlog",
	// 	description:
	// 		"I share progress, small builds, and occasional tutorials — honest, scrappy, and fun.",
	// 	link: "https://youtube.com/@notgr",
	// 	footer: "Please subscribe",
	// 	icon: "i-lucide-youtube text-red-500",
	// 	tags: ["Build in public", "Tutorials", "Subscribe", "Private"],
	// },
	{
		title: "Whispurr",
		description:
			"Ephemeral, playful private chats — privacy as performance, anonymity as armor.",
		link: "https://whispurr.netlify.app",
		footer: "Cultural artifact • Ephemeral • Playful privacy",
		icon: "i-lucide-ghost",
		logo: whispurrLogo.src,
		tags: ["Ephemeral", "Anonymity", "Playful privacy", "WIP"],
	},
];

export default featuredLinks;