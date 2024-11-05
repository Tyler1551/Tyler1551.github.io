function keyWord(){
    var searchBar = document.getElementById('inputbar');
    var search = document.getElementById('searchbar');
    
    var oldSearch = searchBar.value.slice(0, 2);
    var newSearch = searchBar.value.slice(3);

    switch(oldSearch){
        case "/g":
            searchBar.value = newSearch
            search.action = "https://google.co.uk/search?q="
            searchBar.name = "q"
            break;

        case "/a": 
            searchBar.value = newSearch
            search.action = "https://www.amazon.co.uk/s?k=";
            searchBar.name = "k"
            break;

        case "/y":
            searchBar.value = newSearch
            search.action = "https://www.youtube.com/results?search_query=";
            searchBar.name = "q"
            break;

        default:
            search.action = "https://google.co.uk/search?q="
            searchBar.name = "q"

    }
}

