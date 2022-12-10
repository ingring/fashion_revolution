// Show transcript for either video or audio

const audioBtn = document.querySelector(".transcript--btn");

audioBtn.addEventListener("click", function() {
    const audioTranscript = document.querySelector("#transcript__hidden");

    if(audioTranscript.hidden){
        audioTranscript.hidden = !audioTranscript.hidden;
    } else {
        audioTranscript.hidden = true;
    }
});