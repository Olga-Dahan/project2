var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { aboutTabClicked } from './event-listeners/aboutTabClicked.js';
import { homeClicked } from './event-listeners/homeClicked.js';
import { moreInfoClicked } from './event-listeners/moreInfoClicked.js';
import { moreInfoClickedSearch } from './event-listeners/moreInfoClickedSearch.js';
import { moreInfoClickedSelected } from './event-listeners/moreInfoClickedSelected.js';
import { popToggleButtonClicked } from './event-listeners/popToggleButtonClicked.js';
import { searchButtonClicked } from './event-listeners/searchButtonClicked.js';
import { selectedTabClicked } from './event-listeners/selectedTabClicked.js';
import { selectedToggleButtonClicked } from './event-listeners/selectedToggleButtonClicked.js';
import { staySameCoinsButtonClicked } from './event-listeners/staySameCoinsButtonClicked.js';
import { toggleButtonClicked } from './event-listeners/toggleButtonClicked.js';
import { toggleButtonClickedSearch } from './event-listeners/toggleButtonClickedSearch.js';
import { getCoins, getShortList } from './functions.js';
import reduceCoins from './reducers/coins.js';
(() => __awaiter(void 0, void 0, void 0, function* () {
    // init
    document.getElementById('coins-container').addEventListener('click', moreInfoClicked);
    document.getElementById('coins-container').addEventListener('change', toggleButtonClicked);
    document.getElementById('search-container').addEventListener('click', moreInfoClickedSearch);
    document.getElementById(`search-container`).addEventListener('change', toggleButtonClickedSearch);
    document.getElementById('selected-coins-container').addEventListener('click', moreInfoClickedSelected);
    document.getElementById('selected-coins-container').addEventListener('change', selectedToggleButtonClicked);
    document.getElementById('search-tab').addEventListener('click', () => searchButtonClicked(shortList));
    document.getElementById('home-tab').addEventListener('click', () => homeClicked(html));
    document.getElementById('selected-tab').addEventListener('click', selectedTabClicked);
    document.getElementById('about-tab').addEventListener('click', aboutTabClicked);
    document.getElementById('popupCoins').addEventListener('change', popToggleButtonClicked);
    document.getElementById('staySameCoinsButton').addEventListener('click', staySameCoinsButtonClicked);
    // get data
    const coins = yield getCoins();
    // cut list to 100 coins
    const shortList = getShortList(coins);
    // reduce to create the HTML string of the cards
    const html = reduceCoins(shortList, "", "");
    // display
    document.getElementById('coins-container').innerHTML = html;
}))();
