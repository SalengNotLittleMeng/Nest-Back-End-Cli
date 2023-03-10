import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryColumn()
  id?: number;

  @Column({ default: null })
  name: string;
}
