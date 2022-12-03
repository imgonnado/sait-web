import { ICreatedOnlyBase } from './common/base';

export interface IProjectPermitBase {
  projectId: string;
  adminuserId: string | null;
}
export interface IProjectPermit extends IProjectPermitBase, ICreatedOnlyBase {}

export const FieldsProjectPermitCreate: Readonly<Array<keyof IProjectPermit>> = ['projectId', 'adminuserId'] as const;

export const FieldsProjectPermitUpdate: Readonly<Array<keyof IProjectPermit>> = ['projectId', 'adminuserId'] as const;

export interface IProjectPermitCreate extends Pick<IProjectPermit, typeof FieldsProjectPermitCreate[number]> {}
export interface IProjectPermitUpdate extends Pick<IProjectPermit, typeof FieldsProjectPermitUpdate[number]> {}
