const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function ingresarDatos() {
  try {
    await prisma.caja.createMany({
      data: [
        { description: 'Caja chica' },
        { description: 'Caja de ahorro' },
        { description: 'Caja principal' }
      ]
    });

    await prisma.concepto.createMany({
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

    await prisma.transaccion.createMany({ data: transaccionesData });

    console.log("Datos insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos:", error);
  } finally {
    await prisma.$disconnect(); 
  }
}
