const body = document.body;

function updateBackgroundColor(event) {
  const x = event.clientX;
  const y = event.clientY;

  const percentageX = (x / window.innerWidth) * 100;
  const percentageY = (y / window.innerHeight) * 100;

  const colorRed = Math.round(percentageX);
  const colorBlue = Math.round(percentageY);

  const color = `rgb(${colorRed}, 0, ${colorBlue})`;
  body.style.backgroundColor = color;
}

body.addEventListener('mousemove', updateBackgroundColor);
