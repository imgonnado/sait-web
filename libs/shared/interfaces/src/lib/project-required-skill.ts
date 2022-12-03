import { ICreatedOnlyBase } from './common/base';

export interface IProjectRequiredSkillBase {
  projectId: string;
  jobSkillId: string;
}
export interface IProjectRequiredSkill extends IProjectRequiredSkillBase, ICreatedOnlyBase {}

export const FieldsProjectRequiredSkillCreate: Readonly<Array<keyof IProjectRequiredSkill>> = [
  'projectId',
  'jobSkillId',
] as const;

export const FieldsProjectRequiredSkillUpdate: Readonly<Array<keyof IProjectRequiredSkill>> = [
  'projectId',
  'jobSkillId',
] as const;

export interface IProjectRequiredSkillCreate
  extends Pick<IProjectRequiredSkill, typeof FieldsProjectRequiredSkillCreate[number]> {}
export interface IProjectRequiredSkillUpdate
  extends Pick<IProjectRequiredSkill, typeof FieldsProjectRequiredSkillUpdate[number]> {}
