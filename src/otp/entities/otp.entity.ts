import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('otp')
export class Otp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    contactNumber: string

    @Column({ nullable: true })
    otp: number;

    @CreateDateColumn()
    createdTimestamp: string;
}
