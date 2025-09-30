

window.onload = (event) => {
    var key = 'https://content.guardianapis.com/world?api-key=24fbf2aa-b2dd-42a5-b5bc-f29d196def94';

    var req = new XMLHttpRequest();

    req.open('GET', key, true);

    req.onload = function () {
        var data = JSON.parse(this.response);

        for (var i = 0; i < 5; i++) {
            var header = data.response.results[i].webTitle;
            var link = data.response.results[i].webUrl;

            var article = document.createElement("a");
            article.innerHTML = header;
            article.href = link;
            article.target = '_blank';

            document.getElementById("news").appendChild(article);
        }
    }

    req.send();
}
