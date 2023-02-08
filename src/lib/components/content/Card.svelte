<script lang="ts">
	import { dateFormat } from '$lib/date';

	interface Value {
		postTitle: string;
		datePublished: string;
		slug: string;
	}

	export let post: Value[];
</script>

<section class="grid grid-cols-1 md:grid-cols-2  gap-2 mx-8 text-white ">
	{#each post as value}
		<section
			class="rounded-xl group  my-5 h-fit md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
		>
			<article class="rounded-[10px] bg-gray-900 p-2 ">
				<time datetime={value.datePublished} class="block text-xs text-gray-200 px-2 ">
					{dateFormat(value.datePublished)}
				</time>

				<a   href={`/blogs/${value.slug}`} data-sveltekit-preload-data="hover" >
					<h3 class="mt-0.5 px-2 text-xl font-bold text-white">
						{value.postTitle}
					</h3>
				</a>

				<div class=" mt-2 px-2 flex  items-center justify-start  ">
					<p class="font-semibold text-lg">Read More</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-5 w-6 transform transition-transform group-hover:translate-x-2  "
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</div>
			</article>
		</section>
	{/each}
</section>
