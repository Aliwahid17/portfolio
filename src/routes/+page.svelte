<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  const { posts, parseTag } = data;
  const homeContent: any[] = [];
  for (let index = 0; index < 4; index++) {
    homeContent.push(posts[index]);
  }
</script>

<main>
  <Intro />
  <Blogs posts={homeContent} {parseTag} />
  <Projects />
</main>
