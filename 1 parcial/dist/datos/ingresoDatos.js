"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresarDatos = void 0;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
function ingresarDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.caja.createMany({
                data: [
                    { description: 'Caja chica' },
                    { description: 'Caja de ahorro' },
                    { description: 'Caja principal' }
                ]
            });
            yield prisma.concepto.createMany({
                data: [
                    { concepto: 'Ingresos', detalle: 'Ingresos generales' },
                    { concepto: 'Egresos', detalle: 'Egresos generales' },
                    { concepto: 'Transferencias', detalle: 'Transferencias entre cuentas' }
                ]
            });
            const transaccionesData = [
                {
                    id_Caja: 1,
                    id_Concepto: 1,
                    fecha: new Date('2024-05-01'),
                    Ingreso: "1500",
                    Egreso: "0",
                    Observacion: 'Venta de productos',
                    transaccion: true
                },
                {
                    id_Caja: 2,
                    id_Concepto: 2,
                    fecha: new Date('2024-05-02'),
                    Ingreso: "0",
                    Egreso: "500",
                    Observacion: 'Pago de facturas',
                    transaccion: true
                },
                {
                    id_Caja: 3,
                    id_Concepto: 3,
                    fecha: new Date('2024-05-03'),
                    Ingreso: "0",
                    Egreso: "200",
                    Observacion: 'Transferencia a cuenta de ahorro',
                    transaccion: true
                }
            ];
            yield prisma.transaccion.createMany({ data: transaccionesData });
            console.log("Datos insertados correctamente.");
        }
        catch (error) {
            console.error("Error al insertar datos:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.ingresarDatos = ingresarDatos;
