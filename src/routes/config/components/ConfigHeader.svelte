<script>
	import { goto } from '$app/navigation';

	import backButton from '$lib/images/back-button.png';

	const backRoute = () => {
		goto('/');
	};
</script>

<div class="home-header">
	<ion-grid>
		<ion-row class="header-row">
			<button class="back-button" on:click={backRoute}><img src={backButton} alt="Back" /></button>
			<ion-text class="name-text">Configurações</ion-text>
			<div class="header-align" />
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
		margin-bottom: 3.6vh;
	}

	.home-header {
		margin-top: 6.7vh;
	}

	ion-text {
		color: white;
		font-family: 'Poppins', sans-serif;
		font-size: 25px;
	}

	.back-button {
		height: 45px;
		width: 45px;
		background-color: transparent;
	}

	.header-align {
		height: 45px;
		width: 45px;
	}
</style>
