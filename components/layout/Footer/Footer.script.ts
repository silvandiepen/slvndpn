import { Vue, Component } from 'vue-property-decorator';
import { NavigationData } from './Footer.data';

@Component<Footer>({
	name: 'Footer'
})
export default class Footer extends Vue {
	navigation = NavigationData;
}
