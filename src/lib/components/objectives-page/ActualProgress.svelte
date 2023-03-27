<script lang="ts">
	import ProgressBox from './ProgressBox.svelte';

	export let actualProgress: number;
	export let objective: number;

	export let title: string;
	export let isWater: boolean = true;
</script>

<p class="page-title">{title}</p>
<ion-grid>
	<ion-row class="progress-row">
		<ProgressBox
			boxContent={isWater ? actualProgress.toFixed(1) : actualProgress.toString()}
			label={isWater ? 'Consumo' : 'Pausas'}
			{isWater}
		/>
		<ProgressBox boxContent={objective.toString()} label="Objetivo" {isWater} />
	</ion-row>
</ion-grid>

<style>
	.progress-row {
		justify-content: space-between;
		margin-left: 8.2vw;
		margin-right: 8.2vw;
	}

	.page-title {
		font-weight: 600;
		color: white;
		font-family: 'Poppins', sans-serif;
		font-size: 22px;
	}
</style>
