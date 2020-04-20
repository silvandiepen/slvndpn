import { Vue, Component, PropSync } from 'vue-property-decorator';

@Component<Heading>({
	name: 'Heading'
})
export default class Heading extends Vue {
	@PropSync('title', { type: String }) syncedName!: string;

	public get compiledTitle(): Array<string> {
		if (this.$props.title) return this.$props.title.split(' ');
		else {
			return [];
		}
	}
}
