import { defineComponent } from '@vue/composition-api';
import { Logo } from '../../Logo';
export default defineComponent({
	setup() {
		const firstName = 'Sil';
		const lastName = 'van Diepen';
		return {
			firstName,
			lastName,
			Logo
		};
	}
});
