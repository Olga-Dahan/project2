import { list } from "./toggleButtonClicked.js";
export function homeClicked(html) {
    document.getElementById('coins-container').innerHTML = html;
    for (const id of list) {
        document.getElementById(`toggleButton-${id}`).checked = true;
    }
    console.log(list);
}
