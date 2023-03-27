import { writable } from 'svelte/store';

const waterProgress = writable(0.0)
const waterObjective = writable(4.0)

export { waterProgress, waterObjective }