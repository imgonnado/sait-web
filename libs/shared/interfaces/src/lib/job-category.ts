import { ICreatedOnlyBase } from './common/base';

import { IJob } from './job';

export interface IJobCategoryBase {
  categoryName: string;
  parentId: string | null;
  priority: number | null;
}
export interface IJobCategory extends IJobCategoryBase, ICreatedOnlyBase {
  jobs: IJob[];
}

export const FieldsJobCategoryCreate: Readonly<Array<keyof IJobCategory>> = [
  'categoryName',
  'parentId',
  'priority',
] as const;

export const FieldsJobCategoryUpdate: Readonly<Array<keyof IJobCategory>> = [
  'categoryName',
  'parentId',
  'priority',
] as const;

export interface IJobCategoryCreate extends Pick<IJobCategory, typeof FieldsJobCategoryCreate[number]> {}
export interface IJobCategoryUpdate extends Pick<IJobCategory, typeof FieldsJobCategoryUpdate[number]> {}
