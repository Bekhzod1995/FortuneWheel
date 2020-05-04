let theWheel = new Winwheel({
  'numSegments': 12,
  'outerRadius': 200,
  'textAlignment': 'inner',
  'textFontSize': 20,
  'innerRadius': 60,
  'lineWidth': 3,
  'segments':
    [
      { 'fillStyle': '#FFDE59', 'text': 'Prize 1' },
      { 'fillStyle': '#EC1C24', 'text': 'Prize 2' },
      { 'fillStyle': '#FFDE59', 'text': 'Prize 3' },
      { 'fillStyle': '#EC1C24', 'text': 'Prize 4' },
      { 'fillStyle': '#FFDE59', 'text': 'Prize 5' },
      { 'fillStyle': '#EC1C24', 'text': 'Prize 6' },
      { 'fillStyle': '#FFDE59', 'text': 'Prize 7' },
      { 'fillStyle': '#EC1C24', 'text': 'Prize 8' },
      { 'fillStyle': '#FFDE59', 'text': 'Prize 9' },
      { 'fillStyle': '#EC1C24', 'text': 'Prize 10' },
      { 'fillStyle': '#FFDE59', 'text': 'Prize 11' },
      { 'fillStyle': '#EC1C24', 'text': 'Prize 12' },
    ],
  'animation':
  {
    'type': 'spinToStop',
    'duration': 5,
    'spins': 8,
    'callbackFinished': alertPrize,
    'callbackSound': playSound,
  },
});

let audio = new Audio('./tick.mp3');  // Create audio object and load tick.mp3 file.

function playSound() {
  // Stop and rewind the sound if it already happens to be playing.
  audio.pause();
  audio.currentTime = 0;
  audio.setAttribute('crossorigin', 'anonymous');

  // Play the sound.
  audio.play();
}

let wheelPower = 0;
let wheelSpinning = false;

function startSpin() {
  wheelPower = 15;
  document.getElementById('rotateButton').className = "clickable";
  if (wheelSpinning == false) {
    theWheel.animation.spins = 15;
    theWheel.startAnimation();
    wheelSpinning = true;
  }
}
function resetWheel() {
  theWheel.stopAnimation(false);
  theWheel.rotationAngle = 0;
  theWheel.draw();

  wheelSpinning = false;
}

function alertPrize(indicatedSegment) {
  alert("You have won " + indicatedSegment.text);
  resetWheel();
}