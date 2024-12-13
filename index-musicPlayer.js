let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let controlIcon = document.querySelector('#ctrlIcon');


controlIcon.addEventListener('click',function(){
    playPause();
})
 

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
    controlIcon.classList.add("fa-pause")
    controlIcon.classList.remove("fa-play")
}

song.onloadedmetadata() = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause")
        controlIcon.classList.add("fa-play")
    }else {
        song.play()
        controlIcon.classList.add("fa-pause")
        controlIcon.classList.remove("fa-play")
    }
}



progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
    controlIcon.classList.remove("fa-pause")
    controlIcon.classList.add("fa-play")
}