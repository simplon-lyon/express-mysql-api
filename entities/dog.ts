import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Dog {
    constructor(name:string,race:string,date:Date,id?){
        this.name = name;
        this.race = race;
        this.birthdate = date;
        this.id = id;
    }

    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string;
    @Column()
    race:string;
    @Column("date")
    birthdate:Date;
    
    
}