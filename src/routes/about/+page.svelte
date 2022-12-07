<script lang="ts">
import Intro from "$lib/components/Intro.svelte";

// console.log(document.querySelector(body))

// document.querySelector(document).ready(function(){
//     animateDiv('.rust');
//     animateDiv('.typescript');
//     animateDiv('.c');
//     animateDiv('.cplus');
//     animateDiv('.python');
// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = document.querySelector(window).height() - 50;
//     var w = document.querySelector(window).width() - 50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(myclass:any){
//     var newq = makeNewPosition();
//     document.querySelector(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
//       animateDiv(myclass);        
//     });
    
// };

// console.log(document.)



const newPosition = () => {
  
}



</script>

<Intro />


<section class="bg-[#181818] text-white pb-11 ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      Languages <span class="wave">💻</span>
    </h2>

    <div class="flex justify-evenly " >

      
      <img src="/about/rust.svg" alt="rust" width="45" height="45"  class="  rust  " >
      <img src="/about/python.svg" alt="python" width="45" height="45" class="  python " >
      <img src="/about/typescript.svg" alt="typescript" width="45" height="45" class=" typescript  " >
      <img src="/about/c.svg" alt="c" width="45" height="45" class=" c  " >
      <img src="/about/cplus.svg" alt="cplus" width="45" height="45" class=" cplus  " >
    </div>
  </section>
</section>


<section class=" text-white pb-11 ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      FrameWorks <span class="wave">👩‍💻</span>
    </h2>

    <div class="flex justify-evenly " >

      
      <img src="/about/react.svg" alt="react" width="45" height="45" class="  react " >
      <img src="/about/django.svg" alt="django" width="45" height='45'  class="  django  " >
      <img src="/about/next-js.svg" alt="next-js" width="45" height="45" class=" next-js  "  >
      <img src="/about/sveltekit.svg" alt="sveltekit" width="45" height="45" class=" sveltekit  " >
      <img src="/about/tailwind-css.svg" alt="tailwind-css" width="45" height="45" class=" tailwind-css  " >
    </div>
  </section>
</section>
