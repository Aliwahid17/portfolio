<script lang="ts">
  import Gmail from "$lib/assets/gmail.svg";
  import Github from "$lib/assets/github.svg";
  import Instagram from "$lib/assets/instagram.svg";
  import Twitter from "$lib/assets/twitter.svg";
  import Linkedin from "$lib/assets/linkedin.svg";
  const subject = "Need to Talk"
</script>

<section class="flex justify-evenly mt-8  ">
  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=contact@wahidali.dev&su=${subject}`} target="_blank" rel="noreferrer" class="hover:animate-pulse">
    <img src={Gmail} alt="gmail" class="w-9 h-9" loading="lazy" title="Gmail" />
  </a>
  <a href="https://github.com/aliwahid17" target="_blank" class="hover:animate-pulse" rel="noreferrer">
    <img
      src={Github}
      alt="github"
      class="w-9 h-9"
      loading="lazy"
      title="Github" width="36" height="36"
    />
  </a>
  <a href="https://www.instagram.com/ali_wahid_17/" target="_blank" class="hover:animate-pulse" rel="noreferrer">
    <img
      src={Instagram}
      alt="instagram"
      class="w-9 h-9"
      loading="lazy"
      title="Instagram" width="36" height="36"
    />
  </a>
  <a href="https://twitter.com/ali_wahid_17/" target="_blank" class="hover:animate-pulse" rel="noreferrer">
    <img
      src={Twitter}
      alt="twitter"
      class="w-9 h-9"
      loading="lazy"
      title="Twitter" width="36" height="36"
    />
  </a>
  <a href="https://www.linkedin.com/in/aliwahid1704/" target="_blank" class="hover:animate-pulse" rel="noreferrer">
    <img
      src={Linkedin}
      alt="linkedin"
      class="w-9 h-9"
      loading="lazy"
      title="Linkedin" width="36" height="36"
    />
  </a>
</section>
