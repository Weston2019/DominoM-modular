window.addEventListener('load', () => {
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
