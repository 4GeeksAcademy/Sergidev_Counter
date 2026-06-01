import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

// components
import Home from './components/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;
let initialValue = 0;
let isCountdown = false;
let isPaused = false;
let eventTriggered = false;

const vecnaAudio = new Audio('vecna.mp3');

window.startCountdown = (targetValue) => {
  const parsedValue = parseInt(targetValue);
  if (parsedValue > 0) {
    counter = parsedValue;
    initialValue = parsedValue;
    isCountdown = true;
    isPaused = false;
    eventTriggered = false;
  }
};

window.pauseCounter = () => { isPaused = true; };
window.resumeCounter = () => { isPaused = false; };

window.resetCounter = () => {
  counter = initialValue;
  isPaused = false;
  eventTriggered = false;

  vecnaAudio.pause();
  vecnaAudio.currentTime = 0;
  const overlay = document.getElementById("jumpscare-overlay");
  if (overlay) overlay.className = "jumpscare-overlay d-none";
};

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Home seconds={counter} />
    </React.StrictMode>
  );

  if (isPaused) return;

  if (isCountdown) {
    if (counter > 0) {
      counter--;
    } else if (counter === 0 && !eventTriggered) {
      triggerVecnaEvent();
    }
  } else {
    counter++;
  }
}, 1000);

const triggerVecnaEvent = () => {
  eventTriggered = true;
  isCountdown = false;
  initialValue = 0;

  vecnaAudio.play().catch(error => console.log("Error on audio play:", error));

  const overlay = document.getElementById("vecna-overlay");

  if (overlay)
    overlay.className = "vecna-overlay";
};