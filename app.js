var btnTranslate=document.querySelector("#btn-click");
var userInput=document.querySelector("#text-input");
var outputText=document.querySelector("#output-div");

var serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationUrl(userInput){
    return serverUrl+"?"+"text="+userInput
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong with the server please try again later.")
}

function clickEventHandler() {
    var inputText=userInput.value;

    fetch(getTranslationUrl(inputText))
        .then (response => response.json())
        .then (json => {
            var translatedText = json.contents.translated;
            outputText.innerText= translatedText;
        })
};

btnTranslate.addEventListener("click", clickEventHandler);