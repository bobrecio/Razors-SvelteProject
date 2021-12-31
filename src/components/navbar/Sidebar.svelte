<script>
  import navLinks from "../../constants/navLinks";
  import { link } from "svelte-routing";
  import globalStore from "../../stores/globalStore";
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <!-- header -->
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => {
          globalStore.toggleItem("sidebar", false);
        }}
      >
        <i class="fas fa-window-close" />
      </button>
    </div>
    <!-- site logo -->
    <img
      src="/assets/images/logo.svg"
      alt="razors logo"
      class="logo sidebar-logo"
    />
    <!-- links -->
    <ul class="sidebar-links">
      {#each navLinks as sideLink}
        <li>
          <a
            href={sideLink.url}
            use:link
            on:click={() => {
              globalStore.toggleItem("sidebar", false);
            }}>{sideLink.text}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>
