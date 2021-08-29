

<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import { dark } from "./store"; // dark mode

	import CreateAcc from "./routes/create-acc.svelte";
	import Config from "./routes/allergies.svelte";
	import Cupboard from "./routes/cupboard.svelte";
	import Swiper from "./routes/swiper.svelte";
	import RecipeSwiper from "./routes/recipe-swiper.svelte";
import Rate from "./routes/rate.svelte";
</script>

<main>
	<Router>
		<!-- / -->
		<Route path="/">
			<CreateAcc />
		</Route>

		<!-- /config -->
		<Route path="/config">
			<Config />
		</Route>

		<!-- /cupboard -->
		<Route path="/cupboard">
			<Cupboard />
		</Route>

		<!-- /swiper -->
		<Route path="/swiper">
			<Swiper />
		</Route>

		<!-- /recipe-swiper -->
		<Route path="/recipe-swiper">
			<RecipeSwiper />
		</Route>
		<!-- /rate -->
		<Route path="/rate">
			<Rate />
		</Route>
	</Router>
</main>

<style>
	:global(body) {
		background-color: #e5e5e5;
		font-family: 'Roboto', sans-serif;
		transition: background-color 0.3s;
	}
</style>



