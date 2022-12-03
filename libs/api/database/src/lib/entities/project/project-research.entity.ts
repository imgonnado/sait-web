import { IProjectResearch } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectEntity, ProjectResearchAnswerEntity } from '@project/api/database';

@Entity('project_research', { orderBy: { id: 'DESC' } })
export class ProjectResearchEntity extends CreatedOnlyBaseEntity implements IProjectResearch {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('int', {
    name: 'priority',
    nullable: true,
    comment: '우선순위',
  })
  priority: number | null;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '리서치 항목명',
    length: 100,
  })
  title: string | null;

  @ManyToOne(() => ProjectEntity, project => project.projectResearchs, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;

  @OneToMany(() => ProjectResearchAnswerEntity, projectResearchAnswer => projectResearchAnswer.projectResearch, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectResearchAnswers: ProjectResearchAnswerEntity[];
}
