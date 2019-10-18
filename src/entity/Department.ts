import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,ManyToOne
} from "typeorm";
import {Member} from "./Member";

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Member,member => member.department, { onDelete: 'CASCADE' })
    member:Member[]

    @Column()
    namedept:String;



}
