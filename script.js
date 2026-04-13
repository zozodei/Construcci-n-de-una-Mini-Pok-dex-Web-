async function buscarPokemon() {
    let nombre = document.getElementById("buscarInput").value.trim();
    const loader = document.getElementById("pokeball");
    const buscando = document.getElementById("loader-text");
    const errorDiv = document.getElementById("error-msg");
    if (!nombre) {
        alert("Input incorrecto");
        return;
    }

    nombre = nombre.toLowerCase();
    const resultado = document.getElementById("resultado");


    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        if (!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }

        errorDiv.hidden = true;
        loader.hidden = true;
        buscando.hidden = true;
        
        const data = await respuesta.json();

        document.getElementById("nombre").textContent = data.name.toUpperCase();
        document.getElementById("imagen").src = data.sprites.front_default;
        const tipos = data.types.map(e => e.type.name).join(", ");
        document.getElementById("tipo").textContent = tipos;

        document.getElementById("peso").textContent = data.weight;
        document.getElementById("altura").textContent = data.height;

        resultado.hidden = false;

    } catch (error) {

        resultado.hidden = true;

        loader.hidden = false;

        buscando.hidden = false;
        
        errorDiv.hidden = false;

        document.getElementById("error-text").textContent = error.message;
    }
}