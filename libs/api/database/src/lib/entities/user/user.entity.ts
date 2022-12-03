import { IUser } from '@project/shared/interfaces';

import { Column, Entity, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import {
  ProfileEntity,
  ProjectBookmarkEntity,
  ProjectMemberEntity,
  ProjectMemberOutEntity,
  ProjectReviewEntity,
  UserInterestKeywordEntity,
} from '@project/api/database';

@Entity('user', { orderBy: { id: 'DESC' } })
export class UserEntity extends CreatedOnlyBaseEntity implements IUser {
  @Column('varchar', {
    name: 'name',
    comment: '이름',
    length: 20,
  })
  name: string;

  @Column('varchar', {
    name: 'nickname',
    nullable: true,
    comment: '닉네임',
    length: 20,
  })
  nickname: string | null;

  @Column('varchar', {
    name: 'email',
    comment: '이메일',
    length: 100,
  })
  email: string;

  @Column('varchar', {
    name: 'password',
    comment: '비밀번호',
    length: 20,
  })
  password: string;

  @Column('tinyint', {
    name: 'login_type',
    nullable: true,
    comment: '소셜타입',
  })
  loginType: number | null;

  @Column('varchar', {
    name: 'image',
    nullable: true,
    comment: '이미지',
    length: 500,
  })
  image: string | null;

  @OneToMany(() => ProfileEntity, profile => profile.user, { cascade: true, createForeignKeyConstraints: false })
  profiles: ProfileEntity[];

  @OneToMany(() => ProjectBookmarkEntity, projectBookmark => projectBookmark.user, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectBookmarks: ProjectBookmarkEntity[];

  @OneToMany(() => ProjectMemberEntity, projectMember => projectMember.user, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectMembers: ProjectMemberEntity[];

  @OneToMany(() => ProjectMemberOutEntity, projectMemberOut => projectMemberOut.user, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectMemberOuts: ProjectMemberOutEntity[];

  @OneToMany(() => ProjectReviewEntity, projectReview => projectReview.user, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectReviews: ProjectReviewEntity[];

  @OneToMany(() => UserInterestKeywordEntity, userInterestKeyword => userInterestKeyword.user, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  userInterestKeywords: UserInterestKeywordEntity[];
}
