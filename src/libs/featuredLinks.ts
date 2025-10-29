import marketmateLogo from "../assets/marketmate_logo.png";
import larryLogo from "../assets/larrysmshub_logo.png";

const featuredLinks = [
	{
		title: "Givtly",
		description:
			"Social gifting network — create shareable wishlists, group gifts, and transparent contribution pages. Real‑time updates, powerful templates, and a delightful PWA.",
		link: "/projects/givtly",
		footer: "MERN • Passport.js • Socket.IO • Vite PWA",
		icon: "i-lucide-gift",
		tags: ["MERN", "Passport.js", "Socket.IO", "PWA", "Tailwind", "Zustand"],
		category: "Startups",
	},
	{
		title: "Larry SMS Hub",
		description:
			"Branded bulk SMS for businesses — send messages under your business name, simply and reliably.",
		link: "/projects/larry-sms-hub",
		footer: "Sender IDs • Bulk campaigns • Delivery reports",
		icon: "i-lucide-message-circle",
		logo: larryLogo.src,
		tags: ["Sender ID", "Bulk campaigns", "Delivery reports", "Business messaging","Beta"],
		category: "Startups",
	},
	{
		title: "MarketMate",
		description:
			"Data‑driven supply chain for Ghana’s local food — curated weekly boxes, COCO hub‑and‑spoke logistics, and farmer analytics.",
		link: "projects/marketmate",
		footer: "Infrastructure, not delivery. Built for resilience.",
		icon: "i-lucide-shopping-bag",
		logo: marketmateLogo.src,
		tags: ["Weekly boxes", "COCO hub‑and‑spoke", "Farmer analytics", "Starting soon"],
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