import { IProjectRequiredMember } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { JobEntity, ProjectEntity } from '@project/api/database';

@Entity('project_required_member', { orderBy: { id: 'DESC' } })
export class ProjectRequiredMemberEntity extends CreatedOnlyBaseEntity implements IProjectRequiredMember {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('bigint', {
    name: 'job_id',
    nullable: true,
    comment: '직무id(n::1)',
  })
  jobId: string | null;

  @Column('int', {
    name: 'job_count',
    nullable: true,
    comment: '필요직무수',
    default: '0',
  })
  jobCount: number | null;

  @ManyToOne(() => ProjectEntity, project => project.projectRequiredMembers, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => JobEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'job_id', referencedColumnName: 'id' }])
  job: JobEntity;
}
