import { list } from "./toggleButtonClicked.js";

export function homeClicked(html: string) {
    document.getElementById('coins-container').innerHTML = html;
    for (const id of list) {
        (document.getElementById(`toggleButton-${id}`) as HTMLInputElement).checked = true;
    }
    
}