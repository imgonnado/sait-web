import { IProjectKeyword } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectEntity } from '@project/api/database';

@Entity('project_keyword', { orderBy: { id: 'DESC' } })
export class ProjectKeywordEntity extends CreatedOnlyBaseEntity implements IProjectKeyword {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('varchar', {
    name: 'keyword',
    comment: '관심키워드',
    length: 50,
  })
  keyword: string;

  @ManyToOne(() => ProjectEntity, project => project.projectKeywords, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;
}
