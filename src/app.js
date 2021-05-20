var audio = document.getElementById("audio");
var play = document.getElementById("play");
var pause = document.getElementById("pause");


play.onclick = () => {
    audio.play();
    pause.classList.remove("hidden");
    play.classList.add("hidden");
}


pause.onclick = () => {
    audio.pause();
    play.classList.remove("hidden");
    pause.classList.add("hidden");
}