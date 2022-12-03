import { AlertType, Flag } from '@project/shared/enum';
import { IAlert } from '@project/shared/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { UserEntity } from '@project/api/database';

@Entity('alert', { orderBy: { id: 'DESC' } })
export class AlertEntity extends CreatedOnlyBaseEntity implements IAlert {
  @Column('bigint', {
    name: 'user_id',
    comment: '회원id(n::1)',
  })
  userId: string;

  @Column('bigint', {
    name: 'target_user_id',
    nullable: true,
    comment: '대상회원id',
  })
  targetUserId: string | null;

  @Column('enum', {
    name: 'alert_type',
    nullable: true,
    comment: '알림타입',
    enum: AlertType,
    default: AlertType.general,
  })
  alertType: AlertType;

  @Column('bigint', {
    name: 'project_id',
    nullable: true,
    comment: '프로젝트id',
  })
  projectId: string | null;

  @Column('varchar', {
    name: 'msg',
    nullable: true,
    comment: '메시지',
    length: 500,
  })
  msg: string | null;

  @Column('enum', {
    name: 'read_flag',
    nullable: true,
    comment: '수신여부',
    enum: Flag,
    default: Flag.N,
  })
  readFlag: Flag;

  @ManyToOne(() => UserEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;
}
