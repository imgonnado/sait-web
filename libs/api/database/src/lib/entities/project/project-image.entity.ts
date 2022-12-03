import { IProjectImage } from '@project/shared/interfaces';

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import { ProjectEntity } from '@project/api/database';

@Entity('project_image', { orderBy: { id: 'DESC' } })
export class ProjectImageEntity extends CreatedOnlyBaseEntity implements IProjectImage {
  @Column('bigint', {
    name: 'project_id',
    comment: '프로젝트id(n:1)',
  })
  projectId: string;

  @Column('varchar', {
    name: 'image',
    comment: '소셜타입',
    length: 500,
  })
  image: string;

  @ManyToOne(() => ProjectEntity, project => project.projectImages, { createForeignKeyConstraints: false })
  @JoinColumn([{ name: 'project_id', referencedColumnName: 'id' }])
  project: ProjectEntity;
}
