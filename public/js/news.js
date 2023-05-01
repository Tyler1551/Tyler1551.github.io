function manageNews(){
    var key = 'https://content.guardianapis.com/world?api-key=24fbf2aa-b2dd-42a5-b5bc-f29d196def94';

    var req = new XMLHttpRequest();

    req.open('GET', key, true);

    req.onload = function(){
        var data = JSON.parse(this.response);

        console.log(data);

        for(var i = 1; i < 6; i++){
            var header = data.response.results[i].webTitle;
            var link = data.response.results[i].webUrl;

            var article = 'article'+i+'-header';
            document.getElementById('article' + i +'-header').innerHTML = header;
            document.getElementById('article' + i +'-link').href = link;
            document.getElementById('article' + i +'-link').target = '_blank';
        }
    }

    req.send();

}

manageNews();
