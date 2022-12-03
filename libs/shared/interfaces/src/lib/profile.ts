import { Flag } from '@project/shared/enum';
import { ICreatedOnlyBase } from './common/base';

import { IProfileCareer } from './profile-career';
import { IProfileSkill } from './profile-skill';
import { IProjectMember } from './project-member';

export interface IProfileBase {
  userId: string;
  default: Flag;
  jobId: string;
  introduction: string | null;
}
export interface IProfile extends IProfileBase, ICreatedOnlyBase {
  profileCareers: IProfileCareer[];
  profileSkills: IProfileSkill[];
  projectMembers: IProjectMember[];
}

export const FieldsProfileCreate: Readonly<Array<keyof IProfile>> = [
  'userId',
  'default',
  'jobId',
  'introduction',
] as const;

export const FieldsProfileUpdate: Readonly<Array<keyof IProfile>> = [
  'userId',
  'default',
  'jobId',
  'introduction',
] as const;

export interface IProfileCreate extends Pick<IProfile, typeof FieldsProfileCreate[number]> {}
export interface IProfileUpdate extends Pick<IProfile, typeof FieldsProfileUpdate[number]> {}
