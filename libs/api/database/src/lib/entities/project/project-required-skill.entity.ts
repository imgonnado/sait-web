import { IProjectRequiredSkill } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { JobSkillEntity, ProjectEntity } from '@project/api/database';

@Entity('project_required_skill', { orderBy: { id: 'DESC' } })
export class ProjectRequiredSkillEntity extends CreatedOnlyBaseEntity implements IProjectRequiredSkill {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('bigint', {
    name: 'job_skill_id',
    comment: '직무스킬id(n::1)',
  })
  jobSkillId: string;

  @ManyToOne(() => ProjectEntity, project => project.projectRequiredSkills, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => JobSkillEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'job_skill_id', referencedColumnName: 'id' }])
  jobSkill: JobSkillEntity;
}
