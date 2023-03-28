<script>
	import '@fontsource/poppins/700.css';

	import { automaticSuggestion } from '$lib/store';

	function onSuggestionClicked() {
		automaticSuggestion.update((value) => !value);
	}
</script>

<ion-row class="notification-row">
	<div class="text">Quantidade de água sugerida (litros)</div>
	<div class="objective-data">
		<ion-input type="number" class="custom" inputmode="decimal" value={0.2} />
	</div>
</ion-row>
<ion-row class="suggestion-row">
	<div class="text">Sugestão automática</div>

	<ion-toggle
		enable-on-off-labels={true}
		checked={$automaticSuggestion}
		on:ionChange={onSuggestionClicked}
	/>
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

	.suggestion-row {
		justify-content: space-between;
		margin-left: 7.9vw;
		margin-right: 4.6vw;
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
