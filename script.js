const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

function handleSpeed(e) {
  
  const x = e.offsetX;
  const width = speed.offsetWidth;

  
  let percent = x / width;
	
  if (percent < 0) percent = 0;
  if (percent > 1) percent = 1;
	
  const minSpeed = 0.5;
  const maxSpeed = 2;
  const speedValue = (percent * (maxSpeed - minSpeed)) + minSpeed;

  
  video.playbackRate = speedValue;

 
  speedBar.style.width = `${percent * 100}%`;
  speedBar.textContent = `${speedValue.toFixed(2)}×`;
}

let isMouseDown = false;


speed.addEventListener('mousemove', e => {
  if (isMouseDown) handleSpeed(e);
});

speed.addEventListener('mousedown', e => {
  isMouseDown = true;
  handleSpeed(e);
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});