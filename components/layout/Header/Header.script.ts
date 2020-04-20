import { Vue, Component } from 'vue-property-decorator';
// import { Logo } from '@/components';

@Component<Header>({
	name: 'Header'
	// components: { Logo }
})
export default class Header extends Vue {
	firstName = 'Sil';
	lastName = 'van Diepen';
	mounted() {
		// console.log('logo', Logo);
	}
}
