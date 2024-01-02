import { popWindow } from "../functions.js";
import { list } from "./toggleButtonClicked.js";

export async function toggleButtonClickedSearch(e: MouseEvent) {
    if (e.target instanceof HTMLInputElement) {
        const element = e.target as HTMLInputElement;
        if (element.id.startsWith('toggleButtonSearch-')) {

            const coinId = element.id.substring('toggleButtonSearch-'.length);
            
            if ((e.target as HTMLInputElement).checked) {
                list.add(coinId);
            }
            else {
                list.delete(coinId);
            }
        }
    }
}