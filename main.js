setInterval(() => {
  let maDate = new Date();
  let heure = maDate.toLocaleTimeString();
  document.getElementById("horloge").textContent = heure;
}, 1000);
