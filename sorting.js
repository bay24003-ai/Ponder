const hikes = [
  {
    name: "Teton Canyon",
    distance: 5,
    difficulty: 3,
    description: "Beautiful canyon hike with mountain views.",
    tags: ["mountains", "wildlife", "scenic"]
  },
  {
    name: "Mesa Falls",
    distance: 2,
    difficulty: 1,
    description: "Easy walk to a waterfall.",
    tags: ["waterfall", "family", "easy"]
  },
  {
    name: "Table Rock",
    distance: 7,
    difficulty: 4,
    description: "Steep climb with amazing views.",
    tags: ["mountains", "challenging", "scenic"]
  }
];

const hikesElement = document.querySelector("#hikes");
const searchButton = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#search");

function getDifficulty(level) {
    let icons = "";

    for (let i = 1; i <= 5; i++) {
        icons += i <= level ? "🥾" : "▫️";
    }

    return icons;
}

function displayHikes(hikesList) {
    hikesElement.innerHTML = "";

    hikesList.forEach(hike => {
        hikesElement.innerHTML += `
            <article>
                <h2>${hike.name}</h2>
                <p><strong>Distance:</strong> ${hike.distance} miles</p>
                <p><strong>Difficulty:</strong> ${getDifficulty(hike.difficulty)}</p>
                <p>${hike.description}</p>
            </article>
            <hr>
        `;
    });
}

function filterHikes(searchTerm) {
    const term = searchTerm.toLowerCase();

    return hikes.filter(hike =>
        hike.name.toLowerCase().includes(term) ||
        hike.description.toLowerCase().includes(term) ||
        hike.tags.some(tag =>
            tag.toLowerCase().includes(term)
        )
    );
}

function sortHikes(hikeList) {
    return hikeList.sort((a, b) => a.distance - b.distance);
}

function showRandomHike() {
    const randomIndex = Math.floor(Math.random() * hikes.length);
    displayHikes([hikes[randomIndex]]);
}

searchButton.addEventListener("click", () => {
    const filtered = filterHikes(searchInput.value);
    const sorted = sortHikes(filtered);

    displayHikes(sorted);
});

showRandomHike();