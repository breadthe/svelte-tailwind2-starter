<script>
  import { dark } from "./store"; // dark mode

  import AppearanceToggler from "./AppearanceToggler.svelte";

  export let title;

  const colors = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ];
  const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  let color = randomColor();
  let shade = randomShade();

  function clickMe() {
    color = randomColor();
    shade = randomShade();
  }

  function randomColor() {
    return colors[randomRange(0, colors.length - 1)];
  }

  function randomShade() {
    return shades[randomRange(0, shades.length - 1)];
  }

  function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
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
      <h1 class="hello leading-tight">{title}</h1>
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
    <div
      class="border-4 border-dashed max-w-sm p-4 rounded-lg space-y-2 {`border-${color}-${shade}`}">
      <p class:text-pink-100={$dark} class:text-pink-900={!$dark}>
        This next button demonstrates the use of
        <span class="highlight">@apply</span>
        . See
        <span class="highlight">global.css</span>
        for examples.
      </p>
      <button type="button" class="custom-btn" on:click={() => clickMe()}>
        Click Me
      </button>
    </div>
  </div>
</main>
