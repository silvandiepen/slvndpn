export const state = () => ({
	colorMode: 'light',
	menu: {
		active: false
	}
});

export const mutations = {
	setDarkMode(state) {
		state.settings.colorMode = 'dark';
	},
	setLightMode(state) {
		state.settings.colorMode = 'light';
	},
	setMode(state, value) {
		state.settings.colorMode = value;
	},
	toggleColorMode(state) {
		if (state.settings.colorMode == 'light') state.settings.colorMode = 'dark';
		else state.settings.colorMode = 'light';
	},
	setMenuActive(state, value) {
		state.menu.active = value;
	}
};

export const actions = {
	setDarkMode({ commit }) {
		commit('setDarkmode');
	},
	setLightMode({ commit }) {
		commit('setLightMode');
	},
	toggleColorMode({ commit }) {
		commit('toggleColorMode');
	},
	setMode({ commit }, value) {
		commit('setMode', value);
	},
	setMenuActive({ commit }, bool) {
		commit('setMenuActive', bool);
	},
	toggleMenuActive({ commit, state }) {
		commit('setMenuActive', !state.menu.active);
	}
};
