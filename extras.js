// extras.js
// 
document.addEventListener('DOMContentLoaded', () => {
  const stats = window.matchStats?.players || [];
  const tbody = document.querySelector('.stats-table tbody');
  tbody.innerHTML = '';

  stats.forEach(player => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${player.name}</td><td>${player.wins}</td><td>${player.losses}</td>`;
    tbody.appendChild(row);
  });
});

