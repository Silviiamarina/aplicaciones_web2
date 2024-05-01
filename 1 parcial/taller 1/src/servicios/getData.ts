import { get } from "./httpClient";
import { IPokemon } from "../interfacs/IPokemon";

async function getPokemon(pokemonId: number) {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    try {
        const data = await get(url); 
        return data; 
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
function mostrarInformacionPokemon(info: IPokemon): void {
    console.log("\n");
    console.log("-------------------------------");
    console.log("Servicio rest de Pokémon");
    console.log(`Nombre: ${info.name}`);
    console.log('Tipos:');
    info.types.forEach((type) => {
        console.log(`- ${type.type.name}`);
    });
    console.log('Habilidades:');
    info.abilities.forEach((ability) => {
        console.log(`- ${ability.ability.name}`);
    });
    console.log(`Peso: ${info.weight / 10} kg`);
    console.log(`Altura: ${info.height / 10} m`); 
    console.log(`Experiencia base: ${info.base_experience}`);
    console.log("-------------------------------");
}
export { getPokemon,mostrarInformacionPokemon };
