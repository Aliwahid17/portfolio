<script lang="ts">
	import { dateFormat } from '$lib/date';
	import type { Github, GithubColor } from 'src/app';
	export let value: Github[] = [];
	export let color: GithubColor | undefined;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mx-8 ">
	{#each value as content}
		<article
			class="rounded-xl my-5 md:mx-2 bg-gradient-to-r h-fit from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
		>
			<div class="rounded-[10px]   bg-gray-900 p-2 ">
				<div class="flex justify-between items-center ">
					<time datetime={content.created_at} class="block text-xs text-gray-400 px-2 ">
						{dateFormat(content.created_at)}
					</time>

					<time datetime={content?.pushed_at} class="block text-xs text-gray-400 px-2 ">
						Recent Commit: {dateFormat(content.pushed_at)}
					</time>
				</div>

				<a href={content.svn_url} target="_blank" rel="noreferrer">
					<h3 class="mt-0.5 px-2 text-lg font-bold text-white first-letter:capitalize">
						{content.name}
					</h3>
				</a>

				<p class="mt-0.5 px-2 text-sm font-medium  text-white">
					{content.description}
				</p>

				<div class="mt-4 mb-2 flex flex-wrap gap-1 px-2   items-center text-white ">
					<div class="mr-2  ">
						<span
							class=" w-3 h-3 rounded-full inline-block relative top-[1px]"
							style="background-color: {`${
								content.language && color  ? color[content.language].color : '#06b6d4'
							}`} "
						/>
						<span>{`${content.language}`}</span>
					</div>

					<div class="flex items-center mr-2">
						<svg
							style="fill: rgb(201, 206, 211);"
							aria-label="stars"
							viewBox="0 0 16 16"
							version="1.1"
							width="16"
							height="16"
							role="img"
							><path
								fill-rule="evenodd"
								d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
							/></svg
						>
						&nbsp;<span>{content.stargazers_count}</span>
					</div>

					<div class="flex items-center mr-2">
						<svg
							style="fill: rgb(201, 206, 211);"
							aria-label="fork"
							viewBox="0 0 16 16"
							version="1.1"
							width="16"
							height="16"
							role="img"
							><path
								fill-rule="evenodd"
								d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
							/></svg
						>
						&nbsp; <span>{content.forks}</span>
					</div>
				</div>
			</div>
		</article>
	{/each}
	<!-- {#each value as content}
		<article
			class="rounded-xl my-5 md:mx-2 bg-gradient-to-r h-fit from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
		>
			<div class="rounded-[10px]   bg-gray-900 p-2 ">
				<div class="flex justify-between items-center ">
					<time datetime={content.created_at} class="block text-xs text-grey-500 px-2 ">
						{dateFormat(content.created_at)}
					</time>

					<time datetime={content?.pushed_at} class="block text-xs text-gray-400 px-2 ">
						Recent Commit: {dateFormat(content.pushed_at)}
					</time>
				</div>

				<a href={content.svn_url} target="_blank" rel="noreferrer">
					<h3 class="mt-0.5 px-2 text-lg font-bold text-white first-letter:capitalize">
						{content.name}
					</h3>
				</a>

				<p class="mt-0.5 px-2 text-sm font-medium  text-white">
					{content.description}
				</p>

				<div class="mt-4 mb-2 flex flex-wrap gap-1 px-2   items-center text-white ">
					<div class="mr-2  ">
						<span
							class=" w-3 h-3 rounded-full inline-block relative top-[1px]"
							style="background-color: {`${
								content.language && color  ? color[content.language].color : '#06b6d4'
							}`} "
						/>
						<span>{`${content.language}`}</span>
					</div>

					<div class="flex items-center mr-2">
						<svg
							style="fill: rgb(201, 206, 211);"
							aria-label="stars"
							viewBox="0 0 16 16"
							version="1.1"
							width="16"
							height="16"
							role="img"
							><path
								fill-rule="evenodd"
								d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
							/></svg
						>
						&nbsp;<span>{content.stargazers_count}</span>
					</div>

					<div class="flex items-center mr-2">
						<svg
							style="fill: rgb(201, 206, 211);"
							aria-label="fork"
							viewBox="0 0 16 16"
							version="1.1"
							width="16"
							height="16"
							role="img"
							><path
								fill-rule="evenodd"
								d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
							/></svg
						>
						&nbsp; <span>{content.forks}</span>
					</div>
				</div>
			</div>
		</article>
	{/each} -->
</div>
