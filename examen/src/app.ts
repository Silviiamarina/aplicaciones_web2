import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Secuencia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    secuencia: string;
