//For both the video and the audio file
//Inspiration: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia 
//and https://github.com/iandevlin/iandevlin.github.io/blob/master/mdn/video-player-styled/js/video-player.js

const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
const player = document.querySelector("video");
const mute = document.querySelector(".mute");
const volinc = document.querySelector(".volinc");
const voldec = document.querySelector(".voldec");

// Included the controls attribute in the html in case the JavaScript fails for any reason, the user still has some controls available.
// Therefore starting by removing it
player.removeAttribute("controls");

playPauseBtn.onclick = () => {
    if (player.paused) {
      player.play();
      playPauseBtn.textContent = "Pause";
    } else {
      player.pause();
      playPauseBtn.textContent = "Play";
    }
  };

  stopBtn.onclick = () => {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = "Play";
  };

  rwdBtn.onclick = () => {
    player.currentTime -= 3;
  };
  
  fwdBtn.onclick = () => {
    player.currentTime += 3;
    if (player.currentTime >= player.duration || player.paused) {
      player.pause();
      player.currentTime = 0;
      playPauseBtn.textContent = "Play";
    }
  };

  player.ontimeupdate = () => {
    const minutes = Math.floor(player.currentTime / 60);
    const seconds = Math.floor(player.currentTime - minutes * 60);
    const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
    const secondValue = seconds < 10 ? `0${seconds}` : seconds;
  
    const mediaTime = `${minuteValue}:${secondValue}`;
    timeLabel.textContent = mediaTime;
  };


  //to mute the volume on the media, video or audio
  function muteMedia() {
    mute.setAttribute('data-state', player.muted ? 'unmute' : 'mute');

    if (mute.dataset.state === 'mute') {
      mute.textContent = "Mute";
    } 
    else {
      mute.textContent = "Unmute";
    }
  }

  // Check the volume
  function checkVolume(dir=false) {
    if (dir) {
      let currentVolume = Math.floor(player.volume * 10) / 10;
      if (dir === '+') {
        if (currentVolume < 1) player.volume += 0.1;
      }
      else if (dir === '-') {
        if (currentVolume > 0) player.volume -= 0.1;
      }
      // If the volume has been turned off, also set it as muted
      // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
      if (currentVolume <= 0) {
        player.muted = true;
      }
      else {
        player.muted = false;
      }
    }
    muteMedia();
  }

  player.addEventListener('volumechange', function() {
    checkVolume();
  }, false);

  mute.addEventListener('click', function(e) {
    player.muted = !player.muted;
    muteMedia();
  });

  volinc.addEventListener('click', function(e) {
    checkVolume('+');
  });

  voldec.addEventListener('click', function(e) {
    checkVolume('-');
  });