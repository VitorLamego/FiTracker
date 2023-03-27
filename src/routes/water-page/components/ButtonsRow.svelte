<script lang="ts">
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/600.css';

	import type { WaterController } from '../water-page';

	import { waterProgress } from '$lib/store';

	export let actualProgress: number;
	export let controller: WaterController;

	function addWater(quantity: number) {
		if (controller.addQuantity) waterProgress.update((n) => n + quantity);
		else {
			actualProgress -= quantity;
			waterProgress.update((n) => n - quantity);
			if (actualProgress < 0) waterProgress.set(0);
		}
		actualProgress.toFixed(2);
	}
</script>

<ion-grid>
	<ion-row class="buttons-row">
		<button
			class={controller.addQuantity ? 'math-buttons' : 'math-buttons clicked'}
			on:click={() => (controller.addQuantity = false)}>-</button
		>
		<ion-row class="row-add-buttons">
			<button class="add-button" on:click={() => addWater(0.1)}>0.1L</button>
			<button class="add-button" on:click={() => addWater(0.5)}>0.5L</button>
			<button class="add-button" on:click={() => addWater(1)}>1L</button>
		</ion-row>
		<button
			class={controller.addQuantity ? 'math-buttons clicked' : 'math-buttons'}
			on:click={() => (controller.addQuantity = true)}>+</button
		>
	</ion-row>
</ion-grid>

<style>
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
</style>
