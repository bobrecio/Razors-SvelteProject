<script>
  export let title = "";
  import products from "../../stores/defaultProduct";
  import Product from "./Product.svelte";
  import Loading from "../Loading.svelte";
  // $-prefix automatically handles subscribe/unsubscripe at mount/destroy
  console.log($products);
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    <!-- the $ always gives the latest version of the store -->
    {#each $products as product (product.id)}
      <Product {product} />
      {:else}
        <Loading />
    {/each}
  </div>
</section>
