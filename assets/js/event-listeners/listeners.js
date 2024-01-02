var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { displayData, getCoinData, popWindow, progressBar, toggleUpdate } from "../functions.js";
export const list = new Set();
export let idToggleButtonClicked;
export function moreInfoClicked(e, ifSelected) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target instanceof HTMLElement) {
            const element = e.target;
            if (element.id.startsWith('more-info-')) {
                const coinId = element.id.substring('more-info-'.length);
                const coinData = yield getCoinData(coinId);
                progressBar(coinId, ifSelected);
                document.getElementById(`data${ifSelected}-container-${coinId}`).innerHTML = `
                <img src="${coinData.image.thumb}"/> <br>
                usd: ${coinData.market_data.current_price.usd} <br>
                eur: ${coinData.market_data.current_price.eur} <br>
                ils: ${coinData.market_data.current_price.ils}
            `;
            }
        }
    });
}
export function toggleButtonClicked(e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target instanceof HTMLInputElement) {
            const element = e.target;
            if (element.id.startsWith('toggleButton-')) {
                const idCoin = element.id.substring('toggleButton-'.length);
                if (element.checked) {
                    if (list.size >= 5) {
                        idToggleButtonClicked = idCoin;
                        popWindow(idToggleButtonClicked);
                    }
                    else {
                        list.add(idCoin);
                    }
                }
                else if (!element.checked) {
                    list.delete(idCoin);
                }
            }
        }
    });
}
export function searchButtonClicked(shortList) {
    const symbol = document.getElementById("searchInput").value;
    const coin = shortList.find(coin => symbol === coin.symbol);
    document.getElementById(`searchInput`).value = "";
    if (coin !== undefined) {
        document.getElementById('coins-container').innerHTML = `
        <div class="col-sm-6 col-md-3">
            <div class="card" id="card">
                <div class="card-body">
                    <h5 class="card-title">${coin.name}</h5>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" 
                            id="toggleButtonSearch-${coin.id}" data-toggle="modal" data-target="#exampleModal">
                    </div>

                    <p class="card-text">${coin.symbol}</p>
                    <a href="#" id="more-info-${coin.id}" class="btn" data-bs-toggle="collapse"
                        data-bs-target="#collapse-${coin.id}" >More Info</a>
                    <br>
                    <br>
                    <div class="progress progress-bar-striped progress-bar-animated"  
                        id="progress-${coin.id}" style="height: 10px;  width: 0px" ></div>
                    <br>
                    <div class="collapse" id="collapse-${coin.id}">
                        <div class="card card-body" id="data-container-${coin.id}"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        if (list.has(coin.id)) {
            document.getElementById(`toggleButtonSearch-${coin.id}`).checked = true;
        }
        document.getElementById(`toggleButtonSearch-${coin.id}`).addEventListener('change', (e) => {
            if (e.target.checked === true) {
                list.add(coin.id);
            }
            else {
                list.delete(coin.id);
            }
        });
    }
    else {
        document.getElementById('coins-container').innerHTML =
            `<p id="noCrypto">There is no such cryptocurrency in the list!</p>`;
    }
}
export function homeClicked(html) {
    document.getElementById('coins-container').innerHTML = html;
    for (const id of list) {
        document.getElementById(`toggleButton-${id}`).checked = true;
    }
    console.log(list);
}
export function selectedTabClicked() {
    return __awaiter(this, void 0, void 0, function* () {
        if (list.size === 0) {
            document.getElementById('selected-coins-container').innerHTML = `<p id="noCrypto">There is no selected coins!</p>`;
        }
        else {
            displayData();
        }
    });
}
export function selectedToggleButtonClicked(e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target instanceof HTMLInputElement) {
            const element = e.target;
            if (element.id.startsWith('toggleButtonSelected-')) {
                const idDelete = element.id.substring('toggleButtonSelected-'.length);
                list.delete(idDelete);
                displayData();
                toggleUpdate(idDelete);
                if (list.size === 0) {
                    document.getElementById('selected-coins-container').innerHTML = `<p id="noCrypto">There is no selected coins!</p>`;
                }
            }
        }
    });
}
export function aboutTabClicked() {
    const html = `
    <br>
    <h3>About me</h3>
        <p>My name is Olga Dahan</p>
        <p>I am studying at John Bryce college for Full Stack Web Development</p>
        <p>I have already learned HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, Rest API, TypeScript</p>
        <p>This website is my second project</p>
        <p>The project presents information from the cryptocurrency world</p>
        <img src="./assets/images/myPhoto.JPG">
    `;
    document.getElementById('about-tab-pane').innerHTML = html;
}
export function popToggleButtonClicked(e) {
    if (e.target instanceof HTMLInputElement) {
        const element = e.target;
        if (element.id.startsWith('popToggleButton-')) {
            const coinIdDelete = element.id.substring('popToggleButton-'.length);
            list.delete(coinIdDelete);
            list.add(idToggleButtonClicked);
            toggleUpdate(coinIdDelete);
            $("#shadow").remove();
            $("#popupWin").hide();
            console.log(list);
        }
    }
}
export function staySameCoinsButtonClicked(e) {
    toggleUpdate(idToggleButtonClicked);
    $("#shadow").remove();
    $("#popupWin").hide();
    console.log(list);
}
