import { writable } from 'svelte/store';

// Variáveis de controle dos objetivos
const waterProgress = writable(0.0)
const waterObjective = writable(4.0)

const breakProgress = writable(0)
const breakObjective = writable(7)

// Variáveis de controle das notificações
const startHour = writable("09:30")
const finishHour = writable("22:20")

const waterIndications = writable(0.2)

const automaticSuggestion = writable(false)
const isNotificattionTriggered = writable(false);

const isWaterNotification = writable(true)

export { waterProgress, waterObjective, breakObjective, breakProgress, startHour, finishHour, automaticSuggestion, isNotificattionTriggered, waterIndications, isWaterNotification }