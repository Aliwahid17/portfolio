<script lang="ts">
  import Gmail from "$lib/assets/gmail.svg";
  import Github from "$lib/assets/github.svg";
  import Instagram from "$lib/assets/instagram.svg";
  import Twitter from "$lib/assets/twitter.svg";
  import Linkedin from "$lib/assets/linkedin.svg";
</script>

<section class="flex justify-evenly mt-8  ">
  <a href="/" target="_blank" class="hover:animate-pulse">
    <img src={Gmail} alt="gmail" class="w-9 h-9" loading="lazy" title="Gmail" />
  </a>
  <a href="/" target="_blank" class="hover:animate-pulse">
    <img
      src={Github}
      alt="github"
      class="w-9 h-9"
      loading="lazy"
      title="Github"
    />
  </a>
  <a href="/" target="_blank" class="hover:animate-pulse">
    <img
      src={Instagram}
      alt="instagram"
      class="w-9 h-9"
      loading="lazy"
      title="Instagram"
    />
  </a>
  <a href="/" target="_blank" class="hover:animate-pulse">
    <img
      src={Twitter}
      alt="twitter"
      class="w-9 h-9"
      loading="lazy"
      title="Twitter"
    />
  </a>
  <a href="/" target="_blank" class="hover:animate-pulse">
    <img
      src={Linkedin}
      alt="linkedin"
      class="w-9 h-9"
      loading="lazy"
      title="Linkedin"
    />
  </a>
</section>
