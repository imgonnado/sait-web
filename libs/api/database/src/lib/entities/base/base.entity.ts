import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export abstract class CommonBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;
}
