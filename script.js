// sample data for cats
const cats = [
    { name: "Milo", breed: "Tabby", age: 2, image: "assets/images/cat1.png" },
    { name: "Bella", breed: "Siamese", age: 3, image: "assets/images/cat2.png" },
    { name: "Max", breed: "Persian", age: 1, image: "assets/images/cat3.png" },
];

// function to display cats
function displayCats(catsList) {
    const catListDiv = document.getElementById('cat-list');
    catListDiv.innerHTML = '';  // clear the current list

    catsList.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');

        catCard.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <p>Breed: ${cat.breed}</p>
            <p>Age: ${cat.age}</p>
        `;

        catListDiv.appendChild(catCard);
    });
}

// function to filter cats based on search input
function filterCats() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredCats = cats.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery) || cat.breed.toLowerCase().includes(searchQuery)
    );
    displayCats(filteredCats);
}

// initialize the page with all cats
displayCats(cats);
