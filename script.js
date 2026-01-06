const video = document.querySelector('.player__video'); // Use class for Cypress
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

function handleSpeed(e) {
  const x = e.offsetX;
  const width = speed.offsetWidth;

  let percent = x / width;
  percent = Math.min(Math.max(percent, 0), 1); // clamp 0-1

  const minSpeed = 0.5;
  const maxSpeed = 2;
  const speedValue = (percent * (maxSpeed - minSpeed)) + minSpeed;

  video.playbackRate = speedValue;

  speedBar.style.width = `${percent * 100}%`;
  speedBar.textContent = `${speedValue.toFixed(2)}×`;
}

let isMouseDown = false;

speed.addEventListener('mousemove', e => isMouseDown && handleSpeed(e));
speed.addEventListener('mousedown', e => { isMouseDown = true; handleSpeed(e); });
speed.addEventListener('click', handleSpeed);
document.addEventListener('mouseup', () => isMouseDown = false);
