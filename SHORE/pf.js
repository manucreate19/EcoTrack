document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`${btn.innerText} clicked!`);
    });
  });
  const leaderboardData = [
    { name: "Eco Warrior", points: 1500 },
    { name: "Sustainability Advocate", points: 1400 },
    { name: "Green Enthusiast", points: 1300 },
    { name: "Waste Reducer", points: 1200 },
    { name: "Recycling Champion", points: 1100 },
];

function populateLeaderboard() {
    const leaderboard = document.querySelector(".leaderboard");
    leaderboard.innerHTML = ""; // Clear existing content

    leaderboardData.forEach((leader, index) => {
        const leaderElement = document.createElement("div");
        leaderElement.className = "leader";
        leaderElement.innerHTML = `
            <p>#${index + 1} ${leader.name}</p>
            <span>Points: ${leader.points}</span>
        `;
        leaderboard.appendChild(leaderElement);
    });
}

// Initialize the leaderboard on page load
document.addEventListener("DOMContentLoaded", populateLeaderboard);
