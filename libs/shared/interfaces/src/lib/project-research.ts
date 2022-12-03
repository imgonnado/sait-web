import { ICreatedOnlyBase } from './common/base';

import { IProjectResearchAnswer } from './project-research-answer';

export interface IProjectResearchBase {
  projectId: string;
  priority: number | null;
  title: string | null;
}
export interface IProjectResearch extends IProjectResearchBase, ICreatedOnlyBase {
  projectResearchAnswers: IProjectResearchAnswer[];
}

export const FieldsProjectResearchCreate: Readonly<Array<keyof IProjectResearch>> = [
  'projectId',
  'priority',
  'title',
] as const;

export const FieldsProjectResearchUpdate: Readonly<Array<keyof IProjectResearch>> = [
  'projectId',
  'priority',
  'title',
] as const;

export interface IProjectResearchCreate extends Pick<IProjectResearch, typeof FieldsProjectResearchCreate[number]> {}
export interface IProjectResearchUpdate extends Pick<IProjectResearch, typeof FieldsProjectResearchUpdate[number]> {}
