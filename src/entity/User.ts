import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert, BaseEntity } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({length: 191 })
    username: string

    @Column({length: 191 })
    email: string

    @Column({length: 191 })
    password: string

    @Column()
    isActive: boolean

    constructor( username:string,email:string, password: string, isActive: boolean){
        super()
        this.username = username
        this.email = email
        this.password = password
        this.isActive = isActive
    }

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 2);
    }

    toJSON(){
        return {
          username: this.username,
          email: this.email,
          password: this.password,
          isActive: this.isActive
        }
      }

}
