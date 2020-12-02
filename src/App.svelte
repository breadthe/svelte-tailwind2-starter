<script>
  export let name;

  let dark = false; // dark mode
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- Note: "class:dark" is equivalent (and short for) "class:dark={dark}" or "class:dark={dark === true}" -->
<main
  class="bg-gradient-to-br"
  class:dark
  class:from-blue-700={dark}
  class:to-purple-800={dark}
  class:from-yellow-200={!dark}
  class:to-pink-300={!dark}>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-4">
    <h1>Hello {name}!</h1>
    <div class:text-pink-100={dark} class:text-pink-900={!dark}>
      Visit the
      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
      to learn how to build Svelte apps.
    </div>
    <div class="flex items-center">
      <button
        type="button"
        class="flex items-center bg-gradient-to-br px-4 py-2 rounded shadow-sm
        space-x-2"
        class:from-yellow-200={dark}
        class:to-yellow-500={dark}
        class:text-pink-900={dark}
        class:from-blue-500={!dark}
        class:to-blue-800={!dark}
        class:text-pink-100={!dark}
        on:click={() => (dark = !dark)}>
        {#if dark}
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16">
            <path
              d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12
              0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998
              2.999 2.999 0 113-2.998z"
              stroke="currentColor"
              stroke-linecap="square" />
          </svg>
          <span>Light Mode</span>
        {:else}
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16">
            <path
              d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
              stroke="currentColor"
              stroke-linejoin="round" />
          </svg>
          <span>Dark Mode</span>
        {/if}
      </button>
    </div>
    <div class="space-y-2">
      <p class:text-pink-100={dark} class:text-pink-900={!dark}>
        This next button demonstrates the use of
        <span class="highlight">@apply</span>
        . See
        <span class="highlight">global.css</span>
        for examples.
      </p>
      <button type="button" class="custom-btn">Custom Button</button>
    </div>
  </div>
</main>
