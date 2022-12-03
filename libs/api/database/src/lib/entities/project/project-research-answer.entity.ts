import { IProjectResearchAnswer } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectResearchEntity, UserEntity } from '@project/api/database';

@Entity('project_research_answer', { orderBy: { id: 'DESC' } })
export class ProjectResearchAnswerEntity extends CreatedOnlyBaseEntity implements IProjectResearchAnswer {
  @Column('bigint', {
    name: 'project_research_id',
    comment: '리서치id(n:1)',
  })
  projectResearchId: string;

  @Column('bigint', {
    name: 'user_id',
    comment: '회원id(n::1)',
  })
  userId: string;

  @Column('varchar', {
    name: 'answer',
    nullable: true,
    comment: '리서치 답변',
    length: 200,
  })
  answer: string | null;

  @ManyToOne(() => ProjectResearchEntity, projectResearch => projectResearch.projectResearchAnswers, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn([{ name: 'project_research_id', referencedColumnName: 'id' }])
  projectResearch: ProjectResearchEntity;

  @ManyToOne(() => UserEntity, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: UserEntity;
}
