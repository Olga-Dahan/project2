import { list } from "./toggleButtonClicked.js";
export function staySameCoinsButtonClicked(e) {
    $("#shadow").remove();
    $("#popupWin").hide();
    const coinIdDelete = $('#insertNameOfCoin').text();
    document.getElementById(`toggleButton-${coinIdDelete}`).checked = false;
    for (const id of list) {
        document.getElementById(`toggleButton-${id}`).checked = true;
    }
    console.log(list);
}
