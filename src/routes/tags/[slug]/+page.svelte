<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Tags from "$lib/components/Tags.svelte";
  import { tag } from "$lib/tag";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { parseTag, posts } = data.contents;

  const content: any = [];
  const contentTag: any[] = [];
  for (let index = 0; index < posts.length; index++) {
    if (posts[index].tags.includes(data.slug)) {
      contentTag.push(parseTag[index]);
      content.push(posts[index]);
    }
  }
  
  

</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11  ">
    <span class="wave"> #️⃣</span>
    <p class="first-letter:capitalize">
      {data.slug}
    </p>
  </h2>
  <Tags tags={tag(data.contents.parseTag)} url="" />
</section>
<Blogs parseTag={contentTag} posts={content} />
