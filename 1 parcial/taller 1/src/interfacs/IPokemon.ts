export interface IPokemon {
    name: string;
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
    weight: number; 
    height: number; 
    base_experience: number; 
}
