window.addEventListener('load', () => {
  const history = JSON.parse(localStorage.getItem('matchHistory')) || [];

  const container = document.getElementById('match-history');
  if (history.length === 0) {
    container.textContent = 'No hay partidas registradas aún.';
    return;
  }

  history.forEach((match, index) => {
    const div = document.createElement('div');
    div.textContent = `Partida ${index + 1}: ${match}`;
    container.appendChild(div);
  });
});
