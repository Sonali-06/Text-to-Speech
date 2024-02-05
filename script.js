const textarea=document.querySelector("textarea"),
speechBtn=document.querySelector("button");

let synth = speechSynthesis;

function textToSpeech(text){
    let utterance=new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

speechBtn.addEventListener("click",e=>{
    e.preventDefault();
    if(textarea.value !== ""){
        textToSpeech(textarea.value);
    }
})