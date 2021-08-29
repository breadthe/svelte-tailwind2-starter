

<script lang="ts">
    import { recipe } from '../store.js';
    import SingleButton from '../components/SingleButton.svelte'

    let r = {}
    recipe.subscribe(rc => r = rc)
    let score = 3;
    let clicked = false;
</script>



<main class="flex h-screen w-screen justify-center text-center items-center transition-opacity tsparticles">
    <div class="m-7">
        <SingleButton onclick = {()=> score = 1}>1</SingleButton>
    </div>
    <div class="m-7">
        <SingleButton onclick = {()=> score = 2}>2</SingleButton>
    </div>
    <div class="m-7">
        <SingleButton onclick = {()=> score = 3}>3</SingleButton>
    </div>
    <div class="m-7">
        <SingleButton onclick = {()=> score = 4}>4</SingleButton>
    </div>
    <div class="m-7">
        <SingleButton onclick = {()=> score = 5}>5</SingleButton>
    </div>
</main>


<style>

</style>



