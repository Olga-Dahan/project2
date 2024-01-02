export default function reduceCoinsPopList(coins) {
    return coins.map(coin => `
    <div class="col-sm-12 col-md-2">
            <div class="card" id="cardPop">
                <div class="card-body">
                    <h5 class="card-title">${coin.name}</h5>
                    <p class="card-text">${coin.symbol}</p>
                    <img src="${coin.image.thumb}"/> <br>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" 
                            id="popToggleButton-${coin.id}" data-toggle="modal" data-target="#exampleModal" checked>
                    </div>      
                </div>
            </div>
        </div>
    `).reduce((acc, curr) => acc + curr, '');
}
