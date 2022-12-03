import { ICreatedOnlyBase } from './common/base';

export interface IProjectHitBase {
  projectId: string;
  userId: string | null;
}
export interface IProjectHit extends IProjectHitBase, ICreatedOnlyBase {}

export const FieldsProjectHitCreate: Readonly<Array<keyof IProjectHit>> = ['projectId', 'userId'] as const;

export const FieldsProjectHitUpdate: Readonly<Array<keyof IProjectHit>> = ['projectId', 'userId'] as const;

export interface IProjectHitCreate extends Pick<IProjectHit, typeof FieldsProjectHitCreate[number]> {}
export interface IProjectHitUpdate extends Pick<IProjectHit, typeof FieldsProjectHitUpdate[number]> {}
