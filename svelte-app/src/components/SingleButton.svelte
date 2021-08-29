
<script>
    export let onclick;
    let clicked = false;
    let func = () => {
        clicked = !clicked;
        onclick();
    }

</script>

<button on:click={func} class="rounded-full w-12 h-12 shadow-lg transition-colors {clicked ? "bg-blue-800": "bg-blue-500 hover:bg-blue-700"}">
    <slot></slot>
</button>