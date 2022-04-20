var song = document.getElementById("song");
var icon = document.getElementById('icon');
var play = document.getElementById('play');

    icon.onclick = function () {
        if (song.paused) {
            song.play();
            icon.src = "playing.png";
        }
        else {
            song.pause();
            icon.src = "paused.png";
        }
    }
var song2 = document.getElementById("song2");
var icon2 = document.getElementById('icon2');
    
    icon2.onclick = function () {
        if (song2.paused) {
            song2.play();
            icon2.src = "playing.png";
            }
        else {
            song2.pause();
            icon2.src = "paused.png";
            }
        }
var song3 = document.getElementById("song3");
var icon3 = document.getElementById('icon3');
            
    icon3.onclick = function () {
        if (song3.paused) {
            song3.play();
            icon3.src = "playing.png";
            }
        else {
            song3.pause();
            icon3.src = "paused.png";
            }
        }
var song4 = document.getElementById("song4");
var icon4 = document.getElementById('icon4');
                    
    icon4.onclick = function () {
        if (song4.paused) {
            song4.play();
            icon4.src = "playing.png";
            }
    else {
            song4.pause();
            icon4.src = "paused.png";
            }
    }