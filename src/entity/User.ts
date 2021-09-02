import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id?: string;

    @Column({ length: 191 })
    username!: string

    @Column({ length: 191 })
    email!: string

    @Column({ length: 191 })
    password!: string;

    @Column()
    active!: boolean

    @CreateDateColumn()
    createdAt?: Date;

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }

    @BeforeInsert()
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 2);
    }
}

export { User };
