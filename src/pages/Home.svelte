<script>
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";
  import Featured from "../components/Products/Featured.svelte";
</script>
<svelte:head>
  <title>
    Razors: Home
  </title>
  </svelte:head>
<Hero>
  <a href="/products" class="btn btn-primary btn-hero" use:link>shop now</a>
</Hero>
<Featured title="featured" />
