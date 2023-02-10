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

	let scriptEl: any;
	onMount(() => {
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
</script>

<svelte:head>
	<!-- Config options -->
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://wahidali.dev/proxytown';

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
		src="https://www.googletagmanager.com/gtag/js?id=G-8P4ZG0K93R"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-8P4ZG0K93R',{
			page_path: window.location.pathname
		});
	</script>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9331685192408853"
		crossorigin="anonymous"
	></script>
</svelte:head>

<Navbar />
<slot />
<Footer />
