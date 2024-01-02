import { popWindow } from "../functions.js";

export let list: Set<string> = new Set();

export async function toggleButtonClicked(e: MouseEvent) {
    if (e.target instanceof HTMLInputElement) {
        const element = e.target as HTMLInputElement;
        if (element.id.startsWith('toggleButton-')) {
            const idCoin = element.id.substring('toggleButton-'.length);
            if (element.checked) {
                if (list.size >= 5) {
                    popWindow(idCoin);
                }
                else {
                    list.add(idCoin);
                }

            }
            else if (!element.checked) {
                list.delete(idCoin);
            }
        }
    }
}