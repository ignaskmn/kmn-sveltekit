export type Menu = {
	data: {
		result: {
			menuItems: MenuItem[];
			globalType: string;
			createdAt: string;
			updatedAt: string;
			id: string;
		};
	};
};

export type MenuItem = {
	label: LocalisedString;
	slug: string;
	submenu: boolean;
	submenuItems: {
		label: LocalisedString;
		slug: string;
		id: string;
	}[];
	id: string;
};

export type LocalisedString = {
	[key: string]: string;
	lt: string;
	en: string;
};
