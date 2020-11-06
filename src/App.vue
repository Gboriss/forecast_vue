<template>
<div id="app">
	<Search />

</div>
</template>

<script>
import Search from '@/components/Search'
export default {
	name: 'App',
	components: {
		Search
	},
	data() {
		return {
			api_key: '11'
		}
	}

}
</script>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/fonts.css';

#app {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;


	max-width: 350px;
	height: 500px;
	margin: 30px auto;
	padding: 20px;
	box-shadow: 0 0 40px 0 rgba(0, 0, 0, .25);
	background: #A2ABB2;

	border-radius: 8px;
	box-sizing: border-box;
}

</style>
