var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Cache from './Cache.js';
import reduceCoinsPopList from "./reducers/coinsPopList.js";
import reduceCoins from "./reducers/coins.js";
import { list } from "./event-listeners/toggleButtonClicked.js";
const cache = Cache.getInstance();
export function getCoins() {
    return __awaiter(this, void 0, void 0, function* () {
        const cacheResponse = yield cache.getData('https://api.coingecko.com/api/v3/coins/list');
        const coins = (cacheResponse);
        return coins;
    });
}
export function getCoinData(coinId) {
    return __awaiter(this, void 0, void 0, function* () {
        const cacheResponse = yield cache.getData(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        const coinData = (cacheResponse);
        return coinData;
    });
}
export function progressBar(coinId) {
    const progressBar = document.getElementById(`progress-${coinId}`);
    progressBar.style.display = "block";
    let width = 1;
    const id = setInterval(frame, 3);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = "none";
        }
        else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}
export function progressBarSelected(coinId) {
    const progressBar = document.getElementById(`progressSelected-${coinId}`);
    progressBar.style.display = "block";
    let width = 1;
    const id = setInterval(frame, 3);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = "none";
        }
        else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}
export function progressBarSearch(coinId) {
    const progressBar = document.getElementById(`progressSearch-${coinId}`);
    progressBar.style.display = "block";
    let width = 1;
    const id = setInterval(frame, 3);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = "none";
        }
        else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}
export function popWindow(coinId) {
    return __awaiter(this, void 0, void 0, function* () {
        const darkLayer = document.createElement('div');
        darkLayer.id = 'shadow';
        document.body.appendChild(darkLayer);
        const modalWin = document.getElementById('popupWin');
        modalWin.style.display = 'block';
        progressBar('');
        document.getElementById('insertNameOfCoin').innerHTML = coinId;
        const coins = [];
        for (const item of list) {
            coins.push(yield getCoinData(item));
        }
        const html = reduceCoinsPopList(coins);
        document.getElementById('popupCoins').innerHTML = html;
    });
}
export function displayData() {
    return __awaiter(this, void 0, void 0, function* () {
        const coins = [];
        for (const item of list) {
            coins.push(yield getCoinData(item));
        }
        const html = reduceCoins(coins, "checked", "Selected");
        document.getElementById('selected-coins-container').innerHTML = html;
    });
}
export function getShortList(coins) {
    const shortList = [];
    shortList.push(coins.find(coin => coin.id === 'bitcoin'));
    shortList.push(coins.find(coin => coin.id === 'ethereum'));
    shortList.push(coins.find(coin => coin.id === 'tether'));
    shortList.push(coins.find(coin => coin.id === 'binancecoin'));
    shortList.push(coins.find(coin => coin.id === 'solana'));
    shortList.push(coins.find(coin => coin.id === 'cardano'));
    shortList.push(coins.find(coin => coin.id === 'dogecoin'));
    shortList.push(coins.find(coin => coin.id === 'polkadot'));
    shortList.push(coins.find(coin => coin.id === 'tron'));
    shortList.push(...coins.slice(1000, 1010));
    shortList.push(...coins.slice(2000, 2010));
    shortList.push(...coins.slice(3000, 3010));
    shortList.push(...coins.slice(4000, 4010));
    shortList.push(...coins.slice(5000, 5010));
    shortList.push(...coins.slice(6000, 6010));
    shortList.push(...coins.slice(7000, 7010));
    shortList.push(...coins.slice(8000, 8010));
    shortList.push(...coins.slice(9000, 9011));
    return shortList;
}
