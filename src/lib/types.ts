export type Menu = {
	menu: {
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
	slug: LocalisedString;
	submenu: boolean;
	submenuItems: {
		label: LocalisedString;
		slug: LocalisedString;
		id: string;
	}[];
	id: string;
};

export type LocalisedString = {
	[key: string]: string;
	lt: string;
	en: string;
};
