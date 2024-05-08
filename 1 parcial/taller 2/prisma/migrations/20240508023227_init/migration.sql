-- CreateTable
CREATE TABLE "Caja" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Caja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concepto" (
    "id" SERIAL NOT NULL,
    "concepto" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,

    CONSTRAINT "Concepto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaccion" (
    "id" SERIAL NOT NULL,
    "id_Caja" INTEGER NOT NULL,
    "id_Concepto" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "Ingreso" TEXT NOT NULL,
    "Egreso" TEXT NOT NULL,
    "Observacion" TEXT NOT NULL,
    "transaccion" BOOLEAN NOT NULL,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_Caja_fkey" FOREIGN KEY ("id_Caja") REFERENCES "Caja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_id_Concepto_fkey" FOREIGN KEY ("id_Concepto") REFERENCES "Concepto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
