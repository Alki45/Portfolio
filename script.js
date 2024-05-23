const profileImages = document.querySelectorAll('.profile-image img');
let currentIndex = 0;

function showNextImage() {
  profileImages.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
  currentIndex = (currentIndex + 1) % profileImages.length;
}

setInterval(showNextImage, 5000);

/* Share Button For Object Detection
*/
document.getElementById("Object_det_shareBtn").addEventListener("click", function() {
    if (navigator.share) {
      navigator.share({
        title: "Check this out!",
        text:"Hello Wel-Come I am glade to contact you!",
        url: "https://www.example.com"
  
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      // You can provide an alternative way to share, such as opening a share dialog
      alert("Sorry, your browser does not support the Web Share API.");
    }
  });

/* Share Button For Sign Language
*/
const signLanguageDiv = document.querySelector('.Sign-language');
const signLanguageShareBtn = document.getElementById('Sign_language_shareBtn');
const linkElement = signLanguageDiv.querySelector('.Sign-language a');

signLanguageShareBtn.addEventListener('click', function() {
  const signLanguageText = signLanguageDiv.textContent.trim();
  const linkUrl = linkElement.getAttribute('href');
  const shareButtonText = signLanguageShareBtn.textContent.trim();
  const sharedText = `${signLanguageText}\n${linkUrl}\n${shareButtonText}`;

  if (navigator.share) {
    navigator.share({
      title: 'Check this out!',
      text: sharedText,
      url: linkUrl
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback for browsers that don't support the Web Share API
    alert("Sorry, your browser does not select the Web Share API.");
  }
});

  /* Share Button For Rental System
*/
document.getElementById("Rental_shareBtn").addEventListener("click", function() {
    if (navigator.share) {
      navigator.share({
        title: "Check this out!",
        text:"Hello Wel-Come I am glade to contact you!",
        url: "https://www.example.com"
  
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      // You can provide an alternative way to share, such as opening a share dialog
      alert("Sorry, your browser does not support the Web Share API.");
    }
  });




