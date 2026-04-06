async function textoBuscar(){
    const pokemon = document.getElementById("textoBuscar").value.toLowerCase();
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) {
            throw new Error("No se encontró el Pokémon");
        }
        
    }
    catch{

    }
}