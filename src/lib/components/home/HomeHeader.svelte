<script>
	import '@fontsource/poppins/700.css';

	import configIcon from '$lib/images/config.png';
</script>

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

<style>
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
