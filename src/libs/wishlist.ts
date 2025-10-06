export type WishlistItem = {
	name: string;
	description?: string;
	status: "available" | "reserved" | "purchased";
};

export type GroupGift = {
	title: string;
	goalAmountGhs: number;
	raisedAmountGhs: number;
	notes?: string;
};

export type SupportGift = {
	label: string;
	notes?: string;
};

export type WishlistData = {
	items: WishlistItem[];
	groupGifts: GroupGift[];
	supportGifts: SupportGift[];
	cashFund?: { title: string; notes?: string };
};

export const wishlistData: WishlistData = {
	groupGifts: [
		{
			title: "Noise‑cancelling headphones",
			goalAmountGhs: 2500,
			raisedAmountGhs: 500,
			notes: "Contribute any amount. Notes welcome.",
		},
	],
	items: [
		{
			name: "A good desk lamp",
			description: "Warm light, minimal style",
			status: "available",
		},
		{
			name: "A cozy hoodie (M)",
			description: "Soft, neutral color",
			status: "purchased",
		},
	],
	supportGifts: [
		{ label: "Home‑cooked meal night" },
		{ label: "Help with a weekend errand" },
		{ label: "A short note or card" },
	],
	cashFund: {
		title: "General birthday fund",
		notes: "Small contributions appreciated. Thank you!",
	},
};


