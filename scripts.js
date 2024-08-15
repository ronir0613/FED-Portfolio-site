document.addEventListener("DOMContentLoaded", function () {
  // Contact Form for Submission
  const contactForm = document.querySelector(".contact-form");
  const feedbackMessage = document.createElement("p");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    feedbackMessage.textContent = "Thank you for your message!";
    feedbackMessage.style.color = "green";
    contactForm.appendChild(feedbackMessage);
    contactForm.reset();
  });

  // Feedback Form for Submission
  const feedbackForm = document.querySelector(".feedback-form");
  const feedbackFormMessage = document.createElement("p");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    feedbackFormMessage.textContent = "Thank you for your feedback!";
    feedbackFormMessage.style.color = "green";
    feedbackForm.appendChild(feedbackFormMessage);
    feedbackForm.reset();
  });
});

// An Event asked by my mentor to be added in the portfolio
const roniPic = document.getElementById("roni-pic");
const timeDisplay = document.getElementById("time-display");

roniPic.addEventListener("mouseover", function () {
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = `Current Time: ${currentTime}`;
});

roniPic.addEventListener("mouseout", function () {
  timeDisplay.textContent = "";
});

const roniPicQuote = document.getElementById('roni-pic-quote');
const quoteDisplay = document.getElementById('quote-display');

const quotes = [
    "Keep pushing forward!",
    "Believe in yourself!",
    "You are stronger than you think!",
    "Success is a journey, not a destination.",
    "Dream big, work hard!",
    "The best time to start is now."
    "One day at a time",
];

roniPicQuote.addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;

    setTimeout(function() {
        quoteDisplay.textContent = '';
    }, 5000);
});
