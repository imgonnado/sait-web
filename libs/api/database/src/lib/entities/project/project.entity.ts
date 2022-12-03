import { CategoryType, OnoffType, StatusType } from '@project/shared/enum';
import { IProject } from '@project/shared/interfaces';
import { Column, Entity, OneToMany } from 'typeorm';
import { CreatedOnlyBaseEntity } from '../base/createdOnly.entity';

import {
  ProjectImageEntity,
  ProjectKeywordEntity,
  ProjectMemberEntity,
  ProjectMemberOutEntity,
  ProjectPermitEntity,
  ProjectRequiredMemberEntity,
  ProjectRequiredSkillEntity,
  ProjectResearchEntity,
  ProjectReviewEntity,
} from '@project/api/database';

@Entity('project', { orderBy: { id: 'DESC' } })
export class ProjectEntity extends CreatedOnlyBaseEntity implements IProject {
  @Column('varchar', {
    name: 'project_title',
    nullable: true,
    comment: '프로젝트명',
    length: 150,
  })
  projectTitle: string | null;

  @Column('enum', {
    name: 'status',
    nullable: true,
    comment: '진행상태',
    enum: StatusType,
    default: StatusType.recruit,
  })
  status: StatusType;

  @Column('enum', {
    name: 'onoff',
    nullable: true,
    comment: '활동방식',
    enum: OnoffType,
    default: OnoffType.onoff,
  })
  onoff: OnoffType;

  @Column('varchar', {
    name: 'location',
    nullable: true,
    comment: '장소',
    length: 100,
  })
  location: string | null;

  @Column('varchar', {
    name: 'location_code',
    nullable: true,
    comment: '장소코드',
    length: 10,
  })
  locationCode: string | null;

  @Column('varchar', {
    name: 'image',
    nullable: true,
    comment: '이미지',
    length: 500,
  })
  image: string | null;

  @Column('text', {
    name: 'description',
    nullable: true,
    comment: '소개글',
  })
  description: string | null;

  @Column('enum', {
    name: 'category',
    nullable: true,
    comment: '팀구성카테고리(초보반-속성반-취미반-선수반)',
    enum: CategoryType,
    default: CategoryType.junior,
  })
  category: CategoryType;

  @Column('datetime', {
    name: 'recruit_start_at',
    nullable: true,
    comment: '시작예정일',
  })
  recruitStartAt: Date | null;

  @Column('int', {
    name: 'hit_count',
    nullable: true,
    comment: '조회수',
    default: '0',
  })
  hitCount: number | null;

  @Column('int', {
    name: 'bookmark_count',
    nullable: true,
    comment: '관심수',
    default: '0',
  })
  bookmarkCount: number | null;

  @Column('decimal', {
    name: 'rate',
    comment: '평점',
    default: 0.0,
  })
  rate: string;

  @Column('varchar', {
    name: 'direct_link',
    nullable: true,
    comment: '바로링크',
    length: 500,
  })
  directLink: string | null;

  @OneToMany(() => ProjectImageEntity, projectImage => projectImage.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectImages: ProjectImageEntity[];

  @OneToMany(() => ProjectKeywordEntity, projectKeyword => projectKeyword.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectKeywords: ProjectKeywordEntity[];

  @OneToMany(() => ProjectMemberEntity, projectMember => projectMember.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectMembers: ProjectMemberEntity[];

  @OneToMany(() => ProjectMemberOutEntity, projectMemberOut => projectMemberOut.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectMemberOuts: ProjectMemberOutEntity[];

  @OneToMany(() => ProjectPermitEntity, projectPermit => projectPermit.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectPermits: ProjectPermitEntity[];

  @OneToMany(() => ProjectRequiredMemberEntity, projectRequiredMember => projectRequiredMember.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectRequiredMembers: ProjectRequiredMemberEntity[];

  @OneToMany(() => ProjectRequiredSkillEntity, projectRequiredSkill => projectRequiredSkill.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectRequiredSkills: ProjectRequiredSkillEntity[];

  @OneToMany(() => ProjectResearchEntity, projectResearch => projectResearch.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectResearchs: ProjectResearchEntity[];

  @OneToMany(() => ProjectReviewEntity, projectReview => projectReview.project, {
    cascade: true,
    createForeignKeyConstraints: false,
  })
  projectReviews: ProjectReviewEntity[];
}
