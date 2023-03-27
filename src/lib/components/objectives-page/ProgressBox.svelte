<script lang="ts">
	export let boxContent: string;
	export let label: String;

	export let isWater: boolean = true;
</script>

<div class="progress-box">
	<div class="number-box">{isWater ? boxContent + 'L' : boxContent}</div>
	<div class="card-label">{label}</div>
</div>

<style>
	.progress-box {
		width: 32.3vw;
		height: 8.4vh;
		font-family: 'Poppins', sans-serif;
		font-weight: 800;
		color: white;
	}

	.number-box {
		height: 5.8vh;
		background-color: #5a5486;
		border-radius: 20px;
		font-size: 22px;
		text-align: center;
		vertical-align: middle;
		line-height: 5.8vh;
	}

	.card-label {
		font-size: 12px;
	}
</style>
