
// function checkSearch(){
//     var type = document.getElementById('search_option');
//     var search = document.getElementById('searchbar');
//     var inputBar = document.getElementById('inputbar');
//     console.log(type.value)
    
    
//     switch(type.value){
//         case "YouTube":
//             search.action = "https://www.youtube.com/results?search_query=";
//             inputBar.name = "q"
//             break;
//         case "Amazon": 
//             search.action = "https://www.amazon.co.uk/s?k=";
//             inputBar.name = "k"
//             break;
//         default:
//             search.action = "https://google.co.uk/search?q="
//             inputBar.name = "q"
//     }
// }



function keyWord(){
    var searchBar = document.getElementById('inputbar')
    var type = searchBar.value.slice(0, 2)

    var search = document.getElementById('searchbar');

    var newSearch = searchBar.value.slice(3)

    console.log("KEYWORD FUNCTION: TYPE = " + type)
    console.log("KEYWORD FUNCTION: newSearch = " + newSearch)
    switch(searchBar.value.slice(0, 2)){
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

