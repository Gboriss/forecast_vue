<template>
<div id="app">
	<Search />
	<main class="widget">
		<h2 class="name">San Francisco</h2>
		<h1 class="temp">15C</h1>
		<h2 class="weather">Rain</h2>
		<h3 id="description">Monday 06 November</h3>
		<ul class="days">
			<li class="day_list">
				<div>❉</div>
				<button>Mon</button>
			</li>
			<li class="day_list">
				<div>✥</div>
				<button>Tue</button>
			</li>
			<li class="day_list active">
				<div>➺</div>
				<button>Wen</button>
			</li>
			<li class="day_list">
				<div>❃</div>
				<button>Fue</button>
			</li>
			<li class="day_list">
				<div>✵</div>
				<button>Fri</button>
			</li>
		</ul>
	</main>
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
			api_key: 'f6a2c317f97367bfe8fa3e5fc517e80d',
			url_base: 'https://api.openweathermap.org/data/2.5/',
			// query: '',
      		weather: {}
		}
	},
	methods: {

	}

}
</script>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/fonts.css';

#app {
	display: flex;
	flex-direction: column;
    font-family: 'PtSans';

	max-width: 350px;
	height: 480px;
	margin: 30px auto;
	padding: 20px;
	box-shadow: 0 0 40px 0 rgba(0, 0, 0, .25);
	background: #A2ABB2;

	border-radius: 8px;
	box-sizing: border-box;
}
main {
	padding: 15px;
	margin-top: 10px;
	position: relative;
	z-index: 2;
	&:before {
		content: '';
		z-index: -1;
		position: absolute;
		// background-color: #f3fb10;
        background: linear-gradient(to left, #f3fb10, transparent);
		// border-radius: 150px;
		box-shadow: -40px 0 81px -45px #fff36f;
		border-radius: 100% 0 0 100% / 50% 0 0 50%;

		width: 150px;
		height: 350px;
		top: 23px;
		right: -20px;
	}
}
h1 {
	font-size: 150px;
}

.days {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;

	.day_list {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		// padding: 5px;
		width: 40px;
		height: 80px;
		border: 1px solid #111;
		border-radius: 25px;
		cursor: pointer;

	}
	.active {
		background-color: #040403;
		color: #fff;
	}
}

</style>
