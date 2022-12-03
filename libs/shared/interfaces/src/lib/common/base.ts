import { IImageBase } from './image';

export interface IBase {
  id?: string;
}

/**
 * 추가Interface
 */
export interface ICreatedOnly {
  createdAt?: Date;
}

/**
 * 추가 Base Interface
 */
export interface ICreatedOnlyBase extends IBase, ICreatedOnly {}

/**
 * 수정 Interface
 */
export interface IUpdateable extends ICreatedOnly {
  updatedAt?: Date;
}

/**
 * 수정 Base Interface
 */
export interface IUpdateableBase extends ICreatedOnlyBase, IUpdateable {}

/**
 * 삭제 Interface
 */
export interface IDeletable extends IUpdateable {
  deletedAt?: Date;
}

/**
 * 삭제 Base Interface
 */
export interface IDeletableBase extends IUpdateableBase, IDeletable {}

export interface IImageContent {
  images: IImageBase[];
}
