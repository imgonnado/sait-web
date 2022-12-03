import { ICreatedOnlyBase } from './common/base';

export interface IJobSkillBase {
  jobId: string | null;
  skillName: string | null;
  description: string | null;
  image: string | null;
}
export interface IJobSkill extends IJobSkillBase, ICreatedOnlyBase {}

export const FieldsJobSkillCreate: Readonly<Array<keyof IJobSkill>> = [
  'jobId',
  'skillName',
  'description',
  'image',
] as const;

export const FieldsJobSkillUpdate: Readonly<Array<keyof IJobSkill>> = [
  'jobId',
  'skillName',
  'description',
  'image',
] as const;

export interface IJobSkillCreate extends Pick<IJobSkill, typeof FieldsJobSkillCreate[number]> {}
export interface IJobSkillUpdate extends Pick<IJobSkill, typeof FieldsJobSkillUpdate[number]> {}
