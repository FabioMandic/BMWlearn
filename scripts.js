
const bmwModels = [
    { name: "BMW Serija 1", type: "Sedan", description: "Compact sedan offering dynamic performance.", image: "BMWserija1" },
    { name: "BMW Serija 2 Cabrio", type: "Roadster", description: "Sporty convertible for open-air driving.", image: "BMWserija2Cabrio" },
    { name: "BMW Serija 2 Coupe", type: "Sedan", description: "Dynamic coupe with sleek design.", image: "BMWserija2Coupe" },
    { name: "BMW Serija 2 Gran Tourer", type: "Sedan", description: "Spacious and versatile family car.", image: "BMWserija2GranTourer" },
    { name: "BMW Serija 3", type: "Sedan", description: "Elegant sedan offering premium comfort.", image: "BMWserija3" },
    { name: "BMW Serija 3 Touring", type: "Sedan", description: "Practical wagon with a luxury touch.", image: "BMWserija3Touring" },
    { name: "BMW Serija 4 Cabrio", type: "Roadster", description: "Convertible with powerful performance.", image: "BMWserija4Cabrio" },
    { name: "BMW Serija 4 Coupe", type: "Sedan", description: "Stylish coupe with sporty handling.", image: "BMWserija4Coupe" },
    { name: "BMW Serija 4 Gran Coupe", type: "Sedan", description: "New type gran coupe with sporty handling.", image: "BMWserija4GranCoupe" },
    { name: "BMW Serija 5", type: "Sedan", description: "Mid-size luxury sedan with advanced tech.", image: "BMWserija5" },
    { name: "BMW Serija 6", type: "Sedan", description: "Luxury type of new line seria 6.", image: "BMWserija6" },
    { name: "BMW Serija 7", type: "Luxury", description: "Flagship luxury sedan with advanced technology.", image: "BMWserija7" },
    { name: "BMW Serija 8 Cabrio", type: "Roadster", description: "Luxury cabrio with advanced technology.", image: "BMWserija8Cabrio" },
    { name: "BMW Serija 8 Coupe", type: "Sedan", description: "Luxury coupe offering dynamic performance.", image: "BMWserija8Coupe" },
    { name: "BMW Serija 8 Gran Coupe", type: "Sedan", description: "Elegant sedan offering premium comfort.", image: "BMWserija8GranCoupe" },
    { name: "BMW X1", type: "SUV", description: "Compact SUV for urban adventures.", image: "BMWx1" },
    { name: "BMW X2", type: "SUV", description: "Stylish and sporty crossover SUV.", image: "BMWx2" },
    { name: "BMW X3", type: "SUV", description: "Versatile SUV with premium comfort.", image: "BMWx3" },
    { name: "BMW X4", type: "SUV", description: "Coupe-style SUV with dynamic looks.", image: "BMWx4" },
    { name: "BMW X5", type: "SUV", description: "Luxurious, powerful, and spacious mid-size SUV with advanced tech.", image: "BMWx5" },
    { name: "BMW X6", type: "SUV", description: "Sporty, coupe-style SUV with dynamic performance and premium features.", image: "BMWx6" },
    { name: "BMW X7", type: "SUV", description: "Flagship luxury SUV with three-row seating and superior comfort.", image: "BMWx7" },
    { name: "BMW Z4", type: "Roadster", description: "Elegant roadster for thrilling experiences.", image: "BMWz4" }
];


// Funkcija za prikazivanje modela u tablici
function populateTable(models) {
    const modelsTableBody = document.querySelector("#modelsTable tbody");
    modelsTableBody.innerHTML = ''; // Clear the table before adding rows

    models.forEach(model => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${model.name}</td>
            <td><img src="images/${model.image}.png" alt="${model.name}" style="width: 150px;"></td>
            <td>${model.type}</td>
            <td>${model.description}</td>
        `;
        modelsTableBody.appendChild(row);
    });
}

// Filter and search functionality
document.addEventListener("DOMContentLoaded", function () {
    const vehicleTypeSelect = document.getElementById("vehicleType");
    const searchNameInput = document.getElementById("searchName");

    // Filtriranje modela
    function filterTable() {
        const selectedType = vehicleTypeSelect.value.toLowerCase();
        const searchQuery = searchNameInput.value.toLowerCase();

        // Filteriranje modela prema vrsti i pretrazi
        const filteredModels = bmwModels.filter(model => {
            const matchesType = selectedType === "all" || model.type.toLowerCase() === selectedType;
            const matchesSearch = model.name.toLowerCase().includes(searchQuery);
            return matchesType && matchesSearch;
        });

        // Popunjavanje tablice s filtriranim modelima
        populateTable(filteredModels);
    }

    // Event listeners za filtere
    vehicleTypeSelect.addEventListener("change", filterTable);
    searchNameInput.addEventListener("input", filterTable);

    // Pozivanje filtera odmah pri učitavanju stranice
    filterTable();
});









// Popis BMW modela
const bmwImages = [
    "BMWserija1", "BMWserija2Cabrio", "BMWserija2Coupe", "BMWserija2GranTourer",
    "BMWserija3", "BMWserija3Touring", "BMWserija4Cabrio", "BMWserija4Coupe",
    "BMWserija4GranCoupe", "BMWserija5", "BMWserija6", "BMWserija7",
    "BMWserija8Cabrio", "BMWserija8Coupe", "BMWserija8GranCoupe",
    "BMWx1", "BMWx2", "BMWx3", "BMWx4", "BMWx5", "BMWx6", "BMWx7", "BMWz4"
];


// Prikazivanje slučajne slike
document.getElementById("randomBtn").addEventListener("click", function() {
    const randomImage = bmwImages[Math.floor(Math.random() * bmwImages.length)];
    document.getElementById("modelToGuess").innerHTML = `<img src="images/${randomImage}.png" alt="${randomImage}" style="width: 300px;">`;
});




// Provera pogotka korisnika
document.getElementById("submitGuess").addEventListener("click", function() {
    const userGuess = document.getElementById("userGuess").value.trim();
    const displayedImage = document.querySelector("#modelToGuess img").alt;

    if (userGuess.toLowerCase() === displayedImage.toLowerCase()) {
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Incorrect! It was ${displayedImage}.`;
    }
});


