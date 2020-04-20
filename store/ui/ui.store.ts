// import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { UIStateTypes } from './ui.types';

export const state = (): UIStateTypes => ({
	colorScheme: 'light',
	menu: false,
	favicon: '😂'
});

export const mutations = {
	// SET_FAVICON(emoji: string) {
	// 	state.favicon = emoji;
	// },
	SET_COLOR_SCHEME(state: UIStateTypes, value: string) {
		state.colorScheme = value;
	},
	TOGGLE_COLOR_SCHEME(state: UIStateTypes) {
		if (state.colorScheme === 'light') state.colorScheme = 'dark';
		else state.colorScheme = 'light';
	},
	SET_MENU_ACTIVE(state: UIStateTypes, value: boolean) {
		state.menu = value;
	}
};

export const actions = {
	// Set emoji favicon
	setFavicon({ commit }: any, value: string) {
		commit('SET_FAVICON', value);
	},

	// Set Color Scheme
	setDarkScheme({ commit }: any) {
		commit('SET_COLOR_SCHEME', 'dark');
	},
	setLightScheme({ commit }: any) {
		commit('SET_COLOR_SCHEME', 'light');
	},
	toggleColorScheme({ commit }: any) {
		commit('TOGGLE_COLOR_SCHEME');
	},
	setColorScheme({ commit }: any, value: string) {
		commit('SET_COLOR_SCHEME', value);
	},

	// Set and Toggle Menu
	setMenuActive({ commit }: any, value: boolean) {
		commit('SET_MENU_ACTIVE', value);
	},
	toggleMenuActive({ commit, state }: any) {
		commit('SET_MENU_ACTIVE', !state.menu);
	}
};
