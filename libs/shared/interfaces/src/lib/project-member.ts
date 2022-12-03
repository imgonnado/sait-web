import { ICreatedOnlyBase } from './common/base';

export interface IProjectMemberBase {
  projectId: string;
  userId: string;
  role: string | null;
  profileId: string;
  jobCode: string | null;
  status: string | null;
}
export interface IProjectMember extends IProjectMemberBase, ICreatedOnlyBase {}

export const FieldsProjectMemberCreate: Readonly<Array<keyof IProjectMember>> = [
  'projectId',
  'userId',
  'role',
  'profileId',
  'jobCode',
  'status',
] as const;

export const FieldsProjectMemberUpdate: Readonly<Array<keyof IProjectMember>> = [
  'projectId',
  'userId',
  'role',
  'profileId',
  'jobCode',
  'status',
] as const;

export interface IProjectMemberCreate extends Pick<IProjectMember, typeof FieldsProjectMemberCreate[number]> {}
export interface IProjectMemberUpdate extends Pick<IProjectMember, typeof FieldsProjectMemberUpdate[number]> {}
