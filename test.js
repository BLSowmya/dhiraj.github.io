const yes = document.getElementById("bYes");


const audioContext = new (window.AudioContext || window.AudioContext)();
const audioElement = new Audio("file:///C:/Users/lsowm/OneDrive/Desktop/drug/baby.mp3");
const sourceNode = audioContext.createMediaElementSource(audioElement);
sourceNode.connect(audioContext.destination);

// Add a play event listener to start audio playback after a button click
yes.addEventListener("click", function () {
  audioContext.resume().then(() => {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });
});

