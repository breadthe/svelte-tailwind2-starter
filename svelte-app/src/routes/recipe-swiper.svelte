

<script lang="ts">
    import Card from "../components/Card.svelte";
    import Button from "../components/Button.svelte";
	import { Link } from "svelte-routing";
    import { recipe } from "../store.js";
    import req from './req.js';

    let r = {};
    recipe.update(n => {
        r = n;
        return n;
    })

    let step: number = 1;
    $: isLast = r.analyzedInstructions[0].steps.length - step == 0;

    const next = () => {
        step+=1;
    };
    const previous = () => {
        step-=1;
    };
</script>


<main class="flex flex-col h-screen justify-center text-center items-center">
    <div class="flex">

        {#if step > 1}
            <div on:click={previous} class="flex flex-col h-full justify-center mr-6 cursor-pointer">
                <img src="/assets/arrow_back_black_24dp.svg" class="w-auto h" alt="previous">
            </div>
        {:else}
            <div class="flex flex-col h-full justify-center mr-6 opacity-0">
                <img src="/assets/arrow_back_black_24dp.svg" class="w-auto h" alt="previous">
            </div>
        {/if}

        <Card>
            <br />
            <h1 class="font-bold text-2xl pl-9 pr-9">
                Step { step }
            </h1>

            <h2 class="p-5 w-96">
                { r.analyzedInstructions[0].steps[step-1].step }
            </h2>

            <br />
        </Card>


        {#if isLast}
            <Link to="/rate">
                <div class="flex flex-col h-full justify-center ml-6 cursor-pointer">
                    <img src="/assets/done_black_24dp.svg" class="w-auto h" alt="previous">
                </div>
            </Link>
        {:else}
            <div on:click={next} class="flex flex-col h-full justify-center ml-6 cursor-pointer">
                <img src="/assets/arrow_forward_black_24dp.svg" alt="next">
            </div>
        {/if}

    </div>
</main>





