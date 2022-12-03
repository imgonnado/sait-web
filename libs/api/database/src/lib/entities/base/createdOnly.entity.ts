import { ICreatedOnly, ICreatedOnlyBase } from '@project/shared/interfaces';
import { BaseEntity, CreateDateColumn } from 'typeorm';
import { CommonBaseEntity } from './base.entity';

export abstract class CreatedOnlyBaseEntity extends CommonBaseEntity implements ICreatedOnlyBase {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt!: Date;
}

export abstract class CreatedOnlyEntity extends BaseEntity implements ICreatedOnly {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt!: Date;
}
