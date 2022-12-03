import {
  AlertType,
  BoardCategoryType,
  StatusType,
  OnoffType,
  CategoryType,
  ReasonType,
  Flag,
  SortDirection,
} from '@project/shared/enum';
import { registerEnumType } from '@nestjs/graphql';

export default (() => {
  registerEnumType(Flag, {
    name: 'Flag',
    description: 'Y or N',
  });
  registerEnumType(AlertType, {
    name: 'AlertType',
  });
  registerEnumType(BoardCategoryType, {
    name: 'BoardCategoryType',
  });
  registerEnumType(StatusType, {
    name: 'StatusType',
  });
  registerEnumType(OnoffType, {
    name: 'OnoffType',
  });
  registerEnumType(CategoryType, {
    name: 'CategoryType',
  });
  registerEnumType(ReasonType, {
    name: 'ReasonType',
  });
  registerEnumType(SortDirection, {
    name: 'SortDirection',
  });
})();
