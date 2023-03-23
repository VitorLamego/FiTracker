<script lang="ts">
	import type { Animation } from '@ionic/core';

	import configIcon from '$lib/images/config.png';
	import backButton from '$lib/images/back-button.png';
	import waterBottle from '$lib/images/water-bottle.svg';
	import ProgressBox from '$lib/components/objective-page/ProgressBox.svelte';

	import { goto } from '$app/navigation';

	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/600.css';

	import HistoricCard from './components/HistoricCard.svelte';

	let pieChart: Element;
	let actualProgress: number = 0.0;
	let addQuantity: boolean = true;

	const backRoute = () => {
		goto('/');
	};

	function addWater(quantity: number) {
		if (addQuantity) actualProgress += quantity;
		else {
			actualProgress -= quantity;
			if (actualProgress < 0) actualProgress = 0;
		}
		actualProgress.toFixed(2);
	}
</script>

<div class="content-box">
	<div class="home-header">
		<ion-grid>
			<ion-row class="header-row">
				<button class="back-button" on:click={backRoute}><img src={backButton} alt="Back" /></button
				>
				<ion-text class="name-text">FiTracker</ion-text>
				<button class="config-button"><img src={configIcon} alt="Configuration" /></button>
			</ion-row>
		</ion-grid>
	</div>

	<div class="chart-box">
		<div class="objective-image">
			<img src={waterBottle} alt="Configuration" />
		</div>
		<div class="pie animate" style="--c:#62D8F1" bind:this={pieChart} />
	</div>

	<p class="page-title">Consumo de água</p>
	<ion-grid>
		<ion-row class="progress-row">
			<ProgressBox boxContent={actualProgress.toFixed(1)} label="Consumo" />
			<ProgressBox boxContent="4" label="Objetivo" />
		</ion-row>
	</ion-grid>
	<ion-grid>
		<ion-row class="buttons-row">
			<button
				class={addQuantity ? 'math-buttons' : 'math-buttons clicked'}
				on:click={() => (addQuantity = false)}>-</button
			>
			<ion-row class="row-add-buttons">
				<button class="add-button" on:click={() => addWater(0.1)}>0.1L</button>
				<button class="add-button" on:click={() => addWater(0.5)}>0.5L</button>
				<button class="add-button" on:click={() => addWater(1)}>1L</button>
			</ion-row>
			<button
				class={addQuantity ? 'math-buttons clicked' : 'math-buttons'}
				on:click={() => (addQuantity = true)}>+</button
			>
		</ion-row>
	</ion-grid>

	<div class="historic-container">
		<div class="section-header">Histórico</div>
		<div class="scroll-container">
			<HistoricCard />
			<HistoricCard />
			<HistoricCard />
			<HistoricCard />
			<HistoricCard />
		</div>
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
	.math-buttons {
		background-color: #efefef;
		border-radius: 10px;
		height: 45px;
		width: 45px;
		transition: box-shadow 0.15s, transform 0.15s;
		text-align: center;
		vertical-align: middle;
		line-height: 45px;
		font-weight: 700;
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
		color: black;
	}

	.clicked {
		box-shadow: inset 2px 4px 4px rgba(0, 0, 0, 0.49);
	}

	.buttons-row {
		justify-content: space-between;
		margin-left: 7.6vw;
		margin-right: 7.6vw;
	}

	.row-add-buttons {
		width: 40vw;
		justify-content: space-between;
	}

	.add-button {
		background-color: #efefef;
		border-radius: 10px;
		height: 45px;
		width: 45px;
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transition: box-shadow 0.15s, transform 0.15s;
		text-align: center;
		vertical-align: middle;
		line-height: 45px;
		font-weight: 700;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		color: black;
	}

	.add-button:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transform: translateY(-2px);
	}

	.add-button:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
		transform: translateY(2px);
	}

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

	.content-box {
		text-align: center;
	}

	.chart-box {
		position: relative;
		margin-top: 2.9vh;
		text-align: center;
		width: 100vw;
		height: 24vh;
	}

	.objective-image {
		--width: 28vw;
		--height: 25vw;

		width: var(--width);
		height: var(--height);
		position: absolute;
		margin-left: calc(50vw - var(--width) / 2);
		margin-top: calc(var(--height) / 2);
	}

	.name-text {
		font-weight: bold;
	}

	.header-row {
		justify-content: space-between;
		margin-left: 7.9vw;
		margin-right: 7.9vw;
	}

	.home-header {
		margin-top: 6.7vh;
	}

	ion-text {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-size: 30px;
	}

	.back-button {
		height: 45px;
		width: 45px;
		background-color: transparent;
	}

	.config-button {
		background-color: #efefef;
		border-radius: 10px;
		height: 45px;
		width: 45px;
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transition: box-shadow 0.15s, transform 0.15s;
	}

	.config-button:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transform: translateY(-2px);
	}

	.config-button:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
		transform: translateY(2px);
	}

	/* ldsklksd */

	@property --p {
		syntax: '<number>';
		inherits: true;
		initial-value: 0;
	}

	.pie {
		--p: 70;
		--b: 17px;
		--c: darkred;

		width: 47.9vw;
		aspect-ratio: 1;
		position: relative;
		display: inline-grid;
		margin: 5px;
		font-weight: bold;
		font-family: sans-serif;
	}
	.pie:before,
	.pie:after {
		content: '';
		position: absolute;
		border-radius: 50%;
	}
	.pie:before {
		inset: 0;
		background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
			conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);

		mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
	}
	.pie:after {
		inset: calc(50% - var(--b) / 2);
		background: var(--c);
		transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - 47.9vw / 2));
	}
	.animate {
		animation: p 1s 0.5s both;
	}

	@keyframes p {
		from {
			--p: 0;
		}
	}
</style>
