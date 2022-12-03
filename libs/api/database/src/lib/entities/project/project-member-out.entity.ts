import { ReasonType } from '@project/shared/enum';
import { IProjectMemberOut } from '@project/shared/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectEntity, UserEntity } from '@project/api/database';

@Entity('project_member_out', { orderBy: { id: 'DESC' } })
export class ProjectMemberOutEntity extends CreatedOnlyBaseEntity implements IProjectMemberOut {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('bigint', {
    name: 'user_id',
    comment: '회원id(n:1)',
  })
  userId: string;

  @Column('bigint', {
    name: 'project_leader_user_id',
    nullable: true,
    comment: '프로젝트리더id',
  })
  projectLeaderUserId: string | null;

  @Column('enum', {
    name: 'reason_type',
    nullable: true,
    comment: '사유',
    enum: ReasonType,
    default: ReasonType.denied,
  })
  reasonType: ReasonType;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: '상세내용',
    length: 500,
  })
  description: string | null;

  @ManyToOne(() => ProjectEntity, project => project.projectMemberOuts, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => UserEntity, user => user.projectMemberOuts, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;
}
