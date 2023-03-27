<script lang="ts">
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/600.css';

	import { breakProgress } from '$lib/store';
</script>

<ion-grid>
	<ion-row class="buttons-row">
		<button class="add-button" on:click={() => breakProgress.update((value) => value - 1)}>-</button
		>
		<button class="add-button" on:click={() => breakProgress.update((value) => value + 1)}>+</button
		>
	</ion-row>
</ion-grid>

<style>
	.buttons-row {
		justify-content: center;
		margin-left: 7.6vw;
		margin-right: 7.6vw;
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
		margin-left: 10px;
		margin-right: 10px;
	}

	.add-button:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
	}

	.add-button:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
	}
</style>
