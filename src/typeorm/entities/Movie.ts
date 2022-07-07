import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  title: string;

  @Column({ nullable: false, default: '' })
  year: number;

  @Column({ nullable: false, default: '' })
  cover_image: string;

  @Column({ nullable: false, default: '' })
  summary: string;

  @Column({ type: 'simple-array' })
  tags: string;

  @Column()
  director: string;
  @Column()
  cast: string;
}
