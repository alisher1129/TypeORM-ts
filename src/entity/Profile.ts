import { Entity , Column , PrimaryGeneratedColumn , OneToOne , JoinColumn } from "typeorm";
import { User } from "./User";


@Entity()

export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Marks: string;

    @Column()
    Department:string;

    @OneToOne(() => User)
    @JoinColumn()
    user : User;
}