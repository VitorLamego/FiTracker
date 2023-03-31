<script lang="ts">
	import { fade } from 'svelte/transition';
	import { notifications } from '$lib/toastNotifications';
	import { goto } from '$app/navigation';
	import { isWaterNotification, waterIndications, waterProgress, breakProgress } from '$lib/store';

	const waterPage = () => {
		goto('/water-page', { replaceState: true });
	};

	const breakPage = () => {
		goto('/break-page', { replaceState: true });
	};

	const alreadyTookWater = () => {
		waterProgress.update((value) => value + $waterIndications);
	};

	const alreadyTookBreak = () => {
		breakProgress.update((value) => value + 1);
	};
</script>

{#if $notifications}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class={$isWaterNotification ? 'notifications water' : 'notifications break'}
		on:click={() => ($isWaterNotification ? waterPage() : breakPage())}
	>
		{#each $notifications as notification}
			<div role="alert" class="notification" transition:fade>
				{notification}
			</div>
			<button
				class={$isWaterNotification ? 'confirm-button water-text' : 'confirm-button break-text'}
				on:click={() => ($isWaterNotification ? alreadyTookWater() : alreadyTookBreak())}
				>{$isWaterNotification ? 'Já tomei!' : 'Já realizei!'}</button
			>
		{/each}
	</div>
{/if}

<style>
	.notifications {
		position: absolute;
		width: 100%;
		text-align: center;
		border-radius: 10px;
		color: black;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
	}

	.water {
		background-color: #c9eafc;
	}

	.break {
		background-color: #fcccc9;
	}

	.notification {
		height: 5.7vh;
		margin-top: 7vh;
	}

	.confirm-button {
		background-color: white;
		width: 100%;
		height: 3.7vh;
		box-shadow: 0px -4px 4px #00000025;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		font-weight: 600;
		font-size: 14px;
	}

	.water-text {
		color: #24abfa;
	}

	.break-text {
		color: #de7872;
	}
</style>
