import { IProjectHit } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectEntity, UserEntity } from '@project/api/database';

@Entity('project_hit', { orderBy: { id: 'DESC' } })
export class ProjectHitEntity extends CreatedOnlyBaseEntity implements IProjectHit {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n::1)',
  })
  projectId: string;

  @Column('bigint', {
    name: 'user_id',
    nullable: true,
    comment: '회원id(n::1)',
  })
  userId: string | null;

  @ManyToOne(() => ProjectEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => UserEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;
}
