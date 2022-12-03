import { BoardCategoryType } from '@project/shared/enum';
import { INotice } from '@project/shared/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { AdminuserEntity } from '@project/api/database';

@Entity('notice', { orderBy: { id: 'DESC' } })
export class NoticeEntity extends CreatedOnlyBaseEntity implements INotice {
  @Column('enum', {
    name: 'boardCategory',
    nullable: true,
    comment: '카테고리',
    enum: BoardCategoryType,
    default: BoardCategoryType.notice,
  })
  category: BoardCategoryType;

  @Column('varchar', {
    name: 'subject',
    nullable: true,
    comment: '제목',
    length: 500,
  })
  subject: string | null;

  @Column('text', {
    name: 'content',
    nullable: true,
    comment: '내용',
  })
  content: string | null;

  @Column('bigint', {
    name: 'adminuser_id',
    comment: '관리자id(n:1)',
  })
  adminuserId: string;

  @ManyToOne(() => AdminuserEntity, adminuser => adminuser.notices, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'adminuser_id', referencedColumnName: 'id' }])
  adminuser: AdminuserEntity;
}
