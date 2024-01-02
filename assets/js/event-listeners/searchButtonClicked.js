import { list } from "./toggleButtonClicked.js";
export function searchButtonClicked(shortList) {
    const symbol = document.getElementById("searchInput").value;
    const coin = shortList.find(coin => symbol === coin.symbol);
    document.getElementById(`searchInput`).value = "";
    if (coin !== undefined) {
        document.getElementById('search-container').innerHTML = `
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
                        id="progressSearch-${coin.id}" style="height: 10px;  width: 0px" ></div>
                    <br>
                    <div class="collapse" id="collapse-${coin.id}">
                        <div class="card card-body" id="dataSearch-container-${coin.id}"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        if (list.has(coin.id)) {
            document.getElementById(`toggleButtonSearch-${coin.id}`).checked = true;
        }
    }
    else {
        document.getElementById('search-container').innerHTML =
            `<p id="noCrypto">There is no such cryptocurrency in the list!</p>`;
    }
    console.log(list);
}
