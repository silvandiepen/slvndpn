import Vue from 'vue';
import Container from '~/components/layout/container.vue';
import PageHeading from '~/components/layout/heading.vue';
import PageContent from '~/components/layout/content.vue';
import ContentRow from '~/components/layout/content-row.vue';
import ContentItem from '~/components/layout/content-item.vue';

import Markdown from '@sil/markdown';

const Components = {
	Container,
	PageHeading,
	PageContent,
	ContentRow,
	ContentItem,
	Markdown
};

Object.keys(Components).forEach((key) => {
	Vue.component(key, Components[key]);
});
