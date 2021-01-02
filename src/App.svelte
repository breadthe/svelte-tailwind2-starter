<script>
  import { dark } from "./store"; // dark mode

  import AppearanceToggler from "./AppearanceToggler.svelte";

  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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
  class:from-blue-700={$dark}
  class:to-purple-800={$dark}
  class:from-yellow-200={!$dark}
  class:to-pink-300={!$dark}>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-8">
    <div class:text-pink-100={$dark} class:text-pink-900={!$dark}>
      <h1 class="hello leading-tight">Hello {name}!</h1>
      Visit the
      <a
        href="https://svelte.dev/tutorial"
        class="border-b-4 border-dashed border-opacity-30
        hover:border-opacity-100"
        class:border-pink-100={$dark}
        class:border-pink-900={!$dark}>
        Svelte tutorial
      </a>
      to learn how to build Svelte apps.
    </div>
    <div class="flex items-center">
      <AppearanceToggler />
    </div>
    <div class="space-y-2">
      <p class:text-pink-100={$dark} class:text-pink-900={!$dark}>
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
