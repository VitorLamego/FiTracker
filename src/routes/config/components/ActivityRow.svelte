<script lang="ts">
	import { startHour, finishHour } from '$lib/store/store';
	import { imask } from '@imask/svelte';

	const hourMask = {
		mask: '[#]0:&0',
		definitions: {
			'#': /[0-2]/,
			'&': /[0-5]/
		}
	};

	function updateHour(isStartHour: boolean) {
		const startHourInput = document.getElementById('startHour') as HTMLInputElement;
		const finishHourInput = document.getElementById('finishHour') as HTMLInputElement;

		const startContent = startHourInput?.value;
		const finishContent = finishHourInput?.value;

		const startSplitTime = startContent.split(':');
		const finishSplitTime = finishContent.split(':');

		const preStartHourValue = $startHour;
		const preFinishHourValue = $finishHour;

		if (startContent != undefined && finishContent != undefined) {
			const startHourInSeconds = parseInt(startSplitTime[0]) * 3600;
			const startMinutesInSeconds = parseInt(startSplitTime[1]) * 60;
			const startFinalTime = startHourInSeconds + startMinutesInSeconds;

			const finishHourInSeconds = parseInt(finishSplitTime[0]) * 3600;
			const finishMinutesInSeconds = parseInt(finishSplitTime[1]) * 60;
			const finishFinalTime = finishHourInSeconds + finishMinutesInSeconds;

			if (isStartHour) {
				if (startFinalTime > finishFinalTime) {
					startHourInput.value = preStartHourValue;
					return;
				}

				startHour.set(startContent);
			} else {
				if (finishFinalTime < startFinalTime) {
					finishHourInput.value = preFinishHourValue;
					return;
				}
				finishHour.set(finishContent);
			}
		}
	}
</script>

<ion-grid>
	<ion-row class="activity-row">
		<div class="hour-input">
			<ion-input
				class="custom"
				type="text"
				inputmode="numeric"
				value={$startHour}
				id="startHour"
				use:imask={hourMask}
				on:ionBlur={() => updateHour(true)}
			/>
		</div>
		<div class="text">a</div>
		<div class="hour-input">
			<ion-input
				class="custom"
				type="text"
				inputmode="numeric"
				value={$finishHour}
				id="finishHour"
				use:imask={hourMask}
				on:ionBlur={() => updateHour(false)}
			/>
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
