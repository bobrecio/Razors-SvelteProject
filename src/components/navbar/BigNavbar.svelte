<script>
  import CartButton from "../Cart/CartButton.svelte";
  import { link } from "svelte-routing";
  import navLinks from '../../constants/navLinks.js';
  import LoginLink from '../LoginLink.svelte';
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each navLinks as navLink}
        <li>
            <a href={navLink.url} use:link>{navLink.text}</a>
        </li>
      {/each}
      </ul>
      <!-- nav logl -->
      <a href="/" use:link class="nav-log big-logo">
        <img src="./assets/images/logo.svg" alt="razors logo" />
      </a>
      <a href="/login" use:link><LoginLink /></a>
      <!-- cart toggle -->
      <CartButton />
    </div>
  </div>
</nav>
