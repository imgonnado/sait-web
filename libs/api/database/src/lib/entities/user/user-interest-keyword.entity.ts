import { IUserInterestKeyword } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { UserEntity } from '@project/api/database';

@Entity('user_interest_keyword', { orderBy: { id: 'DESC' } })
export class UserInterestKeywordEntity extends CreatedOnlyBaseEntity implements IUserInterestKeyword {
  @Column('bigint', {
    name: 'user_id',
    comment: '회원id(n:1)',
  })
  userId: string;

  @Column('varchar', {
    name: 'keyword',
    comment: '관심키워드',
    length: 50,
  })
  keyword: string;

  @ManyToOne(() => UserEntity, user => user.userInterestKeywords, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;
}
