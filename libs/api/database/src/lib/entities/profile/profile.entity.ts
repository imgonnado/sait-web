import { Flag } from '@project/shared/enum';
import { IProfile } from '@project/shared/interfaces';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import {
  JobEntity,
  ProfileCareerEntity,
  ProfileSkillEntity,
  ProjectMemberEntity,
  UserEntity,
} from '@project/api/database';

@Entity('profile', { orderBy: { id: 'DESC' } })
export class ProfileEntity extends CreatedOnlyBaseEntity implements IProfile {
  @Column('bigint', {
    name: 'user_id',
    comment: '회원id(n:1)',
  })
  userId: string;

  @Column('enum', {
    name: 'default',
    nullable: true,
    comment: '본캐여부',
    enum: Flag,
    default: Flag.N,
  })
  default: Flag;

  @Column('bigint', {
    name: 'job_id',
    comment: '직무id(n::1)',
  })
  jobId: string;

  @Column('text', {
    name: 'introduction',
    nullable: true,
    comment: '자기소개',
  })
  introduction: string | null;

  @ManyToOne(() => UserEntity, user => user.profiles, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;

  @ManyToOne(() => JobEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'job_id', referencedColumnName: 'id' }])
  job: JobEntity;

  @OneToMany(() => ProfileCareerEntity, profileCareer => profileCareer.profile, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  profileCareers: ProfileCareerEntity[];

  @OneToMany(() => ProfileSkillEntity, profileSkill => profileSkill.profile, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  profileSkills: ProfileSkillEntity[];

  @OneToMany(() => ProjectMemberEntity, projectMember => projectMember.profile, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectMembers: ProjectMemberEntity[];
}
