import { IJob } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { JobCategoryEntity, JobSkillEntity } from '@project/api/database';

@Entity('job', { orderBy: { id: 'DESC' } })
export class JobEntity extends CreatedOnlyBaseEntity implements IJob {
  @Column('varchar', {
    name: 'job_title',
    comment: '직무명',
    length: 100,
  })
  jobTitle: string;

  @Column('bigint', {
    name: 'job_category_id',
    nullable: true,
    comment: '소속카테고리(n:1)',
  })
  jobCategoryId: string | null;

  @Column('varchar', {
    name: 'job_code',
    nullable: true,
    comment: '직무코드',
    length: 50,
  })
  jobCode: string | null;

  @ManyToOne(() => JobCategoryEntity, jobCategory => jobCategory.jobs, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'job_category_id', referencedColumnName: 'id' }])
  jobCategory: JobCategoryEntity;

  @OneToMany(() => JobSkillEntity, jobSkill => jobSkill.job, { cascade: true, createForeignKeyConstraints: false })
  jobSkills: JobSkillEntity[];
}
