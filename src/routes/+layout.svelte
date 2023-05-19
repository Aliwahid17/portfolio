<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { inject } from '@vercel/analytics';
	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import GlowEffect from '$lib/components/GlowEffect.svelte';
	import { typewriter } from '$lib/typewriter';
	import { children, element } from 'svelte/internal';
	import Blogs from '$lib/components/Blogs.svelte';

	let scriptEl: any;
	onMount(() => {
		const typewriters = document.querySelectorAll('.typewriter');
		typewriters.forEach((element) => {
			element.addEventListener('mouseover', typewriter);
		});

		// const blob = document.getElementsByClassName('blob');
		// window.onpointermove = (event) => {
		// 	const { clientX, clientY } = event;

		// 	blob[0]?.animate(
		// 		{
		// 			left: `${clientX}px`,
		// 			top: `${clientY}px`
		// 		},
		// 		{ duration: 3000, fill: 'forwards' }
		// 	);
		// };

		const container = document.getElementById('container');
		console.log(container);
		const blob = document.getElementById('blob');
		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			const boundingRect = blob!.getBoundingClientRect();
			const blobWidth = boundingRect.width;
			const blobHeight = boundingRect.height;

			// Calculate the maximum left and top values to prevent overflow
			// const maxLeft = window.innerWidth - blobWidth;
			// const maxTop = window.innerHeight - blobHeight;

			const maxLeft = document.documentElement.scrollWidth - blobWidth + 70;
			const maxTop = document.documentElement.scrollHeight - blobHeight + 85;

			// Calculate the left and top values
			let left = clientX - blobWidth / 4;
			let top = clientY - blobHeight / 4;

			// left = Math.max(0, Math.min(maxLeft, left));
			// top = Math.max(0, Math.min(maxTop, top));

			left = Math.max(0, Math.min(maxLeft, left + window.pageXOffset));
			top = Math.max(0, Math.min(maxTop, top + window.pageYOffset ));

			// Check if the left value is greater than the maximum allowed value
			// if (left > maxLeft) {
			// 	left = maxLeft;
			// }

			// // Check if the top value is greater than the maximum allowed value
			// if (top > maxTop) {
			// 	top = maxTop;
			// }

			blob!.animate(
				{
					left: `${left}px`,
					top: `${top}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};

		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
	inject();

	let x = 0;
	let y = 0;
</script>

<svelte:head>
	<!-- Config options -->
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://www.wahidali.dev/proxytown';

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`);

					const gtmId = new URL(url).searchParams.get('id');
					gtmId && proxyUrl.searchParams.append('id', gtmId);

					return proxyUrl;
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`);

					return proxyUrl;
				}

				return url;
			}
		};
	</script>

	<!-- `partytownSnippet` is inserted here -->
	<script bind:this={scriptEl}></script>

	<script
		type="text/partytown"
		async
		src="https://www.googletagmanager.com/gtag/js?id=G-MGP9W3XBHL"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-MGP9W3XBHL', {
			page_path: window.location.pathname
		});
	</script>
</svelte:head>

<!-- <GlowEffect /> -->
<!--
	
-->

<!-- <div class="blob" />
	
	<div class="blur" /> -->
<!-- <div class="blob " /> -->
<!-- <div class="blob"></div> -->
<!-- <div class="blob"/> -->
<!-- <div class="  backdrop-blur-3xl"> -->
<!-- <div class="blob"></div> -->
<!-- <div class="blur"></div> -->
<!-- <Footer />  -->
<!-- </div> -->
<!-- 
	<div class="blur" /> -->

<!-- <div id="container" class="backdrop-blur-3xl">
		<div class="blob" /> -->
<!-- <div class="backdrop-blur-3xl"> -->
<!--
				<div id="container" class="backdrop-blur-3xl"> -->
<!-- <div id="container"> -->

	
	<div id="blob" />
	<!-- <div class="blur"></div> -->
	<!-- <div class=""> -->
		<div class="backdrop-blur-2xl">
		<Navbar />
<!-- <div class="blur"></div> -->
<slot />
<!-- <Footer /> -->
</div>
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
