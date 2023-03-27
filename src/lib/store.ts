import { writable } from 'svelte/store';

const waterProgress = writable(0.0)
const waterObjective = writable(4.0)

const breakProgress = writable(0)
const breakObjective = writable(7)

export { waterProgress, waterObjective, breakObjective, breakProgress }