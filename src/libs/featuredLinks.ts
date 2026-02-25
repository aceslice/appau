import marketmateLogo from "../assets/marketmate_logo.png";
import larryLogo from "../assets/larrysmshub_logo.png";
import clinkLogo from "../assets/clink_logo.svg";

const featuredLinks = [
	{
		title: "Larry SMS Hub",
		description:
			"Branded bulk SMS for businesses — send messages under your business name, simply and reliably.",
		link: "/projects/larry-sms-hub",
		footer: "Sender IDs • Bulk campaigns • Delivery reports",
		icon: "i-lucide-message-circle",
		logo: larryLogo.src,
		tags: ["Sender ID", "Bulk campaigns", "Delivery reports", "Business messaging", "Beta"],
		category: "Startups",
	},
	{
		title: "MarketMate",
		description:
			"Data‑driven supply chain for Ghana's local food — curated weekly boxes, COCO hub‑and‑spoke logistics, and farmer analytics.",
		link: "/projects/marketmate",
		footer: "Infrastructure, not delivery. Built for resilience.",
		icon: "i-lucide-shopping-bag",
		logo: marketmateLogo.src,
		tags: ["Weekly boxes", "COCO hub‑and‑spoke", "Farmer analytics", "Starting soon"],
		category: "Startups",
	},
	{
		title: "Clink",
		description:
			"A digital ledger and debt recovery web application. Streamlines financial tracking and makes managing outstanding balances frictionless.",
		link: "/projects/clink",
		footer: "Financial tracking • Debt recovery • React architecture",
		logo: clinkLogo.src,
		tags: ["Digital Ledger", "Debt Recovery", "React", "Live"],
		category: "Startups",
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
];

export default featuredLinks;