import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'user_id' })
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false, default: '' })
  password: string;

  @Column({ name: 'email_address', default: '' })
  email: string;
}
