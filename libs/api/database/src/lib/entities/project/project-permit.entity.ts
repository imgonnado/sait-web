import { IProjectPermit } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { AdminuserEntity, ProjectEntity } from '@project/api/database';

@Entity('project_permit', { orderBy: { id: 'DESC' } })
export class ProjectPermitEntity extends CreatedOnlyBaseEntity implements IProjectPermit {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('bigint', {
    name: 'adminuser_id',
    nullable: true,
    comment: '관리자(n::1)',
  })
  adminuserId: string | null;

  @ManyToOne(() => ProjectEntity, project => project.projectPermits, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => AdminuserEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'adminuser_id', referencedColumnName: 'id' }])
  adminuser: AdminuserEntity;
}
