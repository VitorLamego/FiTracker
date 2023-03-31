<script lang="ts">
	import waterBottle from '$lib/images/water-bottle.svg';
	import breakImage from '$lib/images/break.svg';
	import SectionHeader from '$lib/components/home/SectionHeader.svelte';
	import CardObjective from '$lib/components/home/CardObjetive.svelte';

	import {
		waterProgress,
		waterObjective,
		breakObjective,
		breakProgress,
		isNotificattionTriggered
	} from '$lib/store/store';

	import HomeHeader from '$lib/components/home/HomeHeader.svelte';
	import HistoricData from '$lib/components/home/HistoricData.svelte';
	import AppJobs from '$lib/services/jobs';

	let waterQuantity: number;
	let _waterObjective: number;
	let breakQuantity: number;
	let _breakObjective: number;

	waterProgress.subscribe((value) => (waterQuantity = value));
	waterObjective.subscribe((value) => (_waterObjective = value));
	breakProgress.subscribe((value) => (breakQuantity = value));
	breakObjective.subscribe((value) => (_breakObjective = value));

	if (!$isNotificattionTriggered) {
		isNotificattionTriggered.set(true);
		let notifications = new AppJobs();
	}
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
	<HistoricData />
</div>

<style>
	.cards-container {
		margin-bottom: 6.2vh;
	}
</style>
