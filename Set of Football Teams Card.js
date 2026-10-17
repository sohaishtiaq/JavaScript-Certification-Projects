const footballTeam = {
  team: "Argentina",
  year: 2026,
  headCoach: "Lionel Scaloni",
  players: [
    {
      name: "Lionel Messi",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Lautaro Martinez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Alexis Mac Allister",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Enzo Fernandez",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Cristian Romero",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nicolas Otamendi",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Emiliano Martinez",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

document.getElementById("head-coach").textContent =
  footballTeam.headCoach;

document.getElementById("team").textContent =
  footballTeam.team;

document.getElementById("year").textContent =
  footballTeam.year;

const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

function displayPlayers(players) {
  playerCards.innerHTML = "";

  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.textContent =
      player.name + (player.isCaptain ? " (Captain)" : "");

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    card.appendChild(playerName);
    card.appendChild(playerPosition);

    playerCards.appendChild(card);
  });
}

displayPlayers(footballTeam.players);

playersDropdown.addEventListener("change", () => {
  const selectedPosition = playersDropdown.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedPosition
    );

    displayPlayers(filteredPlayers);
  }
});
