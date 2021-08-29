

<script lang="ts">
    import Card from "../components/Card.svelte";
    import Button from "../components/Button.svelte";
	import { Link } from "svelte-routing";

    let email: string = "";
    let password: string = "";
</script>


<main class="flex flex-col h-screen w-screen justify-center text-center items-center">
    <Card height={32}>
        <br />
        <h1 class="font-bold text-lg">
            Create Your Account
        </h1>
        
        <div style="margin: 2vh;">
            <div class="w-full max-w-xs">
                <form class="bg-white rounded">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                        bind:value={email}
                    >
                </form>
            </div>
        </div>

        <div style="margin: 2vh;">
            <div class="w-full max-w-xs">
                <form class="bg-white rounded">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="Password"
                        bind:value={password}
                    >
                </form>
            </div>
        </div>

        <div class="flex justify-evenly mt-9">
            <Link to="/config">
                <Button onclick={()=>{console.log(email, password)}}>
                    Sign up
                </Button>
            </Link>
            <Link to="/swiper">
                <Button>
                    Log in
                </Button>
            </Link>
        </div>
        <br />
    </Card>
</main>



