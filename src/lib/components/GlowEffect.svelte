<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const blob = document.getElementsByClassName('blob');
		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			blob[0]?.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};
	});
</script>

<div class="blob" />
<div class="blur" />

<style lang="postcss">
	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}

	.blob {
		background-color: white;
		height: 34vmax;
		aspect-ratio: 1;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		background: linear-gradient(to right, aquamarine, mediumpurple);
		animation: rotate 20s infinite;
		opacity: 0.8;
	}

	.blur {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 2;
		backdrop-filter: blur(12vmax);
	}
</style>
