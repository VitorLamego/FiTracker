<script lang="ts">
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/600.css';

	import waterBottle from '$lib/images/water-bottle.svg';

	import PieChart from '$lib/components/objectives-page/PieChart.svelte';
	import ButtonsRow from './components/ButtonsRow.svelte';
	import HistoricContainer from '../../lib/components/objectives-page/HistoricContainer.svelte';
	import Header from '$lib/components/objectives-page/Header.svelte';

	import { waterProgress, waterObjective } from '$lib/store/store';
	import { WaterController } from './water-page';
	import ActualProgress from '../../lib/components/objectives-page/ActualProgress.svelte';

	let actualProgress: number;
	export let objective: number;

	const controller = new WaterController();

	waterProgress.subscribe((value) => (actualProgress = value));
	waterObjective.subscribe((value) => (objective = value));
</script>

<div class="content-box">
	<Header />
	<PieChart focusImage={waterBottle} {actualProgress} {objective} color="62d8F1" />
	<ActualProgress {actualProgress} {objective} title="Consumo de água" />
	<ButtonsRow {actualProgress} {controller} />
	<HistoricContainer isWaterHistoric={true} />
</div>

<style>
	.content-box {
		text-align: center;
	}
</style>
