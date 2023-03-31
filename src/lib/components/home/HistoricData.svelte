<script lang="ts">
	import arrowLeft from '$lib/images/arrow-left.svg';
	import arrowRight from '$lib/images/arrow-right.svg';
	import waterBottle from '$lib/images/water-bottle.svg';
	import breakImage from '$lib/images/break.svg';

	import { historicList } from '$lib/historic';
	import { onMount } from 'svelte';

	let data: string;
	let waterProgress: string;
	let breakProgress: string;
	let historicLenght: number;
	let historicIndex: number;

	onMount(() => {
		historicLenght = historicList.length;
		historicIndex = 0;
		data = historicList[historicIndex].date;
		waterProgress = historicList[historicIndex].water.toString();
		breakProgress = historicList[historicIndex].breaks.toString();
	});

	function updateHistoric(addDay: boolean) {
		if (addDay && historicIndex != 0) historicIndex--;
		else if (!addDay && historicIndex != historicLenght - 1) historicIndex++;
		else return;

		data = historicList[historicIndex].date;
		waterProgress = historicList[historicIndex].water.toString();
		breakProgress = historicList[historicIndex].breaks.toString();
	}
</script>

<div class="historic-container">
	<ion-grid>
		<ion-row class="week-scroll">
			<button class="slider-button" on:click={() => updateHistoric(false)}>
				<img src={arrowLeft} alt="Previous" />
			</button>
			<div class="week-day">
				<div class="day-number">{data}</div>
			</div>
			<button class="slider-button" on:click={() => updateHistoric(true)}>
				<img src={arrowRight} alt="Next" />
			</button>
		</ion-row>
		<ion-row class="objectives-data">
			<div class="objective-column">
				<div class="objective-image"><img src={waterBottle} alt="Water" /></div>
				<div>{waterProgress + ' Litros'}</div>
			</div>
			<div class="objective-column">
				<div class="objective-image"><img src={breakImage} alt="Break" /></div>
				<div>{breakProgress + ' Pausas'}</div>
			</div>
		</ion-row>
	</ion-grid>
</div>

<style>
	.objectives-data {
		justify-content: space-between;
		margin-left: 12.8vw;
		margin-right: 12.8vw;
	}
	.objective-column {
		text-align: center;
		font-size: 14px;
		color: white;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
	}
	.objective-image {
		width: 31.3vw;
		height: 14.45vh;
	}
	.slider-button {
		background-color: transparent;
		width: 4.3vw;
		height: 3.2vh;
	}
	.week-day {
		height: 7.1vh;
		text-align: center;
		font-family: 'Poppins', sans-serif;
		color: white;
		font-weight: 700;
	}

	.week-scroll {
		margin-right: 8.7vw;
		margin-left: 8.7vw;
		margin-top: 2.5vh;
		justify-content: space-between;
		vertical-align: middle;
		line-height: 3.5vh;
	}
	.day-number {
		font-size: 26px;
	}

	.historic-container {
		background-color: rgba(177, 151, 252, 0.19);
		display: flex;
		height: 100%;
		margin-top: 4vh;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		box-shadow: 0px -4px 4px rgba(255, 255, 255, 0.25);
	}
</style>
