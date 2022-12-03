import { IJobSkill } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { JobEntity } from '@project/api/database';

@Entity('job_skill', { orderBy: { id: 'DESC' } })
export class JobSkillEntity extends CreatedOnlyBaseEntity implements IJobSkill {
  @Column('bigint', {
    name: 'job_id',
    nullable: true,
    comment: '직무id(n:1)',
  })
  jobId: string | null;

  @Column('varchar', {
    name: 'skill_name',
    nullable: true,
    comment: '스킬명',
    length: 50,
  })
  skillName: string | null;

  @Column('text', {
    name: 'description',
    nullable: true,
    comment: '설명',
  })
  description: string | null;

  @Column('varchar', {
    name: 'image',
    nullable: true,
    comment: '이미지',
    length: 500,
  })
  image: string | null;

  @ManyToOne(() => JobEntity, job => job.jobSkills, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'job_id', referencedColumnName: 'id' }])
  job: JobEntity;
}
