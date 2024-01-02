var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { list } from "./toggleButtonClicked.js";
export function toggleButtonClickedSearch(e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target instanceof HTMLInputElement) {
            const element = e.target;
            if (element.id.startsWith('toggleButtonSearch-')) {
                const coinId = element.id.substring('toggleButtonSearch-'.length);
                if (e.target.checked) {
                    console.log(list);
                    list.add(coinId);
                }
                else {
                    list.delete(coinId);
                }
                console.log(list);
            }
        }
    });
}
