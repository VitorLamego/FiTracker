<script lang="ts">
	import waterBottle from '$lib/images/water-bottle.svg';
	import breakImage from '$lib/images/break.svg';
	import SectionHeader from '$lib/components/home/SectionHeader.svelte';
	import CardObjective from '$lib/components/home/CardObjetive.svelte';

	import { waterProgress, waterObjective, breakObjective, breakProgress } from '$lib/store';

	import HomeHeader from '$lib/components/home/HomeHeader.svelte';

	let waterQuantity: number;
	let _waterObjective: number;
	let breakQuantity: number;
	let _breakObjective: number;

	waterProgress.subscribe((value) => (waterQuantity = value));
	waterObjective.subscribe((value) => (_waterObjective = value));
	breakProgress.subscribe((value) => (breakQuantity = value));
	breakObjective.subscribe((value) => (_breakObjective = value));
</script>

<div>
	<HomeHeader />
	<SectionHeader title="Objetivos Diários" />
	<div class="cards-container">
		<CardObjective
			pathImage={waterBottle}
			objective={_waterObjective}
			actualProgress={waterQuantity}
			title="Água"
			isWaterCard={true}
		/>
		<CardObjective
			pathImage={breakImage}
			objective={_breakObjective}
			actualProgress={breakQuantity}
			title="Alongamento"
			isWaterCard={false}
		/>
	</div>
	<SectionHeader title="Histórico" />
	<div class="historic-container" />
</div>

<style>
	.cards-container {
		margin-bottom: 6.2vh;
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
