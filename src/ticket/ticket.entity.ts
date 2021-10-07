import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uniqueId: string;

  @Column()
  ticketType: string;

  @Column()
  orderBy: string;
}
