import { IAdminuser } from '@project/shared/interfaces';

import { Column, Entity, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { NoticeEntity } from '@project/api/database';

@Entity('adminuser', { orderBy: { id: 'DESC' } })
export class AdminuserEntity extends CreatedOnlyBaseEntity implements IAdminuser {
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

  @OneToMany(() => NoticeEntity, notice => notice.adminuser, { cascade: true, createForeignKeyConstraints: false })
  notices: NoticeEntity[];
}
