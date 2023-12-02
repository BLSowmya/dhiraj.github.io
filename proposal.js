const yes = document.getElementById("bYes");
 const no = document.getElementById("bNo");


no.addEventListener("mouseover", function () {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);

  no.style.left = randomX + "px";
  no.style.top = randomY + "px";
  document.body.style.backgroundImage = "url('hearts.gif')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  audioPlayer.pause();
});

yes.addEventListener("click", function () {
    alert("aww I love youu")
  
   document.body.style.backgroundImage = "url('drajuhh.png')";
   document.body.style.backgroundSize = "cover";
  // document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundRepeat = "no-repeat";
  yes.style.backgroundColor = "pink";
});



const audioPlayer = document.getElementById("audioPlayer");

        // Add a click event listener to the button
        yes.addEventListener("click", function () {
            // Check if the audio is paused or ended
            if (audioPlayer.paused || audioPlayer.ended) {
                // Play the audio
                audioPlayer.play();
                yes.textContent = "Pause"; // Change button text to "Pause"
            } else {
                // Pause the audio
                audioPlayer.pause();
                yes.textContent = "🥰🥰😍😍😍`"; // Change button text to "Play"
            }
          });
