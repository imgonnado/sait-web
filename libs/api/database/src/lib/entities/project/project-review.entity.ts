import { IProjectReview } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectEntity, UserEntity } from '@project/api/database';

@Entity('project_review', { orderBy: { id: 'DESC' } })
export class ProjectReviewEntity extends CreatedOnlyBaseEntity implements IProjectReview {
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

  @Column('bigint', {
    name: 'target_user_id',
    nullable: true,
    comment: '대상회원id',
  })
  targetUserId: string | null;

  @Column('text', {
    name: 'feedback',
    nullable: true,
    comment: '리뷰내용',
  })
  feedback: string | null;

  @Column('tinyint', {
    name: 'score',
    comment: '점수',
    default: '1',
  })
  score: number;

  @ManyToOne(() => ProjectEntity, project => project.projectReviews, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @ManyToOne(() => UserEntity, user => user.projectReviews, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;
}
