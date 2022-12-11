<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Loading from "$lib/components/Loading.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import { sortContent } from "$lib/content";

  const homeContents = async () => {
    const posts = await sortContent();
    let content: any[] = [];

    for (let index = 0; index < 4; index++) {
      content.push(posts[index]);
    }

    return content;
  };

  // sortContent().then(a => a.map(b => console.log(b.datePublished.splice(10))))

</script>

<main>
  <Intro />

  {#await homeContents()}
    <Loading />
  {:then homeContent}
    <Blogs posts={homeContent} />
  {/await}

  <Projects />
</main>
