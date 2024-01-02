import { list } from "./toggleButtonClicked.js";

export function staySameCoinsButtonClicked(e: MouseEvent) {
    $("#shadow").remove();
    $("#popupWin").hide();
    const coinIdDelete = $('#insertNameOfCoin').text();

    (document.getElementById(`toggleButton-${coinIdDelete}`) as HTMLInputElement).checked = false;

    for (const id of list) {
        (document.getElementById(`toggleButton-${id}`) as HTMLInputElement).checked = true;
    }
}