var video = document.getElementById("video");
var captureBtn = document.getElementById("capture-btn");
var photosContainer = document.getElementById("photos");
var timerInput = document.getElementById("timer");

// Akses ke kamera dan streaming ke video
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
  });

// Menangkap foto dengan timer
  captureBtn.addEventListener("click", () => {
    var timer = timerInput.value - 1;
    if (timer > 0) {
      captureBtn.disabled = true;
        var countdown = setInterval(() => {
          captureBtn.textContent = `Capture (${timer})`;
          if (timer <= 0) {
            clearInterval(countdown);
            captureBtn.textContent = "Capture";
            captureBtn.disabled = false;
            capturePhoto();
          }
            timer--;
          }, 1000);
        } else {
          capturePhoto();
        }
      });

function capturePhoto() {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

// Membuat video frame saat ini ke kanvas
context.drawImage(video, 0, 0, canvas.width, canvas.height);
  var dataURL = canvas.toDataURL("image/png");

// Membuat daftar gambar dari foto yang telah ditangkap
  var photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");

    var img = document.createElement("img");
    img.src = dataURL;
    photoDiv.appendChild(img);

// Membuat fitur download gambar
  var downloadBtn = document.createElement("button");
      downloadBtn.textContent = "Download";
      downloadBtn.addEventListener("click", () => {
        var a = document.createElement("a");
        a.href = dataURL;
        a.download = "photo.png";
        a.click();
      });

      photoDiv.appendChild(downloadBtn);
      photosContainer.appendChild(photoDiv);
     }