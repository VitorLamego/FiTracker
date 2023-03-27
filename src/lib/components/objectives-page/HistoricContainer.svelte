<script>
	import HistoricCard from '../../../routes/water-page/components/HistoricCard.svelte';
	import { historicList } from '$lib/historic';
</script>

<div class="historic-container">
	<div class="section-header">Histórico</div>
	<div class="scroll-container">
		{#each historicList as day}
			<HistoricCard data={day.date} dayProgress={day.water} percentage={day.waterPercentage} />
		{/each}
	</div>
</div>

<style>
	.scroll-container {
		height: 24vh;
		overflow: scroll;
	}

	.section-header {
		width: 44.6vw;
		height: 2.8vh;
		background-color: white;
		border-radius: 5px;
		text-align: center;
		vertical-align: middle;
		line-height: 2.8vh;
		display: inline-block;
		color: black;
		font-weight: 700;
		font-size: 14px;
		margin-bottom: 1.9vh;
	}

	.historic-container {
		width: 100vw;
		height: 33.4vh;
		background-color: #b197fc19;
		border-top-right-radius: 40px;
		border-top-left-radius: 40px;
		margin-top: 3vh;
		box-shadow: 0px -4px 4px #ffffff25;
		text-align: center;
		padding-top: 3vh;
	}
</style>
