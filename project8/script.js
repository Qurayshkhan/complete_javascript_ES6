const btn = document.getElementById("btn");
const results = document.getElementById("result");
const speechRecognition = speechRecognition;
const speechRecognition = new speechRecognition();
speechRecognition.onstart = function() {
    console.log("You can speek Now");
}
speechRecognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById("result").innerHTML = text;
}
const copyDivToClipboard = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("copied the text");
}