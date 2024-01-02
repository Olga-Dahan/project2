import { displayData } from "../functions.js";
import { list } from "./toggleButtonClicked.js";

export async function selectedTabClicked() {
    if (list.size === 0) {
        document.getElementById('selected-coins-container').innerHTML = `<p id="noCrypto">There is no selected coins!</p>`;
    }
    else {
        displayData();
    }
}

