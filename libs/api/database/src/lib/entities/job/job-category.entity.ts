import { IJobCategory } from '@project/shared/interfaces';

import { Column, Entity, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { JobEntity } from '@project/api/database';

@Entity('job_category', { orderBy: { id: 'DESC' } })
export class JobCategoryEntity extends CreatedOnlyBaseEntity implements IJobCategory {
  @Column('varchar', {
    name: 'category_name',
    comment: '카테고리명',
    length: 50,
  })
  categoryName: string;

  @Column('bigint', {
    name: 'parent_id',
    nullable: true,
    comment: '부모id(p)',
  })
  parentId: string | null;

  @Column('int', {
    name: 'priority',
    nullable: true,
    comment: '순서',
    default: '0',
  })
  priority: number | null;

  @OneToMany(() => JobEntity, job => job.jobCategory, { cascade: true, createForeignKeyConstraints: false })
  jobs: JobEntity[];
}
