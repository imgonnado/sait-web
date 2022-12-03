import { ICreatedOnlyBase } from './common/base';

import { IProfile } from './profile';
import { IProjectBookmark } from './project-bookmark';
import { IProjectMember } from './project-member';
import { IProjectMemberOut } from './project-member-out';
import { IProjectReview } from './project-review';
import { IUserInterestKeyword } from './user-interest-keyword';

export interface IUserBase {
  name: string;
  nickname: string | null;
  email: string;
  password: string;
  loginType: number | null;
  image: string | null;
}
export interface IUser extends IUserBase, ICreatedOnlyBase {
  profiles: IProfile[];
  projectBookmarks: IProjectBookmark[];
  projectMembers: IProjectMember[];
  projectMemberOuts: IProjectMemberOut[];
  projectReviews: IProjectReview[];
  userInterestKeywords: IUserInterestKeyword[];
}

export const FieldsUserCreate: Readonly<Array<keyof IUser>> = [
  'name',
  'nickname',
  'email',
  'password',
  'loginType',
  'image',
] as const;

export const FieldsUserUpdate: Readonly<Array<keyof IUser>> = [
  'name',
  'nickname',
  'email',
  'password',
  'loginType',
  'image',
] as const;

export interface IUserCreate extends Pick<IUser, typeof FieldsUserCreate[number]> {}
export interface IUserUpdate extends Pick<IUser, typeof FieldsUserUpdate[number]> {}
