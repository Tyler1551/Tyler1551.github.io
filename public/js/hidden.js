function display(){
    var textArea = document.getElementById('convertText');
    var hideButton = document.getElementById('hide');
    var convertButton = document.getElementById('convert');

    if(textArea.style.display == "grid"){
        textArea.style.display = "none"
        convertButton.style.display = "none";
        hideButton.innerText = "Show";
    }
    else{
        textArea.style.display = "grid";
        convertButton.style.display = "grid";
        hideButton.innerText = "Hide";
    }
}