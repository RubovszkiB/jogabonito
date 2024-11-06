const airports = [
    "Budapest", "Debrecen", "New York", "London", "Paris", "Berlin", "Madrid", "Los Angeles", 
    "Rome", "Milan", "Barcelona", "Amsterdam", "Vienna", "Frankfurt", "Lisbon", "Copenhagen", 
    "Stockholm", "Warsaw", "Prague", "Zurich", "Brussels", "Dubai", "Istanbul", "Athens", "Oslo", "Helsinki"
];

const departureSelect = document.getElementById("departure");
const arrivalSelect = document.getElementById("arrival");

airports.forEach(airport => {
    const option = document.createElement("option");
    option.value = airport;
    option.textContent = airport;
    departureSelect.appendChild(option);
    arrivalSelect.appendChild(option.cloneNode(true));
});

const flightData = {
    "Budapest_New York": { price: "120,000 HUF", duration: "11h 45m" },
    "Budapest_London": { price: "50,000 HUF", duration: "2h 30m" },
    "Budapest_Paris": { price: "45,000 HUF", duration: "2h 10m" },
    "Budapest_Berlin": { price: "30,000 HUF", duration: "1h 45m" },
    "Budapest_Madrid": { price: "55,000 HUF", duration: "3h 0m" },
    "Budapest_Rome": { price: "40,000 HUF", duration: "2h 0m" },
    "Budapest_Milan": { price: "38,000 HUF", duration: "1h 55m" },
    "Budapest_Barcelona": { price: "45,000 HUF", duration: "2h 10m" },
    "Budapest_Amsterdam": { price: "50,000 HUF", duration: "2h 15m" },
    "Budapest_Vienna": { price: "25,000 HUF", duration: "1h 10m" },
    "Budapest_Francfurt": { price: "55,000 HUF", duration: "1h 55m" },
    "Debrecen_New York": { price: "135,000 HUF", duration: "12h 10m" },
    "Debrecen_London": { price: "70,000 HUF", duration: "3h 15m" },
    "Debrecen_Paris": { price: "65,000 HUF", duration: "3h 0m" },
    "Debrecen_Berlin": { price: "45,000 HUF", duration: "1h 55m" },
    "Debrecen_Madrid": { price: "75,000 HUF", duration: "3h 15m" },
    "Debrecen_Rome": { price: "60,000 HUF", duration: "2h 15m" },
    "Debrecen_Milan": { price: "58,000 HUF", duration: "2h 0m" },
    "Debrecen_Barcelona": { price: "65,000 HUF", duration: "2h 30m" },
    "Debrecen_Amsterdam": { price: "70,000 HUF", duration: "2h 45m" },
    "Debrecen_Vienna": { price: "35,000 HUF", duration: "1h 35m" },
    "New York_London": { price: "80,000 HUF", duration: "7h 50m" },
    "New York_Paris": { price: "85,000 HUF", duration: "8h 20m" },
    "New York_Amsterdam": { price: "75,000 HUF", duration: "7h 0m" },
    "London_Paris": { price: "20,000 HUF", duration: "1h 15m" },
    "London_Berlin": { price: "30,000 HUF", duration: "1h 45m" },
    "London_Madrid": { price: "50,000 HUF", duration: "2h 30m" },
    "London_Rome": { price: "45,000 HUF", duration: "2h 0m" },
    "London_Milan": { price: "40,000 HUF", duration: "1h 50m" },
    "London_Barcelona": { price: "35,000 HUF", duration: "2h 0m" }
};

const searchButton = document.getElementById("searchButton");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const departure = departureSelect.value;
    const arrival = arrivalSelect.value;
    const route = `${departure}_${arrival}`;

    if (flightData[route]) {
        const flightInfo = flightData[route];
        const resultBox = document.createElement("div");
        resultBox.classList.add("result-box");
        resultBox.innerHTML = `
            <p><strong>Ár:</strong> ${flightInfo.price}</p>
            <p><strong>Időtartam:</strong> ${flightInfo.duration}</p>
            <a href="${departure.toLowerCase()}_${arrival.toLowerCase()}.html" class="btn btn-primary">Tovább</a>
        `;
        resultsDiv.innerHTML = ''; // Clear previous results
        resultsDiv.appendChild(resultBox);
    } else {
        resultsDiv.innerHTML = '<p>Ez az útvonal nem elérhető.</p>';
    }
});
