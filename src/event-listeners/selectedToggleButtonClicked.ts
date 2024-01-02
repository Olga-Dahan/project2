import { displayData} from "../functions.js";
import { list } from "./toggleButtonClicked.js";

export async function selectedToggleButtonClicked(e: MouseEvent) {
    if (e.target instanceof HTMLInputElement) {
        const element = e.target as HTMLInputElement;
        if (element.id.startsWith('toggleButtonSelected-')) {

            const idDelete = element.id.substring('toggleButtonSelected-'.length);

            list.delete(idDelete);

            displayData();

            if (list.size === 0) {
                document.getElementById('selected-coins-container').innerHTML = `<p id="noCrypto">There is no selected coins!</p>`;
            }
        }
    }
}