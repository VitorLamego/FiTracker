<script lang="ts">
	import configIcon from '$lib/images/config.png';
	import waterBottle from '$lib/images/water.png';
	import breakImage from '$lib/images/break.png';
	import SectionHeader from '$lib/components/home/SectionHeader.svelte';
	import CardObjective from '$lib/components/home/CardObjetive.svelte';

	import { waterProgress, waterObjective } from '$lib/store';

	import '@fontsource/poppins/700.css';

	let waterQuantity: number = 0.0;
	let _waterObjective: number;

	waterProgress.subscribe((value) => (waterQuantity = value));
	waterObjective.subscribe((value) => (_waterObjective = value));
</script>

<div>
	<div class="home-header">
		<ion-grid>
			<ion-row class="header-row">
				<div class="welcome-box">
					<ion-text>Olá, </ion-text>
					<ion-text class="name-text">Carla!</ion-text>
				</div>
				<button class="config-button"><img src={configIcon} alt="Configuration" /></button>
			</ion-row>
		</ion-grid>
	</div>

	<SectionHeader title="Objetivos Diários" />
	<div class="cards-container">
		<CardObjective
			pathImage={waterBottle}
			objective={_waterObjective}
			actualProgress={waterQuantity}
			title="Água"
			isWaterCard={true}
		/>
		<CardObjective
			pathImage={breakImage}
			objective={7}
			actualProgress={6}
			title="Alongamento"
			isWaterCard={false}
		/>
	</div>
	<SectionHeader title="Histórico" />
	<div class="historic-container" />
</div>

<style>
	.cards-container {
		margin-bottom: 6.2vh;
	}
	.historic-container {
		background-color: rgba(177, 151, 252, 0.19);
		display: flex;
		height: 100%;
		margin-top: 4vh;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		box-shadow: 0px -4px 4px rgba(255, 255, 255, 0.25);
	}
	/* Home Header */
	.name-text {
		font-weight: bold;
	}

	.header-row {
		align-items: center;
		align-content: space-around;
		justify-content: space-between;
		margin-left: 7.9vw;
		margin-right: 7.9vw;
	}

	.home-header {
		margin-top: 6.7vh;
		margin-bottom: 6.2vh;
	}

	.welcome-box {
		text-align: justify;
		justify-content: center;
	}

	ion-text {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-size: 30px;
	}

	/* Settings button */
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
</style>
