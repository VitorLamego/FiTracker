<script lang="ts">
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/600.css';

	import waterBottle from '$lib/images/water-bottle.svg';

	export let data: string = '-';
	export let dayProgress: number = 0;
	export let percentage: string = '-';
</script>

<div class="card-historic">
	<ion-row class="card-content">
		<div class="data-container">{data}</div>
		<div class="quantity-container">
			<ion-row>
				<img src={waterBottle} alt="Water" class="card-image" />
				<div class="card-text">{dayProgress + ' Litros'}</div>
			</ion-row>
		</div>
		<div class="card-percentage">{percentage}</div>
	</ion-row>
</div>

<style>
	.card-historic {
		width: 82.5vw;
		height: 6.9vh;
		background-color: #c9eafc;
		display: inline-block;
		border-radius: 5px;
		margin-top: 1vh;
	}

	.card-image {
		width: 9vw;
		height: 3.4vh;
		margin-right: 10px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.card-text {
		margin-left: 12vw;
	}

	.card-percentage {
		font-size: 14px;
		width: 12vw;
	}

	.quantity-container {
		width: 45.4vw;
		text-align: center;
		font-size: 18.15px;
		position: relative;
		margin-left: 10px;
	}
	.card-content {
		text-align: center;
		justify-content: space-between;
		height: 100%;
		vertical-align: middle;
		line-height: 6.9vh;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
	}

	.data-container {
		height: 100%;
		width: 21.7vw;
		background-color: white;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		font-size: 18px;
	}
</style>
