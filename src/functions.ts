import Coin from "./interfaces/coin";
import Cache from './Cache.js';
import reduceCoinsPopList from "./reducers/coinsPopList.js";
import CoinPop from "./interfaces/coin-popData";
import reduceCoins from "./reducers/coins.js";
import { list } from "./event-listeners/toggleButtonClicked.js";


const cache = Cache.getInstance();

export async function getCoins(): Promise<Coin[]> {
    const cacheResponse = await cache.getData('https://api.coingecko.com/api/v3/coins/list');
    const coins: Coin[] = (cacheResponse) as Coin[]

    return coins;
}


export async function getCoinData<T>(coinId: string): Promise<T> {
    const cacheResponse = await cache.getData(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    const coinData: T = (cacheResponse) as T;

    return coinData;
}


export function progressBar(coinId: string) {
    const progressBar = document.getElementById(`progress-${coinId}`);
    progressBar.style.display = "block";
    let width = 1;
    const id = setInterval(frame, 3);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = "none";
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}

export function progressBarSelected (coinId: string) {
    const progressBar = document.getElementById(`progressSelected-${coinId}`);
    progressBar.style.display = "block";
    let width = 1;
    const id = setInterval(frame, 3);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = "none";
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}

export function progressBarSearch(coinId: string) {
    const progressBar = document.getElementById(`progressSearch-${coinId}`);
    progressBar.style.display = "block";
    let width = 1;
    const id = setInterval(frame, 3);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progressBar.style.display = "none";
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }
}


export async function popWindow(coinId: string) {
    const darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    const modalWin = document.getElementById('popupWin');
    modalWin.style.display = 'block';

    progressBar('');

    document.getElementById('insertNameOfCoin').innerHTML = coinId;

    const coins: CoinPop[] = [];

    for (const item of list) {
        coins.push(await getCoinData<CoinPop>(item));
    }

    const html = reduceCoinsPopList(coins);
    document.getElementById('popupCoins').innerHTML = html;
}


export async function displayData() {
    const coins: Coin[] = [];

    for (const item of list) {
        coins.push(await getCoinData<Coin>(item));
    }

    const html = reduceCoins(coins, "checked", "Selected");
    document.getElementById('selected-coins-container').innerHTML = html;
}


export function getShortList(coins: Coin[]): Coin[] {
    const shortList: Coin[] = [];
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





