function getPrice(){
    var query = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp&x_cg_demo_api_key=CG-r4pfPY7toNQu77Pysnc6aBgn'
    
    var req = new XMLHttpRequest();
    
    req.open('GET', query, true);
    
    req.onload = function(){
        var data = JSON.parse(this.response)
        var formattedPrice = Intl.NumberFormat('en-gb', {style: 'currency', currency: 'GBP'}).format(data.bitcoin.gbp)
        document.getElementById('formattedPrice').innerText = "btc: " + formattedPrice
    }
    
    req.send()
}

function setPrice(price){

}


t = setTimeout(function(){
    getPrice()
}, 1000)

