import { writable } from "svelte/store";

const dark = writable(false); // dark mode
const recipe = writable({});
const excluded_recipes = writable([]);
const allergies = writable([]);
const cupboard = writable([]);

export { dark, recipe, excluded_recipes, cupboard, allergies };



