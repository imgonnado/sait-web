import { IProfileSkill } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { JobSkillEntity, ProfileEntity } from '@project/api/database';

@Entity('profile_skill', { orderBy: { id: 'DESC' } })
export class ProfileSkillEntity extends CreatedOnlyBaseEntity implements IProfileSkill {
  @Column('bigint', {
    name: 'profile_id',
    comment: '프로필id(n:1)',
  })
  profileId: string;

  @Column('bigint', {
    name: 'job_skill_id',
    comment: '직무스킬id(n::1)',
  })
  jobSkillId: string;

  @ManyToOne(() => ProfileEntity, profile => profile.profileSkills, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'profile_id', referencedColumnName: 'id' }])
  profile: ProfileEntity;

  @ManyToOne(() => JobSkillEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'job_skill_id', referencedColumnName: 'id' }])
  jobSkill: JobSkillEntity;
}
