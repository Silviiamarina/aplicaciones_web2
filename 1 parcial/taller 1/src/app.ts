import { ICaja } from "./interfacs/ICaja";
import { IConcepto } from "./interfacs/IConcepto";
import { ITransaccion } from "./interfacs/ITransaccion";
import { getPokemon,mostrarInformacionPokemon } from "./servicios/getData";

const cajas: ICaja[] = [
    {id: 1,description: 'caja1',},
    {id: 2,description: 'caja2',},
    { id: 3, description: 'caja3',}
];

const conceptos: IConcepto[] = [
    { id: 1, concepto: "silvia", detalle: "productos",},
    {id: 2,concepto: "luna", detalle: "productos",},
    {id: 3,concepto: "koala", detalle: "productos",}
];

const transacciones: ITransaccion[] = [
    { id: 1, idCaja: 1, idConcepto: 1, fecha: "30/04/2024", ingreso: 0, egreso: 20, observación: "dinero",},
    { id: 2, idCaja: 2, idConcepto: 2, fecha: "30/04/2024", ingreso: 20, egreso: 0, observación: "dinero",},
    { id: 3, idCaja: 3, idConcepto: 3, fecha: "30/04/2024", ingreso: 30, egreso: 0, observación: "dinero",},

];

function eliminarElementoPorId<T extends { id: number }>(
    arreglo: T[],
    id: number,
    callback: (elementoEliminado: T | undefined) => void
): void {
    const indice = arreglo.findIndex(elemento => elemento.id === id);
    let elementoEliminado: T | undefined = undefined;
    
    if (indice !== -1) {
        elementoEliminado = arreglo.splice(indice, 1)[0];
    }
    
    callback(elementoEliminado); // Llamar al callback con el elemento eliminado
}

function mostrarElementoEliminado<T>(elemento: T | undefined) {
    if (elemento) {
        console.log("\n");
        console.log("-------------------------------");
        console.log("Elemento eliminado:", elemento);
        console.log("-------------------------------");
    } else {
        console.log("\n");
        console.log("-------------------------------");
        console.log("No se encontró ningún elemento con el ID proporcionado.");
        console.log("-------------------------------");
    }
}


eliminarElementoPorId(transacciones, 1, mostrarElementoEliminado);

async function servicioRest() {
    try {
        const informacion = await getPokemon(10);
        mostrarInformacionPokemon(informacion);
    } catch (error) {
        console.error('Error:', error);
    }
  }
  
servicioRest();