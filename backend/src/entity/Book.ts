import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('books')
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    author: string;

    @Column('text')
    title: string;

    @Column('int')
    year: number;

}
