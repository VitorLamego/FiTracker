<script lang="ts">
	import ProgressBox from '../components/ProgressBox.svelte';

	export let actualProgress: number;
	export let objective: number;
</script>

<p class="page-title">Consumo de água</p>
<ion-grid>
	<ion-row class="progress-row">
		<ProgressBox boxContent={actualProgress.toFixed(1)} label="Consumo" />
		<ProgressBox boxContent={objective.toString()} label="Objetivo" />
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
