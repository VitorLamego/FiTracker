<script lang="ts">
	import '@fontsource/poppins/700.css';

	import { waterIndications } from '$lib/store/store';

	let _waterSuggestion: string;

	waterIndications.subscribe((value) => (_waterSuggestion = value.toString()));

	function updateSuggestion() {
		const input = document.getElementById('water-suggestion') as HTMLInputElement | null;
		const inputContet = input?.value;
		if (inputContet != undefined) {
			let newValue: number = parseFloat(inputContet);
			waterIndications.set(newValue);
		}
	}
</script>

<ion-row class="notification-row">
	<div class="text">Quantidade de água sugerida (litros)</div>
	<div class="objective-data">
		<ion-input
			type="number"
			class="custom"
			inputmode="decimal"
			value={_waterSuggestion}
			id="water-suggestion"
			on:ionChange={() => updateSuggestion()}
		/>
	</div>
</ion-row>

<style>
	ion-input.custom {
		--background: #373737;
		--color: #fff;

		--padding-bottom: 10px;
		--padding-end: 10px;
		--padding-start: 10px;
		--padding-top: 10px;
	}

	ion-input {
		display: contents;
		text-align: center;
	}

	.notification-row {
		text-align: center;
		vertical-align: middle;
		line-height: 6.2vh;
		justify-content: space-between;
		margin-left: 7.9vw;
		margin-right: 4.6vw;
		margin-top: 3vh;
		margin-bottom: 3.6vh;
	}

	.objective-data {
		background-color: #5a5486;
		width: 13.3vw;
		height: 6.2vh;
		text-align: center;
		vertical-align: middle;
		line-height: 6.2vh;
		color: white;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		border-radius: 4.25px;
		box-shadow: 0px 4px 4px #00000025;
	}
	.text {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 14px;
	}
</style>
