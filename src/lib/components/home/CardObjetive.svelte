<script lang="ts">
	import { onMount } from 'svelte';
	import type { Animation } from '@ionic/core';
	import { createAnimation } from '@ionic/core';
	import { goto } from '$app/navigation';

	export let pathImage: string;
	export let title: string;
	export let objective: number;
	export let actualProgress: number;
	export let isWaterCard: boolean;

	let fillCard: Element;
	let animation: Animation;

	const getProgressPercentage = () => {
		let percentage: number = actualProgress / objective;
		if (percentage > 1) percentage = 1;
		if (visualViewport != undefined) return percentage * visualViewport.width * 0.828;
		else return percentage * 300;
	};

	const routePage = () => {
		if (isWaterCard) goto('/water-page', { replaceState: true });
		else goto('/break-page', { replaceState: true });
	};

	onMount(() => {
		const fillWaterAnimation = createAnimation()
			.addElement(fillCard)
			.duration(1000)
			.keyframes([
				{ offset: 0, width: '0px' },
				{ offset: 1, width: getProgressPercentage() + 'px' }
			]);

		animation = createAnimation().duration(1000).iterations(1).addAnimation([fillWaterAnimation]);

		animation.play();
	});
</script>

<button on:click={routePage}>
	<div class={isWaterCard ? 'goal-card-water' : 'goal-card-strech'}>
		<div
			class={isWaterCard ? 'fill-card fill-color-water' : 'fill-card fill-color-strech'}
			bind:this={fillCard}
		/>
		<div class="content-card">
			<ion-row class="card-content-row">
				<ion-row class="title-row">
					<div class="goal-image-card">
						<img src={pathImage} alt="Water" class="card-image" />
					</div>
					<p class="card-title">{title}</p>
				</ion-row>
				<div class="card-objective">
					{isWaterCard
						? actualProgress.toFixed(1) + 'L / ' + objective + 'L'
						: actualProgress + ' / ' + objective}
				</div>
			</ion-row>
		</div>
	</div>
</button>

<style>
	/* Goal Card */
	.goal-card-water {
		width: 82.8vw;
		height: 8.2vh;
		background-color: #c9eafc;
		box-shadow: 2px 2px 4px #1229f5;
		border-radius: 10px;
		margin-left: 7.9vw;
		margin-top: 4.2vh;
		position: relative;
	}

	.goal-card-water:active {
		transform: translateY(2px);
	}

	.goal-card-strech {
		width: 82.8vw;
		height: 8.2vh;
		background-color: #fcccc9;
		box-shadow: 2px 2px 4px #f51212;
		border-radius: 10px;
		margin-left: 7.9vw;
		margin-top: 4.2vh;
		position: relative;
	}

	.goal-card-strech:active {
		transform: translateY(2px);
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

	.fill-card {
		height: 8.2vh;
		top: 0;
		left: 0;
		position: absolute;
		border-radius: 10px;
	}

	.fill-color-water {
		background-color: #24abfa;
		width: 150px;
	}

	.fill-color-strech {
		background-color: #de7872;
		width: 90px;
	}

	.content-card {
		position: absolute;
		top: 0;
		width: 82.8vw;
	}

	button {
		background-color: transparent;
		color: black;
	}
</style>
