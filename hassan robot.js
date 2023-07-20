// Get elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const upButton = document.getElementById('up');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const downButton = document.getElementById('down');
const robotArm = document.querySelector('.robot-arm');
const robotShadow = document.querySelector('.robot-shadow');
const audioPlayer = document.getElementById('audio');

// Constants
const ARM_ANGLE = 30;
const ARM_SPEED = 10;

// Variables
let armAngle = 0;
let armIntervalId = null;

// Functions
const moveArm = (direction) => {
  clearInterval(armIntervalId);
  
  armIntervalId = setInterval(() => {
    if (direction === 'left' && armAngle > -ARM_ANGLE) {
      armAngle -= ARM_SPEED;
    } else if (direction === 'right' && armAngle < ARM_ANGLE) {
      armAngle += ARM_SPEED;
    } else if (direction === 'up') {
      armAngle = 0;
    } else if (direction === 'down') {
      armAngle = -ARM_ANGLE;
    }
    
    robotArm.style.transform = `translateX(-50%) rotate(${armAngle}deg)`;
    robotShadow.style.transform = `translateX(-50%) rotate(${armAngle}deg)`;
    
    if (armAngle === 0 || armAngle === -ARM_ANGLE) {
      clearInterval(armIntervalId);
    }
  }, 10);
};

// Event listeners
startButton.addEventListener('click', () => {
  audioPlayer.play();
});

stopButton.addEventListener('click', () => {
  audioPlayer.pause();
});

upButton.addEventListener('click', () => {
  moveArm('up');
});

downButton.addEventListener('click', () => {
  moveArm('down');
});

leftButton.addEventListener('click', () => {
  moveArm('left');
});

rightButton.addEventListener('click', () => {
  moveArm('right');
});