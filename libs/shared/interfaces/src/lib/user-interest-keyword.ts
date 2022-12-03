import { ICreatedOnlyBase } from './common/base';

export interface IUserInterestKeywordBase {
  userId: string;
  keyword: string;
}
export interface IUserInterestKeyword extends IUserInterestKeywordBase, ICreatedOnlyBase {}

export const FieldsUserInterestKeywordCreate: Readonly<Array<keyof IUserInterestKeyword>> = [
  'userId',
  'keyword',
] as const;

export const FieldsUserInterestKeywordUpdate: Readonly<Array<keyof IUserInterestKeyword>> = [
  'userId',
  'keyword',
] as const;

export interface IUserInterestKeywordCreate
  extends Pick<IUserInterestKeyword, typeof FieldsUserInterestKeywordCreate[number]> {}
export interface IUserInterestKeywordUpdate
  extends Pick<IUserInterestKeyword, typeof FieldsUserInterestKeywordUpdate[number]> {}
