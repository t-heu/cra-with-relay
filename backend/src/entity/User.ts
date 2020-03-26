import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('usersOne')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;

    @Column('text')
    age: number;

}
