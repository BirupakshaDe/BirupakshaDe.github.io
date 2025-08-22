// Ensure canvases exist (they are <div>s here)
const starsLayer = document.getElementById('stars');
const shootingLayer = document.getElementById('shooting-stars');

// Create 150 twinkling stars as small divs
function makeStars(count = 150) {
  // clear existing (in case of soft nav)
  starsLayer.innerHTML = '';
  const { innerWidth: W, innerHeight: H } = window;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.top  = Math.random() * H + 'px';
    s.style.left = Math.random() * W + 'px';
    s.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
    starsLayer.appendChild(s);
  }
}

function makeShootingStar() {
  const s = document.createElement('div');
  s.className = 'shooting-star';
  s.style.top  = Math.random() * (window.innerHeight / 2) + 'px';
  s.style.left = Math.random() * window.innerWidth + 'px';
  shootingLayer.appendChild(s);
  setTimeout(() => s.remove(), 1600);
}

makeStars(180);
setInterval(makeShootingStar, 3500);
window.addEventListener('resize', () => makeStars(180));
