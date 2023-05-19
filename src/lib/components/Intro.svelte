<script lang="ts">
	// import { onMount } from 'svelte';
	import concurrent from 'svelte-typewriter/modes/concurrent';
	import Social from './Social.svelte';
	import StarEffect from './StarEffect.svelte';
	// let index = 0,interval = 1000;

	// const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

	// const animate = (star: any) => {
	// 	star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
	// 	star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

	// 	star.style.animation = 'none';
	// 	star.offsetHeight;
	// 	star.style.animation = '';
	// };

	// onMount(() => {
	// 	for (const star of document.getElementsByClassName('magic-star')) {
	// 		setTimeout(() => {
	// 			animate(star);

	// 			setInterval(() => animate(star), 1000);
	// 		}, index++ * (interval / 3));
	// 	}
	// });
</script>

<!-- <section class="text-white my-16    mx-2   ">
  <section
    class="flex justify-center items-center font-bold font-mono text-3xl md:text-4xl "
  >
    <h1 use:concurrent={{ interval: 150 }}>Hi,I'm Wahid Ali</h1><span class="wave">👋</span>
  </section>

  <section
    class=" font-sans font-medium flex justify-center items-center mt-7 mx-2 md:mx-20 lg:mx-32 "
  >
    <article class="  text-lg md:text-2xl lg:max-w-2xl lg:text-3xl  ">
      <p class=" mx-3  md:mx-5  ">I'm a self-taught <span class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  " style="line-height: 45px;">Full Stack Developer</span> with good knowledge and experience with the latest <span class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  " style="line-height: 45px;">Web Technologies.</span></p>
      <p class=" mt-7 mx-3 md:mx-5 ">My main goal is to work with <span class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  " style="line-height: 45px;" >Talented People</span> through my work and technical content.</p>
    </article>
  </section>

  <div class="mx-2 md:mx-16 lg:mx-72 xl:mx-96">
    <Social />
  </div>
</section> -->

<section class="py-16 mx-2">
	<div class="flex justify-center items-center font-semibold text-3xl md:text-4xl lg:text-5xl ">
		<h1>Hi all, I'm Wahid Ali<span class="wave">👋</span></h1>
	</div>

	<!-- <div class="flex justify-center items-center mt-7 mx-2"> -->

	<!-- I'm a self-taught Full Stack Developer with good knowledge and experience with the latestWeb Technologies.
      My main goal is to work with Talented People through my work and technical content. -->

	<article class="pt-7 mx-2 grid gap-6 text-lg md:text-2xl  lg:text-3xl md:mx-20 lg:mx-36">
	<!-- <article class="pt-7 mx-2 flex flex-col gap-6 text-lg md:text-2xl lg:max-w-2xl lg:text-3xl justify-center items-center"> -->
		<p class="" >
			Hey there! I'm a self-taught <StarEffect>Full Stack Developer</StarEffect> who loves exploring
			the latest <StarEffect>web technologies.</StarEffect> I have extensive knowledge and experience
			in this field and I'm excited to put my skills to work on <StarEffect
				>innovative projects.</StarEffect
			>
		</p>

		<p>
			I'm passionate about collaborating with brilliant minds and creating engaging technical
			content. My ultimate goal is to surround myself with <StarEffect
				>talented individuals</StarEffect
			> through my work and have a positive impact on the world. <StarEffect
				>Let's team up</StarEffect
			> and create something amazing together!
		</p>
	</article>
	<!-- </div> -->

	<!-- <p>
		Sometimes I'll start a line of code and I
		<span class="magic">
			<span class="magic-star">
				<svg viewBox="0 0 512 512">
					<path
						d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
					/>
				</svg>
			</span>
			<span class="magic-star">
				<svg viewBox="0 0 512 512">
					<path
						d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
					/>
				</svg>
			</span>
			<span class="magic-star">
				<svg viewBox="0 0 512 512">
					<path
						d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
					/>
				</svg>
			</span>
			<span class="magic-text">don't even know</span>
		</span>
		where it's going.
	</p> -->
</section>
