import { CategoryType, OnoffType, StatusType } from '@project/shared/enum';
import { ICreatedOnlyBase } from './common/base';

import { IProjectImage } from './project-image';
import { IProjectKeyword } from './project-keyword';
import { IProjectMember } from './project-member';
import { IProjectMemberOut } from './project-member-out';
import { IProjectPermit } from './project-permit';
import { IProjectRequiredMember } from './project-required-member';
import { IProjectRequiredSkill } from './project-required-skill';
import { IProjectResearch } from './project-research';
import { IProjectReview } from './project-review';

export interface IProjectBase {
  projectTitle: string | null;
  status: StatusType;
  onoff: OnoffType;
  location: string | null;
  locationCode: string | null;
  image: string | null;
  description: string | null;
  category: CategoryType;
  recruitStartAt: Date | null;
  hitCount: number | null;
  bookmarkCount: number | null;
  rate: string;
  directLink: string | null;
}
export interface IProject extends IProjectBase, ICreatedOnlyBase {
  projectImages: IProjectImage[];
  projectKeywords: IProjectKeyword[];
  projectMembers: IProjectMember[];
  projectMemberOuts: IProjectMemberOut[];
  projectPermits: IProjectPermit[];
  projectRequiredMembers: IProjectRequiredMember[];
  projectRequiredSkills: IProjectRequiredSkill[];
  projectResearchs: IProjectResearch[];
  projectReviews: IProjectReview[];
}

export const FieldsProjectCreate: Readonly<Array<keyof IProject>> = [
  'projectTitle',
  'status',
  'onoff',
  'location',
  'locationCode',
  'image',
  'description',
  'category',
  'recruitStartAt',
  'hitCount',
  'bookmarkCount',
  'rate',
  'directLink',
] as const;

export const FieldsProjectUpdate: Readonly<Array<keyof IProject>> = [
  'projectTitle',
  'status',
  'onoff',
  'location',
  'locationCode',
  'image',
  'description',
  'category',
  'recruitStartAt',
  'hitCount',
  'bookmarkCount',
  'rate',
  'directLink',
] as const;

export interface IProjectCreate extends Pick<IProject, typeof FieldsProjectCreate[number]> {}
export interface IProjectUpdate extends Pick<IProject, typeof FieldsProjectUpdate[number]> {}
