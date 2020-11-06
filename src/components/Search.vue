<template>
<form id="search-form" class="search-form">
    <input type="text" id="autocomplete" placeholder="Enter location" autocomplete="off">
    <button type="submit">
        +
    </button>
</form>
  
</template>

<script>
export default {
    name: 'Search'

}
</script>

<style scoped lang="scss">
.search-form {
	position: relative;
	margin: 0;
	// box-shadow: 1px 3px 10px rgba(17, 17, 17, .5);
    width: 100%;
    height: 30px;
	background-color: #A2ABB2;
	
	border-radius: 8px;

	input {
		position: relative;
		display: block;
		width: 92%;
		padding: 0 30px;
		font-size: 24px;
		line-height: 1.5;

		background-color: #A2ABB2;
		border: 1px solid #111;
		box-sizing: border-box;
		z-index: 1;

		border-radius: 8px;

		&:focus {
			outline: none;
			border: none
		}
	}

	button {
		position: absolute;
		width: 25px;
		height: 25px;
		top: 0;
		right: 10px;
		bottom: 0;
		margin: auto;
		font-size: 24px;
		border: none;
		cursor: pointer;
		// opacity: .4;
		transition: all .2s;
		z-index: 2;
		background-color: #A2ABB2;



		&:focus,
		&:hover {
			outline: none;
			opacity: 1;
		}

		svg {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
}
	

</style>