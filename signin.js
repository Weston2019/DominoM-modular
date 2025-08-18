document.getElementById('signin-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const room = document.getElementById('room').value;
  const score = document.getElementById('score').value;
  const language = document.getElementById('language').value;

  localStorage.setItem('playerName', username);
  localStorage.setItem('roomName', room);
  localStorage.setItem('targetScore', score);
  localStorage.setItem('language', language);

  window.location.href = 'game.html';
});
