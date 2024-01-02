import Coin from "../interfaces/coin.js";

export default function reduceCoins(coins: Coin[], ifChecked: string, ifSelectedArea: string): string {
    return coins.map(coin => `
        <div class="col-sm-6 col-md-3">
            <div class="card" id="card">
                <div class="card-body">
                    <h5 class="card-title">${coin.name}</h5>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" 
                            id="toggleButton${ifSelectedArea}-${coin.id}" data-toggle="modal" data-target="#exampleModal" ${ifChecked}>
                    </div>
                    <p class="card-text">${coin.symbol}</p>
                    <a href="#" id="more-info-${coin.id}" class="btn" data-bs-toggle="collapse"
                        data-bs-target="#collapse-${coin.id}" >More Info</a>
                    <br>
                    <br>
                    <div class="progress progress-bar-striped progress-bar-animated"  
                        id="progress${ifSelectedArea}-${coin.id}" style="height: 10px;  width: 0px" ></div>
                    <br>
                    <div class="collapse" id="collapse-${coin.id}">
                        <div class="card card-body" id="data${ifSelectedArea}-container-${coin.id}"></div>
                    </div>
                </div>
            </div>
        </div>
    `).reduce((acc, curr) => acc + curr, '');
}
