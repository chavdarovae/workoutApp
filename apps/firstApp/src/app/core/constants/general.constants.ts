import { IMenuItem } from "@nodeApp/shared-ui";

export const FIRST_APP_COLORS: any = {
	pri: '#469597',
	sec: '#5ba199',
	acc: '#ddbeaa',
	danger: 'red',
	success: 'green',
	warn: 'tomato',
	textPri: '#ffffff',
	textSec: '#000000',
	bgPri: '#b8dedc',
	bgSec: '#bbc6c8'
};

export const FIRST_APP_MENUS: IMenuItem[] = [
	{
		id: 1,
		path: '/about',
		title: 'About',
	},
	{
		id: 2,
		path: '/logout',
		title: 'Logout',
	}
];

