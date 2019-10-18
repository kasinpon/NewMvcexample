import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany, PrimaryColumn, ManyToOne
} from "typeorm";
import {Department} from "./Department";
@Entity()
export class Member {

    // @PrimaryColumn()
    // Userid: number; ใช้ในกรณีที่มีค่า ของ primarykey อยู่เเล้ว

    @PrimaryGeneratedColumn()
    Userid: number;

    @Column()
    firstname:string

    @Column()
    lastname:string

    @Column()
    username:string

    @ManyToOne(type => Department,department => department.member, { onDelete: 'CASCADE' })
    department:Department

    @Column()
    password:string
}