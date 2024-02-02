const rows = document.querySelectorAll('#ratingsTable tr');

rows.forEach(row => {
  const averageCell = row.querySelector('td:nth-child(7)');
  if (averageCell) {
    const average = parseFloat(averageCell.innerText);
    if (average < 3) {
      averageCell.classList.add('red');
    } else if (average < 4) {
      averageCell.classList.add('yellow');
    } else {
      averageCell.classList.add('green');
    }
  }
});