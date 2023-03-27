<script lang="ts">
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/600.css';

	import waterBottle from '$lib/images/water-bottle.svg';

	import PieChart from '$lib/components/objectives-page/PieChart.svelte';
	import ButtonsRow from './components/ButtonsRow.svelte';
	import HistoricContainer from '../../lib/components/objectives-page/HistoricContainer.svelte';
	import Header from '$lib/components/objectives-page/Header.svelte';

	import { waterProgress } from '$lib/store';
	import { WaterController } from './water-page';
	import ActualProgress from '../../lib/components/objectives-page/ActualProgress.svelte';

	let actualProgress: number = 0.0;
	export let objective: number = 4;

	const controller = new WaterController();

	waterProgress.subscribe((value) => (actualProgress = value));
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
