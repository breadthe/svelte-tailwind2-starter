

<script lang="ts">
    export let width:  number = 30;
    export let height: number = 40;
</script>


<main class=" bg-gray-100 rounded-lg">
    <slot style="width: {width}vh; height: {height}vh;"/>
</main>
