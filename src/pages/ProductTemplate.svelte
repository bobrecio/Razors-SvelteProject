<script>
  export let id;
  export let location;
  // global store
  import {addToCart} from "../stores/cart";
  import products from "../stores/defaultProduct";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";
  import globalStore from "../stores/globalStore.js";

  $: product = $products.find(item => item.id == parseInt(id));
</script>
<svelte:head>
    <title>Razors: {product.title}(${product.price})</title>
</svelte:head>
{#if !product}
    <Loading />
{:else}
<section class="single-product">
<a href="/products" use:link class="btn btn-primary">back to products</a>
<div class="single-product-container">
    <article class="single-product-image">
        <img src={product.image} alt={product.title} />
    </article>
    <article>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
    </article>
    <button class="btn btn-primary btn-block" on:click="{() => { 
        //console.log(product);
        addToCart(product);
        globalStore.toggleItem('cart',true);
    }}">
        add to cart
    </button>
</div>
</section>
{/if}