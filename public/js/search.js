
function checkSearch(){
    var type = document.getElementById('search_option');
    var search = document.getElementById('searchbar');
    var inputBar = document.getElementById('inputbar')
    console.log(type.value)
    
    
    switch(type.value){
        case "YouTube":
            search.action = "https://www.youtube.com/results?search_query=";
            inputBar.name = "q"
            break;
        case "Amazon": 
            search.action = "https://www.amazon.co.uk/s?k=";
            inputBar.name = "k"
            break;
        default:
            search.action = "https://google.co.uk/search?q="
            inputBar.name = "q"
    }
}

