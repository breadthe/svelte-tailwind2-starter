<script>
  import { dark } from "./store";
</script>

<style>

</style>

<button
  type="button"
  class="flex items-center bg-gradient-to-br px-4 py-2 rounded shadow-sm
  space-x-2 border-4 border-dashed border-opacity-30"
  class:from-yellow-200={$dark}
  class:to-yellow-500={$dark}
  class:text-pink-900={$dark}
  class:border-orange-500={$dark}
  class:from-blue-500={!$dark}
  class:to-blue-800={!$dark}
  class:text-pink-100={!$dark}
  class:border-blue-300={!$dark}
  on:click={() => ($dark = !$dark)}>
  {#if $dark}
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16">
      <path
        d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1
        1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999
        0 113-2.998z"
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
