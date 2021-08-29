<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let name;
    export let id;

    let onclick = () => {
        selected = !selected;
        if (selected) {
            dispatch('message', {
                name,
                id
            })
        } else {
            dispatch('message', {
                name,
                id
            })
        }
    };
    let selected = false;
</script>


<button type="button" on:click={onclick} class=" transition-colors text-center items-center pl-4 pr-4 pt-2 pb-2 { selected ? "bg-blue-900": "bg-blue-500 hover:bg-blue-600" } text-white font-bold rounded-3xl focus:outline-none focus:shadow-outline">
    <p>{name}</p>
</button>


<style>
    button {
        user-select: none;
    }
</style>

