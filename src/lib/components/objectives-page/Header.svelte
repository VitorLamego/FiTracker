<script>
	import configIcon from '$lib/images/config.png';
	import backButton from '$lib/images/back-button.png';

	import { goto } from '$app/navigation';

	const backRoute = () => {
		goto('/');
	};

	const configRoute = () => {
		goto('/config');
	};
</script>

<div class="home-header">
	<ion-grid>
		<ion-row class="header-row">
			<button class="back-button" on:click={backRoute}><img src={backButton} alt="Back" /></button>
			<ion-text class="name-text">FiTracker</ion-text>
			<button class="config-button" on:click={configRoute}
				><img src={configIcon} alt="Configuration" /></button
			>
		</ion-row>
	</ion-grid>
</div>

<style>
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
</style>
