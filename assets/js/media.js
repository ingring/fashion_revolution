//For both the video and the audio file
//Inspiration: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia

const playPauseBtn = document.querySelector(".playpause");
const stopBtn = document.querySelector(".stop");
const rwdBtn = document.querySelector(".rwd");
const fwdBtn = document.querySelector(".fwd");
const timeLabel = document.querySelector(".time");
const player = document.querySelector("video");

// Included the controls attribute in the html in case the JavaScript fails for any reason, the user still has some controls available.
// Therefore starting by removing it
player.removeAttribute("controls");

playPauseBtn.onclick = () => {
    if (player.paused) {
      player.play();
      playPauseBtn.textContent = "Pause";
      // playPauseBtn.ariaLabel = "Pause";
    } else {
      player.pause();
      playPauseBtn.textContent = "Play";
      // playPauseBtn.ariaLabel = "Play";
    }
  };

  stopBtn.onclick = () => {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = "Play";
    // playPauseBtn.ariaLabel = "Play";
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
      // playPauseBtn.ariaLabel = "Play";
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