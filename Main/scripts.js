// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Website loaded successfully!");
// });
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".nav-links a").forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Stop immediate navigation
            
//             const targetURL = this.href; // Store the URL
//             const preloader = document.querySelector(".preloader");
//             const video = document.querySelector(".preloader-video");

//             // Show the preloader
//             preloader.classList.add("show");

//             // Force play the animation
//             video.play();

//             // Redirect after video ends
//             video.onended = function () {
//                 window.location.href = targetURL;
//             };

//             // Fallback redirect after 3 seconds (if video fails)
//             setTimeout(() => {
//                 if (!video.ended) {
//                     window.location.href = targetURL;
//                 }
//             }, 3000);
//         });
//     });
// });

document.addEventListener("visibilitychange", function() {
  console.log("Visibility change detected. Hidden:", document.hidden);
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script Loaded"); // Debugging message to ensure the script is running.
    // console.log("Script.js is loaded!");

    let titles = ["Don't Go!🚫" , "Shop Now!🛒", "Wait! Check this out!", "Please Stay!🥹"];
    let index = 0;
    let titleInterval;
  
    // Function to start transitioning titles
    function changeTitle() {
      titleInterval = setInterval(function() {
        console.log("Changing title to: " + titles[index]); // Debugging message to see which title is being shown.
        document.title = titles[index];
        index = (index + 1) % titles.length; // Loop through the array
      }, 1000); // Change every second
    }
  
    // Event listener to detect when the page becomes hidden (tab switch)
    document.addEventListener('visibilitychange', function() {
      console.log('Visibility Changed: ', document.hidden); // Log the visibility state.
  
      if (document.hidden) {
        console.log('Tab is hidden. Changing title...');
        changeTitle();
      } else {
        console.log('Tab is visible. Resetting title...');
        clearInterval(titleInterval);
        document.title = "The Fit Store"; // Set back to your main title
      }
    });
  });
  
//   document.addEventListener("DOMContentLoaded", function () {
//     const preloader = document.getElementById("preloader");
//     const preloaderVideo = document.querySelector(".preloader-video");

//     document.querySelectorAll("nav a").forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent instant navigation
//             const href = this.getAttribute("href");

//             if (href !== "#") {
//                 preloader.classList.add("show"); // Show preloader
//                 preloaderVideo.play(); // Start video animation

//                 setTimeout(() => {
//                     window.location.href = href; // Redirect after 4 seconds
//                 }, 2000); // Adjusted to match video length
//             }
//         });
//     });

//     // Hide preloader when the page loads (for back navigation)
//     window.addEventListener("load", function () {
//         preloader.classList.remove("show");
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const preloader = document.getElementById("preloader");
//   const preloaderVideo = document.querySelector(".preloader-video");

//   document.querySelectorAll("nav a").forEach(link => {
//       link.addEventListener("click", function (event) {
//           event.preventDefault(); // Prevent instant navigation
//           const href = this.getAttribute("href");

//           if (href !== "#") {
//               preloader.classList.add("show"); // Show preloader
              
//               // **Force restart the video every time**
//               preloaderVideo.currentTime = 0; // Reset time to start
//               preloaderVideo.play().catch(error => console.log("Autoplay prevented:", error)); 

//               setTimeout(() => {
//                   window.location.href = href; // Redirect after 4 seconds
//               }, 2000); // Ensure it matches video length
//           }
//       });
//   });

//   // Hide preloader when the page loads (for back navigation)
//   window.addEventListener("load", function () {
//       preloader.classList.remove("show");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const preloaderVideo = document.querySelector(".preloader-video");

  // Show the preloader immediately for testing
  preloader.classList.add("show");

  document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent instant navigation
          const href = this.getAttribute("href");

          if (href !== "#") {
              preloader.classList.add("show"); // Show preloader
              preloaderVideo.currentTime = 0; // Reset the video to start
              preloaderVideo.play().catch(error => console.log("Autoplay prevented:", error));

              // Redirect after video ends
              preloaderVideo.onended = function () {
                  window.location.href = href;
              };
          }
      });
  });

  // Remove preloader on page load
  window.addEventListener("load", function () {
      preloader.classList.remove("show");
  });
});



// BMI CAALCULATOR
document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight && height) {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9) category = "NORMAL WEIGHT";
    else if (bmi >= 25 && bmi <= 29.9) category = "OVERWEIGHT";
    else category = "OBESE";

    document.getElementById("result").innerHTML = `
          <h3>BMI: ${bmi}</h3>
          <p>CATEGORY: ${category.toUpperCase()}</p>

        `;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p class="text-danger">Please fill in all fields.</p>`;
  }
});


// REVIEW
const track = document.querySelector(".video-track");
const videoCards = document.querySelectorAll(".video-card");
let index = 3; // Start from the 5th video

function updateActiveVideo() {
  videoCards.forEach((card, i) => {
    const video = card.querySelector("video");
    card.classList.remove("active");
    video.pause(); // Pause all videos

    if (i === index) {
      card.classList.add("active");
      video.play(); // Auto-play only the center video
    }
    video.addEventListener("ended", () => {
      video.play(); // Play the video again when it ends
    });
  });

  // Update the transform based on the center position
  const maxOffset = Math.max(0, index * 200 - window.innerWidth / 2 + 100);
  track.style.transform = `translateX(-${maxOffset}px)`;
}

function nextVideo() {
  if (index < videoCards.length - 1) {
    index++;
  } else {
    index = 0; // Reset to the first video
  }
  updateActiveVideo();
}

function prevVideo() {
  if (index > 0) {
    index--;
  } else {
    index = videoCards.length - 1; // Reset to the last video
  }
  updateActiveVideo();
}

// Play/Pause Video on Click
videoCards.forEach((card) => {
  const video = card.querySelector("video");
  video.addEventListener("click", function () {
    if (this.paused) {
      videoCards.forEach((v) => v.querySelector("video").pause()); // Pause all videos
      this.play();
    } else {
      this.pause();
    }
  });
});

videoCards.forEach((card) => {
  const video = card.querySelector("video");
  const productInfo = card.querySelector(".product-info");

  video.addEventListener("play", () => {
    productInfo.style.display = "block";
  });

  video.addEventListener("pause", () => {
    productInfo.style.display = "none";
  });

  video.addEventListener("ended", () => {
    video.play(); // Loop video
  });
});

// Auto-play the initial center video
updateActiveVideo();
