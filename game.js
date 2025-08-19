window.addEventListener('load', () => {
const canvas = document.getElementById('dominoCanvas');
const ctx = canvas.getContext('2d');

// Example: draw a test domino
function drawDomino(x, y, left, right) {
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(x, y, 60, 30);
  ctx.fillStyle = '#000';
  ctx.fillText(left, x + 10, y + 20);
  ctx.fillText(right, x + 35, y + 20);
}

drawDomino(100, 100, 6, 3);



  const name = localStorage.getItem('playerName');
  if (!name) {
    window.location.href = 'signin.html';
  }

  document.getElementById('chat-input-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (msg) {
      const chatBox = document.getElementById('chat-messages');
      const msgDiv = document.createElement('div');
      msgDiv.textContent = `${name}: ${msg}`;
      chatBox.appendChild(msgDiv);
      input.value = '';
    }
  });
});
