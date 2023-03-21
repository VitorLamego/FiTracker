<script lang="ts">
	export let pathImage: string;
	export let title: string;
	export let objectiveText: string;
	export let isWaterCard: boolean;
</script>

<div class={isWaterCard ? 'goal-card-water' : 'goal-card-strech'}>
	<ion-row class="card-content-row">
		<ion-row class="title-row">
			<div class="goal-image-card">
				<img src={pathImage} alt="Water" class="card-image" />
			</div>
			<p class="card-title">{title}</p>
		</ion-row>
		<div class="card-objective">{objectiveText}</div>
	</ion-row>
</div>

<style>
	/* Goal Card */
	.goal-card-water {
		width: 82.8vw;
		height: 8.2vh;
		background-color: #c9eafc;
		border-radius: 10px;
		margin-left: 7.9vw;
		margin-top: 4.2vh;
	}

	.goal-card-strech {
		width: 82.8vw;
		height: 8.2vh;
		background-color: #fcccc9;
		border-radius: 10px;
		margin-left: 7.9vw;
		margin-top: 4.2vh;
	}

	.card-image {
		width: 7.6vw;
		height: 3.5vh;
		margin-right: 1.3vw;
	}

	.title-row {
		align-items: center;
	}

	.card-title {
		color: black;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 16px;
	}

	.card-objective {
		vertical-align: middle;
		line-height: 8.2vh;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		text-align: center;
		font-weight: 700;
	}

	.card-content-row {
		justify-content: space-between;
		margin-left: 2.8vw;
		margin-right: 5.8vw;
		height: 8.2vh;
	}
</style>
