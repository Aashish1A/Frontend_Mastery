const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokemonImage = document.getElementById("pokemon-name");
const pokemonTypes = document.getElementById("types");

const HP = document.getElementById("hp");
const Attack = document.getElementById("attack");
const Defense = document.getElementById("defense");
const spAttack = document.getElementById("sp-attack");
const spDefense = document.getElementById("sp-defense");
const Speed = document.getElementById("speed");

// Function to fetch pokemon data
async function fetchPokemon(pokemonNameOrId){
    const apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`;
    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        displayPokemonData(data);
    }
    catch{
        alert("Pokémon not found");
        clearData();
    }
}

// Function to display pokemon data
function displayPokemonData(data){
    clearData();

    id.textContent = `${data.name.toUpperCase()}#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    const img = document.createElement("img");
    img.id = "sprite";
    img.src = data.sprites.front_default;
    img.alt = data.name;
    pokemonImage.appendChild(img);

    // display pokemon types
    const typeColors = {
        fire: "#f08030",
        water: "#6390f0",
        grass: "#7ac74c",
        electric: "#f8d030",
        ghost: "#735797",
        psychic: "#f85888",
        bug: "#a8b820",
        normal: "#a8a878",
        fighting: "#c03028",
        fairy: "#ee99ac",
        dragon: "#6f35fc",
        dark: "#705848",
        steel: "#b8b8d0",
        rock: "#b8a038",
        ice: "#98d8d8",
        flying: "#a98ff3",
        poison: "#a040a0"
    }; 

    data.types.forEach(type => {
        pokemonTypes.textContent = type.type.name.toUpperCase();
        pokemonTypes.style.backgroundColor = typeColors[type.type.name] || "#f0f0f0"; 
        pokemonTypes.style.padding = "5px 10px";
        pokemonTypes.style.borderRadius = "5px";
        pokemonTypes.style.marginRight = "10px";
    })

    // display pokemon stats
    data.stats.forEach(stat => {
        switch (stat.stat.name){
            case "hp":
                HP.textContent = stat.base_stat;
                break;
                case "attack":
                    Attack.textContent = stat.base_stat;
                    break;
                case "defense":
                    Defense.textContent = stat.base_stat;
                    break;
                case "special-attack":
                    spAttack.textContent = stat.base_stat;
                    break;
                case "special-defense":
                    spDefense.textContent = stat.base_stat;
                    break;
                case "speed":
                    Speed.textContent = stat.base_stat;
                    break;
        }
    });
}

// Function to clear previous pokemon data
function clearData(){
    id.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    pokemonImage.innerHTML = "";
    pokemonTypes.innerHTML = "";
    HP.textContent = "";
    Attack.textContent = "";
    Defense.textContent = "";
    spAttack.textContent = "";
    spDefense.textContent = "";
    Speed.textContent = "";
}

// Event listener for search button
searchButton.addEventListener("click", ()=> {
    const searchValue = searchInput.value.trim().toLowerCase();
    if(searchValue){
        fetchPokemon(searchValue);
    }else{
        alert("Please enter a Pokémon name or ID.");
    }
})