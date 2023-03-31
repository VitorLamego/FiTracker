import { writable } from 'svelte/store'

type Notification = string

export const notifications = writable<Notification[]>([])

export function toast(message: string) {
    removeToast();
    notifications.update((state) => [message, ...state])
    setTimeout(removeToast, 4000)
}

function removeToast() {
    notifications.update((state) => {
        return [...state.slice(0, state.length - 1)]
    })
}