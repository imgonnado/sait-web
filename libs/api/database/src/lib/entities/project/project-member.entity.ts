import { IProjectMember } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProfileEntity, ProjectEntity, UserEntity } from '@project/api/database';

@Entity('project_member', { orderBy: { id: 'DESC' } })
export class ProjectMemberEntity extends CreatedOnlyBaseEntity implements IProjectMember {
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

  @Column('varchar', {
    name: 'role',
    nullable: true,
    comment: '역할',
    default: 'member',
    length: 30,
  })
  role: string | null;

  @Column('bigint', {
    name: 'profile_id',
    comment: '프로필id(n:1)',
  })
  profileId: string;

  @Column('varchar', {
    name: 'job_code',
    nullable: true,
    comment: '직무코드',
    length: 50,
  })
  jobCode: string | null;

  @Column('varchar', {
    name: 'status',
    nullable: true,
    comment: '상태',
    default: 'waiting',
    length: 50,
  })
  status: string | null;

  @ManyToOne(() => ProjectEntity, project => project.projectMembers, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => UserEntity, user => user.projectMembers, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;

  @ManyToOne(() => ProfileEntity, profile => profile.projectMembers, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'profile_id', referencedColumnName: 'id' }])
  profile: ProfileEntity;
}
