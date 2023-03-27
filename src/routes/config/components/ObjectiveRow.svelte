<script>
	import waterBottle from '$lib/images/water-bottle.svg';
	import breakImage from '$lib/images/break.svg';

	import { waterObjective, breakObjective } from '$lib/store';
</script>

<ion-grid>
	<ion-row class="objective-row">
		<ion-row>
			<img class="objective-image" src={waterBottle} alt="Water" />
			<div class="objective-data">
				<ion-input type="number" class="custom" inputmode="decimal" value={$waterObjective} />
			</div>
		</ion-row>
		<ion-row>
			<img class="objective-image" src={breakImage} alt="Water" />
			<div class="objective-data">
				<ion-input type="number" class="custom" inputmode="numeric" value={$breakObjective} />
			</div>
		</ion-row>
	</ion-row>
</ion-grid>

<style>
	.objective-row {
		justify-content: space-between;
		margin-top: 3.5vh;
		margin-left: 8.5vw;
		margin-right: 8.5vw;
	}

	.objective-image {
		width: 13.3vw;
		height: 6.2vh;
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
</style>
