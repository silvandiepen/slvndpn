export type NavigationItem = {
	name: String;
	link?: String;
	url?: String;
	active: Boolean;
};

export type NavigationGroup = {
	title: String;
	children: NavigationItem[];
	link?: String;
};

export type NavigationType = {
	[key: string]: NavigationGroup;
};

export type DataType = {
	navigation: NavigationType[];
};
