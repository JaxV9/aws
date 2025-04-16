import { provide, reactive } from "vue";

export function useStore() {
    const store = reactive ({
        appIsDark: false
    })

    provide('store', store)
}