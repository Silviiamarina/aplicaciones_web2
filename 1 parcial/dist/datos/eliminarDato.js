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
exports.eliminarTransaccion = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function eliminarTransaccion(transaccionId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transaccion = yield prisma.transaccion.findUnique({
                where: {
                    id: transaccionId
                }
            });
            if (!transaccion) {
                console.log(`No se encontró ninguna transacción con el ID ${transaccionId}`);
                return;
            }
            yield prisma.transaccion.update({
                where: {
                    id: transaccionId
                },
                data: {
                    transaccion: false
                }
            });
            console.log(`Transacción con ID ${transaccionId} eliminada lógicamente.`);
        }
        catch (error) {
            console.error("Error al eliminar la transacción:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
exports.eliminarTransaccion = eliminarTransaccion;
