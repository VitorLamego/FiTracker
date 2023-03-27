<script>
	import { startHour, finishHour } from '$lib/store';
</script>

<ion-grid>
	<ion-row class="activity-row">
		<div class="hour-input">
			<ion-input class="custom" type="text" inputmode="numeric" value={$startHour} />
		</div>
		<div class="text">a</div>
		<div class="hour-input">
			<ion-input class="custom" type="text" inputmode="numeric" value={$finishHour} />
		</div>
	</ion-row>
</ion-grid>

<style>
	.hour-input {
		width: 33.3vw;
		height: 4.1vh;
		background-color: #5a5486;
		border-radius: 4.27px;
		box-shadow: 0px 4px 4px #00000025;
		text-align: center;
		vertical-align: middle;
		line-height: 4.1vh;
		color: white;
		font-weight: 700;
		font-family: 'Poppins', sans-serif;
	}
	.activity-row {
		justify-content: space-between;
		margin-left: 11vw;
		margin-right: 11vw;
		margin-top: 3.5vh;
		vertical-align: middle;
		line-height: 4.1vh;
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

	.text {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 14px;
	}
</style>
