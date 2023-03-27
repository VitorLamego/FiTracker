<script lang="ts">
	import breakImage from '$lib/images/break.svg';

	import Header from '$lib/components/objectives-page/Header.svelte';
	import PieChart from '$lib/components/objectives-page/PieChart.svelte';

	import { breakObjective, breakProgress } from '$lib/store';
	import ActualProgress from '$lib/components/objectives-page/ActualProgress.svelte';
	import QuantityButtons from './components/QuantityButtons.svelte';
	import HistoricContainer from '$lib/components/objectives-page/HistoricContainer.svelte';

	let actualProgress: number;
	let objective: number;

	breakObjective.subscribe((value) => (objective = value));
	breakProgress.subscribe((value) => (actualProgress = value));
</script>

<div class="box-content">
	<Header />
	<PieChart focusImage={breakImage} {actualProgress} {objective} color="D95555" />
	<ActualProgress {actualProgress} {objective} isWater={false} title="Alongamentos" />
	<QuantityButtons />
	<HistoricContainer isWaterHistoric={false} />
</div>

<style>
	.box-content {
		text-align: center;
	}
</style>
