import { ReasonType } from '@project/shared/enum';
import { ICreatedOnlyBase } from './common/base';

export interface IProjectMemberOutBase {
  projectId: string;
  userId: string;
  projectLeaderUserId: string | null;
  reasonType: ReasonType;
  description: string | null;
}
export interface IProjectMemberOut extends IProjectMemberOutBase, ICreatedOnlyBase {}

export const FieldsProjectMemberOutCreate: Readonly<Array<keyof IProjectMemberOut>> = [
  'projectId',
  'userId',
  'projectLeaderUserId',
  'reasonType',
  'description',
] as const;

export const FieldsProjectMemberOutUpdate: Readonly<Array<keyof IProjectMemberOut>> = [
  'projectId',
  'userId',
  'projectLeaderUserId',
  'reasonType',
  'description',
] as const;

export interface IProjectMemberOutCreate extends Pick<IProjectMemberOut, typeof FieldsProjectMemberOutCreate[number]> {}
export interface IProjectMemberOutUpdate extends Pick<IProjectMemberOut, typeof FieldsProjectMemberOutUpdate[number]> {}
