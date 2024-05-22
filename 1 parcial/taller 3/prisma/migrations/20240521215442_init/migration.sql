-- CreateTable
CREATE TABLE "Caja" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Caja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concepto" (
    "id" SERIAL NOT NULL,
    "concepto" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Concepto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaccion" (
    "id" SERIAL NOT NULL,
    "id_Caja" INTEGER NOT NULL,
    "id_Concepto" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "ingreso" TEXT NOT NULL,
    "egreso" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,
    "transaccion" BOOLEAN NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_Caja_fkey" FOREIGN KEY ("id_Caja") REFERENCES "Caja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_Concepto_fkey" FOREIGN KEY ("id_Concepto") REFERENCES "Concepto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
