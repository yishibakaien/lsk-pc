export default function({ store }) {
	if(!store.getters['dict/isDicTree']) {
			return store.dispatch('dict/getDicTree')
	}
}