document.addEventListener('DOMContentLoaded', () => {
    // Fetch the data from the JSON file
    fetchDataAndLoadContent();

    // Event to submit the adoption form
    document.querySelector('#Adoption-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you! We Shall Contact You Soon');
    });

    
    document.querySelector('#refresh-button').addEventListener('click', () => {
        fetchDataAndLoadContent();
    });

    // Function fetch data and load content
    function fetchDataAndLoadContent() {
        fetch('db.json')
            .then(response => response.json())
            .then(data => {
                loadPetsAndVets(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function load pets and vets
    function loadPetsAndVets(data) {
        const petsContainer = document.getElementById('pets-container');
        const vetsContainer = document.getElementById('vets-container');

        petsContainer.innerHTML = '';
        vetsContainer.innerHTML = '';

        data.Pets.forEach((pet, index) => {
            const petDiv = document.createElement('div');
            petDiv.className = 'pet-item'; // Add a class for potential CSS styling
            petDiv.innerHTML = `
                <h3>${pet.name}</h3>
                <p>Species: ${pet.species}</p>
                <p>Age: ${pet.age}</p>
                <img src="${pet.imageUrl}" alt="${pet.name}">
                <button class="delete-button" data-index="${index}">Adopted</button>
            `;

            petsContainer.appendChild(petDiv);
        });

        data.Vets.forEach(vet => {
            const vetDiv = document.createElement('div');
            vetDiv.innerHTML = `
                <h3>${vet.name}</h3>
                <p>Speciality: ${vet.speciality}</p>
                <img src="${vet.imageUrl}" alt="${vet.name}">
            `;
            vetsContainer.appendChild(vetDiv);
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.target.parentElement.remove();
            });
        });
    }
});