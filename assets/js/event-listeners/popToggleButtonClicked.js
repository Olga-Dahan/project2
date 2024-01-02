import { list } from "./toggleButtonClicked.js";
export function popToggleButtonClicked(e) {
    if (e.target instanceof HTMLInputElement) {
        const element = e.target;
        if (element.id.startsWith('popToggleButton-')) {
            const coinIdDelete = element.id.substring('popToggleButton-'.length);
            const coinIdInsert = $('#insertNameOfCoin').text();
            list.delete(coinIdDelete);
            list.add(coinIdInsert);
            $("#shadow").remove();
            $("#popupWin").hide();
            document.getElementById(`toggleButton-${coinIdDelete}`).checked = false;
            for (const id of list) {
                document.getElementById(`toggleButton-${id}`).checked = true;
            }
            console.log(list);
        }
    }
}
