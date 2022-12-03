import { IProfileCareer } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProfileEntity } from '@project/api/database';

@Entity('profile_career', { orderBy: { id: 'DESC' } })
export class ProfileCareerEntity extends CreatedOnlyBaseEntity implements IProfileCareer {
  @Column('bigint', {
    name: 'profile_id',
    comment: '프로필id(n:1)',
  })
  profileId: string;

  @Column('varchar', {
    name: 'title',
    comment: '제목',
    length: 70,
  })
  title: string;

  @Column('int', {
    name: 'career_months',
    nullable: true,
    comment: '경력 월수',
    default: '1',
  })
  careerMonths: number | null;

  @Column('text', {
    name: 'description',
    nullable: true,
    comment: '경력설명',
  })
  description: string | null;

  @Column('json', {
    name: 'urls',
    nullable: true,
    comment: '포트폴리오url',
  })
  urls: JSON;

  @ManyToOne(() => ProfileEntity, profile => profile.profileCareers, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'profile_id', referencedColumnName: 'id' }])
  profile: ProfileEntity;
}
