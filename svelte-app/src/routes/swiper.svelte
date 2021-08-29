

<script lang="ts">
    const ENDPOINT: string = "http://189.152.101.225:10000";
    const l = console.log;

    import Card from "../components/Card.svelte";
    import Button from "../components/Button.svelte";
	import { Link } from "svelte-routing";
    import { recipe, allergies, excluded_recipes, cupboard as cpb } from '../store.js';

    const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    let r = {};
    recipe.subscribe(rc => r = rc);
    let exclude = [];

    excluded_recipes.subscribe(rc => exclude = rc);
    let cupboard = [];
    cpb.subscribe(rc => cupboard = rc);

    async function getRecipe() {
        let headers = new Headers();
        headers.append("x-access-tokens", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjEyM0BhYmMuY29tIiwiZXhwIjoxNjMwMjU1MzE2fQ.UU8l5eDbhm56ihIssZCH-CaK_UH-wMYNZze2jRflkmY");
        headers.append("Access-Control-Allow-Origin", "*");
        let body = new FormData();
        exclude.forEach(element => {
            body.append('exclude', element)
        });
        cupboard.forEach(element => {
            body.append('cupboard', element)
        });

        let rec = await fetch(`${ENDPOINT}/get/recommendation`, { body, method: 'POST', headers });
        let json = await rec.json();
        r = json.data;
        recipe.set(r);
        l(r)
        l(exclude)
        return r;
    }

    let rcp = getRecipe();



    const newRecipe = () => {
        exclude.push(r.id);
        rcp = getRecipe();
    };
    const approveRecipe = () => {

    };
</script>


<main class="flex flex-col h-screen w-screen justify-center text-center items-center transition-opacity">
    {#await rcp}
    <h1>...</h1>
    {:then}
        <Card height={32}>
            <br />

            <h1 class="font-bold text-3xl pl-9 pr-9">
                { r.title }
            </h1>

            <div class="flex flex-col justify-evenly mt-9">
                {#each r.extendedIngredients as ingredient }
                    <h1 class="font-bold text-xl">{ capitalize(ingredient.name) }</h1>
                {/each}
            </div>

            <h1 class="text-lg"> { r.readyInMinutes } minutes </h1>
            <h1 class="text-lg"> { r.servings } servings </h1>

            <div class="flex justify-evenly mt-5">
                <button on:click={ newRecipe }>
                    <img src="/assets/close_black_24dp.svg" alt="next">
                </button>
                <Link to="/recipe-swiper">
                    <button on:click={ approveRecipe }>
                        <img src="/assets/done_black_24dp.svg" alt="accept">
                    </button>
                </Link>
            </div>
            <br />
        </Card>
    {:catch e}
        <h1 class="text-red-700">Error: {e}</h1>
    {/await}
</main>

<main class="flex flex-col h-screen w-screen justify-center text-center items-center transition-opacity">
    <!-- {#await rcp}
    <div class="flex flex-col pb-16 w-1/2 justify-center text-center items-center">
        <Card height={32}>
            <br />

            <h1 class="font-bold text-4xl">
                Instructions
            </h1>

            <div class="flex flex-col mt-9 text-center items-center">
                {#each r.analyzedInstructions[0].steps as steps}
                    <h3 class="w-6/12">
                        { steps.step }
                    </h3>
                {/each}
            </div>
            <br />
        </Card>
    </div>
    {:catch}
        <h1 class="text-red-700">Error</h1>
    {/await} -->
</main>




