/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AddJobSkillsToJobInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddJobsToJobCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddNoticesToAdminuserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProfileCareersToProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProfileSkillsToProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProfilesToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectBookmarksToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectImagesToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectKeywordsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectMemberOutsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectMemberOutsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectMembersToProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectMembersToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectMembersToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectPermitsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectRequiredMembersToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectRequiredSkillsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectResearchAnswersToProjectResearchInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectResearchsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectReviewsToProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProjectReviewsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddUserInterestKeywordsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type Adminuser = {
  __typename?: 'Adminuser';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  loginType?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  notices: Array<Notice>;
  password: Scalars['String'];
};


export type AdminuserNoticesArgs = {
  filter?: InputMaybe<NoticeFilter>;
  sorting?: InputMaybe<Array<NoticeSort>>;
};

export type AdminuserAggregateGroupBy = {
  __typename?: 'AdminuserAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type AdminuserConnection = {
  __typename?: 'AdminuserConnection';
  /** Array of nodes. */
  nodes: Array<Adminuser>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AdminuserCountAggregate = {
  __typename?: 'AdminuserCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type AdminuserDeleteResponse = {
  __typename?: 'AdminuserDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  loginType?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminuserFilter = {
  and?: InputMaybe<Array<AdminuserFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminuserFilter>>;
};

export type AdminuserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  loginType?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type AdminuserMaxAggregate = {
  __typename?: 'AdminuserMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type AdminuserMinAggregate = {
  __typename?: 'AdminuserMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type AdminuserSort = {
  direction: SortDirection;
  field: AdminuserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AdminuserSortFields {
  Id = 'id'
}

export type Alert = {
  __typename?: 'Alert';
  alertType?: Maybe<AlertType>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  msg?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  readFlag?: Maybe<Flag>;
  targetUserId?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type AlertAggregateGroupBy = {
  __typename?: 'AlertAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type AlertConnection = {
  __typename?: 'AlertConnection';
  /** Array of nodes. */
  nodes: Array<Alert>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AlertCountAggregate = {
  __typename?: 'AlertCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type AlertDeleteResponse = {
  __typename?: 'AlertDeleteResponse';
  alertType?: Maybe<AlertType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  msg?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  readFlag?: Maybe<Flag>;
  targetUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AlertFilter = {
  and?: InputMaybe<Array<AlertFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AlertFilter>>;
};

export type AlertInput = {
  alertType?: InputMaybe<AlertType>;
  msg?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  readFlag?: InputMaybe<Flag>;
  targetUserId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type AlertMaxAggregate = {
  __typename?: 'AlertMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type AlertMinAggregate = {
  __typename?: 'AlertMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type AlertSort = {
  direction: SortDirection;
  field: AlertSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AlertSortFields {
  Id = 'id'
}

export enum AlertType {
  General = 'general',
  Keyword = 'keyword',
  NewUser = 'new_user',
  ProjectAccept = 'project_accept',
  ProjectHold = 'project_hold',
  ProjectProgress = 'project_progress',
  ProjectSuccess = 'project_success'
}

export enum BoardCategoryType {
  Event = 'event',
  Notice = 'notice'
}

export enum CategoryType {
  Hobby = 'hobby',
  Junior = 'junior',
  Rapid = 'rapid',
  Senior = 'senior'
}

export type CreateAdminuserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  loginType?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type CreateAlertInput = {
  alertType?: InputMaybe<AlertType>;
  msg?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  readFlag?: InputMaybe<Flag>;
  targetUserId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type CreateJobCategoryInput = {
  categoryName: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Float']>;
};

export type CreateJobInput = {
  jobCategoryId?: InputMaybe<Scalars['String']>;
  jobCode?: InputMaybe<Scalars['String']>;
  jobTitle: Scalars['String'];
};

export type CreateJobSkillInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  skillName?: InputMaybe<Scalars['String']>;
};

export type CreateNoticeInput = {
  adminuserId: Scalars['String'];
  category?: InputMaybe<BoardCategoryType>;
  content?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type CreateOneAdminuserInput = {
  adminuser: CreateAdminuserInput;
};

export type CreateOneAlertInput = {
  alert: CreateAlertInput;
};

export type CreateOneJobCategoryInput = {
  jobCategory: CreateJobCategoryInput;
};

export type CreateOneJobInput = {
  job: CreateJobInput;
};

export type CreateOneJobSkillInput = {
  jobSkill: CreateJobSkillInput;
};

export type CreateOneNoticeInput = {
  notice: CreateNoticeInput;
};

export type CreateOneProfileCareerInput = {
  profileCareer: CreateProfileCareerInput;
};

export type CreateOneProfileInput = {
  profile: CreateProfileInput;
};

export type CreateOneProfileSkillInput = {
  profileSkill: CreateProfileSkillInput;
};

export type CreateOneProjectBookmarkInput = {
  projectBookmark: CreateProjectBookmarkInput;
};

export type CreateOneProjectImageInput = {
  projectImage: CreateProjectImageInput;
};

export type CreateOneProjectInput = {
  project: CreateProjectInput;
};

export type CreateOneProjectKeywordInput = {
  projectKeyword: CreateProjectKeywordInput;
};

export type CreateOneProjectMemberInput = {
  projectMember: CreateProjectMemberInput;
};

export type CreateOneProjectMemberOutInput = {
  projectMemberOut: CreateProjectMemberOutInput;
};

export type CreateOneProjectPermitInput = {
  projectPermit: CreateProjectPermitInput;
};

export type CreateOneProjectRequiredMemberInput = {
  projectRequiredMember: CreateProjectRequiredMemberInput;
};

export type CreateOneProjectRequiredSkillInput = {
  projectRequiredSkill: CreateProjectRequiredSkillInput;
};

export type CreateOneProjectResearchAnswerInput = {
  projectResearchAnswer: CreateProjectResearchAnswerInput;
};

export type CreateOneProjectResearchInput = {
  projectResearch: CreateProjectResearchInput;
};

export type CreateOneProjectReviewInput = {
  projectReview: CreateProjectReviewInput;
};

export type CreateOneUserInput = {
  user: CreateUserInput;
};

export type CreateOneUserInterestKeywordInput = {
  userInterestKeyword: CreateUserInterestKeywordInput;
};

export type CreateProfileCareerInput = {
  careerMonths?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
  title: Scalars['String'];
  urls?: InputMaybe<Scalars['JSON']>;
};

export type CreateProfileInput = {
  default?: InputMaybe<Flag>;
  introduction?: InputMaybe<Scalars['String']>;
  jobId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateProfileSkillInput = {
  jobSkillId: Scalars['String'];
  profileId: Scalars['String'];
};

export type CreateProjectBookmarkInput = {
  projectId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type CreateProjectImageInput = {
  image: Scalars['String'];
  projectId: Scalars['String'];
};

export type CreateProjectInput = {
  bookmarkCount?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<CategoryType>;
  description?: InputMaybe<Scalars['String']>;
  directLink?: InputMaybe<Scalars['String']>;
  hitCount?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  locationCode?: InputMaybe<Scalars['String']>;
  onoff?: InputMaybe<OnoffType>;
  projectTitle?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['String']>;
  recruitStartAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusType>;
};

export type CreateProjectKeywordInput = {
  keyword: Scalars['String'];
  projectId: Scalars['String'];
};

export type CreateProjectMemberInput = {
  jobCode?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
  projectId: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type CreateProjectMemberOutInput = {
  description?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  projectLeaderUserId?: InputMaybe<Scalars['String']>;
  reasonType?: InputMaybe<ReasonType>;
  userId: Scalars['String'];
};

export type CreateProjectPermitInput = {
  adminuserId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type CreateProjectRequiredMemberInput = {
  jobCount?: InputMaybe<Scalars['Float']>;
  jobId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type CreateProjectRequiredSkillInput = {
  jobSkillId: Scalars['String'];
  projectId: Scalars['String'];
};

export type CreateProjectResearchAnswerInput = {
  answer?: InputMaybe<Scalars['String']>;
  projectResearchId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateProjectResearchInput = {
  priority?: InputMaybe<Scalars['Float']>;
  projectId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type CreateProjectReviewInput = {
  feedback?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  score?: InputMaybe<Scalars['Float']>;
  targetUserId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  loginType?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type CreateUserInterestKeywordInput = {
  keyword: Scalars['String'];
  userId: Scalars['String'];
};

export type DeleteOneAdminuserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneAlertInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneJobCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneJobInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneJobSkillInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneNoticeInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProfileCareerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProfileInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProfileSkillInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectBookmarkInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectImageInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectKeywordInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectMemberInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectMemberOutInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectPermitInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectRequiredMemberInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectRequiredSkillInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectResearchAnswerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectResearchInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProjectReviewInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInterestKeywordInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

/** Y or N */
export enum Flag {
  N = 'N',
  Y = 'Y'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type Job = {
  __typename?: 'Job';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  jobCategoryId?: Maybe<Scalars['String']>;
  jobCode?: Maybe<Scalars['String']>;
  jobSkills: Array<JobSkill>;
  jobTitle: Scalars['String'];
};


export type JobJobSkillsArgs = {
  filter?: InputMaybe<JobSkillFilter>;
  sorting?: InputMaybe<Array<JobSkillSort>>;
};

export type JobAggregateGroupBy = {
  __typename?: 'JobAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type JobCategory = {
  __typename?: 'JobCategory';
  categoryName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  jobs: Array<Job>;
  parentId?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
};


export type JobCategoryJobsArgs = {
  filter?: InputMaybe<JobFilter>;
  sorting?: InputMaybe<Array<JobSort>>;
};

export type JobCategoryAggregateGroupBy = {
  __typename?: 'JobCategoryAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type JobCategoryConnection = {
  __typename?: 'JobCategoryConnection';
  /** Array of nodes. */
  nodes: Array<JobCategory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type JobCategoryCountAggregate = {
  __typename?: 'JobCategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type JobCategoryDeleteResponse = {
  __typename?: 'JobCategoryDeleteResponse';
  categoryName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  parentId?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
};

export type JobCategoryFilter = {
  and?: InputMaybe<Array<JobCategoryFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<JobCategoryFilter>>;
};

export type JobCategoryInput = {
  categoryName: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Float']>;
};

export type JobCategoryMaxAggregate = {
  __typename?: 'JobCategoryMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type JobCategoryMinAggregate = {
  __typename?: 'JobCategoryMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type JobCategorySort = {
  direction: SortDirection;
  field: JobCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum JobCategorySortFields {
  Id = 'id'
}

export type JobConnection = {
  __typename?: 'JobConnection';
  /** Array of nodes. */
  nodes: Array<Job>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type JobCountAggregate = {
  __typename?: 'JobCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type JobDeleteResponse = {
  __typename?: 'JobDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  jobCategoryId?: Maybe<Scalars['String']>;
  jobCode?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
};

export type JobFilter = {
  and?: InputMaybe<Array<JobFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<JobFilter>>;
};

export type JobInput = {
  jobCategoryId?: InputMaybe<Scalars['String']>;
  jobCode?: InputMaybe<Scalars['String']>;
  jobTitle: Scalars['String'];
};

export type JobMaxAggregate = {
  __typename?: 'JobMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type JobMinAggregate = {
  __typename?: 'JobMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type JobSkill = {
  __typename?: 'JobSkill';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  skillName?: Maybe<Scalars['String']>;
};

export type JobSkillAggregateGroupBy = {
  __typename?: 'JobSkillAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type JobSkillConnection = {
  __typename?: 'JobSkillConnection';
  /** Array of nodes. */
  nodes: Array<JobSkill>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type JobSkillCountAggregate = {
  __typename?: 'JobSkillCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type JobSkillDeleteResponse = {
  __typename?: 'JobSkillDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  skillName?: Maybe<Scalars['String']>;
};

export type JobSkillFilter = {
  and?: InputMaybe<Array<JobSkillFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<JobSkillFilter>>;
};

export type JobSkillInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  skillName?: InputMaybe<Scalars['String']>;
};

export type JobSkillMaxAggregate = {
  __typename?: 'JobSkillMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type JobSkillMinAggregate = {
  __typename?: 'JobSkillMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type JobSkillSort = {
  direction: SortDirection;
  field: JobSkillSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum JobSkillSortFields {
  Id = 'id'
}

export type JobSort = {
  direction: SortDirection;
  field: JobSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum JobSortFields {
  Id = 'id'
}

export type Mutation = {
  __typename?: 'Mutation';
  addJobSkillsToJob: Job;
  addJobsToJobCategory: JobCategory;
  addNoticesToAdminuser: Adminuser;
  addProfileCareersToProfile: Profile;
  addProfileSkillsToProfile: Profile;
  addProfilesToUser: User;
  addProjectBookmarksToUser: User;
  addProjectImagesToProject: Project;
  addProjectKeywordsToProject: Project;
  addProjectMemberOutsToProject: Project;
  addProjectMemberOutsToUser: User;
  addProjectMembersToProfile: Profile;
  addProjectMembersToProject: Project;
  addProjectMembersToUser: User;
  addProjectPermitsToProject: Project;
  addProjectRequiredMembersToProject: Project;
  addProjectRequiredSkillsToProject: Project;
  addProjectResearchAnswersToProjectResearch: ProjectResearch;
  addProjectResearchsToProject: Project;
  addProjectReviewsToProject: Project;
  addProjectReviewsToUser: User;
  addUserInterestKeywordsToUser: User;
  createOneAdminuser: Adminuser;
  createOneAlert: Alert;
  createOneJob: Job;
  createOneJobCategory: JobCategory;
  createOneJobSkill: JobSkill;
  createOneNotice: Notice;
  createOneProfile: Profile;
  createOneProfileCareer: ProfileCareer;
  createOneProfileSkill: ProfileSkill;
  createOneProject: Project;
  createOneProjectBookmark: ProjectBookmark;
  createOneProjectImage: ProjectImage;
  createOneProjectKeyword: ProjectKeyword;
  createOneProjectMember: ProjectMember;
  createOneProjectMemberOut: ProjectMemberOut;
  createOneProjectPermit: ProjectPermit;
  createOneProjectRequiredMember: ProjectRequiredMember;
  createOneProjectRequiredSkill: ProjectRequiredSkill;
  createOneProjectResearch: ProjectResearch;
  createOneProjectResearchAnswer: ProjectResearchAnswer;
  createOneProjectReview: ProjectReview;
  createOneUser: User;
  createOneUserInterestKeyword: UserInterestKeyword;
  deleteOneAdminuser: AdminuserDeleteResponse;
  deleteOneAlert: AlertDeleteResponse;
  deleteOneJob: JobDeleteResponse;
  deleteOneJobCategory: JobCategoryDeleteResponse;
  deleteOneJobSkill: JobSkillDeleteResponse;
  deleteOneNotice: NoticeDeleteResponse;
  deleteOneProfile: ProfileDeleteResponse;
  deleteOneProfileCareer: ProfileCareerDeleteResponse;
  deleteOneProfileSkill: ProfileSkillDeleteResponse;
  deleteOneProject: ProjectDeleteResponse;
  deleteOneProjectBookmark: ProjectBookmarkDeleteResponse;
  deleteOneProjectImage: ProjectImageDeleteResponse;
  deleteOneProjectKeyword: ProjectKeywordDeleteResponse;
  deleteOneProjectMember: ProjectMemberDeleteResponse;
  deleteOneProjectMemberOut: ProjectMemberOutDeleteResponse;
  deleteOneProjectPermit: ProjectPermitDeleteResponse;
  deleteOneProjectRequiredMember: ProjectRequiredMemberDeleteResponse;
  deleteOneProjectRequiredSkill: ProjectRequiredSkillDeleteResponse;
  deleteOneProjectResearch: ProjectResearchDeleteResponse;
  deleteOneProjectResearchAnswer: ProjectResearchAnswerDeleteResponse;
  deleteOneProjectReview: ProjectReviewDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserInterestKeyword: UserInterestKeywordDeleteResponse;
  removeJobSkillsFromJob: Job;
  removeJobsFromJobCategory: JobCategory;
  removeNoticesFromAdminuser: Adminuser;
  removeProfileCareersFromProfile: Profile;
  removeProfileSkillsFromProfile: Profile;
  removeProfilesFromUser: User;
  removeProjectBookmarksFromUser: User;
  removeProjectImagesFromProject: Project;
  removeProjectKeywordsFromProject: Project;
  removeProjectMemberOutsFromProject: Project;
  removeProjectMemberOutsFromUser: User;
  removeProjectMembersFromProfile: Profile;
  removeProjectMembersFromProject: Project;
  removeProjectMembersFromUser: User;
  removeProjectPermitsFromProject: Project;
  removeProjectRequiredMembersFromProject: Project;
  removeProjectRequiredSkillsFromProject: Project;
  removeProjectResearchAnswersFromProjectResearch: ProjectResearch;
  removeProjectResearchsFromProject: Project;
  removeProjectReviewsFromProject: Project;
  removeProjectReviewsFromUser: User;
  removeUserInterestKeywordsFromUser: User;
  setJobSkillsOnJob: Job;
  setJobsOnJobCategory: JobCategory;
  setNoticesOnAdminuser: Adminuser;
  setProfileCareersOnProfile: Profile;
  setProfileSkillsOnProfile: Profile;
  setProfilesOnUser: User;
  setProjectBookmarksOnUser: User;
  setProjectImagesOnProject: Project;
  setProjectKeywordsOnProject: Project;
  setProjectMemberOutsOnProject: Project;
  setProjectMemberOutsOnUser: User;
  setProjectMembersOnProfile: Profile;
  setProjectMembersOnProject: Project;
  setProjectMembersOnUser: User;
  setProjectPermitsOnProject: Project;
  setProjectRequiredMembersOnProject: Project;
  setProjectRequiredSkillsOnProject: Project;
  setProjectResearchAnswersOnProjectResearch: ProjectResearch;
  setProjectResearchsOnProject: Project;
  setProjectReviewsOnProject: Project;
  setProjectReviewsOnUser: User;
  setUserInterestKeywordsOnUser: User;
  updateOneAdminuser: Adminuser;
  updateOneAlert: Alert;
  updateOneJob: Job;
  updateOneJobCategory: JobCategory;
  updateOneJobSkill: JobSkill;
  updateOneNotice: Notice;
  updateOneProfile: Profile;
  updateOneProfileCareer: ProfileCareer;
  updateOneProfileSkill: ProfileSkill;
  updateOneProject: Project;
  updateOneProjectBookmark: ProjectBookmark;
  updateOneProjectImage: ProjectImage;
  updateOneProjectKeyword: ProjectKeyword;
  updateOneProjectMember: ProjectMember;
  updateOneProjectMemberOut: ProjectMemberOut;
  updateOneProjectPermit: ProjectPermit;
  updateOneProjectRequiredMember: ProjectRequiredMember;
  updateOneProjectRequiredSkill: ProjectRequiredSkill;
  updateOneProjectResearch: ProjectResearch;
  updateOneProjectResearchAnswer: ProjectResearchAnswer;
  updateOneProjectReview: ProjectReview;
  updateOneUser: User;
  updateOneUserInterestKeyword: UserInterestKeyword;
};


export type MutationAddJobSkillsToJobArgs = {
  input: AddJobSkillsToJobInput;
};


export type MutationAddJobsToJobCategoryArgs = {
  input: AddJobsToJobCategoryInput;
};


export type MutationAddNoticesToAdminuserArgs = {
  input: AddNoticesToAdminuserInput;
};


export type MutationAddProfileCareersToProfileArgs = {
  input: AddProfileCareersToProfileInput;
};


export type MutationAddProfileSkillsToProfileArgs = {
  input: AddProfileSkillsToProfileInput;
};


export type MutationAddProfilesToUserArgs = {
  input: AddProfilesToUserInput;
};


export type MutationAddProjectBookmarksToUserArgs = {
  input: AddProjectBookmarksToUserInput;
};


export type MutationAddProjectImagesToProjectArgs = {
  input: AddProjectImagesToProjectInput;
};


export type MutationAddProjectKeywordsToProjectArgs = {
  input: AddProjectKeywordsToProjectInput;
};


export type MutationAddProjectMemberOutsToProjectArgs = {
  input: AddProjectMemberOutsToProjectInput;
};


export type MutationAddProjectMemberOutsToUserArgs = {
  input: AddProjectMemberOutsToUserInput;
};


export type MutationAddProjectMembersToProfileArgs = {
  input: AddProjectMembersToProfileInput;
};


export type MutationAddProjectMembersToProjectArgs = {
  input: AddProjectMembersToProjectInput;
};


export type MutationAddProjectMembersToUserArgs = {
  input: AddProjectMembersToUserInput;
};


export type MutationAddProjectPermitsToProjectArgs = {
  input: AddProjectPermitsToProjectInput;
};


export type MutationAddProjectRequiredMembersToProjectArgs = {
  input: AddProjectRequiredMembersToProjectInput;
};


export type MutationAddProjectRequiredSkillsToProjectArgs = {
  input: AddProjectRequiredSkillsToProjectInput;
};


export type MutationAddProjectResearchAnswersToProjectResearchArgs = {
  input: AddProjectResearchAnswersToProjectResearchInput;
};


export type MutationAddProjectResearchsToProjectArgs = {
  input: AddProjectResearchsToProjectInput;
};


export type MutationAddProjectReviewsToProjectArgs = {
  input: AddProjectReviewsToProjectInput;
};


export type MutationAddProjectReviewsToUserArgs = {
  input: AddProjectReviewsToUserInput;
};


export type MutationAddUserInterestKeywordsToUserArgs = {
  input: AddUserInterestKeywordsToUserInput;
};


export type MutationCreateOneAdminuserArgs = {
  input: CreateOneAdminuserInput;
};


export type MutationCreateOneAlertArgs = {
  input: CreateOneAlertInput;
};


export type MutationCreateOneJobArgs = {
  input: CreateOneJobInput;
};


export type MutationCreateOneJobCategoryArgs = {
  input: CreateOneJobCategoryInput;
};


export type MutationCreateOneJobSkillArgs = {
  input: CreateOneJobSkillInput;
};


export type MutationCreateOneNoticeArgs = {
  input: CreateOneNoticeInput;
};


export type MutationCreateOneProfileArgs = {
  input: CreateOneProfileInput;
};


export type MutationCreateOneProfileCareerArgs = {
  input: CreateOneProfileCareerInput;
};


export type MutationCreateOneProfileSkillArgs = {
  input: CreateOneProfileSkillInput;
};


export type MutationCreateOneProjectArgs = {
  input: CreateOneProjectInput;
};


export type MutationCreateOneProjectBookmarkArgs = {
  input: CreateOneProjectBookmarkInput;
};


export type MutationCreateOneProjectImageArgs = {
  input: CreateOneProjectImageInput;
};


export type MutationCreateOneProjectKeywordArgs = {
  input: CreateOneProjectKeywordInput;
};


export type MutationCreateOneProjectMemberArgs = {
  input: CreateOneProjectMemberInput;
};


export type MutationCreateOneProjectMemberOutArgs = {
  input: CreateOneProjectMemberOutInput;
};


export type MutationCreateOneProjectPermitArgs = {
  input: CreateOneProjectPermitInput;
};


export type MutationCreateOneProjectRequiredMemberArgs = {
  input: CreateOneProjectRequiredMemberInput;
};


export type MutationCreateOneProjectRequiredSkillArgs = {
  input: CreateOneProjectRequiredSkillInput;
};


export type MutationCreateOneProjectResearchArgs = {
  input: CreateOneProjectResearchInput;
};


export type MutationCreateOneProjectResearchAnswerArgs = {
  input: CreateOneProjectResearchAnswerInput;
};


export type MutationCreateOneProjectReviewArgs = {
  input: CreateOneProjectReviewInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateOneUserInterestKeywordArgs = {
  input: CreateOneUserInterestKeywordInput;
};


export type MutationDeleteOneAdminuserArgs = {
  input: DeleteOneAdminuserInput;
};


export type MutationDeleteOneAlertArgs = {
  input: DeleteOneAlertInput;
};


export type MutationDeleteOneJobArgs = {
  input: DeleteOneJobInput;
};


export type MutationDeleteOneJobCategoryArgs = {
  input: DeleteOneJobCategoryInput;
};


export type MutationDeleteOneJobSkillArgs = {
  input: DeleteOneJobSkillInput;
};


export type MutationDeleteOneNoticeArgs = {
  input: DeleteOneNoticeInput;
};


export type MutationDeleteOneProfileArgs = {
  input: DeleteOneProfileInput;
};


export type MutationDeleteOneProfileCareerArgs = {
  input: DeleteOneProfileCareerInput;
};


export type MutationDeleteOneProfileSkillArgs = {
  input: DeleteOneProfileSkillInput;
};


export type MutationDeleteOneProjectArgs = {
  input: DeleteOneProjectInput;
};


export type MutationDeleteOneProjectBookmarkArgs = {
  input: DeleteOneProjectBookmarkInput;
};


export type MutationDeleteOneProjectImageArgs = {
  input: DeleteOneProjectImageInput;
};


export type MutationDeleteOneProjectKeywordArgs = {
  input: DeleteOneProjectKeywordInput;
};


export type MutationDeleteOneProjectMemberArgs = {
  input: DeleteOneProjectMemberInput;
};


export type MutationDeleteOneProjectMemberOutArgs = {
  input: DeleteOneProjectMemberOutInput;
};


export type MutationDeleteOneProjectPermitArgs = {
  input: DeleteOneProjectPermitInput;
};


export type MutationDeleteOneProjectRequiredMemberArgs = {
  input: DeleteOneProjectRequiredMemberInput;
};


export type MutationDeleteOneProjectRequiredSkillArgs = {
  input: DeleteOneProjectRequiredSkillInput;
};


export type MutationDeleteOneProjectResearchArgs = {
  input: DeleteOneProjectResearchInput;
};


export type MutationDeleteOneProjectResearchAnswerArgs = {
  input: DeleteOneProjectResearchAnswerInput;
};


export type MutationDeleteOneProjectReviewArgs = {
  input: DeleteOneProjectReviewInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeleteOneUserInterestKeywordArgs = {
  input: DeleteOneUserInterestKeywordInput;
};


export type MutationRemoveJobSkillsFromJobArgs = {
  input: RemoveJobSkillsFromJobInput;
};


export type MutationRemoveJobsFromJobCategoryArgs = {
  input: RemoveJobsFromJobCategoryInput;
};


export type MutationRemoveNoticesFromAdminuserArgs = {
  input: RemoveNoticesFromAdminuserInput;
};


export type MutationRemoveProfileCareersFromProfileArgs = {
  input: RemoveProfileCareersFromProfileInput;
};


export type MutationRemoveProfileSkillsFromProfileArgs = {
  input: RemoveProfileSkillsFromProfileInput;
};


export type MutationRemoveProfilesFromUserArgs = {
  input: RemoveProfilesFromUserInput;
};


export type MutationRemoveProjectBookmarksFromUserArgs = {
  input: RemoveProjectBookmarksFromUserInput;
};


export type MutationRemoveProjectImagesFromProjectArgs = {
  input: RemoveProjectImagesFromProjectInput;
};


export type MutationRemoveProjectKeywordsFromProjectArgs = {
  input: RemoveProjectKeywordsFromProjectInput;
};


export type MutationRemoveProjectMemberOutsFromProjectArgs = {
  input: RemoveProjectMemberOutsFromProjectInput;
};


export type MutationRemoveProjectMemberOutsFromUserArgs = {
  input: RemoveProjectMemberOutsFromUserInput;
};


export type MutationRemoveProjectMembersFromProfileArgs = {
  input: RemoveProjectMembersFromProfileInput;
};


export type MutationRemoveProjectMembersFromProjectArgs = {
  input: RemoveProjectMembersFromProjectInput;
};


export type MutationRemoveProjectMembersFromUserArgs = {
  input: RemoveProjectMembersFromUserInput;
};


export type MutationRemoveProjectPermitsFromProjectArgs = {
  input: RemoveProjectPermitsFromProjectInput;
};


export type MutationRemoveProjectRequiredMembersFromProjectArgs = {
  input: RemoveProjectRequiredMembersFromProjectInput;
};


export type MutationRemoveProjectRequiredSkillsFromProjectArgs = {
  input: RemoveProjectRequiredSkillsFromProjectInput;
};


export type MutationRemoveProjectResearchAnswersFromProjectResearchArgs = {
  input: RemoveProjectResearchAnswersFromProjectResearchInput;
};


export type MutationRemoveProjectResearchsFromProjectArgs = {
  input: RemoveProjectResearchsFromProjectInput;
};


export type MutationRemoveProjectReviewsFromProjectArgs = {
  input: RemoveProjectReviewsFromProjectInput;
};


export type MutationRemoveProjectReviewsFromUserArgs = {
  input: RemoveProjectReviewsFromUserInput;
};


export type MutationRemoveUserInterestKeywordsFromUserArgs = {
  input: RemoveUserInterestKeywordsFromUserInput;
};


export type MutationSetJobSkillsOnJobArgs = {
  input: SetJobSkillsOnJobInput;
};


export type MutationSetJobsOnJobCategoryArgs = {
  input: SetJobsOnJobCategoryInput;
};


export type MutationSetNoticesOnAdminuserArgs = {
  input: SetNoticesOnAdminuserInput;
};


export type MutationSetProfileCareersOnProfileArgs = {
  input: SetProfileCareersOnProfileInput;
};


export type MutationSetProfileSkillsOnProfileArgs = {
  input: SetProfileSkillsOnProfileInput;
};


export type MutationSetProfilesOnUserArgs = {
  input: SetProfilesOnUserInput;
};


export type MutationSetProjectBookmarksOnUserArgs = {
  input: SetProjectBookmarksOnUserInput;
};


export type MutationSetProjectImagesOnProjectArgs = {
  input: SetProjectImagesOnProjectInput;
};


export type MutationSetProjectKeywordsOnProjectArgs = {
  input: SetProjectKeywordsOnProjectInput;
};


export type MutationSetProjectMemberOutsOnProjectArgs = {
  input: SetProjectMemberOutsOnProjectInput;
};


export type MutationSetProjectMemberOutsOnUserArgs = {
  input: SetProjectMemberOutsOnUserInput;
};


export type MutationSetProjectMembersOnProfileArgs = {
  input: SetProjectMembersOnProfileInput;
};


export type MutationSetProjectMembersOnProjectArgs = {
  input: SetProjectMembersOnProjectInput;
};


export type MutationSetProjectMembersOnUserArgs = {
  input: SetProjectMembersOnUserInput;
};


export type MutationSetProjectPermitsOnProjectArgs = {
  input: SetProjectPermitsOnProjectInput;
};


export type MutationSetProjectRequiredMembersOnProjectArgs = {
  input: SetProjectRequiredMembersOnProjectInput;
};


export type MutationSetProjectRequiredSkillsOnProjectArgs = {
  input: SetProjectRequiredSkillsOnProjectInput;
};


export type MutationSetProjectResearchAnswersOnProjectResearchArgs = {
  input: SetProjectResearchAnswersOnProjectResearchInput;
};


export type MutationSetProjectResearchsOnProjectArgs = {
  input: SetProjectResearchsOnProjectInput;
};


export type MutationSetProjectReviewsOnProjectArgs = {
  input: SetProjectReviewsOnProjectInput;
};


export type MutationSetProjectReviewsOnUserArgs = {
  input: SetProjectReviewsOnUserInput;
};


export type MutationSetUserInterestKeywordsOnUserArgs = {
  input: SetUserInterestKeywordsOnUserInput;
};


export type MutationUpdateOneAdminuserArgs = {
  input: UpdateOneAdminuserInput;
};


export type MutationUpdateOneAlertArgs = {
  input: UpdateOneAlertInput;
};


export type MutationUpdateOneJobArgs = {
  input: UpdateOneJobInput;
};


export type MutationUpdateOneJobCategoryArgs = {
  input: UpdateOneJobCategoryInput;
};


export type MutationUpdateOneJobSkillArgs = {
  input: UpdateOneJobSkillInput;
};


export type MutationUpdateOneNoticeArgs = {
  input: UpdateOneNoticeInput;
};


export type MutationUpdateOneProfileArgs = {
  input: UpdateOneProfileInput;
};


export type MutationUpdateOneProfileCareerArgs = {
  input: UpdateOneProfileCareerInput;
};


export type MutationUpdateOneProfileSkillArgs = {
  input: UpdateOneProfileSkillInput;
};


export type MutationUpdateOneProjectArgs = {
  input: UpdateOneProjectInput;
};


export type MutationUpdateOneProjectBookmarkArgs = {
  input: UpdateOneProjectBookmarkInput;
};


export type MutationUpdateOneProjectImageArgs = {
  input: UpdateOneProjectImageInput;
};


export type MutationUpdateOneProjectKeywordArgs = {
  input: UpdateOneProjectKeywordInput;
};


export type MutationUpdateOneProjectMemberArgs = {
  input: UpdateOneProjectMemberInput;
};


export type MutationUpdateOneProjectMemberOutArgs = {
  input: UpdateOneProjectMemberOutInput;
};


export type MutationUpdateOneProjectPermitArgs = {
  input: UpdateOneProjectPermitInput;
};


export type MutationUpdateOneProjectRequiredMemberArgs = {
  input: UpdateOneProjectRequiredMemberInput;
};


export type MutationUpdateOneProjectRequiredSkillArgs = {
  input: UpdateOneProjectRequiredSkillInput;
};


export type MutationUpdateOneProjectResearchArgs = {
  input: UpdateOneProjectResearchInput;
};


export type MutationUpdateOneProjectResearchAnswerArgs = {
  input: UpdateOneProjectResearchAnswerInput;
};


export type MutationUpdateOneProjectReviewArgs = {
  input: UpdateOneProjectReviewInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOneUserInterestKeywordArgs = {
  input: UpdateOneUserInterestKeywordInput;
};

export type Notice = {
  __typename?: 'Notice';
  adminuserId: Scalars['String'];
  category?: Maybe<BoardCategoryType>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
};

export type NoticeAggregateGroupBy = {
  __typename?: 'NoticeAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type NoticeConnection = {
  __typename?: 'NoticeConnection';
  /** Array of nodes. */
  nodes: Array<Notice>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type NoticeCountAggregate = {
  __typename?: 'NoticeCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NoticeDeleteResponse = {
  __typename?: 'NoticeDeleteResponse';
  adminuserId?: Maybe<Scalars['String']>;
  category?: Maybe<BoardCategoryType>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
};

export type NoticeFilter = {
  and?: InputMaybe<Array<NoticeFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<NoticeFilter>>;
};

export type NoticeInput = {
  adminuserId: Scalars['String'];
  category?: InputMaybe<BoardCategoryType>;
  content?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type NoticeMaxAggregate = {
  __typename?: 'NoticeMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type NoticeMinAggregate = {
  __typename?: 'NoticeMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type NoticeSort = {
  direction: SortDirection;
  field: NoticeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum NoticeSortFields {
  Id = 'id'
}

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export enum OnoffType {
  Off = 'off',
  On = 'on',
  Onoff = 'onoff'
}

export type Profile = {
  __typename?: 'Profile';
  createdAt: Scalars['DateTime'];
  default?: Maybe<Flag>;
  id?: Maybe<Scalars['ID']>;
  introduction?: Maybe<Scalars['String']>;
  jobId: Scalars['String'];
  profileCareers: Array<ProfileCareer>;
  profileSkills: Array<ProfileSkill>;
  projectMembers: Array<ProjectMember>;
  userId: Scalars['String'];
};


export type ProfileProfileCareersArgs = {
  filter?: InputMaybe<ProfileCareerFilter>;
  sorting?: InputMaybe<Array<ProfileCareerSort>>;
};


export type ProfileProfileSkillsArgs = {
  filter?: InputMaybe<ProfileSkillFilter>;
  sorting?: InputMaybe<Array<ProfileSkillSort>>;
};


export type ProfileProjectMembersArgs = {
  filter?: InputMaybe<ProjectMemberFilter>;
  sorting?: InputMaybe<Array<ProjectMemberSort>>;
};

export type ProfileAggregateGroupBy = {
  __typename?: 'ProfileAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileCareer = {
  __typename?: 'ProfileCareer';
  careerMonths?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  profileId: Scalars['String'];
  title: Scalars['String'];
  urls?: Maybe<Scalars['JSON']>;
};

export type ProfileCareerAggregateGroupBy = {
  __typename?: 'ProfileCareerAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileCareerConnection = {
  __typename?: 'ProfileCareerConnection';
  /** Array of nodes. */
  nodes: Array<ProfileCareer>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProfileCareerCountAggregate = {
  __typename?: 'ProfileCareerCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProfileCareerDeleteResponse = {
  __typename?: 'ProfileCareerDeleteResponse';
  careerMonths?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  profileId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  urls?: Maybe<Scalars['JSON']>;
};

export type ProfileCareerFilter = {
  and?: InputMaybe<Array<ProfileCareerFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProfileCareerFilter>>;
};

export type ProfileCareerInput = {
  careerMonths?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
  title: Scalars['String'];
  urls?: InputMaybe<Scalars['JSON']>;
};

export type ProfileCareerMaxAggregate = {
  __typename?: 'ProfileCareerMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileCareerMinAggregate = {
  __typename?: 'ProfileCareerMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileCareerSort = {
  direction: SortDirection;
  field: ProfileCareerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProfileCareerSortFields {
  Id = 'id'
}

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** Array of nodes. */
  nodes: Array<Profile>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProfileCountAggregate = {
  __typename?: 'ProfileCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProfileDeleteResponse = {
  __typename?: 'ProfileDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  default?: Maybe<Flag>;
  id?: Maybe<Scalars['ID']>;
  introduction?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileFilter = {
  and?: InputMaybe<Array<ProfileFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProfileFilter>>;
};

export type ProfileInput = {
  default?: InputMaybe<Flag>;
  introduction?: InputMaybe<Scalars['String']>;
  jobId: Scalars['String'];
  userId: Scalars['String'];
};

export type ProfileMaxAggregate = {
  __typename?: 'ProfileMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileMinAggregate = {
  __typename?: 'ProfileMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileSkill = {
  __typename?: 'ProfileSkill';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  jobSkillId: Scalars['String'];
  profileId: Scalars['String'];
};

export type ProfileSkillAggregateGroupBy = {
  __typename?: 'ProfileSkillAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileSkillConnection = {
  __typename?: 'ProfileSkillConnection';
  /** Array of nodes. */
  nodes: Array<ProfileSkill>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProfileSkillCountAggregate = {
  __typename?: 'ProfileSkillCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProfileSkillDeleteResponse = {
  __typename?: 'ProfileSkillDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  jobSkillId?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['String']>;
};

export type ProfileSkillFilter = {
  and?: InputMaybe<Array<ProfileSkillFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProfileSkillFilter>>;
};

export type ProfileSkillInput = {
  jobSkillId: Scalars['String'];
  profileId: Scalars['String'];
};

export type ProfileSkillMaxAggregate = {
  __typename?: 'ProfileSkillMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileSkillMinAggregate = {
  __typename?: 'ProfileSkillMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProfileSkillSort = {
  direction: SortDirection;
  field: ProfileSkillSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProfileSkillSortFields {
  Id = 'id'
}

export type ProfileSort = {
  direction: SortDirection;
  field: ProfileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProfileSortFields {
  Id = 'id'
}

export type Project = {
  __typename?: 'Project';
  bookmarkCount?: Maybe<Scalars['Float']>;
  category?: Maybe<CategoryType>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  directLink?: Maybe<Scalars['String']>;
  hitCount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  locationCode?: Maybe<Scalars['String']>;
  onoff?: Maybe<OnoffType>;
  projectImages: Array<ProjectImage>;
  projectKeywords: Array<ProjectKeyword>;
  projectMemberOuts: Array<ProjectMemberOut>;
  projectMembers: Array<ProjectMember>;
  projectPermits: Array<ProjectPermit>;
  projectRequiredMembers: Array<ProjectRequiredMember>;
  projectRequiredSkills: Array<ProjectRequiredSkill>;
  projectResearchs: Array<ProjectResearch>;
  projectReviews: Array<ProjectReview>;
  projectTitle?: Maybe<Scalars['String']>;
  rate: Scalars['String'];
  recruitStartAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusType>;
};


export type ProjectProjectImagesArgs = {
  filter?: InputMaybe<ProjectImageFilter>;
  sorting?: InputMaybe<Array<ProjectImageSort>>;
};


export type ProjectProjectKeywordsArgs = {
  filter?: InputMaybe<ProjectKeywordFilter>;
  sorting?: InputMaybe<Array<ProjectKeywordSort>>;
};


export type ProjectProjectMemberOutsArgs = {
  filter?: InputMaybe<ProjectMemberOutFilter>;
  sorting?: InputMaybe<Array<ProjectMemberOutSort>>;
};


export type ProjectProjectMembersArgs = {
  filter?: InputMaybe<ProjectMemberFilter>;
  sorting?: InputMaybe<Array<ProjectMemberSort>>;
};


export type ProjectProjectPermitsArgs = {
  filter?: InputMaybe<ProjectPermitFilter>;
  sorting?: InputMaybe<Array<ProjectPermitSort>>;
};


export type ProjectProjectRequiredMembersArgs = {
  filter?: InputMaybe<ProjectRequiredMemberFilter>;
  sorting?: InputMaybe<Array<ProjectRequiredMemberSort>>;
};


export type ProjectProjectRequiredSkillsArgs = {
  filter?: InputMaybe<ProjectRequiredSkillFilter>;
  sorting?: InputMaybe<Array<ProjectRequiredSkillSort>>;
};


export type ProjectProjectResearchsArgs = {
  filter?: InputMaybe<ProjectResearchFilter>;
  sorting?: InputMaybe<Array<ProjectResearchSort>>;
};


export type ProjectProjectReviewsArgs = {
  filter?: InputMaybe<ProjectReviewFilter>;
  sorting?: InputMaybe<Array<ProjectReviewSort>>;
};

export type ProjectAggregateGroupBy = {
  __typename?: 'ProjectAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectBookmark = {
  __typename?: 'ProjectBookmark';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  projectId: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type ProjectBookmarkAggregateGroupBy = {
  __typename?: 'ProjectBookmarkAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectBookmarkConnection = {
  __typename?: 'ProjectBookmarkConnection';
  /** Array of nodes. */
  nodes: Array<ProjectBookmark>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectBookmarkCountAggregate = {
  __typename?: 'ProjectBookmarkCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectBookmarkDeleteResponse = {
  __typename?: 'ProjectBookmarkDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectBookmarkFilter = {
  and?: InputMaybe<Array<ProjectBookmarkFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectBookmarkFilter>>;
};

export type ProjectBookmarkInput = {
  projectId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type ProjectBookmarkMaxAggregate = {
  __typename?: 'ProjectBookmarkMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectBookmarkMinAggregate = {
  __typename?: 'ProjectBookmarkMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectBookmarkSort = {
  direction: SortDirection;
  field: ProjectBookmarkSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectBookmarkSortFields {
  Id = 'id'
}

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Array of nodes. */
  nodes: Array<Project>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectDeleteResponse = {
  __typename?: 'ProjectDeleteResponse';
  bookmarkCount?: Maybe<Scalars['Float']>;
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  directLink?: Maybe<Scalars['String']>;
  hitCount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  locationCode?: Maybe<Scalars['String']>;
  onoff?: Maybe<OnoffType>;
  projectTitle?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['String']>;
  recruitStartAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<StatusType>;
};

export type ProjectFilter = {
  and?: InputMaybe<Array<ProjectFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectFilter>>;
};

export type ProjectImage = {
  __typename?: 'ProjectImage';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  image: Scalars['String'];
  projectId: Scalars['String'];
};

export type ProjectImageAggregateGroupBy = {
  __typename?: 'ProjectImageAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectImageConnection = {
  __typename?: 'ProjectImageConnection';
  /** Array of nodes. */
  nodes: Array<ProjectImage>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectImageCountAggregate = {
  __typename?: 'ProjectImageCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectImageDeleteResponse = {
  __typename?: 'ProjectImageDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export type ProjectImageFilter = {
  and?: InputMaybe<Array<ProjectImageFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectImageFilter>>;
};

export type ProjectImageInput = {
  image: Scalars['String'];
  projectId: Scalars['String'];
};

export type ProjectImageMaxAggregate = {
  __typename?: 'ProjectImageMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectImageMinAggregate = {
  __typename?: 'ProjectImageMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectImageSort = {
  direction: SortDirection;
  field: ProjectImageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectImageSortFields {
  Id = 'id'
}

export type ProjectInput = {
  bookmarkCount?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<CategoryType>;
  description?: InputMaybe<Scalars['String']>;
  directLink?: InputMaybe<Scalars['String']>;
  hitCount?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  locationCode?: InputMaybe<Scalars['String']>;
  onoff?: InputMaybe<OnoffType>;
  projectTitle?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['String']>;
  recruitStartAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusType>;
};

export type ProjectKeyword = {
  __typename?: 'ProjectKeyword';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  keyword: Scalars['String'];
  projectId: Scalars['String'];
};

export type ProjectKeywordAggregateGroupBy = {
  __typename?: 'ProjectKeywordAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectKeywordConnection = {
  __typename?: 'ProjectKeywordConnection';
  /** Array of nodes. */
  nodes: Array<ProjectKeyword>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectKeywordCountAggregate = {
  __typename?: 'ProjectKeywordCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectKeywordDeleteResponse = {
  __typename?: 'ProjectKeywordDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  keyword?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export type ProjectKeywordFilter = {
  and?: InputMaybe<Array<ProjectKeywordFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectKeywordFilter>>;
};

export type ProjectKeywordInput = {
  keyword: Scalars['String'];
  projectId: Scalars['String'];
};

export type ProjectKeywordMaxAggregate = {
  __typename?: 'ProjectKeywordMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectKeywordMinAggregate = {
  __typename?: 'ProjectKeywordMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectKeywordSort = {
  direction: SortDirection;
  field: ProjectKeywordSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectKeywordSortFields {
  Id = 'id'
}

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  jobCode?: Maybe<Scalars['String']>;
  profileId: Scalars['String'];
  projectId: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ProjectMemberAggregateGroupBy = {
  __typename?: 'ProjectMemberAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMemberConnection = {
  __typename?: 'ProjectMemberConnection';
  /** Array of nodes. */
  nodes: Array<ProjectMember>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectMemberCountAggregate = {
  __typename?: 'ProjectMemberCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectMemberDeleteResponse = {
  __typename?: 'ProjectMemberDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  jobCode?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectMemberFilter = {
  and?: InputMaybe<Array<ProjectMemberFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectMemberFilter>>;
};

export type ProjectMemberInput = {
  jobCode?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
  projectId: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ProjectMemberMaxAggregate = {
  __typename?: 'ProjectMemberMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMemberMinAggregate = {
  __typename?: 'ProjectMemberMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMemberOut = {
  __typename?: 'ProjectMemberOut';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  projectId: Scalars['String'];
  projectLeaderUserId?: Maybe<Scalars['String']>;
  reasonType?: Maybe<ReasonType>;
  userId: Scalars['String'];
};

export type ProjectMemberOutAggregateGroupBy = {
  __typename?: 'ProjectMemberOutAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMemberOutConnection = {
  __typename?: 'ProjectMemberOutConnection';
  /** Array of nodes. */
  nodes: Array<ProjectMemberOut>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectMemberOutCountAggregate = {
  __typename?: 'ProjectMemberOutCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectMemberOutDeleteResponse = {
  __typename?: 'ProjectMemberOutDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['String']>;
  projectLeaderUserId?: Maybe<Scalars['String']>;
  reasonType?: Maybe<ReasonType>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectMemberOutFilter = {
  and?: InputMaybe<Array<ProjectMemberOutFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectMemberOutFilter>>;
};

export type ProjectMemberOutInput = {
  description?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  projectLeaderUserId?: InputMaybe<Scalars['String']>;
  reasonType?: InputMaybe<ReasonType>;
  userId: Scalars['String'];
};

export type ProjectMemberOutMaxAggregate = {
  __typename?: 'ProjectMemberOutMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMemberOutMinAggregate = {
  __typename?: 'ProjectMemberOutMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectMemberOutSort = {
  direction: SortDirection;
  field: ProjectMemberOutSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectMemberOutSortFields {
  Id = 'id'
}

export type ProjectMemberSort = {
  direction: SortDirection;
  field: ProjectMemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectMemberSortFields {
  Id = 'id'
}

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectPermit = {
  __typename?: 'ProjectPermit';
  adminuserId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  projectId: Scalars['String'];
};

export type ProjectPermitAggregateGroupBy = {
  __typename?: 'ProjectPermitAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectPermitConnection = {
  __typename?: 'ProjectPermitConnection';
  /** Array of nodes. */
  nodes: Array<ProjectPermit>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectPermitCountAggregate = {
  __typename?: 'ProjectPermitCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectPermitDeleteResponse = {
  __typename?: 'ProjectPermitDeleteResponse';
  adminuserId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['String']>;
};

export type ProjectPermitFilter = {
  and?: InputMaybe<Array<ProjectPermitFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectPermitFilter>>;
};

export type ProjectPermitInput = {
  adminuserId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type ProjectPermitMaxAggregate = {
  __typename?: 'ProjectPermitMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectPermitMinAggregate = {
  __typename?: 'ProjectPermitMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectPermitSort = {
  direction: SortDirection;
  field: ProjectPermitSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectPermitSortFields {
  Id = 'id'
}

export type ProjectRequiredMember = {
  __typename?: 'ProjectRequiredMember';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  jobCount?: Maybe<Scalars['Float']>;
  jobId?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type ProjectRequiredMemberAggregateGroupBy = {
  __typename?: 'ProjectRequiredMemberAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectRequiredMemberConnection = {
  __typename?: 'ProjectRequiredMemberConnection';
  /** Array of nodes. */
  nodes: Array<ProjectRequiredMember>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectRequiredMemberCountAggregate = {
  __typename?: 'ProjectRequiredMemberCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectRequiredMemberDeleteResponse = {
  __typename?: 'ProjectRequiredMemberDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  jobCount?: Maybe<Scalars['Float']>;
  jobId?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export type ProjectRequiredMemberFilter = {
  and?: InputMaybe<Array<ProjectRequiredMemberFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectRequiredMemberFilter>>;
};

export type ProjectRequiredMemberInput = {
  jobCount?: InputMaybe<Scalars['Float']>;
  jobId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type ProjectRequiredMemberMaxAggregate = {
  __typename?: 'ProjectRequiredMemberMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectRequiredMemberMinAggregate = {
  __typename?: 'ProjectRequiredMemberMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectRequiredMemberSort = {
  direction: SortDirection;
  field: ProjectRequiredMemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectRequiredMemberSortFields {
  Id = 'id'
}

export type ProjectRequiredSkill = {
  __typename?: 'ProjectRequiredSkill';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  jobSkillId: Scalars['String'];
  projectId: Scalars['String'];
};

export type ProjectRequiredSkillAggregateGroupBy = {
  __typename?: 'ProjectRequiredSkillAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectRequiredSkillConnection = {
  __typename?: 'ProjectRequiredSkillConnection';
  /** Array of nodes. */
  nodes: Array<ProjectRequiredSkill>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectRequiredSkillCountAggregate = {
  __typename?: 'ProjectRequiredSkillCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectRequiredSkillDeleteResponse = {
  __typename?: 'ProjectRequiredSkillDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  jobSkillId?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export type ProjectRequiredSkillFilter = {
  and?: InputMaybe<Array<ProjectRequiredSkillFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectRequiredSkillFilter>>;
};

export type ProjectRequiredSkillInput = {
  jobSkillId: Scalars['String'];
  projectId: Scalars['String'];
};

export type ProjectRequiredSkillMaxAggregate = {
  __typename?: 'ProjectRequiredSkillMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectRequiredSkillMinAggregate = {
  __typename?: 'ProjectRequiredSkillMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectRequiredSkillSort = {
  direction: SortDirection;
  field: ProjectRequiredSkillSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectRequiredSkillSortFields {
  Id = 'id'
}

export type ProjectResearch = {
  __typename?: 'ProjectResearch';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  priority?: Maybe<Scalars['Float']>;
  projectId: Scalars['String'];
  projectResearchAnswers: Array<ProjectResearchAnswer>;
  title?: Maybe<Scalars['String']>;
};


export type ProjectResearchProjectResearchAnswersArgs = {
  filter?: InputMaybe<ProjectResearchAnswerFilter>;
  sorting?: InputMaybe<Array<ProjectResearchAnswerSort>>;
};

export type ProjectResearchAggregateGroupBy = {
  __typename?: 'ProjectResearchAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectResearchAnswer = {
  __typename?: 'ProjectResearchAnswer';
  answer?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  projectResearchId: Scalars['String'];
  userId: Scalars['String'];
};

export type ProjectResearchAnswerAggregateGroupBy = {
  __typename?: 'ProjectResearchAnswerAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectResearchAnswerConnection = {
  __typename?: 'ProjectResearchAnswerConnection';
  /** Array of nodes. */
  nodes: Array<ProjectResearchAnswer>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectResearchAnswerCountAggregate = {
  __typename?: 'ProjectResearchAnswerCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectResearchAnswerDeleteResponse = {
  __typename?: 'ProjectResearchAnswerDeleteResponse';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  projectResearchId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectResearchAnswerFilter = {
  and?: InputMaybe<Array<ProjectResearchAnswerFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectResearchAnswerFilter>>;
};

export type ProjectResearchAnswerInput = {
  answer?: InputMaybe<Scalars['String']>;
  projectResearchId: Scalars['String'];
  userId: Scalars['String'];
};

export type ProjectResearchAnswerMaxAggregate = {
  __typename?: 'ProjectResearchAnswerMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectResearchAnswerMinAggregate = {
  __typename?: 'ProjectResearchAnswerMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectResearchAnswerSort = {
  direction: SortDirection;
  field: ProjectResearchAnswerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectResearchAnswerSortFields {
  Id = 'id'
}

export type ProjectResearchConnection = {
  __typename?: 'ProjectResearchConnection';
  /** Array of nodes. */
  nodes: Array<ProjectResearch>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectResearchCountAggregate = {
  __typename?: 'ProjectResearchCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectResearchDeleteResponse = {
  __typename?: 'ProjectResearchDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priority?: Maybe<Scalars['Float']>;
  projectId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectResearchFilter = {
  and?: InputMaybe<Array<ProjectResearchFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectResearchFilter>>;
};

export type ProjectResearchInput = {
  priority?: InputMaybe<Scalars['Float']>;
  projectId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectResearchMaxAggregate = {
  __typename?: 'ProjectResearchMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectResearchMinAggregate = {
  __typename?: 'ProjectResearchMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectResearchSort = {
  direction: SortDirection;
  field: ProjectResearchSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectResearchSortFields {
  Id = 'id'
}

export type ProjectReview = {
  __typename?: 'ProjectReview';
  createdAt: Scalars['DateTime'];
  feedback?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  projectId: Scalars['String'];
  score: Scalars['Float'];
  targetUserId?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ProjectReviewAggregateGroupBy = {
  __typename?: 'ProjectReviewAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectReviewConnection = {
  __typename?: 'ProjectReviewConnection';
  /** Array of nodes. */
  nodes: Array<ProjectReview>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProjectReviewCountAggregate = {
  __typename?: 'ProjectReviewCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ProjectReviewDeleteResponse = {
  __typename?: 'ProjectReviewDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  feedback?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  targetUserId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectReviewFilter = {
  and?: InputMaybe<Array<ProjectReviewFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectReviewFilter>>;
};

export type ProjectReviewInput = {
  feedback?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  score?: InputMaybe<Scalars['Float']>;
  targetUserId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ProjectReviewMaxAggregate = {
  __typename?: 'ProjectReviewMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectReviewMinAggregate = {
  __typename?: 'ProjectReviewMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type ProjectReviewSort = {
  direction: SortDirection;
  field: ProjectReviewSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectReviewSortFields {
  Id = 'id'
}

export type ProjectSort = {
  direction: SortDirection;
  field: ProjectSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectSortFields {
  Id = 'id'
}

export type Query = {
  __typename?: 'Query';
  adminuser?: Maybe<Adminuser>;
  adminusers: AdminuserConnection;
  alert?: Maybe<Alert>;
  alerts: AlertConnection;
  job?: Maybe<Job>;
  jobCategories: JobCategoryConnection;
  jobCategory?: Maybe<JobCategory>;
  jobSkill?: Maybe<JobSkill>;
  jobSkills: JobSkillConnection;
  jobs: JobConnection;
  notice?: Maybe<Notice>;
  notices: NoticeConnection;
  profile?: Maybe<Profile>;
  profileCareer?: Maybe<ProfileCareer>;
  profileCareers: ProfileCareerConnection;
  profileSkill?: Maybe<ProfileSkill>;
  profileSkills: ProfileSkillConnection;
  profiles: ProfileConnection;
  project?: Maybe<Project>;
  projectBookmark?: Maybe<ProjectBookmark>;
  projectBookmarks: ProjectBookmarkConnection;
  projectImage?: Maybe<ProjectImage>;
  projectImages: ProjectImageConnection;
  projectKeyword?: Maybe<ProjectKeyword>;
  projectKeywords: ProjectKeywordConnection;
  projectMember?: Maybe<ProjectMember>;
  projectMemberOut?: Maybe<ProjectMemberOut>;
  projectMemberOuts: ProjectMemberOutConnection;
  projectMembers: ProjectMemberConnection;
  projectPermit?: Maybe<ProjectPermit>;
  projectPermits: ProjectPermitConnection;
  projectRequiredMember?: Maybe<ProjectRequiredMember>;
  projectRequiredMembers: ProjectRequiredMemberConnection;
  projectRequiredSkill?: Maybe<ProjectRequiredSkill>;
  projectRequiredSkills: ProjectRequiredSkillConnection;
  projectResearch?: Maybe<ProjectResearch>;
  projectResearchAnswer?: Maybe<ProjectResearchAnswer>;
  projectResearchAnswers: ProjectResearchAnswerConnection;
  projectResearches: ProjectResearchConnection;
  projectReview?: Maybe<ProjectReview>;
  projectReviews: ProjectReviewConnection;
  projects: ProjectConnection;
  user?: Maybe<User>;
  userInterestKeyword?: Maybe<UserInterestKeyword>;
  userInterestKeywords: UserInterestKeywordConnection;
  users: UserConnection;
};


export type QueryAdminuserArgs = {
  id: Scalars['ID'];
};


export type QueryAdminusersArgs = {
  filter?: InputMaybe<AdminuserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AdminuserSort>>;
};


export type QueryAlertArgs = {
  id: Scalars['ID'];
};


export type QueryAlertsArgs = {
  filter?: InputMaybe<AlertFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AlertSort>>;
};


export type QueryJobArgs = {
  id: Scalars['ID'];
};


export type QueryJobCategoriesArgs = {
  filter?: InputMaybe<JobCategoryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<JobCategorySort>>;
};


export type QueryJobCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryJobSkillArgs = {
  id: Scalars['ID'];
};


export type QueryJobSkillsArgs = {
  filter?: InputMaybe<JobSkillFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<JobSkillSort>>;
};


export type QueryJobsArgs = {
  filter?: InputMaybe<JobFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<JobSort>>;
};


export type QueryNoticeArgs = {
  id: Scalars['ID'];
};


export type QueryNoticesArgs = {
  filter?: InputMaybe<NoticeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<NoticeSort>>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryProfileCareerArgs = {
  id: Scalars['ID'];
};


export type QueryProfileCareersArgs = {
  filter?: InputMaybe<ProfileCareerFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProfileCareerSort>>;
};


export type QueryProfileSkillArgs = {
  id: Scalars['ID'];
};


export type QueryProfileSkillsArgs = {
  filter?: InputMaybe<ProfileSkillFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProfileSkillSort>>;
};


export type QueryProfilesArgs = {
  filter?: InputMaybe<ProfileFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProfileSort>>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectBookmarkArgs = {
  id: Scalars['ID'];
};


export type QueryProjectBookmarksArgs = {
  filter?: InputMaybe<ProjectBookmarkFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectBookmarkSort>>;
};


export type QueryProjectImageArgs = {
  id: Scalars['ID'];
};


export type QueryProjectImagesArgs = {
  filter?: InputMaybe<ProjectImageFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectImageSort>>;
};


export type QueryProjectKeywordArgs = {
  id: Scalars['ID'];
};


export type QueryProjectKeywordsArgs = {
  filter?: InputMaybe<ProjectKeywordFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectKeywordSort>>;
};


export type QueryProjectMemberArgs = {
  id: Scalars['ID'];
};


export type QueryProjectMemberOutArgs = {
  id: Scalars['ID'];
};


export type QueryProjectMemberOutsArgs = {
  filter?: InputMaybe<ProjectMemberOutFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectMemberOutSort>>;
};


export type QueryProjectMembersArgs = {
  filter?: InputMaybe<ProjectMemberFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectMemberSort>>;
};


export type QueryProjectPermitArgs = {
  id: Scalars['ID'];
};


export type QueryProjectPermitsArgs = {
  filter?: InputMaybe<ProjectPermitFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectPermitSort>>;
};


export type QueryProjectRequiredMemberArgs = {
  id: Scalars['ID'];
};


export type QueryProjectRequiredMembersArgs = {
  filter?: InputMaybe<ProjectRequiredMemberFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectRequiredMemberSort>>;
};


export type QueryProjectRequiredSkillArgs = {
  id: Scalars['ID'];
};


export type QueryProjectRequiredSkillsArgs = {
  filter?: InputMaybe<ProjectRequiredSkillFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectRequiredSkillSort>>;
};


export type QueryProjectResearchArgs = {
  id: Scalars['ID'];
};


export type QueryProjectResearchAnswerArgs = {
  id: Scalars['ID'];
};


export type QueryProjectResearchAnswersArgs = {
  filter?: InputMaybe<ProjectResearchAnswerFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectResearchAnswerSort>>;
};


export type QueryProjectResearchesArgs = {
  filter?: InputMaybe<ProjectResearchFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectResearchSort>>;
};


export type QueryProjectReviewArgs = {
  id: Scalars['ID'];
};


export type QueryProjectReviewsArgs = {
  filter?: InputMaybe<ProjectReviewFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectReviewSort>>;
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<ProjectFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectSort>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserInterestKeywordArgs = {
  id: Scalars['ID'];
};


export type QueryUserInterestKeywordsArgs = {
  filter?: InputMaybe<UserInterestKeywordFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserInterestKeywordSort>>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export enum ReasonType {
  Denied = 'denied',
  Fired = 'fired',
  Giveup = 'giveup'
}

export type RemoveJobSkillsFromJobInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveJobsFromJobCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveNoticesFromAdminuserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProfileCareersFromProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProfileSkillsFromProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProfilesFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectBookmarksFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectImagesFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectKeywordsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectMemberOutsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectMemberOutsFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectMembersFromProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectMembersFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectMembersFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectPermitsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectRequiredMembersFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectRequiredSkillsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectResearchAnswersFromProjectResearchInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectResearchsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectReviewsFromProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProjectReviewsFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveUserInterestKeywordsFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetJobSkillsOnJobInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetJobsOnJobCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetNoticesOnAdminuserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProfileCareersOnProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProfileSkillsOnProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProfilesOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectBookmarksOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectImagesOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectKeywordsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectMemberOutsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectMemberOutsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectMembersOnProfileInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectMembersOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectMembersOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectPermitsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectRequiredMembersOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectRequiredSkillsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectResearchAnswersOnProjectResearchInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectResearchsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectReviewsOnProjectInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProjectReviewsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetUserInterestKeywordsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export enum StatusType {
  Complete = 'complete',
  Hold = 'hold',
  Pending = 'pending',
  Progress = 'progress',
  Recruit = 'recruit'
}

export type UpdateAdminuserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  loginType?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UpdateAlertInput = {
  alertType?: InputMaybe<AlertType>;
  msg?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  readFlag?: InputMaybe<Flag>;
  targetUserId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type UpdateJobCategoryInput = {
  categoryName: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Scalars['Float']>;
};

export type UpdateJobInput = {
  jobCategoryId?: InputMaybe<Scalars['String']>;
  jobCode?: InputMaybe<Scalars['String']>;
  jobTitle: Scalars['String'];
};

export type UpdateJobSkillInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  jobId?: InputMaybe<Scalars['String']>;
  skillName?: InputMaybe<Scalars['String']>;
};

export type UpdateNoticeInput = {
  adminuserId: Scalars['String'];
  category?: InputMaybe<BoardCategoryType>;
  content?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type UpdateOneAdminuserInput = {
  id: Scalars['String'];
  update: UpdateAdminuserInput;
};

export type UpdateOneAlertInput = {
  id: Scalars['String'];
  update: UpdateAlertInput;
};

export type UpdateOneJobCategoryInput = {
  id: Scalars['String'];
  update: UpdateJobCategoryInput;
};

export type UpdateOneJobInput = {
  id: Scalars['String'];
  update: UpdateJobInput;
};

export type UpdateOneJobSkillInput = {
  id: Scalars['String'];
  update: UpdateJobSkillInput;
};

export type UpdateOneNoticeInput = {
  id: Scalars['String'];
  update: UpdateNoticeInput;
};

export type UpdateOneProfileCareerInput = {
  id: Scalars['String'];
  update: UpdateProfileCareerInput;
};

export type UpdateOneProfileInput = {
  id: Scalars['String'];
  update: UpdateProfileInput;
};

export type UpdateOneProfileSkillInput = {
  id: Scalars['String'];
  update: UpdateProfileSkillInput;
};

export type UpdateOneProjectBookmarkInput = {
  id: Scalars['String'];
  update: UpdateProjectBookmarkInput;
};

export type UpdateOneProjectImageInput = {
  id: Scalars['String'];
  update: UpdateProjectImageInput;
};

export type UpdateOneProjectInput = {
  id: Scalars['String'];
  update: UpdateProjectInput;
};

export type UpdateOneProjectKeywordInput = {
  id: Scalars['String'];
  update: UpdateProjectKeywordInput;
};

export type UpdateOneProjectMemberInput = {
  id: Scalars['String'];
  update: UpdateProjectMemberInput;
};

export type UpdateOneProjectMemberOutInput = {
  id: Scalars['String'];
  update: UpdateProjectMemberOutInput;
};

export type UpdateOneProjectPermitInput = {
  id: Scalars['String'];
  update: UpdateProjectPermitInput;
};

export type UpdateOneProjectRequiredMemberInput = {
  id: Scalars['String'];
  update: UpdateProjectRequiredMemberInput;
};

export type UpdateOneProjectRequiredSkillInput = {
  id: Scalars['String'];
  update: UpdateProjectRequiredSkillInput;
};

export type UpdateOneProjectResearchAnswerInput = {
  id: Scalars['String'];
  update: UpdateProjectResearchAnswerInput;
};

export type UpdateOneProjectResearchInput = {
  id: Scalars['String'];
  update: UpdateProjectResearchInput;
};

export type UpdateOneProjectReviewInput = {
  id: Scalars['String'];
  update: UpdateProjectReviewInput;
};

export type UpdateOneUserInput = {
  id: Scalars['String'];
  update: UpdateUserInput;
};

export type UpdateOneUserInterestKeywordInput = {
  id: Scalars['String'];
  update: UpdateUserInterestKeywordInput;
};

export type UpdateProfileCareerInput = {
  careerMonths?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
  title: Scalars['String'];
  urls?: InputMaybe<Scalars['JSON']>;
};

export type UpdateProfileInput = {
  default?: InputMaybe<Flag>;
  introduction?: InputMaybe<Scalars['String']>;
  jobId: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateProfileSkillInput = {
  jobSkillId: Scalars['String'];
  profileId: Scalars['String'];
};

export type UpdateProjectBookmarkInput = {
  projectId: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectImageInput = {
  image: Scalars['String'];
  projectId: Scalars['String'];
};

export type UpdateProjectInput = {
  bookmarkCount?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<CategoryType>;
  description?: InputMaybe<Scalars['String']>;
  directLink?: InputMaybe<Scalars['String']>;
  hitCount?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  locationCode?: InputMaybe<Scalars['String']>;
  onoff?: InputMaybe<OnoffType>;
  projectTitle?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['String']>;
  recruitStartAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<StatusType>;
};

export type UpdateProjectKeywordInput = {
  keyword: Scalars['String'];
  projectId: Scalars['String'];
};

export type UpdateProjectMemberInput = {
  jobCode?: InputMaybe<Scalars['String']>;
  profileId: Scalars['String'];
  projectId: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type UpdateProjectMemberOutInput = {
  description?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  projectLeaderUserId?: InputMaybe<Scalars['String']>;
  reasonType?: InputMaybe<ReasonType>;
  userId: Scalars['String'];
};

export type UpdateProjectPermitInput = {
  adminuserId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type UpdateProjectRequiredMemberInput = {
  jobCount?: InputMaybe<Scalars['Float']>;
  jobId?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
};

export type UpdateProjectRequiredSkillInput = {
  jobSkillId: Scalars['String'];
  projectId: Scalars['String'];
};

export type UpdateProjectResearchAnswerInput = {
  answer?: InputMaybe<Scalars['String']>;
  projectResearchId: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateProjectResearchInput = {
  priority?: InputMaybe<Scalars['Float']>;
  projectId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectReviewInput = {
  feedback?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  score?: InputMaybe<Scalars['Float']>;
  targetUserId?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type UpdateUserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  loginType?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UpdateUserInterestKeywordInput = {
  keyword: Scalars['String'];
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  loginType?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profiles: Array<Profile>;
  projectBookmarks: Array<ProjectBookmark>;
  projectMemberOuts: Array<ProjectMemberOut>;
  projectMembers: Array<ProjectMember>;
  projectReviews: Array<ProjectReview>;
  userInterestKeywords: Array<UserInterestKeyword>;
};


export type UserProfilesArgs = {
  filter?: InputMaybe<ProfileFilter>;
  sorting?: InputMaybe<Array<ProfileSort>>;
};


export type UserProjectBookmarksArgs = {
  filter?: InputMaybe<ProjectBookmarkFilter>;
  sorting?: InputMaybe<Array<ProjectBookmarkSort>>;
};


export type UserProjectMemberOutsArgs = {
  filter?: InputMaybe<ProjectMemberOutFilter>;
  sorting?: InputMaybe<Array<ProjectMemberOutSort>>;
};


export type UserProjectMembersArgs = {
  filter?: InputMaybe<ProjectMemberFilter>;
  sorting?: InputMaybe<Array<ProjectMemberSort>>;
};


export type UserProjectReviewsArgs = {
  filter?: InputMaybe<ProjectReviewFilter>;
  sorting?: InputMaybe<Array<ProjectReviewSort>>;
};


export type UserUserInterestKeywordsArgs = {
  filter?: InputMaybe<UserInterestKeywordFilter>;
  sorting?: InputMaybe<Array<UserInterestKeywordSort>>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  loginType?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilter>>;
};

export type UserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  loginType?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserInterestKeyword = {
  __typename?: 'UserInterestKeyword';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  keyword: Scalars['String'];
  userId: Scalars['String'];
};

export type UserInterestKeywordAggregateGroupBy = {
  __typename?: 'UserInterestKeywordAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type UserInterestKeywordConnection = {
  __typename?: 'UserInterestKeywordConnection';
  /** Array of nodes. */
  nodes: Array<UserInterestKeyword>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserInterestKeywordCountAggregate = {
  __typename?: 'UserInterestKeywordCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserInterestKeywordDeleteResponse = {
  __typename?: 'UserInterestKeywordDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  keyword?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserInterestKeywordFilter = {
  and?: InputMaybe<Array<UserInterestKeywordFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserInterestKeywordFilter>>;
};

export type UserInterestKeywordInput = {
  keyword: Scalars['String'];
  userId: Scalars['String'];
};

export type UserInterestKeywordMaxAggregate = {
  __typename?: 'UserInterestKeywordMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type UserInterestKeywordMinAggregate = {
  __typename?: 'UserInterestKeywordMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type UserInterestKeywordSort = {
  direction: SortDirection;
  field: UserInterestKeywordSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserInterestKeywordSortFields {
  Id = 'id'
}

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Id = 'id'
}

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectConnection', nodes: Array<{ __typename?: 'Project', id?: string | null, projectTitle?: string | null, hitCount?: number | null, description?: string | null, projectMembers: Array<{ __typename?: 'ProjectMember', id?: string | null, userId: string }> }> } };


export const ProjectsDocument = gql`
    query Projects {
  projects {
    nodes {
      id
      projectTitle
      hitCount
      description
      projectMembers {
        id
        userId
      }
    }
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;