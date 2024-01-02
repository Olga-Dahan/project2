
import { list } from "./toggleButtonClicked.js";

export function popToggleButtonClicked(e: MouseEvent) {
    if (e.target instanceof HTMLInputElement) {
        const element = e.target as HTMLInputElement;
        if (element.id.startsWith('popToggleButton-')) {
            const coinIdDelete = element.id.substring('popToggleButton-'.length);
            const coinIdInsert = $('#insertNameOfCoin').text();

            list.delete(coinIdDelete);
            list.add(coinIdInsert);
            
            $("#shadow").remove();
            $("#popupWin").hide();
           
            (document.getElementById(`toggleButton-${coinIdDelete}`) as HTMLInputElement).checked = false;

            for (const id of list) {
                (document.getElementById(`toggleButton-${id}`) as HTMLInputElement).checked = true;
            }

        }
    }
}