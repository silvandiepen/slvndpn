import { Vue, Component, PropSync } from 'vue-property-decorator';
import { Container } from '@/components';

@Component<Heading>({
	name: 'Heading',
	components: { Container }
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
