function convert(){
    var textArea = document.getElementById('convertText');
    var text = document.getElementById('convertText').value;

    var words = text.split(' ');
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var newString = words.toString().replaceAll(",", " ");

    textArea.value = newString;
}