<template>
<form id="search-form" class="search-form"  @submit.prevent="fetchWeather">
    <input 
		type="text" 
		id="autocomplete" 
		placeholder="Search..." 
		autocomplete="off"
		v-model="query"	
	>
    <button type="submit">
        +
    </button>
</form>
  
</template>

<script>
export default {
    name: 'Search',
	data() {
		return {
			api_key: '9a3f56db816fe284dd580a82176924f9',
			url_base: 'api.openweathermap.org/data/2.5/',
			query: '',
			weather: {}
		}
	},
	methods: {
		fetchWeather (e) {
			fetch(`${this.url_base}forecast?q=${this.query}&units=metric&APPID=${this.api_key}`)
			.then(res => {
				return res.json()
			}).then(this.setResults)
			
		},
	}

}
</script>

<style scoped lang="scss">
.search-form {
	position: relative;
	margin: 0 auto;
    width: 100%;
    // min-width: 40%;
    // max-width: 100%;

    height: 40px;
	border-radius: 8px;
	background-color: #A2ABB2;

	input {
		position: relative;
        display: block;
        height: 40px;
        width: 100%;
        // min-width: 40%;
        // max-width: 100%;

		padding: 0 15px;
		font-size: 24px;
        // line-height: 1.5;
        
        font-family: 'PtSans';
		background-color: #A2ABB2;
		border: 1px solid #111;
		box-sizing: border-box;
		border-radius: 20px;
	}

	button {
		position: absolute;
		width: 25px;
		height: 25px;
		top: -6px;
		right: 25px;
		bottom: 0;
		margin: auto;
		font-size: 24px;
		border: none;
		cursor: pointer;
		transition: all .2s;
		z-index: 2;
		background-color: #A2ABB2;

		&:focus,
		&:hover {
			outline: none;
			opacity: 1;
		}
	}
}
	

</style>