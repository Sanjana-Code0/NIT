const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const colorPicker = document.getElementById('colorPicker');
const colorPalette = document.getElementById('colorPalette');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = '#000000';

// Start drawing on mousedown
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Stop drawing on mouseup or mouseout
function stopDrawing() {
  isDrawing = false;
}

// Draw lines on the canvas
function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Clear the entire canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Save the current drawing as an image
function saveDrawing() {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'drawing.png';
  link.click();
}

// Select a color from the palette
function selectColor(e) {
  if (e.target.classList.contains('color-box')) {
    currentColor = e.target.dataset.color;
    colorPicker.value = rgbToHex(e.target.style.backgroundColor); // Update color picker value
  }
}

// Convert RGB to Hex
function rgbToHex(rgb) {
  const result = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(rgb);
  return result
    ? `#${((1 << 24) | (parseInt(result[1]) << 16) | (parseInt(result[2]) << 8) | parseInt(result[3]))
        .toString(16)
        .slice(1)}`
    : rgb;
}

// Update the color when the color picker changes
function handleColorPicker(e) {
  currentColor = e.target.value;
}

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
clearBtn.addEventListener('click', clearCanvas);
saveBtn.addEventListener('click', saveDrawing);
colorPalette.addEventListener('click', selectColor);
colorPicker.addEventListener('input', handleColorPicker);
