var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { popWindow } from "../functions.js";
export let list = new Set();
export function toggleButtonClicked(e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target instanceof HTMLInputElement) {
            const element = e.target;
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
                console.log(list);
            }
        }
    });
}
