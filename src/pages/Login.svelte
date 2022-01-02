<script>
  let email = "";
  let password = "";
  let username = "default username";
  let isMember = true;
  $: isEmpty = !name || !password || !username;

  function toggleMember() {}

  async function handleSubmit() {}
</script>

<section class="form">
  <h2 class="section-title">
    {#if isMember}sign in{:else}register{/if}
  </h2>
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <!-- single input -->
    <div class="form-control">
      <label for="email" />
      <input type="email" id="email" bind:value={email} />
    </div>
    <!-- end of single input -->
    <!-- single input -->
    <div class="form-control">
      <label for="password" />
      <input type="password" id="password" bind:value={password} />
    </div>
    <!-- end of single input -->
    {#if !isMember}
      <!-- single input -->
      <div class="form-control">
        <label for="username" />
        <input type="username" id="username" bind:value={username} />
      </div>
      <!-- end of single input -->
    {/if}
    {#if isEmpty}
      <p class="form-empty">Please fill all fields</p>
      <button
        class="btn btn-block btn-primary"
        type="button"
        disabled={isEmpty}
        class:disabled={isEmpty}>submit</button
      >
      <p class="register-link">
        Need to register?<button type="button" on:click={toggleMember()}
          >click here</button
        >
      </p>
    {:else}
      <p class="register-link">
        already a member?
        <button type="button" on:click={toggleMember}>click here</button>
      </p>
    {/if}
  </form>
</section>
