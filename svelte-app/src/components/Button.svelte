<script lang="ts">
    export let onclick = () => {};
</script>


<button type="button" on:click={onclick} class="text-center items-center p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">
    <slot></slot>
</button>



<style>
    button {
        user-select: none;
    }
</style>

