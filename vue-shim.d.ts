declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

// import Vue, { Component } from 'vue';

// declare module '*.vue' {
// 	export default Vue;
// }

// declare module 'vue/types/vue' {
// 	interface VueConstructor<V extends Vue = Vue> {
// 		component<Data, Methods, Computed, Props>(
// 			id: string,
// 			definition: Component<Data, Methods, Computed, Props>
// 		): ExtendedVue<V, Data, Methods, Computed, Props>;
// 	}
// }
