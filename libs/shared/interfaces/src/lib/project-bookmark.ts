import { ICreatedOnlyBase } from './common/base';

export interface IProjectBookmarkBase {
  projectId: string;
  userId: string | null;
}
export interface IProjectBookmark extends IProjectBookmarkBase, ICreatedOnlyBase {}

export const FieldsProjectBookmarkCreate: Readonly<Array<keyof IProjectBookmark>> = ['projectId', 'userId'] as const;

export const FieldsProjectBookmarkUpdate: Readonly<Array<keyof IProjectBookmark>> = ['projectId', 'userId'] as const;

export interface IProjectBookmarkCreate extends Pick<IProjectBookmark, typeof FieldsProjectBookmarkCreate[number]> {}
export interface IProjectBookmarkUpdate extends Pick<IProjectBookmark, typeof FieldsProjectBookmarkUpdate[number]> {}
