/*<input id="search-input"
           type="text"
           placeholder="pikachu, charizard, 25…" />
    <button id="search-btn">BUSCAR</button>*/
async function buscarPokemon() {
    const nombre = document.getElementById("buscarInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (!nombre) {
        /*ERRORRRRRRRRRR*/
        return;
    }

    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    const data = await respuesta.json();

    document.getElementById("nombre").textContent = data.name.toUpperCase();
    document.getElementById("imagen").src = data.sprites.front_default;
    const tipos = data.types.map(e => e.type.name).join(", ");
    document.getElementById("tipo").textContent = tipos;

    document.getElementById("peso").textContent = data.weight;
    document.getElementById("altura").textContent = data.height;

    resultado.hidden = false;
}