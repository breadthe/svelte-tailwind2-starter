



<script lang="ts">
    import Selector from "../components/Selector.svelte";
	import { Link } from "svelte-routing";
    import { cupboard } from '../store.js';
    import ingredients from './info.js'

    let names = {};

    function changeArr({detail}) {
        const name = detail.name;
        const id = detail.id;

        // y no match expr :(
        if (!names[name]) {
            names[name] = { name, id };
        } else {
            delete names[name]
        }
    }

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    async function fetchIngredients() {
        return ingredients
    }
</script>


<main class="flex flex-col h-screen w-screen text-center items-center">
    <button>
        <Link to="/swiper" on:click={() => cupboard.set(Object.keys(names)) }>
            <img src="/assets/arrow_forward_black_24dp.svg" alt="arrow" class="w-10 h-auto absolute right-7 mt-5 cursor-pointer">
        </Link>
    </button>
    <h1 class="mt-24 font-bold text-2xl pb-8">
        Have You Got Any Of These Products In Your Cupboard?
    </h1>

    {#await fetchIngredients()}
        <div></div>
    {:then ingredients_loaded}
        {#each sliceIntoChunks(ingredients_loaded, 10) as item}
            <div class="flex">
                {#each item as item}
                    <div class="m-3">
                        <Selector name={item.name} id={item.id} on:message={changeArr}></Selector>
                    </div>
                {/each}
            </div>
        {/each}

        <div class="pt-16 opacity-0">-</div>
        <div class=" pt-12 opacity-0">-</div>
    {:catch error}
        <p style="color: red">Error: {error.message}</p>
    {/await}

</main>


<style>
    :global(body) {
        background-image: url("/assets/blob-scene-haikei.svg");
        background-attachment: fixed;
        background-size: 100%;
    }
</style>

