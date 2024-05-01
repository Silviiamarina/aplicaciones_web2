export interface ITransaccion {
    id: number;
    idCaja: number;
    idConcepto: number;
    fecha: string;
    ingreso: number;
    egreso: number;
    observación: string;
}
