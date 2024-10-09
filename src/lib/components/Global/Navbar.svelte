<script lang="ts">
	let navOpen = false;
</script>

<nav class="bg-nav m-6 p-4 rounded-xl ">
	<div class="flex justify-between items-center" >
		<a
			data-sveltekit-preload-data="hover"
			href="/"
			class="text-white font-mono font-extrabold text-2xl flex group"
		>
			<div>Wahid Ali</div>
			<div class="group-hover:wave">👋</div>
		</a>

		<button
			class="flex text-gray-500 w-10 h-10 relative focus:outline-none"
			on:click={() => (navOpen = !navOpen)}
			title="menu"
		>
			<div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<span
					aria-hidden="true"
					class={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
						!navOpen ? ' -translate-y-1.5' : 'rotate-45'
					}`}
				/>
				<span
					aria-hidden="true"
					class={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
						navOpen && 'opacity-0'
					} `}
				/>
				<span
					aria-hidden="true"
					class={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
						navOpen ? '-rotate-45' : ' translate-y-1.5'
					}`}
				/>
			</div>
		</button>
	</div>
</nav>
