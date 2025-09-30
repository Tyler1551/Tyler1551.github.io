function convert() {
    var textArea = document.getElementById('convertText');
    var text = document.getElementById('convertText').value;

    if (text == "") {
        textArea.value = "ENTER SOMETHING!";
        return
    }

    var words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() == "ltd") {
            words[i] = "Limited";
        }

        words[i] = words[i].toLowerCase();
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var newString = words.toString().replaceAll(",", " ");

    textArea.value = newString;
}