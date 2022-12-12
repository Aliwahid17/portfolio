<script lang='ts'>
  import { dateFormat } from "$lib/date";



export let heading : string;
export let date : string;
export let time : string;

</script>


<header class="my-5 m-2 ">

    
    <h1 class="font-semibold text-4xl first:capitalize  " > {heading} </h1>

    <p class="my-2" >
        <time datetime={date}>{dateFormat(date)}</time>&nbsp;—&nbsp;{time} minutes read
    </p>

    

</header>


