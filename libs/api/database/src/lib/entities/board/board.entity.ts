import { SortDirection } from '@project/shared/enum';
import { Column, Entity } from 'typeorm';
import { DeletableBaseEntity } from '../base/deletable.entity';

@Entity('board', { orderBy: { id: SortDirection.DESC } })
export class BoardEntity extends DeletableBaseEntity {
  @Column('int', { name: 'seq', default: () => "'0'" })
  seq: number;

  @Column('varchar', { name: 'reply', length: 10 })
  reply: string;

  @Column('int', { name: 'parent', default: () => "'0'" })
  parent: number;

  @Column('int', { name: 'comment', default: () => "'0'" })
  comment: number;

  @Column('varchar', { name: 'subject', length: 255 })
  subject: string;

  @Column('text', { name: 'content' })
  content: string;

  @Column('int', { name: 'hit_cnt', default: () => "'0'" })
  hitCnt: number;

  @Column('int', { name: 'good_cnt', default: () => "'0'" })
  goodCnt: number;

  @Column('int', { name: 'nogood_cnt', default: () => "'0'" })
  nogoodCnt: number;

  @Column('varchar', { name: 'member_id', length: 20 })
  memId: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;
}
