import { getCoinData, progressBarSearch } from "../functions.js";
import CoinData from "../interfaces/coin-data.js";

export async function moreInfoClickedSearch (e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
        const element = e.target as HTMLElement;
        if (element.id.startsWith('more-info-')) {
            const coinId = element.id.substring('more-info-'.length);
            const coinData: CoinData = await getCoinData<CoinData>(coinId);

            progressBarSearch(coinId);

            document.getElementById(`dataSearch-container-${coinId}`).innerHTML = `
                <img src="${coinData.image.thumb}"/> <br>
                usd: ${coinData.market_data.current_price.usd} <br>
                eur: ${coinData.market_data.current_price.eur} <br>
                ils: ${coinData.market_data.current_price.ils}
            `;
        }
    }
}