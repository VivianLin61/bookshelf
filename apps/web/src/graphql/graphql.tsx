import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

export enum Action {
  Comment = 'COMMENT',
  Like = 'LIKE',
  Log = 'LOG',
  Rate = 'RATE',
  Review = 'REVIEW',
  Shelve = 'SHELVE',
  StatusUpdate = 'STATUS_UPDATE'
}

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringFilter>;
  expires_at?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<StringFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringFilter>;
  scope?: InputMaybe<StringFilter>;
  session_state?: InputMaybe<StringFilter>;
  token_type?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivitiesResponse = {
  __typename?: 'ActivitiesResponse';
  activities?: Maybe<Array<AuditLog>>;
  hasMore: Scalars['Boolean']['output'];
  totalActivities: Scalars['Float']['output'];
};

export type AuditLog = {
  __typename?: 'AuditLog';
  action: Action;
  actionContent?: Maybe<Scalars['String']['output']>;
  book?: Maybe<Book>;
  bookId: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type AuditLogCountAggregate = {
  __typename?: 'AuditLogCountAggregate';
  _all: Scalars['Int']['output'];
  action: Scalars['Int']['output'];
  actionContent: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AuditLogCreateManyBookInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userId: Scalars['String']['input'];
};

export type AuditLogCreateManyBookInputEnvelope = {
  data: Array<AuditLogCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuditLogCreateManyUserInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  bookId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogCreateManyUserInputEnvelope = {
  data: Array<AuditLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuditLogCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutBookInput>>;
  createMany?: InputMaybe<AuditLogCreateManyBookInputEnvelope>;
};

export type AuditLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<AuditLogCreateManyUserInputEnvelope>;
};

export type AuditLogCreateOrConnectWithoutBookInput = {
  create: AuditLogCreateWithoutBookInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogCreateOrConnectWithoutUserInput = {
  create: AuditLogCreateWithoutUserInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogCreateWithoutBookInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAuditLogsInput>;
};

export type AuditLogCreateWithoutUserInput = {
  action: Action;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookCreateNestedOneWithoutLogsInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogListRelationFilter = {
  every?: InputMaybe<AuditLogWhereInput>;
  none?: InputMaybe<AuditLogWhereInput>;
  some?: InputMaybe<AuditLogWhereInput>;
};

export type AuditLogMaxAggregate = {
  __typename?: 'AuditLogMaxAggregate';
  action?: Maybe<Action>;
  actionContent?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuditLogMinAggregate = {
  __typename?: 'AuditLogMinAggregate';
  action?: Maybe<Action>;
  actionContent?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuditLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AuditLogOrderByWithRelationInput = {
  action?: InputMaybe<SortOrder>;
  actionContent?: InputMaybe<SortOrderInput>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AuditLogScalarWhereInput = {
  AND?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  OR?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  action?: InputMaybe<EnumActionFilter>;
  actionContent?: InputMaybe<StringFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuditLogUpdateManyMutationInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogUpdateManyWithWhereWithoutBookInput = {
  data: AuditLogUpdateManyMutationInput;
  where: AuditLogScalarWhereInput;
};

export type AuditLogUpdateManyWithWhereWithoutUserInput = {
  data: AuditLogUpdateManyMutationInput;
  where: AuditLogScalarWhereInput;
};

export type AuditLogUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutBookInput>>;
  createMany?: InputMaybe<AuditLogCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  set?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  update?: InputMaybe<Array<AuditLogUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<AuditLogUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<AuditLogUpsertWithWhereUniqueWithoutBookInput>>;
};

export type AuditLogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AuditLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AuditLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<AuditLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AuditLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  set?: InputMaybe<Array<AuditLogWhereUniqueInput>>;
  update?: InputMaybe<Array<AuditLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AuditLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AuditLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AuditLogUpdateWithWhereUniqueWithoutBookInput = {
  data: AuditLogUpdateWithoutBookInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
  data: AuditLogUpdateWithoutUserInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogUpdateWithoutBookInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutAuditLogsNestedInput>;
};

export type AuditLogUpdateWithoutUserInput = {
  action?: InputMaybe<Action>;
  actionContent?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneWithoutLogsNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type AuditLogUpsertWithWhereUniqueWithoutBookInput = {
  create: AuditLogCreateWithoutBookInput;
  update: AuditLogUpdateWithoutBookInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
  create: AuditLogCreateWithoutUserInput;
  update: AuditLogUpdateWithoutUserInput;
  where: AuditLogWhereUniqueInput;
};

export type AuditLogWhereInput = {
  AND?: InputMaybe<Array<AuditLogWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogWhereInput>>;
  OR?: InputMaybe<Array<AuditLogWhereInput>>;
  action?: InputMaybe<EnumActionFilter>;
  actionContent?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuditLogWhereUniqueInput = {
  AND?: InputMaybe<Array<AuditLogWhereInput>>;
  NOT?: InputMaybe<Array<AuditLogWhereInput>>;
  OR?: InputMaybe<Array<AuditLogWhereInput>>;
  action?: InputMaybe<EnumActionFilter>;
  actionContent?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['Float']['output']>;
  isNewUser?: Maybe<Scalars['Boolean']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user: User;
  verificationToken?: Maybe<Scalars['String']['output']>;
};

export type Book = {
  __typename?: 'Book';
  _count: BookCount;
  authors?: Maybe<Array<Scalars['String']['output']>>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  covers?: Maybe<Array<Cover>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Identifier>;
  language?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Array<AuditLog>>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  publishedDate?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  userBook?: Maybe<Array<UserBook>>;
};

export type BookAvgAggregate = {
  __typename?: 'BookAvgAggregate';
  averageRating?: Maybe<Scalars['Float']['output']>;
  pageCount?: Maybe<Scalars['Float']['output']>;
};

export type BookCount = {
  __typename?: 'BookCount';
  covers: Scalars['Int']['output'];
  logs: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  userBook: Scalars['Int']['output'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int']['output'];
  authors: Scalars['Int']['output'];
  averageRating: Scalars['Int']['output'];
  categories: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  language: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  publishedDate: Scalars['Int']['output'];
  publisher: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type BookCreateInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
};

export type BookCreateNestedOneWithoutCoversInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutCoversInput>;
  create?: InputMaybe<BookCreateWithoutCoversInput>;
};

export type BookCreateNestedOneWithoutLogsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<BookCreateWithoutLogsInput>;
};

export type BookCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
};

export type BookCreateNestedOneWithoutUserBookInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
};

export type BookCreateOrConnectWithoutCoversInput = {
  create: BookCreateWithoutCoversInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutLogsInput = {
  create: BookCreateWithoutLogsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutReviewsInput = {
  create: BookCreateWithoutReviewsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutCoversInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutLogsInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutReviewsInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userBook?: InputMaybe<UserBookCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutUserBookInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverCreateNestedManyWithoutBookInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierCreateNestedOneWithoutBookInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogCreateNestedManyWithoutBookInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type BookItemInput = {
  id: Scalars['String']['input'];
  order: Scalars['Float']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  averageRating?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  publishedDate?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  averageRating?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  publishedDate?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BookOrderByWithRelationInput = {
  authors?: InputMaybe<SortOrder>;
  averageRating?: InputMaybe<SortOrderInput>;
  categories?: InputMaybe<SortOrder>;
  covers?: InputMaybe<CoverOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<IdentifierOrderByWithRelationInput>;
  language?: InputMaybe<SortOrderInput>;
  logs?: InputMaybe<AuditLogOrderByRelationAggregateInput>;
  pageCount?: InputMaybe<SortOrderInput>;
  publishedDate?: InputMaybe<SortOrderInput>;
  publisher?: InputMaybe<SortOrderInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userBook?: InputMaybe<UserBookOrderByRelationAggregateInput>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export type BookSumAggregate = {
  __typename?: 'BookSumAggregate';
  averageRating?: Maybe<Scalars['Float']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
};

export type BookUpdateOneWithoutCoversNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutCoversInput>;
  create?: InputMaybe<BookCreateWithoutCoversInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutCoversInput>;
  upsert?: InputMaybe<BookUpsertWithoutCoversInput>;
};

export type BookUpdateOneWithoutLogsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutLogsInput>;
  create?: InputMaybe<BookCreateWithoutLogsInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutLogsInput>;
  upsert?: InputMaybe<BookUpsertWithoutLogsInput>;
};

export type BookUpdateOneWithoutReviewsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutReviewsInput>;
  upsert?: InputMaybe<BookUpsertWithoutReviewsInput>;
};

export type BookUpdateOneWithoutUserBookNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutUserBookInput>;
  create?: InputMaybe<BookCreateWithoutUserBookInput>;
  delete?: InputMaybe<BookWhereInput>;
  disconnect?: InputMaybe<BookWhereInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutUserBookInput>;
  upsert?: InputMaybe<BookUpsertWithoutUserBookInput>;
};

export type BookUpdateToOneWithWhereWithoutCoversInput = {
  data: BookUpdateWithoutCoversInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutLogsInput = {
  data: BookUpdateWithoutLogsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutReviewsInput = {
  data: BookUpdateWithoutReviewsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutUserBookInput = {
  data: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateWithoutCoversInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutLogsInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutReviewsInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutUserBookInput = {
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  averageRating?: InputMaybe<Scalars['Float']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  covers?: InputMaybe<CoverUpdateManyWithoutBookNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierUpdateOneWithoutBookNestedInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<AuditLogUpdateManyWithoutBookNestedInput>;
  pageCount?: InputMaybe<Scalars['Int']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookNestedInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BookUpsertWithoutCoversInput = {
  create: BookCreateWithoutCoversInput;
  update: BookUpdateWithoutCoversInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutLogsInput = {
  create: BookCreateWithoutLogsInput;
  update: BookUpdateWithoutLogsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutReviewsInput = {
  create: BookCreateWithoutReviewsInput;
  update: BookUpdateWithoutReviewsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutUserBookInput = {
  create: BookCreateWithoutUserBookInput;
  update: BookUpdateWithoutUserBookInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<StringListFilter>;
  averageRating?: InputMaybe<FloatFilter>;
  categories?: InputMaybe<StringListFilter>;
  covers?: InputMaybe<CoverListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  identifier?: InputMaybe<IdentifierRelationFilter>;
  language?: InputMaybe<StringFilter>;
  logs?: InputMaybe<AuditLogListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  publishedDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookListRelationFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  authors?: InputMaybe<StringListFilter>;
  averageRating?: InputMaybe<FloatFilter>;
  categories?: InputMaybe<StringListFilter>;
  covers?: InputMaybe<CoverListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<IdentifierRelationFilter>;
  language?: InputMaybe<StringFilter>;
  logs?: InputMaybe<AuditLogListRelationFilter>;
  pageCount?: InputMaybe<IntFilter>;
  publishedDate?: InputMaybe<StringFilter>;
  publisher?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookListRelationFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  review?: Maybe<Review>;
  reviewId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  reviewId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewCreateNestedOneWithoutCommentsInput>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateManyReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyReviewInputEnvelope = {
  data: Array<CommentCreateManyReviewInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutReviewInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutReviewInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutReviewInput>>;
  createMany?: InputMaybe<CommentCreateManyReviewInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutReviewInput = {
  create: CommentCreateWithoutReviewInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewCreateNestedOneWithoutCommentsInput>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  reviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  reviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  reviewId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CommentUpdateManyWithWhereWithoutReviewInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutReviewNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutReviewInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutReviewInput>>;
  createMany?: InputMaybe<CommentCreateManyReviewInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutReviewInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutReviewInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutReviewInput>>;
};

export type CommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutReviewInput = {
  data: CommentUpdateWithoutReviewInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewUpdateOneWithoutCommentsNestedInput>;
};

export type CommentUpsertWithWhereUniqueWithoutReviewInput = {
  create: CommentCreateWithoutReviewInput;
  update: CommentUpdateWithoutReviewInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  review?: InputMaybe<ReviewRelationFilter>;
  reviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<ReviewRelationFilter>;
  reviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Cover = {
  __typename?: 'Cover';
  UserBook?: Maybe<UserBook>;
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  size: Size;
  url: Scalars['String']['output'];
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type CoverCountAggregate = {
  __typename?: 'CoverCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['Int']['output'];
  userBookId: Scalars['Int']['output'];
};

export type CoverCreateManyBookInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  url: Scalars['String']['input'];
  userBookId?: InputMaybe<Scalars['String']['input']>;
};

export type CoverCreateManyBookInputEnvelope = {
  data: Array<CoverCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoverCreateManyUserBookInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  url: Scalars['String']['input'];
};

export type CoverCreateManyUserBookInputEnvelope = {
  data: Array<CoverCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CoverCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CoverCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<CoverCreateWithoutBookInput>>;
  createMany?: InputMaybe<CoverCreateManyBookInputEnvelope>;
};

export type CoverCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CoverCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<CoverCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<CoverCreateManyUserBookInputEnvelope>;
};

export type CoverCreateOrConnectWithoutBookInput = {
  create: CoverCreateWithoutBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverCreateOrConnectWithoutUserBookInput = {
  create: CoverCreateWithoutUserBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverCreateWithoutBookInput = {
  UserBook?: InputMaybe<UserBookCreateNestedOneWithoutCoverInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  url: Scalars['String']['input'];
};

export type CoverCreateWithoutUserBookInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutCoversInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  size: Size;
  url: Scalars['String']['input'];
};

export type CoverListRelationFilter = {
  every?: InputMaybe<CoverWhereInput>;
  none?: InputMaybe<CoverWhereInput>;
  some?: InputMaybe<CoverWhereInput>;
};

export type CoverMaxAggregate = {
  __typename?: 'CoverMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Size>;
  url?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type CoverMinAggregate = {
  __typename?: 'CoverMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Size>;
  url?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type CoverOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CoverScalarWhereInput = {
  AND?: InputMaybe<Array<CoverScalarWhereInput>>;
  NOT?: InputMaybe<Array<CoverScalarWhereInput>>;
  OR?: InputMaybe<Array<CoverScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  size?: InputMaybe<EnumSizeFilter>;
  url?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type CoverUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Size>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CoverUpdateManyWithWhereWithoutBookInput = {
  data: CoverUpdateManyMutationInput;
  where: CoverScalarWhereInput;
};

export type CoverUpdateManyWithWhereWithoutUserBookInput = {
  data: CoverUpdateManyMutationInput;
  where: CoverScalarWhereInput;
};

export type CoverUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CoverCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<CoverCreateWithoutBookInput>>;
  createMany?: InputMaybe<CoverCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<CoverWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CoverScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  set?: InputMaybe<Array<CoverWhereUniqueInput>>;
  update?: InputMaybe<Array<CoverUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<CoverUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<CoverUpsertWithWhereUniqueWithoutBookInput>>;
};

export type CoverUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CoverCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<CoverCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<CoverCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<CoverWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CoverScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CoverWhereUniqueInput>>;
  set?: InputMaybe<Array<CoverWhereUniqueInput>>;
  update?: InputMaybe<Array<CoverUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<CoverUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<CoverUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type CoverUpdateWithWhereUniqueWithoutBookInput = {
  data: CoverUpdateWithoutBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverUpdateWithWhereUniqueWithoutUserBookInput = {
  data: CoverUpdateWithoutUserBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverUpdateWithoutBookInput = {
  UserBook?: InputMaybe<UserBookUpdateOneWithoutCoverNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Size>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CoverUpdateWithoutUserBookInput = {
  book?: InputMaybe<BookUpdateOneWithoutCoversNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Size>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CoverUpsertWithWhereUniqueWithoutBookInput = {
  create: CoverCreateWithoutBookInput;
  update: CoverUpdateWithoutBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverUpsertWithWhereUniqueWithoutUserBookInput = {
  create: CoverCreateWithoutUserBookInput;
  update: CoverUpdateWithoutUserBookInput;
  where: CoverWhereUniqueInput;
};

export type CoverWhereInput = {
  AND?: InputMaybe<Array<CoverWhereInput>>;
  NOT?: InputMaybe<Array<CoverWhereInput>>;
  OR?: InputMaybe<Array<CoverWhereInput>>;
  UserBook?: InputMaybe<UserBookRelationFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  size?: InputMaybe<EnumSizeFilter>;
  url?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type CoverWhereUniqueInput = {
  AND?: InputMaybe<Array<CoverWhereInput>>;
  NOT?: InputMaybe<Array<CoverWhereInput>>;
  OR?: InputMaybe<Array<CoverWhereInput>>;
  UserBook?: InputMaybe<UserBookRelationFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<EnumSizeFilter>;
  url?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['Timestamp']['input']>;
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type EnumActionFilter = {
  equals?: InputMaybe<Action>;
  in?: InputMaybe<Array<Action>>;
  not?: InputMaybe<EnumActionFilter>;
  notIn?: InputMaybe<Array<Action>>;
};

export type EnumSizeFilter = {
  equals?: InputMaybe<Size>;
  in?: InputMaybe<Array<Size>>;
  not?: InputMaybe<EnumSizeFilter>;
  notIn?: InputMaybe<Array<Size>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Identifier = {
  __typename?: 'Identifier';
  amazon?: Maybe<Scalars['String']['output']>;
  book?: Maybe<Book>;
  bookId: Scalars['String']['output'];
  goodreads?: Maybe<Scalars['String']['output']>;
  google?: Maybe<Scalars['String']['output']>;
  isbn10?: Maybe<Scalars['String']['output']>;
  isbn13?: Maybe<Scalars['String']['output']>;
  openLibrary?: Maybe<Scalars['String']['output']>;
};

export type IdentifierCountAggregate = {
  __typename?: 'IdentifierCountAggregate';
  _all: Scalars['Int']['output'];
  amazon: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  goodreads: Scalars['Int']['output'];
  google: Scalars['Int']['output'];
  isbn10: Scalars['Int']['output'];
  isbn13: Scalars['Int']['output'];
  openLibrary: Scalars['Int']['output'];
};

export type IdentifierCreateNestedOneWithoutBookInput = {
  connect?: InputMaybe<IdentifierWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdentifierCreateOrConnectWithoutBookInput>;
  create?: InputMaybe<IdentifierCreateWithoutBookInput>;
};

export type IdentifierCreateOrConnectWithoutBookInput = {
  create: IdentifierCreateWithoutBookInput;
  where: IdentifierWhereUniqueInput;
};

export type IdentifierCreateWithoutBookInput = {
  amazon?: InputMaybe<Scalars['String']['input']>;
  goodreads?: InputMaybe<Scalars['String']['input']>;
  google?: InputMaybe<Scalars['String']['input']>;
  isbn10?: InputMaybe<Scalars['String']['input']>;
  isbn13?: InputMaybe<Scalars['String']['input']>;
  openLibrary?: InputMaybe<Scalars['String']['input']>;
};

export type IdentifierMaxAggregate = {
  __typename?: 'IdentifierMaxAggregate';
  amazon?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  goodreads?: Maybe<Scalars['String']['output']>;
  google?: Maybe<Scalars['String']['output']>;
  isbn10?: Maybe<Scalars['String']['output']>;
  isbn13?: Maybe<Scalars['String']['output']>;
  openLibrary?: Maybe<Scalars['String']['output']>;
};

export type IdentifierMinAggregate = {
  __typename?: 'IdentifierMinAggregate';
  amazon?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  goodreads?: Maybe<Scalars['String']['output']>;
  google?: Maybe<Scalars['String']['output']>;
  isbn10?: Maybe<Scalars['String']['output']>;
  isbn13?: Maybe<Scalars['String']['output']>;
  openLibrary?: Maybe<Scalars['String']['output']>;
};

export type IdentifierOrderByWithRelationInput = {
  amazon?: InputMaybe<SortOrderInput>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  goodreads?: InputMaybe<SortOrderInput>;
  google?: InputMaybe<SortOrderInput>;
  isbn10?: InputMaybe<SortOrderInput>;
  isbn13?: InputMaybe<SortOrderInput>;
  openLibrary?: InputMaybe<SortOrderInput>;
};

export type IdentifierRelationFilter = {
  is?: InputMaybe<IdentifierWhereInput>;
  isNot?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierUpdateOneWithoutBookNestedInput = {
  connect?: InputMaybe<IdentifierWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IdentifierCreateOrConnectWithoutBookInput>;
  create?: InputMaybe<IdentifierCreateWithoutBookInput>;
  delete?: InputMaybe<IdentifierWhereInput>;
  disconnect?: InputMaybe<IdentifierWhereInput>;
  update?: InputMaybe<IdentifierUpdateToOneWithWhereWithoutBookInput>;
  upsert?: InputMaybe<IdentifierUpsertWithoutBookInput>;
};

export type IdentifierUpdateToOneWithWhereWithoutBookInput = {
  data: IdentifierUpdateWithoutBookInput;
  where?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierUpdateWithoutBookInput = {
  amazon?: InputMaybe<Scalars['String']['input']>;
  goodreads?: InputMaybe<Scalars['String']['input']>;
  google?: InputMaybe<Scalars['String']['input']>;
  isbn10?: InputMaybe<Scalars['String']['input']>;
  isbn13?: InputMaybe<Scalars['String']['input']>;
  openLibrary?: InputMaybe<Scalars['String']['input']>;
};

export type IdentifierUpsertWithoutBookInput = {
  create: IdentifierCreateWithoutBookInput;
  update: IdentifierUpdateWithoutBookInput;
  where?: InputMaybe<IdentifierWhereInput>;
};

export type IdentifierWhereInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  amazon?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  goodreads?: InputMaybe<StringFilter>;
  google?: InputMaybe<StringFilter>;
  isbn10?: InputMaybe<StringFilter>;
  isbn13?: InputMaybe<StringFilter>;
  openLibrary?: InputMaybe<StringFilter>;
};

export type IdentifierWhereUniqueInput = {
  AND?: InputMaybe<Array<IdentifierWhereInput>>;
  NOT?: InputMaybe<Array<IdentifierWhereInput>>;
  OR?: InputMaybe<Array<IdentifierWhereInput>>;
  amazon?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<Scalars['String']['input']>;
  goodreads?: InputMaybe<StringFilter>;
  google?: InputMaybe<StringFilter>;
  isbn10?: InputMaybe<StringFilter>;
  isbn13?: InputMaybe<StringFilter>;
  openLibrary?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JournalEntry = {
  __typename?: 'JournalEntry';
  createdAt: Scalars['Timestamp']['output'];
  currentPage: Scalars['Int']['output'];
  currentPercent: Scalars['Int']['output'];
  dateRead: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  pagesRead: Scalars['Int']['output'];
  readingNotes?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
  userBookId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type JournalEntryAvgAggregate = {
  __typename?: 'JournalEntryAvgAggregate';
  currentPage?: Maybe<Scalars['Float']['output']>;
  currentPercent?: Maybe<Scalars['Float']['output']>;
  pagesRead?: Maybe<Scalars['Float']['output']>;
};

export type JournalEntryCountAggregate = {
  __typename?: 'JournalEntryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  currentPercent: Scalars['Int']['output'];
  dateRead: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pagesRead: Scalars['Int']['output'];
  readingNotes: Scalars['Int']['output'];
  userBookId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type JournalEntryCreateInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage: Scalars['Int']['input'];
  currentPercent: Scalars['Int']['input'];
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead: Scalars['Int']['input'];
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutJournalEntriesInput>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutJournalEntryInput>;
};

export type JournalEntryCreateManyUserBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage: Scalars['Int']['input'];
  currentPercent: Scalars['Int']['input'];
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead: Scalars['Int']['input'];
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type JournalEntryCreateManyUserBookInputEnvelope = {
  data: Array<JournalEntryCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JournalEntryCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage: Scalars['Int']['input'];
  currentPercent: Scalars['Int']['input'];
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead: Scalars['Int']['input'];
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  userBookId?: InputMaybe<Scalars['String']['input']>;
};

export type JournalEntryCreateManyUserInputEnvelope = {
  data: Array<JournalEntryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JournalEntryCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserBookInputEnvelope>;
};

export type JournalEntryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserInputEnvelope>;
};

export type JournalEntryCreateOrConnectWithoutUserBookInput = {
  create: JournalEntryCreateWithoutUserBookInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryCreateOrConnectWithoutUserInput = {
  create: JournalEntryCreateWithoutUserInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryCreateWithoutUserBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage: Scalars['Int']['input'];
  currentPercent: Scalars['Int']['input'];
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead: Scalars['Int']['input'];
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutJournalEntriesInput>;
};

export type JournalEntryCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage: Scalars['Int']['input'];
  currentPercent: Scalars['Int']['input'];
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead: Scalars['Int']['input'];
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookCreateNestedOneWithoutJournalEntryInput>;
};

export type JournalEntryListRelationFilter = {
  every?: InputMaybe<JournalEntryWhereInput>;
  none?: InputMaybe<JournalEntryWhereInput>;
  some?: InputMaybe<JournalEntryWhereInput>;
};

export type JournalEntryMaxAggregate = {
  __typename?: 'JournalEntryMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  currentPercent?: Maybe<Scalars['Int']['output']>;
  dateRead?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pagesRead?: Maybe<Scalars['Int']['output']>;
  readingNotes?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type JournalEntryMinAggregate = {
  __typename?: 'JournalEntryMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  currentPercent?: Maybe<Scalars['Int']['output']>;
  dateRead?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pagesRead?: Maybe<Scalars['Int']['output']>;
  readingNotes?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type JournalEntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type JournalEntryScalarWhereInput = {
  AND?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  NOT?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  OR?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentPage?: InputMaybe<IntFilter>;
  currentPercent?: InputMaybe<IntFilter>;
  dateRead?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  pagesRead?: InputMaybe<IntFilter>;
  readingNotes?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type JournalEntrySumAggregate = {
  __typename?: 'JournalEntrySumAggregate';
  currentPage?: Maybe<Scalars['Int']['output']>;
  currentPercent?: Maybe<Scalars['Int']['output']>;
  pagesRead?: Maybe<Scalars['Int']['output']>;
};

export type JournalEntryUpdateInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  currentPercent?: InputMaybe<Scalars['Int']['input']>;
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead?: InputMaybe<Scalars['Int']['input']>;
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutJournalEntriesNestedInput>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutJournalEntryNestedInput>;
};

export type JournalEntryUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  currentPercent?: InputMaybe<Scalars['Int']['input']>;
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead?: InputMaybe<Scalars['Int']['input']>;
  readingNotes?: InputMaybe<Scalars['String']['input']>;
};

export type JournalEntryUpdateManyWithWhereWithoutUserBookInput = {
  data: JournalEntryUpdateManyMutationInput;
  where: JournalEntryScalarWhereInput;
};

export type JournalEntryUpdateManyWithWhereWithoutUserInput = {
  data: JournalEntryUpdateManyMutationInput;
  where: JournalEntryScalarWhereInput;
};

export type JournalEntryUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<JournalEntryUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<JournalEntryUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<JournalEntryUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type JournalEntryUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<JournalEntryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<JournalEntryCreateWithoutUserInput>>;
  createMany?: InputMaybe<JournalEntryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<JournalEntryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  set?: InputMaybe<Array<JournalEntryWhereUniqueInput>>;
  update?: InputMaybe<Array<JournalEntryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<JournalEntryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<JournalEntryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type JournalEntryUpdateWithWhereUniqueWithoutUserBookInput = {
  data: JournalEntryUpdateWithoutUserBookInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpdateWithWhereUniqueWithoutUserInput = {
  data: JournalEntryUpdateWithoutUserInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpdateWithoutUserBookInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  currentPercent?: InputMaybe<Scalars['Int']['input']>;
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead?: InputMaybe<Scalars['Int']['input']>;
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutJournalEntriesNestedInput>;
};

export type JournalEntryUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  currentPercent?: InputMaybe<Scalars['Int']['input']>;
  dateRead?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead?: InputMaybe<Scalars['Int']['input']>;
  readingNotes?: InputMaybe<Scalars['String']['input']>;
  userBook?: InputMaybe<UserBookUpdateOneWithoutJournalEntryNestedInput>;
};

export type JournalEntryUpsertWithWhereUniqueWithoutUserBookInput = {
  create: JournalEntryCreateWithoutUserBookInput;
  update: JournalEntryUpdateWithoutUserBookInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryUpsertWithWhereUniqueWithoutUserInput = {
  create: JournalEntryCreateWithoutUserInput;
  update: JournalEntryUpdateWithoutUserInput;
  where: JournalEntryWhereUniqueInput;
};

export type JournalEntryWhereInput = {
  AND?: InputMaybe<Array<JournalEntryWhereInput>>;
  NOT?: InputMaybe<Array<JournalEntryWhereInput>>;
  OR?: InputMaybe<Array<JournalEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentPage?: InputMaybe<IntFilter>;
  currentPercent?: InputMaybe<IntFilter>;
  dateRead?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  pagesRead?: InputMaybe<IntFilter>;
  readingNotes?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type JournalEntryWhereUniqueInput = {
  AND?: InputMaybe<Array<JournalEntryWhereInput>>;
  NOT?: InputMaybe<Array<JournalEntryWhereInput>>;
  OR?: InputMaybe<Array<JournalEntryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentPage?: InputMaybe<IntFilter>;
  currentPercent?: InputMaybe<IntFilter>;
  dateRead?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  pagesRead?: InputMaybe<IntFilter>;
  readingNotes?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type LogInInput = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type MeResponse = {
  __typename?: 'MeResponse';
  email?: Maybe<Scalars['String']['output']>;
  isOAuth?: Maybe<Scalars['Boolean']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookToShelf: UserBook;
  createBook: Book;
  createComment: Comment;
  createJournalEntry: JournalEntry;
  createReview: Review;
  createShelf: Shelf;
  createUserBook?: Maybe<UserBook>;
  deleteShelf: Shelf;
  follow: User;
  forgotPassword: Scalars['Boolean']['output'];
  importUserBooks: Scalars['Boolean']['output'];
  likeReview: Review;
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  oAuth: AuthResponse;
  refreshAuth: RefreshResponse;
  register: User;
  removeBookFromShelf: UserBook;
  removeJournalEntry: JournalEntry;
  removeUserBook: UserBook;
  resetPassword: Scalars['Boolean']['output'];
  updateEmail: User;
  updateJournalEntry: JournalEntry;
  updateReview: Review;
  updateShelf: Shelf;
  updateUser: User;
  updateUserBook: UserBook;
  updateUserBookOrder: Array<UserBook>;
  verifyToken: AuthResponse;
};


export type MutationAddBookToShelfArgs = {
  bookId: Scalars['String']['input'];
  shelf: Scalars['String']['input'];
};


export type MutationCreateBookArgs = {
  data: BookCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationCreateJournalEntryArgs = {
  book: BookWhereUniqueInput;
  data: JournalEntryCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewDataInput;
  where: BookWhereUniqueInput;
};


export type MutationCreateShelfArgs = {
  data: ShelfCreateInput;
};


export type MutationCreateUserBookArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteShelfArgs = {
  where: ShelfWhereUniqueInput;
};


export type MutationFollowArgs = {
  value: Scalars['Boolean']['input'];
  where: UserWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationImportUserBooksArgs = {
  content: Scalars['String']['input'];
};


export type MutationLikeReviewArgs = {
  value: Scalars['Boolean']['input'];
  where: ReviewWhereUniqueInput;
};


export type MutationLoginArgs = {
  logInInput: LogInInput;
};


export type MutationLogoutArgs = {
  id: Scalars['String']['input'];
};


export type MutationOAuthArgs = {
  oAuthInput: OAuthInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationRemoveBookFromShelfArgs = {
  bookId: Scalars['String']['input'];
  shelf: Scalars['String']['input'];
};


export type MutationRemoveJournalEntryArgs = {
  where: JournalEntryWhereUniqueInput;
};


export type MutationRemoveUserBookArgs = {
  where: BookWhereUniqueInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationUpdateEmailArgs = {
  data: UpdateEmailInput;
};


export type MutationUpdateJournalEntryArgs = {
  data: JournalEntryUpdateInput;
  where: JournalEntryWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewDataInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateShelfArgs = {
  data: ShelfUpdateInput;
  where: ShelfWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateUserBookArgs = {
  data: UserBookUpdateInput;
  where: BookWhereUniqueInput;
};


export type MutationUpdateUserBookOrderArgs = {
  data: UserBookUpdateOrderInput;
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String']['input'];
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type OAuthInput = {
  access_token: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  scope: Scalars['String']['input'];
  token_type: Scalars['String']['input'];
  type: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type PasswordResetTokenCountAggregate = {
  __typename?: 'PasswordResetTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type PasswordResetTokenMaxAggregate = {
  __typename?: 'PasswordResetTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenMinAggregate = {
  __typename?: 'PasswordResetTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  auditLogs: ActivitiesResponse;
  book?: Maybe<Book>;
  bookReview: Review;
  bookReviews: Array<Review>;
  comments: Array<Comment>;
  countJournalEntries: Scalars['Int']['output'];
  countUserBooks: Scalars['Int']['output'];
  getGoogleBook?: Maybe<Book>;
  getMostRecentJournalEntry?: Maybe<JournalEntry>;
  getUserBooks: UserBooksResponse;
  journalEntries: Array<JournalEntry>;
  me: MeResponse;
  shelves?: Maybe<Array<Shelf>>;
  user: User;
  userBook?: Maybe<UserBook>;
};


export type QueryAuditLogsArgs = {
  action?: InputMaybe<Action>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<AuditLogOrderByWithRelationInput>;
  where?: InputMaybe<UserBookWhereUniqueInput>;
};


export type QueryBookArgs = {
  where: BookWhereUniqueInput;
};


export type QueryBookReviewArgs = {
  where: ReviewUniqueInput;
};


export type QueryBookReviewsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where: BookWhereUniqueInput;
};


export type QueryCommentsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  where: ReviewWhereUniqueInput;
};


export type QueryCountJournalEntriesArgs = {
  book?: InputMaybe<BookWhereUniqueInput>;
};


export type QueryCountUserBooksArgs = {
  where?: InputMaybe<UserBookWhereInput>;
};


export type QueryGetGoogleBookArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMostRecentJournalEntryArgs = {
  book?: InputMaybe<BookWhereUniqueInput>;
};


export type QueryGetUserBooksArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
  where?: InputMaybe<UserBookWhereInput>;
};


export type QueryJournalEntriesArgs = {
  book?: InputMaybe<BookWhereUniqueInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserBookArgs = {
  where: BookWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshResponse = {
  __typename?: 'RefreshResponse';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  refreshToken: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  _count: ReviewCount;
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Int']['output'];
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  likeCount: Scalars['Int']['output'];
  liked: Scalars['Boolean']['output'];
  likedBy?: Maybe<Array<User>>;
  spoilers: Scalars['Boolean']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  likeCount?: Maybe<Scalars['Float']['output']>;
};

export type ReviewCount = {
  __typename?: 'ReviewCount';
  comments: Scalars['Int']['output'];
  likedBy: Scalars['Int']['output'];
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  likeCount: Scalars['Int']['output'];
  spoilers: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ReviewCreateManyBookInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewCreateManyBookInputEnvelope = {
  data: Array<ReviewCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutBookInput>>;
  createMany?: InputMaybe<ReviewCreateManyBookInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutLikedByInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutLikedByInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutLikedByInput>>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ReviewCreateWithoutCommentsInput>;
};

export type ReviewCreateOrConnectWithoutBookInput = {
  create: ReviewCreateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutCommentsInput = {
  create: ReviewCreateWithoutCommentsInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutLikedByInput = {
  create: ReviewCreateWithoutLikedByInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutBookInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutCommentsInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutLikedByInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
};

export type ReviewCreateWithoutUserInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutReviewInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserCreateNestedManyWithoutLikedReviewsInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewDataInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  spoilers?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  bookId?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  spoilers?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewRelationFilter = {
  is?: InputMaybe<ReviewWhereInput>;
  isNot?: InputMaybe<ReviewWhereInput>;
};

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likeCount?: InputMaybe<IntFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  likeCount?: Maybe<Scalars['Int']['output']>;
};

export type ReviewUniqueInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewUpdateManyMutationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewUpdateManyWithWhereWithoutBookInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutLikedByInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutBookInput>>;
  createMany?: InputMaybe<ReviewCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutBookInput>>;
};

export type ReviewUpdateManyWithoutLikedByNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutLikedByInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutLikedByInput>>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutLikedByInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutLikedByInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutLikedByInput>>;
};

export type ReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ReviewCreateWithoutCommentsInput>;
  delete?: InputMaybe<ReviewWhereInput>;
  disconnect?: InputMaybe<ReviewWhereInput>;
  update?: InputMaybe<ReviewUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<ReviewUpsertWithoutCommentsInput>;
};

export type ReviewUpdateToOneWithWhereWithoutCommentsInput = {
  data: ReviewUpdateWithoutCommentsInput;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
  data: ReviewUpdateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutLikedByInput = {
  data: ReviewUpdateWithoutLikedByInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutBookInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutCommentsInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutLikedByInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutReviewsNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneWithoutReviewsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutReviewNestedInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<Scalars['Int']['input']>;
  likedBy?: InputMaybe<UserUpdateManyWithoutLikedReviewsNestedInput>;
  spoilers?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
  create: ReviewCreateWithoutBookInput;
  update: ReviewUpdateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutLikedByInput = {
  create: ReviewCreateWithoutLikedByInput;
  update: ReviewUpdateWithoutLikedByInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithoutCommentsInput = {
  create: ReviewCreateWithoutCommentsInput;
  update: ReviewUpdateWithoutCommentsInput;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likeCount?: InputMaybe<IntFilter>;
  likedBy?: InputMaybe<UserListRelationFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likeCount?: InputMaybe<IntFilter>;
  likedBy?: InputMaybe<UserListRelationFilter>;
  spoilers?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum Size {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type Shelf = {
  __typename?: 'Shelf';
  _count: ShelfCount;
  dateTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user?: Maybe<User>;
  userBooks?: Maybe<Array<UserBookShelves>>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShelfCount = {
  __typename?: 'ShelfCount';
  userBooks: Scalars['Int']['output'];
};

export type ShelfCountAggregate = {
  __typename?: 'ShelfCountAggregate';
  _all: Scalars['Int']['output'];
  dateTime: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ShelfCreateInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
  userBooks?: InputMaybe<UserBookShelvesCreateNestedManyWithoutShelfInput>;
};

export type ShelfCreateManyUserInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ShelfCreateManyUserInputEnvelope = {
  data: Array<ShelfCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShelfCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShelfCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShelfCreateManyUserInputEnvelope>;
};

export type ShelfCreateNestedOneWithoutUserBooksInput = {
  connect?: InputMaybe<ShelfWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<ShelfCreateWithoutUserBooksInput>;
};

export type ShelfCreateOrConnectWithoutUserBooksInput = {
  create: ShelfCreateWithoutUserBooksInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfCreateOrConnectWithoutUserInput = {
  create: ShelfCreateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfCreateWithoutUserBooksInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  user?: InputMaybe<UserCreateNestedOneWithoutShelvesInput>;
};

export type ShelfCreateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userBooks?: InputMaybe<UserBookShelvesCreateNestedManyWithoutShelfInput>;
};

export type ShelfIdentifierCompoundUniqueInput = {
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ShelfListRelationFilter = {
  every?: InputMaybe<ShelfWhereInput>;
  none?: InputMaybe<ShelfWhereInput>;
  some?: InputMaybe<ShelfWhereInput>;
};

export type ShelfMaxAggregate = {
  __typename?: 'ShelfMaxAggregate';
  dateTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShelfMinAggregate = {
  __typename?: 'ShelfMinAggregate';
  dateTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShelfOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShelfRelationFilter = {
  is?: InputMaybe<ShelfWhereInput>;
  isNot?: InputMaybe<ShelfWhereInput>;
};

export type ShelfScalarWhereInput = {
  AND?: InputMaybe<Array<ShelfScalarWhereInput>>;
  NOT?: InputMaybe<Array<ShelfScalarWhereInput>>;
  OR?: InputMaybe<Array<ShelfScalarWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfUpdateInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
  userBooks?: InputMaybe<UserBookShelvesUpdateManyWithoutShelfNestedInput>;
};

export type ShelfUpdateManyMutationInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ShelfUpdateManyWithWhereWithoutUserInput = {
  data: ShelfUpdateManyMutationInput;
  where: ShelfScalarWhereInput;
};

export type ShelfUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShelfCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShelfCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShelfCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ShelfScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  set?: InputMaybe<Array<ShelfWhereUniqueInput>>;
  update?: InputMaybe<Array<ShelfUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ShelfUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ShelfUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ShelfUpdateOneRequiredWithoutUserBooksNestedInput = {
  connect?: InputMaybe<ShelfWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShelfCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<ShelfCreateWithoutUserBooksInput>;
  update?: InputMaybe<ShelfUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<ShelfUpsertWithoutUserBooksInput>;
};

export type ShelfUpdateToOneWithWhereWithoutUserBooksInput = {
  data: ShelfUpdateWithoutUserBooksInput;
  where?: InputMaybe<ShelfWhereInput>;
};

export type ShelfUpdateWithWhereUniqueWithoutUserInput = {
  data: ShelfUpdateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfUpdateWithoutUserBooksInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutShelvesNestedInput>;
};

export type ShelfUpdateWithoutUserInput = {
  dateTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userBooks?: InputMaybe<UserBookShelvesUpdateManyWithoutShelfNestedInput>;
};

export type ShelfUpsertWithWhereUniqueWithoutUserInput = {
  create: ShelfCreateWithoutUserInput;
  update: ShelfUpdateWithoutUserInput;
  where: ShelfWhereUniqueInput;
};

export type ShelfUpsertWithoutUserBooksInput = {
  create: ShelfCreateWithoutUserBooksInput;
  update: ShelfUpdateWithoutUserBooksInput;
  where?: InputMaybe<ShelfWhereInput>;
};

export type ShelfWhereInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBooks?: InputMaybe<UserBookShelvesListRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ShelfWhereUniqueInput = {
  AND?: InputMaybe<Array<ShelfWhereInput>>;
  NOT?: InputMaybe<Array<ShelfWhereInput>>;
  OR?: InputMaybe<Array<ShelfWhereInput>>;
  dateTime?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<ShelfIdentifierCompoundUniqueInput>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userBooks?: InputMaybe<UserBookShelvesListRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateEmailInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  accounts?: Maybe<Array<Account>>;
  auditLogs?: Maybe<Array<AuditLog>>;
  bio?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['Timestamp']['output'];
  dob?: Maybe<Scalars['Timestamp']['output']>;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  followerCount: Scalars['Float']['output'];
  followers?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  followingCount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isFollowing: Scalars['Boolean']['output'];
  journalEntries?: Maybe<Array<JournalEntry>>;
  likedReviews?: Maybe<Array<Review>>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  shelves?: Maybe<Array<Shelf>>;
  updatedAt: Scalars['Timestamp']['output'];
  userBooks?: Maybe<Array<UserBook>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  Cover?: Maybe<Array<Cover>>;
  _count: UserBookCount;
  authors?: Maybe<Scalars['String']['output']>;
  book?: Maybe<Book>;
  bookId: Scalars['String']['output'];
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  journalEntry?: Maybe<Array<JournalEntry>>;
  order: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  shelves?: Maybe<Array<UserBookShelves>>;
  status: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Timestamp']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type UserBookAvgAggregate = {
  __typename?: 'UserBookAvgAggregate';
  order?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserBookCount = {
  __typename?: 'UserBookCount';
  Cover: Scalars['Int']['output'];
  journalEntry: Scalars['Int']['output'];
  shelves: Scalars['Int']['output'];
};

export type UserBookCountAggregate = {
  __typename?: 'UserBookCountAggregate';
  _all: Scalars['Int']['output'];
  authors: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserBookCreateManyBookInput = {
  authors?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userId: Scalars['String']['input'];
};

export type UserBookCreateManyBookInputEnvelope = {
  data: Array<UserBookCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookCreateManyUserInput = {
  authors?: InputMaybe<Scalars['String']['input']>;
  bookId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookCreateManyUserInputEnvelope = {
  data: Array<UserBookCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutBookInput>>;
  createMany?: InputMaybe<UserBookCreateManyBookInputEnvelope>;
};

export type UserBookCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserBookCreateManyUserInputEnvelope>;
};

export type UserBookCreateNestedOneWithoutCoverInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutCoverInput>;
  create?: InputMaybe<UserBookCreateWithoutCoverInput>;
};

export type UserBookCreateNestedOneWithoutJournalEntryInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutJournalEntryInput>;
  create?: InputMaybe<UserBookCreateWithoutJournalEntryInput>;
};

export type UserBookCreateNestedOneWithoutShelvesInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserBookCreateWithoutShelvesInput>;
};

export type UserBookCreateOrConnectWithoutBookInput = {
  create: UserBookCreateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutCoverInput = {
  create: UserBookCreateWithoutCoverInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutJournalEntryInput = {
  create: UserBookCreateWithoutJournalEntryInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutShelvesInput = {
  create: UserBookCreateWithoutShelvesInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateOrConnectWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookCreateWithoutBookInput = {
  Cover?: InputMaybe<CoverCreateNestedManyWithoutUserBookInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutCoverInput = {
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutJournalEntryInput = {
  Cover?: InputMaybe<CoverCreateNestedManyWithoutUserBookInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutShelvesInput = {
  Cover?: InputMaybe<CoverCreateNestedManyWithoutUserBookInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserCreateNestedOneWithoutUserBooksInput>;
};

export type UserBookCreateWithoutUserInput = {
  Cover?: InputMaybe<CoverCreateNestedManyWithoutUserBookInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookCreateNestedOneWithoutUserBookInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryCreateNestedManyWithoutUserBookInput>;
  order: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesCreateNestedManyWithoutUserBookInput>;
  status: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookIdentifierCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserBookListRelationFilter = {
  every?: InputMaybe<UserBookWhereInput>;
  none?: InputMaybe<UserBookWhereInput>;
  some?: InputMaybe<UserBookWhereInput>;
};

export type UserBookMaxAggregate = {
  __typename?: 'UserBookMaxAggregate';
  authors?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserBookMinAggregate = {
  __typename?: 'UserBookMinAggregate';
  authors?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserBookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserBookOrderByWithRelationInput = {
  Cover?: InputMaybe<CoverOrderByRelationAggregateInput>;
  authors?: InputMaybe<SortOrderInput>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  journalEntry?: InputMaybe<JournalEntryOrderByRelationAggregateInput>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrderInput>;
  shelves?: InputMaybe<UserBookShelvesOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserBookRelationFilter = {
  is?: InputMaybe<UserBookWhereInput>;
  isNot?: InputMaybe<UserBookWhereInput>;
};

export type UserBookScalarWhereInput = {
  AND?: InputMaybe<Array<UserBookScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserBookScalarWhereInput>>;
  OR?: InputMaybe<Array<UserBookScalarWhereInput>>;
  authors?: InputMaybe<StringFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookShelves = {
  __typename?: 'UserBookShelves';
  shelf: Shelf;
  shelfId: Scalars['String']['output'];
  userBook: UserBook;
  userBookId: Scalars['String']['output'];
};

export type UserBookShelvesCountAggregate = {
  __typename?: 'UserBookShelvesCountAggregate';
  _all: Scalars['Int']['output'];
  shelfId: Scalars['Int']['output'];
  userBookId: Scalars['Int']['output'];
};

export type UserBookShelvesCreateManyShelfInput = {
  userBookId: Scalars['String']['input'];
};

export type UserBookShelvesCreateManyShelfInputEnvelope = {
  data: Array<UserBookShelvesCreateManyShelfInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookShelvesCreateManyUserBookInput = {
  shelfId: Scalars['String']['input'];
};

export type UserBookShelvesCreateManyUserBookInputEnvelope = {
  data: Array<UserBookShelvesCreateManyUserBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserBookShelvesCreateNestedManyWithoutShelfInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutShelfInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutShelfInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyShelfInputEnvelope>;
};

export type UserBookShelvesCreateNestedManyWithoutUserBookInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyUserBookInputEnvelope>;
};

export type UserBookShelvesCreateOrConnectWithoutShelfInput = {
  create: UserBookShelvesCreateWithoutShelfInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesCreateOrConnectWithoutUserBookInput = {
  create: UserBookShelvesCreateWithoutUserBookInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesCreateWithoutShelfInput = {
  userBook: UserBookCreateNestedOneWithoutShelvesInput;
};

export type UserBookShelvesCreateWithoutUserBookInput = {
  shelf: ShelfCreateNestedOneWithoutUserBooksInput;
};

export type UserBookShelvesListRelationFilter = {
  every?: InputMaybe<UserBookShelvesWhereInput>;
  none?: InputMaybe<UserBookShelvesWhereInput>;
  some?: InputMaybe<UserBookShelvesWhereInput>;
};

export type UserBookShelvesMaxAggregate = {
  __typename?: 'UserBookShelvesMaxAggregate';
  shelfId?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type UserBookShelvesMinAggregate = {
  __typename?: 'UserBookShelvesMinAggregate';
  shelfId?: Maybe<Scalars['String']['output']>;
  userBookId?: Maybe<Scalars['String']['output']>;
};

export type UserBookShelvesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserBookShelvesScalarWhereInput = {
  AND?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  shelfId?: InputMaybe<StringFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type UserBookShelvesUncheckedUpdateManyWithoutShelfInput = {
  userBookId?: InputMaybe<Scalars['String']['input']>;
};

export type UserBookShelvesUncheckedUpdateManyWithoutUserBookInput = {
  shelfId?: InputMaybe<Scalars['String']['input']>;
};

export type UserBookShelvesUpdateManyWithWhereWithoutShelfInput = {
  data: UserBookShelvesUncheckedUpdateManyWithoutShelfInput;
  where: UserBookShelvesScalarWhereInput;
};

export type UserBookShelvesUpdateManyWithWhereWithoutUserBookInput = {
  data: UserBookShelvesUncheckedUpdateManyWithoutUserBookInput;
  where: UserBookShelvesScalarWhereInput;
};

export type UserBookShelvesUpdateManyWithoutShelfNestedInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutShelfInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutShelfInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyShelfInputEnvelope>;
  delete?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput>>;
  updateMany?: InputMaybe<Array<UserBookShelvesUpdateManyWithWhereWithoutShelfInput>>;
  upsert?: InputMaybe<Array<UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput>>;
};

export type UserBookShelvesUpdateManyWithoutUserBookNestedInput = {
  connect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookShelvesCreateOrConnectWithoutUserBookInput>>;
  create?: InputMaybe<Array<UserBookShelvesCreateWithoutUserBookInput>>;
  createMany?: InputMaybe<UserBookShelvesCreateManyUserBookInputEnvelope>;
  delete?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookShelvesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookShelvesWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput>>;
  updateMany?: InputMaybe<Array<UserBookShelvesUpdateManyWithWhereWithoutUserBookInput>>;
  upsert?: InputMaybe<Array<UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput>>;
};

export type UserBookShelvesUpdateWithWhereUniqueWithoutShelfInput = {
  data: UserBookShelvesUpdateWithoutShelfInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUpdateWithWhereUniqueWithoutUserBookInput = {
  data: UserBookShelvesUpdateWithoutUserBookInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUpdateWithoutShelfInput = {
  userBook?: InputMaybe<UserBookUpdateOneRequiredWithoutShelvesNestedInput>;
};

export type UserBookShelvesUpdateWithoutUserBookInput = {
  shelf?: InputMaybe<ShelfUpdateOneRequiredWithoutUserBooksNestedInput>;
};

export type UserBookShelvesUpsertWithWhereUniqueWithoutShelfInput = {
  create: UserBookShelvesCreateWithoutShelfInput;
  update: UserBookShelvesUpdateWithoutShelfInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUpsertWithWhereUniqueWithoutUserBookInput = {
  create: UserBookShelvesCreateWithoutUserBookInput;
  update: UserBookShelvesUpdateWithoutUserBookInput;
  where: UserBookShelvesWhereUniqueInput;
};

export type UserBookShelvesUserBookIdShelfIdCompoundUniqueInput = {
  shelfId: Scalars['String']['input'];
  userBookId: Scalars['String']['input'];
};

export type UserBookShelvesWhereInput = {
  AND?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  shelf?: InputMaybe<ShelfRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
};

export type UserBookShelvesWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  NOT?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  OR?: InputMaybe<Array<UserBookShelvesWhereInput>>;
  shelf?: InputMaybe<ShelfRelationFilter>;
  shelfId?: InputMaybe<StringFilter>;
  userBook?: InputMaybe<UserBookRelationFilter>;
  userBookId?: InputMaybe<StringFilter>;
  userBookId_shelfId?: InputMaybe<UserBookShelvesUserBookIdShelfIdCompoundUniqueInput>;
};

export type UserBookSumAggregate = {
  __typename?: 'UserBookSumAggregate';
  order?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type UserBookUpdateInput = {
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UserBookUpdateManyMutationInput = {
  authors?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookUpdateManyWithWhereWithoutBookInput = {
  data: UserBookUpdateManyMutationInput;
  where: UserBookScalarWhereInput;
};

export type UserBookUpdateManyWithWhereWithoutUserInput = {
  data: UserBookUpdateManyMutationInput;
  where: UserBookScalarWhereInput;
};

export type UserBookUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutBookInput>>;
  createMany?: InputMaybe<UserBookCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<UserBookUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<UserBookUpsertWithWhereUniqueWithoutBookInput>>;
};

export type UserBookUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserBookCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserBookCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserBookCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserBookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  set?: InputMaybe<Array<UserBookWhereUniqueInput>>;
  update?: InputMaybe<Array<UserBookUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserBookUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserBookUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserBookUpdateOneRequiredWithoutShelvesNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserBookCreateWithoutShelvesInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutShelvesInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutShelvesInput>;
};

export type UserBookUpdateOneWithoutCoverNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutCoverInput>;
  create?: InputMaybe<UserBookCreateWithoutCoverInput>;
  delete?: InputMaybe<UserBookWhereInput>;
  disconnect?: InputMaybe<UserBookWhereInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutCoverInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutCoverInput>;
};

export type UserBookUpdateOneWithoutJournalEntryNestedInput = {
  connect?: InputMaybe<UserBookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserBookCreateOrConnectWithoutJournalEntryInput>;
  create?: InputMaybe<UserBookCreateWithoutJournalEntryInput>;
  delete?: InputMaybe<UserBookWhereInput>;
  disconnect?: InputMaybe<UserBookWhereInput>;
  update?: InputMaybe<UserBookUpdateToOneWithWhereWithoutJournalEntryInput>;
  upsert?: InputMaybe<UserBookUpsertWithoutJournalEntryInput>;
};

export type UserBookUpdateOrderInput = {
  items?: InputMaybe<Array<BookItemInput>>;
};

export type UserBookUpdateToOneWithWhereWithoutCoverInput = {
  data: UserBookUpdateWithoutCoverInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateToOneWithWhereWithoutJournalEntryInput = {
  data: UserBookUpdateWithoutJournalEntryInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpdateWithWhereUniqueWithoutBookInput = {
  data: UserBookUpdateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
  data: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpdateWithoutBookInput = {
  Cover?: InputMaybe<CoverUpdateManyWithoutUserBookNestedInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutCoverInput = {
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutJournalEntryInput = {
  Cover?: InputMaybe<CoverUpdateManyWithoutUserBookNestedInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutShelvesInput = {
  Cover?: InputMaybe<CoverUpdateManyWithoutUserBookNestedInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  user?: InputMaybe<UserUpdateOneWithoutUserBooksNestedInput>;
};

export type UserBookUpdateWithoutUserInput = {
  Cover?: InputMaybe<CoverUpdateManyWithoutUserBookNestedInput>;
  authors?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneWithoutUserBookNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  journalEntry?: InputMaybe<JournalEntryUpdateManyWithoutUserBookNestedInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  shelves?: InputMaybe<UserBookShelvesUpdateManyWithoutUserBookNestedInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UserBookUpsertWithWhereUniqueWithoutBookInput = {
  create: UserBookCreateWithoutBookInput;
  update: UserBookUpdateWithoutBookInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpsertWithWhereUniqueWithoutUserInput = {
  create: UserBookCreateWithoutUserInput;
  update: UserBookUpdateWithoutUserInput;
  where: UserBookWhereUniqueInput;
};

export type UserBookUpsertWithoutCoverInput = {
  create: UserBookCreateWithoutCoverInput;
  update: UserBookUpdateWithoutCoverInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpsertWithoutJournalEntryInput = {
  create: UserBookCreateWithoutJournalEntryInput;
  update: UserBookUpdateWithoutJournalEntryInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookUpsertWithoutShelvesInput = {
  create: UserBookCreateWithoutShelvesInput;
  update: UserBookUpdateWithoutShelvesInput;
  where?: InputMaybe<UserBookWhereInput>;
};

export type UserBookWhereInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  Cover?: InputMaybe<CoverListRelationFilter>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  authors?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  journalEntry?: InputMaybe<JournalEntryListRelationFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBookWhereUniqueInput = {
  AND?: InputMaybe<Array<UserBookWhereInput>>;
  Cover?: InputMaybe<CoverListRelationFilter>;
  NOT?: InputMaybe<Array<UserBookWhereInput>>;
  OR?: InputMaybe<Array<UserBookWhereInput>>;
  authors?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<UserBookIdentifierCompoundUniqueInput>;
  journalEntry?: InputMaybe<JournalEntryListRelationFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  shelves?: InputMaybe<UserBookShelvesListRelationFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserBooksResponse = {
  __typename?: 'UserBooksResponse';
  hasMore: Scalars['Boolean']['output'];
  totalBooks: Scalars['Float']['output'];
  userBooks?: Maybe<Array<UserBook>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  auditLogs: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  followers: Scalars['Int']['output'];
  following: Scalars['Int']['output'];
  journalEntries: Scalars['Int']['output'];
  likedReviews: Scalars['Int']['output'];
  reviews: Scalars['Int']['output'];
  shelves: Scalars['Int']['output'];
  userBooks: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  bio: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dob: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCreateNestedManyWithoutFollowersInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowersInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowersInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateNestedManyWithoutLikedReviewsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutLikedReviewsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutLikedReviewsInput>>;
};

export type UserCreateNestedOneWithoutAuditLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAuditLogsInput>;
  create?: InputMaybe<UserCreateWithoutAuditLogsInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutJournalEntriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutJournalEntriesInput>;
  create?: InputMaybe<UserCreateWithoutJournalEntriesInput>;
};

export type UserCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
};

export type UserCreateNestedOneWithoutShelvesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserCreateWithoutShelvesInput>;
};

export type UserCreateNestedOneWithoutUserBooksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
};

export type UserCreateOrConnectWithoutAuditLogsInput = {
  create: UserCreateWithoutAuditLogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutJournalEntriesInput = {
  create: UserCreateWithoutJournalEntriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikedReviewsInput = {
  create: UserCreateWithoutLikedReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutShelvesInput = {
  create: UserCreateWithoutShelvesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserBooksInput = {
  create: UserCreateWithoutUserBooksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAuditLogsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutFollowersInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutFollowingInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutJournalEntriesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutLikedReviewsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutReviewsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutShelvesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookCreateNestedManyWithoutUserInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutUserBooksInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  auditLogs?: InputMaybe<AuditLogCreateNestedManyWithoutUserInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserCreateNestedManyWithoutFollowersInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryCreateNestedManyWithoutUserInput>;
  likedReviews?: InputMaybe<ReviewCreateNestedManyWithoutLikedByInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  shelves?: InputMaybe<ShelfCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dob?: Maybe<Scalars['Timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dob?: Maybe<Scalars['Timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  auditLogs?: InputMaybe<AuditLogOrderByRelationAggregateInput>;
  bio?: InputMaybe<SortOrderInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  followers?: InputMaybe<UserOrderByRelationAggregateInput>;
  following?: InputMaybe<UserOrderByRelationAggregateInput>;
  hashedPassword?: InputMaybe<SortOrderInput>;
  hashedRefreshToken?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  journalEntries?: InputMaybe<JournalEntryOrderByRelationAggregateInput>;
  likedReviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  location?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  shelves?: InputMaybe<ShelfOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userBooks?: InputMaybe<UserBookOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  bio?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserUpdateManyMutationInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyWithWhereWithoutFollowersInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutLikedReviewsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutFollowersNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowersInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowersInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutFollowersInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutFollowersInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutFollowersInput>>;
};

export type UserUpdateManyWithoutFollowingNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateManyWithoutLikedReviewsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutLikedReviewsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutLikedReviewsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutLikedReviewsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutLikedReviewsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutLikedReviewsInput>>;
};

export type UserUpdateOneWithoutAuditLogsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAuditLogsInput>;
  create?: InputMaybe<UserCreateWithoutAuditLogsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAuditLogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAuditLogsInput>;
};

export type UserUpdateOneWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutJournalEntriesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutJournalEntriesInput>;
  create?: InputMaybe<UserCreateWithoutJournalEntriesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutJournalEntriesInput>;
  upsert?: InputMaybe<UserUpsertWithoutJournalEntriesInput>;
};

export type UserUpdateOneWithoutReviewsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateOneWithoutShelvesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShelvesInput>;
  create?: InputMaybe<UserCreateWithoutShelvesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutShelvesInput>;
  upsert?: InputMaybe<UserUpsertWithoutShelvesInput>;
};

export type UserUpdateOneWithoutUserBooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutUserBooksInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutUserBooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserBooksInput>;
};

export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
  data: UserUpdateWithoutAuditLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCommentsInput = {
  data: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutJournalEntriesInput = {
  data: UserUpdateWithoutJournalEntriesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReviewsInput = {
  data: UserUpdateWithoutReviewsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutShelvesInput = {
  data: UserUpdateWithoutShelvesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutUserBooksInput = {
  data: UserUpdateWithoutUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
  data: UserUpdateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutLikedReviewsInput = {
  data: UserUpdateWithoutLikedReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAuditLogsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutFollowersInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutFollowingInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutJournalEntriesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutLikedReviewsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutReviewsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutShelvesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  userBooks?: InputMaybe<UserBookUpdateManyWithoutUserNestedInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutUserBooksInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  auditLogs?: InputMaybe<AuditLogUpdateManyWithoutUserNestedInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  dob?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Timestamp']['input']>;
  followers?: InputMaybe<UserUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserUpdateManyWithoutFollowersNestedInput>;
  hashedPassword?: InputMaybe<Scalars['String']['input']>;
  hashedRefreshToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  journalEntries?: InputMaybe<JournalEntryUpdateManyWithoutUserNestedInput>;
  likedReviews?: InputMaybe<ReviewUpdateManyWithoutLikedByNestedInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  shelves?: InputMaybe<ShelfUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutLikedReviewsInput = {
  create: UserCreateWithoutLikedReviewsInput;
  update: UserUpdateWithoutLikedReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAuditLogsInput = {
  create: UserCreateWithoutAuditLogsInput;
  update: UserUpdateWithoutAuditLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutJournalEntriesInput = {
  create: UserCreateWithoutJournalEntriesInput;
  update: UserUpdateWithoutJournalEntriesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutShelvesInput = {
  create: UserCreateWithoutShelvesInput;
  update: UserUpdateWithoutShelvesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutUserBooksInput = {
  create: UserCreateWithoutUserBooksInput;
  update: UserUpdateWithoutUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  auditLogs?: InputMaybe<AuditLogListRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  followers?: InputMaybe<UserListRelationFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  journalEntries?: InputMaybe<JournalEntryListRelationFilter>;
  likedReviews?: InputMaybe<ReviewListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  auditLogs?: InputMaybe<AuditLogListRelationFilter>;
  bio?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeFilter>;
  followers?: InputMaybe<UserListRelationFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  hashedPassword?: InputMaybe<StringFilter>;
  hashedRefreshToken?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringFilter>;
  journalEntries?: InputMaybe<JournalEntryListRelationFilter>;
  likedReviews?: InputMaybe<ReviewListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  shelves?: InputMaybe<ShelfListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userBooks?: InputMaybe<UserBookListRelationFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  existingEmail: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  existingEmail?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  existingEmail?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  input: LogInInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, verificationToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, emailVerified?: any | null, id: string } } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', verifyToken: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, verificationToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, emailVerified?: any | null, id: string } } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', email: string, id: string, username?: string | null } };

export type OAuthMutationVariables = Exact<{
  input: OAuthInput;
}>;


export type OAuthMutation = { __typename?: 'Mutation', oAuth: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null, expiresIn?: number | null, user: { __typename?: 'User', email: string, username?: string | null, id: string } } };

export type RefreshAuthMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAuthMutation = { __typename?: 'Mutation', refreshAuth: { __typename?: 'RefreshResponse', accessToken: string, refreshToken: string, expiresIn: number } };

export type LogoutMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type CreateBookMutationVariables = Exact<{
  data: BookCreateInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string } };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
  where: ReviewWhereUniqueInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, content?: string | null, createdAt: any, user?: { __typename?: 'User', id: string, username?: string | null } | null } };

export type CreateJournalEntryMutationVariables = Exact<{
  data: JournalEntryCreateInput;
  book: BookWhereUniqueInput;
}>;


export type CreateJournalEntryMutation = { __typename?: 'Mutation', createJournalEntry: { __typename?: 'JournalEntry', id: string, readingNotes?: string | null, pagesRead: number, dateRead: any, currentPage: number, currentPercent: number } };

export type RemoveJournalEntryMutationVariables = Exact<{
  where: JournalEntryWhereUniqueInput;
}>;


export type RemoveJournalEntryMutation = { __typename?: 'Mutation', removeJournalEntry: { __typename?: 'JournalEntry', id: string } };

export type UpdateJournalEntryMutationVariables = Exact<{
  data: JournalEntryUpdateInput;
  where: JournalEntryWhereUniqueInput;
}>;


export type UpdateJournalEntryMutation = { __typename?: 'Mutation', updateJournalEntry: { __typename?: 'JournalEntry', id: string, readingNotes?: string | null, pagesRead: number, dateRead: any, currentPage: number, currentPercent: number, userBook?: { __typename?: 'UserBook', status: string, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null } };

export type CreateReviewMutationVariables = Exact<{
  data: ReviewDataInput;
  where: BookWhereUniqueInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: { __typename?: 'Review', id: string, content?: string | null } };

export type UpdateReviewMutationVariables = Exact<{
  where: ReviewWhereUniqueInput;
  data: ReviewDataInput;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview: { __typename?: 'Review', id: string, content?: string | null, spoilers: boolean } };

export type LikeReviewMutationVariables = Exact<{
  where: ReviewWhereUniqueInput;
  value: Scalars['Boolean']['input'];
}>;


export type LikeReviewMutation = { __typename?: 'Mutation', likeReview: { __typename?: 'Review', id: string, likeCount: number } };

export type CreateShelfMutationVariables = Exact<{
  data: ShelfCreateInput;
}>;


export type CreateShelfMutation = { __typename?: 'Mutation', createShelf: { __typename?: 'Shelf', id: string, name: string, _count: { __typename?: 'ShelfCount', userBooks: number } } };

export type DeleteShelfMutationVariables = Exact<{
  where: ShelfWhereUniqueInput;
}>;


export type DeleteShelfMutation = { __typename?: 'Mutation', deleteShelf: { __typename?: 'Shelf', id: string, name: string, _count: { __typename?: 'ShelfCount', userBooks: number } } };

export type UpdateShelfMutationVariables = Exact<{
  data: ShelfUpdateInput;
  where: ShelfWhereUniqueInput;
}>;


export type UpdateShelfMutation = { __typename?: 'Mutation', updateShelf: { __typename?: 'Shelf', id: string, name: string, _count: { __typename?: 'ShelfCount', userBooks: number } } };

export type FollowMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  value: Scalars['Boolean']['input'];
}>;


export type FollowMutation = { __typename?: 'Mutation', follow: { __typename?: 'User', id: string } };

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username?: string | null, email: string } };

export type UpdateEmailMutationVariables = Exact<{
  data: UpdateEmailInput;
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: { __typename?: 'User', id: string, email: string } };

export type CreateUserBookMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CreateUserBookMutation = { __typename?: 'Mutation', createUserBook?: { __typename?: 'UserBook', status: string, id: string, book?: { __typename?: 'Book', title: string } | null } | null };

export type UpdateUserBookMutationVariables = Exact<{
  data: UserBookUpdateInput;
  where: BookWhereUniqueInput;
}>;


export type UpdateUserBookMutation = { __typename?: 'Mutation', updateUserBook: { __typename?: 'UserBook', status: string, id: string, book?: { __typename?: 'Book', title: string } | null } };

export type RemoveUserBookMutationVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type RemoveUserBookMutation = { __typename?: 'Mutation', removeUserBook: { __typename?: 'UserBook', id: string, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', name: string } }> | null } };

export type ImportUserBooksMutationVariables = Exact<{
  content: Scalars['String']['input'];
}>;


export type ImportUserBooksMutation = { __typename?: 'Mutation', importUserBooks: boolean };

export type UpdateUserBookOrderMutationVariables = Exact<{
  data: UserBookUpdateOrderInput;
}>;


export type UpdateUserBookOrderMutation = { __typename?: 'Mutation', updateUserBookOrder: Array<{ __typename?: 'UserBook', id: string, order: number }> };

export type AddUserBookToShelfMutationVariables = Exact<{
  bookId: Scalars['String']['input'];
  shelf: Scalars['String']['input'];
}>;


export type AddUserBookToShelfMutation = { __typename?: 'Mutation', addBookToShelf: { __typename?: 'UserBook', id: string, status: string } };

export type RemoveUserBookFromShelfMutationVariables = Exact<{
  bookId: Scalars['String']['input'];
  shelf: Scalars['String']['input'];
}>;


export type RemoveUserBookFromShelfMutation = { __typename?: 'Mutation', removeBookFromShelf: { __typename?: 'UserBook', id: string, status: string } };

export type GetAuditLogsQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereUniqueInput>;
  action?: InputMaybe<Action>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuditLogOrderByWithRelationInput>;
}>;


export type GetAuditLogsQuery = { __typename?: 'Query', auditLogs: { __typename?: 'ActivitiesResponse', hasMore: boolean, totalActivities: number, activities?: Array<{ __typename?: 'AuditLog', id: string, action: Action, createdAt: any, updatedAt: any, actionContent?: string | null, user?: { __typename?: 'User', id: string, username?: string | null, email: string } | null, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResponse', email?: string | null, username?: string | null, isOAuth?: boolean | null } };

export type BookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type BookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, description?: string | null, publishedDate?: string | null, publisher?: string | null, pageCount?: number | null, categories?: Array<string> | null, averageRating?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null };

export type GetGoogleBookQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetGoogleBookQuery = { __typename?: 'Query', getGoogleBook?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, description?: string | null, publishedDate?: string | null, publisher?: string | null, pageCount?: number | null, categories?: Array<string> | null, averageRating?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null };

export type CommentsQueryVariables = Exact<{
  where: ReviewWhereUniqueInput;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, content?: string | null, createdAt: any, user?: { __typename?: 'User', id: string, username?: string | null } | null }> };

export type CountJournalEntriesQueryVariables = Exact<{
  book: BookWhereUniqueInput;
}>;


export type CountJournalEntriesQuery = { __typename?: 'Query', countJournalEntries: number };

export type GetMostRecentJournalEntryQueryVariables = Exact<{
  book: BookWhereUniqueInput;
}>;


export type GetMostRecentJournalEntryQuery = { __typename?: 'Query', getMostRecentJournalEntry?: { __typename?: 'JournalEntry', id: string, readingNotes?: string | null, dateRead: any, currentPage: number, currentPercent: number } | null };

export type JournalEntriesQueryVariables = Exact<{
  book?: InputMaybe<BookWhereUniqueInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
}>;


export type JournalEntriesQuery = { __typename?: 'Query', journalEntries: Array<{ __typename?: 'JournalEntry', id: string, readingNotes?: string | null, dateRead: any, currentPage: number, pagesRead: number, currentPercent: number, userBook?: { __typename?: 'UserBook', status: string, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null }> };

export type BookReviewsQueryVariables = Exact<{
  where: BookWhereUniqueInput;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
}>;


export type BookReviewsQuery = { __typename?: 'Query', bookReviews: Array<{ __typename?: 'Review', id: string, content?: string | null, createdAt: any, spoilers: boolean, likeCount: number, liked: boolean, commentCount: number, user?: { __typename?: 'User', id: string, username?: string | null } | null }> };

export type BookReviewQueryVariables = Exact<{
  where: ReviewUniqueInput;
}>;


export type BookReviewQuery = { __typename?: 'Query', bookReview: { __typename?: 'Review', id: string, content?: string | null, createdAt: any, spoilers: boolean, likeCount: number, liked: boolean, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, publishedDate?: string | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null } };

export type ShelvesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShelvesQuery = { __typename?: 'Query', shelves?: Array<{ __typename?: 'Shelf', id: string, name: string, userId?: string | null, _count: { __typename?: 'ShelfCount', userBooks: number } }> | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username?: string | null, email: string, bio?: string | null, location?: string | null, name?: string | null, dob?: any | null, isFollowing: boolean, followerCount: number, followingCount: number } };

export type UserBookQueryVariables = Exact<{
  where: BookWhereUniqueInput;
}>;


export type UserBookQuery = { __typename?: 'Query', userBook?: { __typename?: 'UserBook', userId: string, bookId: string, status: string, rating?: number | null, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null } | null };

export type GetUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  orderBy?: InputMaybe<UserBookOrderByWithRelationInput>;
}>;


export type GetUserBooksQuery = { __typename?: 'Query', getUserBooks: { __typename?: 'UserBooksResponse', hasMore: boolean, totalBooks: number, userBooks?: Array<{ __typename?: 'UserBook', id: string, userId: string, bookId: string, status: string, rating?: number | null, createdAt: any, updatedAt: any, order: number, book?: { __typename?: 'Book', id: string, title: string, authors?: Array<string> | null, pageCount?: number | null, covers?: Array<{ __typename?: 'Cover', url: string, size: Size }> | null, _count: { __typename?: 'BookCount', userBook: number, reviews: number } } | null, shelves?: Array<{ __typename?: 'UserBookShelves', shelf: { __typename?: 'Shelf', id: string, name: string } }> | null, _count: { __typename?: 'UserBookCount', shelves: number, journalEntry: number }, journalEntry?: Array<{ __typename?: 'JournalEntry', id: string, readingNotes?: string | null, dateRead: any, currentPage: number, currentPercent: number }> | null }> | null } };

export type CountUserBooksQueryVariables = Exact<{
  where?: InputMaybe<UserBookWhereInput>;
}>;


export type CountUserBooksQuery = { __typename?: 'Query', countUserBooks: number };


export const LoginDocument = gql`
    mutation Login($input: LogInInput!) {
  login(logInInput: $input) {
    accessToken
    refreshToken
    verificationToken
    expiresIn
    user {
      email
      username
      emailVerified
      id
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(resetPasswordInput: $input)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyTokenDocument = gql`
    mutation VerifyToken($token: String!) {
  verifyToken(token: $token) {
    accessToken
    refreshToken
    verificationToken
    expiresIn
    user {
      email
      username
      emailVerified
      id
    }
  }
}
    `;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, options);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(registerInput: $input) {
    email
    id
    username
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const OAuthDocument = gql`
    mutation OAuth($input: OAuthInput!) {
  oAuth(oAuthInput: $input) {
    accessToken
    refreshToken
    expiresIn
    user {
      email
      username
      id
    }
  }
}
    `;
export type OAuthMutationFn = Apollo.MutationFunction<OAuthMutation, OAuthMutationVariables>;

/**
 * __useOAuthMutation__
 *
 * To run a mutation, you first call `useOAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oAuthMutation, { data, loading, error }] = useOAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOAuthMutation(baseOptions?: Apollo.MutationHookOptions<OAuthMutation, OAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OAuthMutation, OAuthMutationVariables>(OAuthDocument, options);
      }
export type OAuthMutationHookResult = ReturnType<typeof useOAuthMutation>;
export type OAuthMutationResult = Apollo.MutationResult<OAuthMutation>;
export type OAuthMutationOptions = Apollo.BaseMutationOptions<OAuthMutation, OAuthMutationVariables>;
export const RefreshAuthDocument = gql`
    mutation RefreshAuth {
  refreshAuth {
    accessToken
    refreshToken
    expiresIn
  }
}
    `;
export type RefreshAuthMutationFn = Apollo.MutationFunction<RefreshAuthMutation, RefreshAuthMutationVariables>;

/**
 * __useRefreshAuthMutation__
 *
 * To run a mutation, you first call `useRefreshAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAuthMutation, { data, loading, error }] = useRefreshAuthMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshAuthMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAuthMutation, RefreshAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAuthMutation, RefreshAuthMutationVariables>(RefreshAuthDocument, options);
      }
export type RefreshAuthMutationHookResult = ReturnType<typeof useRefreshAuthMutation>;
export type RefreshAuthMutationResult = Apollo.MutationResult<RefreshAuthMutation>;
export type RefreshAuthMutationOptions = Apollo.BaseMutationOptions<RefreshAuthMutation, RefreshAuthMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout($id: String!) {
  logout(id: $id)
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($data: BookCreateInput!) {
  createBook(data: $data) {
    id
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentCreateInput!, $where: ReviewWhereUniqueInput!) {
  createComment(data: $data, where: $where) {
    id
    content
    createdAt
    user {
      id
      username
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateJournalEntryDocument = gql`
    mutation CreateJournalEntry($data: JournalEntryCreateInput!, $book: BookWhereUniqueInput!) {
  createJournalEntry(data: $data, book: $book) {
    id
    readingNotes
    pagesRead
    dateRead
    currentPage
    currentPercent
  }
}
    `;
export type CreateJournalEntryMutationFn = Apollo.MutationFunction<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>;

/**
 * __useCreateJournalEntryMutation__
 *
 * To run a mutation, you first call `useCreateJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJournalEntryMutation, { data, loading, error }] = useCreateJournalEntryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      book: // value for 'book'
 *   },
 * });
 */
export function useCreateJournalEntryMutation(baseOptions?: Apollo.MutationHookOptions<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>(CreateJournalEntryDocument, options);
      }
export type CreateJournalEntryMutationHookResult = ReturnType<typeof useCreateJournalEntryMutation>;
export type CreateJournalEntryMutationResult = Apollo.MutationResult<CreateJournalEntryMutation>;
export type CreateJournalEntryMutationOptions = Apollo.BaseMutationOptions<CreateJournalEntryMutation, CreateJournalEntryMutationVariables>;
export const RemoveJournalEntryDocument = gql`
    mutation RemoveJournalEntry($where: JournalEntryWhereUniqueInput!) {
  removeJournalEntry(where: $where) {
    id
  }
}
    `;
export type RemoveJournalEntryMutationFn = Apollo.MutationFunction<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>;

/**
 * __useRemoveJournalEntryMutation__
 *
 * To run a mutation, you first call `useRemoveJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeJournalEntryMutation, { data, loading, error }] = useRemoveJournalEntryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveJournalEntryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>(RemoveJournalEntryDocument, options);
      }
export type RemoveJournalEntryMutationHookResult = ReturnType<typeof useRemoveJournalEntryMutation>;
export type RemoveJournalEntryMutationResult = Apollo.MutationResult<RemoveJournalEntryMutation>;
export type RemoveJournalEntryMutationOptions = Apollo.BaseMutationOptions<RemoveJournalEntryMutation, RemoveJournalEntryMutationVariables>;
export const UpdateJournalEntryDocument = gql`
    mutation UpdateJournalEntry($data: JournalEntryUpdateInput!, $where: JournalEntryWhereUniqueInput!) {
  updateJournalEntry(data: $data, where: $where) {
    id
    readingNotes
    pagesRead
    dateRead
    currentPage
    currentPercent
    userBook {
      status
      book {
        id
        title
        authors
        pageCount
        covers {
          url
          size
        }
      }
      shelves {
        shelf {
          id
          name
        }
      }
    }
  }
}
    `;
export type UpdateJournalEntryMutationFn = Apollo.MutationFunction<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>;

/**
 * __useUpdateJournalEntryMutation__
 *
 * To run a mutation, you first call `useUpdateJournalEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJournalEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJournalEntryMutation, { data, loading, error }] = useUpdateJournalEntryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateJournalEntryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>(UpdateJournalEntryDocument, options);
      }
export type UpdateJournalEntryMutationHookResult = ReturnType<typeof useUpdateJournalEntryMutation>;
export type UpdateJournalEntryMutationResult = Apollo.MutationResult<UpdateJournalEntryMutation>;
export type UpdateJournalEntryMutationOptions = Apollo.BaseMutationOptions<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($data: ReviewDataInput!, $where: BookWhereUniqueInput!) {
  createReview(data: $data, where: $where) {
    id
    content
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($where: ReviewWhereUniqueInput!, $data: ReviewDataInput!) {
  updateReview(where: $where, data: $data) {
    id
    content
    spoilers
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const LikeReviewDocument = gql`
    mutation LikeReview($where: ReviewWhereUniqueInput!, $value: Boolean!) {
  likeReview(where: $where, value: $value) {
    id
    likeCount
  }
}
    `;
export type LikeReviewMutationFn = Apollo.MutationFunction<LikeReviewMutation, LikeReviewMutationVariables>;

/**
 * __useLikeReviewMutation__
 *
 * To run a mutation, you first call `useLikeReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeReviewMutation, { data, loading, error }] = useLikeReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useLikeReviewMutation(baseOptions?: Apollo.MutationHookOptions<LikeReviewMutation, LikeReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeReviewMutation, LikeReviewMutationVariables>(LikeReviewDocument, options);
      }
export type LikeReviewMutationHookResult = ReturnType<typeof useLikeReviewMutation>;
export type LikeReviewMutationResult = Apollo.MutationResult<LikeReviewMutation>;
export type LikeReviewMutationOptions = Apollo.BaseMutationOptions<LikeReviewMutation, LikeReviewMutationVariables>;
export const CreateShelfDocument = gql`
    mutation CreateShelf($data: ShelfCreateInput!) {
  createShelf(data: $data) {
    id
    name
    _count {
      userBooks
    }
  }
}
    `;
export type CreateShelfMutationFn = Apollo.MutationFunction<CreateShelfMutation, CreateShelfMutationVariables>;

/**
 * __useCreateShelfMutation__
 *
 * To run a mutation, you first call `useCreateShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShelfMutation, { data, loading, error }] = useCreateShelfMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateShelfMutation(baseOptions?: Apollo.MutationHookOptions<CreateShelfMutation, CreateShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShelfMutation, CreateShelfMutationVariables>(CreateShelfDocument, options);
      }
export type CreateShelfMutationHookResult = ReturnType<typeof useCreateShelfMutation>;
export type CreateShelfMutationResult = Apollo.MutationResult<CreateShelfMutation>;
export type CreateShelfMutationOptions = Apollo.BaseMutationOptions<CreateShelfMutation, CreateShelfMutationVariables>;
export const DeleteShelfDocument = gql`
    mutation DeleteShelf($where: ShelfWhereUniqueInput!) {
  deleteShelf(where: $where) {
    id
    name
    _count {
      userBooks
    }
  }
}
    `;
export type DeleteShelfMutationFn = Apollo.MutationFunction<DeleteShelfMutation, DeleteShelfMutationVariables>;

/**
 * __useDeleteShelfMutation__
 *
 * To run a mutation, you first call `useDeleteShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShelfMutation, { data, loading, error }] = useDeleteShelfMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteShelfMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShelfMutation, DeleteShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShelfMutation, DeleteShelfMutationVariables>(DeleteShelfDocument, options);
      }
export type DeleteShelfMutationHookResult = ReturnType<typeof useDeleteShelfMutation>;
export type DeleteShelfMutationResult = Apollo.MutationResult<DeleteShelfMutation>;
export type DeleteShelfMutationOptions = Apollo.BaseMutationOptions<DeleteShelfMutation, DeleteShelfMutationVariables>;
export const UpdateShelfDocument = gql`
    mutation UpdateShelf($data: ShelfUpdateInput!, $where: ShelfWhereUniqueInput!) {
  updateShelf(data: $data, where: $where) {
    id
    name
    _count {
      userBooks
    }
  }
}
    `;
export type UpdateShelfMutationFn = Apollo.MutationFunction<UpdateShelfMutation, UpdateShelfMutationVariables>;

/**
 * __useUpdateShelfMutation__
 *
 * To run a mutation, you first call `useUpdateShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShelfMutation, { data, loading, error }] = useUpdateShelfMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateShelfMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShelfMutation, UpdateShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShelfMutation, UpdateShelfMutationVariables>(UpdateShelfDocument, options);
      }
export type UpdateShelfMutationHookResult = ReturnType<typeof useUpdateShelfMutation>;
export type UpdateShelfMutationResult = Apollo.MutationResult<UpdateShelfMutation>;
export type UpdateShelfMutationOptions = Apollo.BaseMutationOptions<UpdateShelfMutation, UpdateShelfMutationVariables>;
export const FollowDocument = gql`
    mutation Follow($where: UserWhereUniqueInput!, $value: Boolean!) {
  follow(where: $where, value: $value) {
    id
  }
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      where: // value for 'where'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    id
    username
    email
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateEmailDocument = gql`
    mutation UpdateEmail($data: UpdateEmailInput!) {
  updateEmail(data: $data) {
    id
    email
  }
}
    `;
export type UpdateEmailMutationFn = Apollo.MutationFunction<UpdateEmailMutation, UpdateEmailMutationVariables>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEmailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmailMutation, UpdateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument, options);
      }
export type UpdateEmailMutationHookResult = ReturnType<typeof useUpdateEmailMutation>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const CreateUserBookDocument = gql`
    mutation createUserBook($id: String!) {
  createUserBook(id: $id) {
    status
    id
    book {
      title
    }
  }
}
    `;
export type CreateUserBookMutationFn = Apollo.MutationFunction<CreateUserBookMutation, CreateUserBookMutationVariables>;

/**
 * __useCreateUserBookMutation__
 *
 * To run a mutation, you first call `useCreateUserBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserBookMutation, { data, loading, error }] = useCreateUserBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateUserBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserBookMutation, CreateUserBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserBookMutation, CreateUserBookMutationVariables>(CreateUserBookDocument, options);
      }
export type CreateUserBookMutationHookResult = ReturnType<typeof useCreateUserBookMutation>;
export type CreateUserBookMutationResult = Apollo.MutationResult<CreateUserBookMutation>;
export type CreateUserBookMutationOptions = Apollo.BaseMutationOptions<CreateUserBookMutation, CreateUserBookMutationVariables>;
export const UpdateUserBookDocument = gql`
    mutation UpdateUserBook($data: UserBookUpdateInput!, $where: BookWhereUniqueInput!) {
  updateUserBook(data: $data, where: $where) {
    status
    id
    book {
      title
    }
  }
}
    `;
export type UpdateUserBookMutationFn = Apollo.MutationFunction<UpdateUserBookMutation, UpdateUserBookMutationVariables>;

/**
 * __useUpdateUserBookMutation__
 *
 * To run a mutation, you first call `useUpdateUserBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBookMutation, { data, loading, error }] = useUpdateUserBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBookMutation, UpdateUserBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBookMutation, UpdateUserBookMutationVariables>(UpdateUserBookDocument, options);
      }
export type UpdateUserBookMutationHookResult = ReturnType<typeof useUpdateUserBookMutation>;
export type UpdateUserBookMutationResult = Apollo.MutationResult<UpdateUserBookMutation>;
export type UpdateUserBookMutationOptions = Apollo.BaseMutationOptions<UpdateUserBookMutation, UpdateUserBookMutationVariables>;
export const RemoveUserBookDocument = gql`
    mutation RemoveUserBook($where: BookWhereUniqueInput!) {
  removeUserBook(where: $where) {
    id
    shelves {
      shelf {
        name
      }
    }
  }
}
    `;
export type RemoveUserBookMutationFn = Apollo.MutationFunction<RemoveUserBookMutation, RemoveUserBookMutationVariables>;

/**
 * __useRemoveUserBookMutation__
 *
 * To run a mutation, you first call `useRemoveUserBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserBookMutation, { data, loading, error }] = useRemoveUserBookMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveUserBookMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserBookMutation, RemoveUserBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserBookMutation, RemoveUserBookMutationVariables>(RemoveUserBookDocument, options);
      }
export type RemoveUserBookMutationHookResult = ReturnType<typeof useRemoveUserBookMutation>;
export type RemoveUserBookMutationResult = Apollo.MutationResult<RemoveUserBookMutation>;
export type RemoveUserBookMutationOptions = Apollo.BaseMutationOptions<RemoveUserBookMutation, RemoveUserBookMutationVariables>;
export const ImportUserBooksDocument = gql`
    mutation ImportUserBooks($content: String!) {
  importUserBooks(content: $content)
}
    `;
export type ImportUserBooksMutationFn = Apollo.MutationFunction<ImportUserBooksMutation, ImportUserBooksMutationVariables>;

/**
 * __useImportUserBooksMutation__
 *
 * To run a mutation, you first call `useImportUserBooksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportUserBooksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importUserBooksMutation, { data, loading, error }] = useImportUserBooksMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useImportUserBooksMutation(baseOptions?: Apollo.MutationHookOptions<ImportUserBooksMutation, ImportUserBooksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportUserBooksMutation, ImportUserBooksMutationVariables>(ImportUserBooksDocument, options);
      }
export type ImportUserBooksMutationHookResult = ReturnType<typeof useImportUserBooksMutation>;
export type ImportUserBooksMutationResult = Apollo.MutationResult<ImportUserBooksMutation>;
export type ImportUserBooksMutationOptions = Apollo.BaseMutationOptions<ImportUserBooksMutation, ImportUserBooksMutationVariables>;
export const UpdateUserBookOrderDocument = gql`
    mutation UpdateUserBookOrder($data: UserBookUpdateOrderInput!) {
  updateUserBookOrder(data: $data) {
    id
    order
  }
}
    `;
export type UpdateUserBookOrderMutationFn = Apollo.MutationFunction<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>;

/**
 * __useUpdateUserBookOrderMutation__
 *
 * To run a mutation, you first call `useUpdateUserBookOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBookOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBookOrderMutation, { data, loading, error }] = useUpdateUserBookOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserBookOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>(UpdateUserBookOrderDocument, options);
      }
export type UpdateUserBookOrderMutationHookResult = ReturnType<typeof useUpdateUserBookOrderMutation>;
export type UpdateUserBookOrderMutationResult = Apollo.MutationResult<UpdateUserBookOrderMutation>;
export type UpdateUserBookOrderMutationOptions = Apollo.BaseMutationOptions<UpdateUserBookOrderMutation, UpdateUserBookOrderMutationVariables>;
export const AddUserBookToShelfDocument = gql`
    mutation AddUserBookToShelf($bookId: String!, $shelf: String!) {
  addBookToShelf(bookId: $bookId, shelf: $shelf) {
    id
    status
  }
}
    `;
export type AddUserBookToShelfMutationFn = Apollo.MutationFunction<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>;

/**
 * __useAddUserBookToShelfMutation__
 *
 * To run a mutation, you first call `useAddUserBookToShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserBookToShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserBookToShelfMutation, { data, loading, error }] = useAddUserBookToShelfMutation({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      shelf: // value for 'shelf'
 *   },
 * });
 */
export function useAddUserBookToShelfMutation(baseOptions?: Apollo.MutationHookOptions<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>(AddUserBookToShelfDocument, options);
      }
export type AddUserBookToShelfMutationHookResult = ReturnType<typeof useAddUserBookToShelfMutation>;
export type AddUserBookToShelfMutationResult = Apollo.MutationResult<AddUserBookToShelfMutation>;
export type AddUserBookToShelfMutationOptions = Apollo.BaseMutationOptions<AddUserBookToShelfMutation, AddUserBookToShelfMutationVariables>;
export const RemoveUserBookFromShelfDocument = gql`
    mutation RemoveUserBookFromShelf($bookId: String!, $shelf: String!) {
  removeBookFromShelf(bookId: $bookId, shelf: $shelf) {
    id
    status
  }
}
    `;
export type RemoveUserBookFromShelfMutationFn = Apollo.MutationFunction<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>;

/**
 * __useRemoveUserBookFromShelfMutation__
 *
 * To run a mutation, you first call `useRemoveUserBookFromShelfMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserBookFromShelfMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserBookFromShelfMutation, { data, loading, error }] = useRemoveUserBookFromShelfMutation({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      shelf: // value for 'shelf'
 *   },
 * });
 */
export function useRemoveUserBookFromShelfMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>(RemoveUserBookFromShelfDocument, options);
      }
export type RemoveUserBookFromShelfMutationHookResult = ReturnType<typeof useRemoveUserBookFromShelfMutation>;
export type RemoveUserBookFromShelfMutationResult = Apollo.MutationResult<RemoveUserBookFromShelfMutation>;
export type RemoveUserBookFromShelfMutationOptions = Apollo.BaseMutationOptions<RemoveUserBookFromShelfMutation, RemoveUserBookFromShelfMutationVariables>;
export const GetAuditLogsDocument = gql`
    query GetAuditLogs($where: UserBookWhereUniqueInput, $action: ACTION, $offset: Int, $limit: Int, $orderBy: AuditLogOrderByWithRelationInput) {
  auditLogs(
    where: $where
    action: $action
    offset: $offset
    limit: $limit
    orderBy: $orderBy
  ) {
    activities {
      id
      action
      createdAt
      updatedAt
      user {
        id
        username
        email
      }
      book {
        id
        title
        authors
        pageCount
        covers {
          url
          size
        }
      }
      actionContent
    }
    hasMore
    totalActivities
  }
}
    `;

/**
 * __useGetAuditLogsQuery__
 *
 * To run a query within a React component, call `useGetAuditLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuditLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuditLogsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      action: // value for 'action'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetAuditLogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuditLogsQuery, GetAuditLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuditLogsQuery, GetAuditLogsQueryVariables>(GetAuditLogsDocument, options);
      }
export function useGetAuditLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuditLogsQuery, GetAuditLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuditLogsQuery, GetAuditLogsQueryVariables>(GetAuditLogsDocument, options);
        }
export function useGetAuditLogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAuditLogsQuery, GetAuditLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuditLogsQuery, GetAuditLogsQueryVariables>(GetAuditLogsDocument, options);
        }
export type GetAuditLogsQueryHookResult = ReturnType<typeof useGetAuditLogsQuery>;
export type GetAuditLogsLazyQueryHookResult = ReturnType<typeof useGetAuditLogsLazyQuery>;
export type GetAuditLogsSuspenseQueryHookResult = ReturnType<typeof useGetAuditLogsSuspenseQuery>;
export type GetAuditLogsQueryResult = Apollo.QueryResult<GetAuditLogsQuery, GetAuditLogsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    email
    username
    isOAuth
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const BookDocument = gql`
    query Book($where: BookWhereUniqueInput!) {
  book(where: $where) {
    id
    title
    authors
    covers {
      url
      size
    }
    description
    publishedDate
    publisher
    pageCount
    categories
    averageRating
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables> & ({ variables: BookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export function useBookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookSuspenseQueryHookResult = ReturnType<typeof useBookSuspenseQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const GetGoogleBookDocument = gql`
    query GetGoogleBook($id: String!) {
  getGoogleBook(id: $id) {
    id
    title
    authors
    covers {
      url
      size
    }
    description
    publishedDate
    publisher
    pageCount
    categories
    averageRating
  }
}
    `;

/**
 * __useGetGoogleBookQuery__
 *
 * To run a query within a React component, call `useGetGoogleBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoogleBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoogleBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGoogleBookQuery(baseOptions: Apollo.QueryHookOptions<GetGoogleBookQuery, GetGoogleBookQueryVariables> & ({ variables: GetGoogleBookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoogleBookQuery, GetGoogleBookQueryVariables>(GetGoogleBookDocument, options);
      }
export function useGetGoogleBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoogleBookQuery, GetGoogleBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoogleBookQuery, GetGoogleBookQueryVariables>(GetGoogleBookDocument, options);
        }
export function useGetGoogleBookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGoogleBookQuery, GetGoogleBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGoogleBookQuery, GetGoogleBookQueryVariables>(GetGoogleBookDocument, options);
        }
export type GetGoogleBookQueryHookResult = ReturnType<typeof useGetGoogleBookQuery>;
export type GetGoogleBookLazyQueryHookResult = ReturnType<typeof useGetGoogleBookLazyQuery>;
export type GetGoogleBookSuspenseQueryHookResult = ReturnType<typeof useGetGoogleBookSuspenseQuery>;
export type GetGoogleBookQueryResult = Apollo.QueryResult<GetGoogleBookQuery, GetGoogleBookQueryVariables>;
export const CommentsDocument = gql`
    query Comments($where: ReviewWhereUniqueInput!, $limit: Int! = 20, $offset: Int! = 0) {
  comments(where: $where, offset: $offset, limit: $limit) {
    id
    content
    createdAt
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables> & ({ variables: CommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export function useCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsSuspenseQueryHookResult = ReturnType<typeof useCommentsSuspenseQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const CountJournalEntriesDocument = gql`
    query countJournalEntries($book: BookWhereUniqueInput!) {
  countJournalEntries(book: $book)
}
    `;

/**
 * __useCountJournalEntriesQuery__
 *
 * To run a query within a React component, call `useCountJournalEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountJournalEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountJournalEntriesQuery({
 *   variables: {
 *      book: // value for 'book'
 *   },
 * });
 */
export function useCountJournalEntriesQuery(baseOptions: Apollo.QueryHookOptions<CountJournalEntriesQuery, CountJournalEntriesQueryVariables> & ({ variables: CountJournalEntriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>(CountJournalEntriesDocument, options);
      }
export function useCountJournalEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>(CountJournalEntriesDocument, options);
        }
export function useCountJournalEntriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>(CountJournalEntriesDocument, options);
        }
export type CountJournalEntriesQueryHookResult = ReturnType<typeof useCountJournalEntriesQuery>;
export type CountJournalEntriesLazyQueryHookResult = ReturnType<typeof useCountJournalEntriesLazyQuery>;
export type CountJournalEntriesSuspenseQueryHookResult = ReturnType<typeof useCountJournalEntriesSuspenseQuery>;
export type CountJournalEntriesQueryResult = Apollo.QueryResult<CountJournalEntriesQuery, CountJournalEntriesQueryVariables>;
export const GetMostRecentJournalEntryDocument = gql`
    query getMostRecentJournalEntry($book: BookWhereUniqueInput!) {
  getMostRecentJournalEntry(book: $book) {
    id
    readingNotes
    dateRead
    currentPage
    currentPercent
  }
}
    `;

/**
 * __useGetMostRecentJournalEntryQuery__
 *
 * To run a query within a React component, call `useGetMostRecentJournalEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMostRecentJournalEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMostRecentJournalEntryQuery({
 *   variables: {
 *      book: // value for 'book'
 *   },
 * });
 */
export function useGetMostRecentJournalEntryQuery(baseOptions: Apollo.QueryHookOptions<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables> & ({ variables: GetMostRecentJournalEntryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>(GetMostRecentJournalEntryDocument, options);
      }
export function useGetMostRecentJournalEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>(GetMostRecentJournalEntryDocument, options);
        }
export function useGetMostRecentJournalEntrySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>(GetMostRecentJournalEntryDocument, options);
        }
export type GetMostRecentJournalEntryQueryHookResult = ReturnType<typeof useGetMostRecentJournalEntryQuery>;
export type GetMostRecentJournalEntryLazyQueryHookResult = ReturnType<typeof useGetMostRecentJournalEntryLazyQuery>;
export type GetMostRecentJournalEntrySuspenseQueryHookResult = ReturnType<typeof useGetMostRecentJournalEntrySuspenseQuery>;
export type GetMostRecentJournalEntryQueryResult = Apollo.QueryResult<GetMostRecentJournalEntryQuery, GetMostRecentJournalEntryQueryVariables>;
export const JournalEntriesDocument = gql`
    query JournalEntries($book: BookWhereUniqueInput, $limit: Int! = 20, $offset: Int! = 0) {
  journalEntries(book: $book, offset: $offset, limit: $limit) {
    id
    readingNotes
    dateRead
    currentPage
    pagesRead
    currentPercent
    userBook {
      status
      book {
        id
        title
        authors
        pageCount
        covers {
          url
          size
        }
      }
      shelves {
        shelf {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useJournalEntriesQuery__
 *
 * To run a query within a React component, call `useJournalEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useJournalEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJournalEntriesQuery({
 *   variables: {
 *      book: // value for 'book'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useJournalEntriesQuery(baseOptions?: Apollo.QueryHookOptions<JournalEntriesQuery, JournalEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JournalEntriesQuery, JournalEntriesQueryVariables>(JournalEntriesDocument, options);
      }
export function useJournalEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JournalEntriesQuery, JournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JournalEntriesQuery, JournalEntriesQueryVariables>(JournalEntriesDocument, options);
        }
export function useJournalEntriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<JournalEntriesQuery, JournalEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JournalEntriesQuery, JournalEntriesQueryVariables>(JournalEntriesDocument, options);
        }
export type JournalEntriesQueryHookResult = ReturnType<typeof useJournalEntriesQuery>;
export type JournalEntriesLazyQueryHookResult = ReturnType<typeof useJournalEntriesLazyQuery>;
export type JournalEntriesSuspenseQueryHookResult = ReturnType<typeof useJournalEntriesSuspenseQuery>;
export type JournalEntriesQueryResult = Apollo.QueryResult<JournalEntriesQuery, JournalEntriesQueryVariables>;
export const BookReviewsDocument = gql`
    query BookReviews($where: BookWhereUniqueInput!, $limit: Int! = 20, $offset: Int! = 0) {
  bookReviews(where: $where, offset: $offset, limit: $limit) {
    id
    content
    createdAt
    spoilers
    likeCount
    liked
    user {
      id
      username
    }
    commentCount
  }
}
    `;

/**
 * __useBookReviewsQuery__
 *
 * To run a query within a React component, call `useBookReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookReviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBookReviewsQuery(baseOptions: Apollo.QueryHookOptions<BookReviewsQuery, BookReviewsQueryVariables> & ({ variables: BookReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookReviewsQuery, BookReviewsQueryVariables>(BookReviewsDocument, options);
      }
export function useBookReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookReviewsQuery, BookReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookReviewsQuery, BookReviewsQueryVariables>(BookReviewsDocument, options);
        }
export function useBookReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BookReviewsQuery, BookReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookReviewsQuery, BookReviewsQueryVariables>(BookReviewsDocument, options);
        }
export type BookReviewsQueryHookResult = ReturnType<typeof useBookReviewsQuery>;
export type BookReviewsLazyQueryHookResult = ReturnType<typeof useBookReviewsLazyQuery>;
export type BookReviewsSuspenseQueryHookResult = ReturnType<typeof useBookReviewsSuspenseQuery>;
export type BookReviewsQueryResult = Apollo.QueryResult<BookReviewsQuery, BookReviewsQueryVariables>;
export const BookReviewDocument = gql`
    query BookReview($where: ReviewUniqueInput!) {
  bookReview(where: $where) {
    id
    content
    createdAt
    spoilers
    likeCount
    liked
    book {
      id
      title
      authors
      pageCount
      covers {
        url
        size
      }
      publishedDate
    }
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useBookReviewQuery__
 *
 * To run a query within a React component, call `useBookReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookReviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBookReviewQuery(baseOptions: Apollo.QueryHookOptions<BookReviewQuery, BookReviewQueryVariables> & ({ variables: BookReviewQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookReviewQuery, BookReviewQueryVariables>(BookReviewDocument, options);
      }
export function useBookReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookReviewQuery, BookReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookReviewQuery, BookReviewQueryVariables>(BookReviewDocument, options);
        }
export function useBookReviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BookReviewQuery, BookReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookReviewQuery, BookReviewQueryVariables>(BookReviewDocument, options);
        }
export type BookReviewQueryHookResult = ReturnType<typeof useBookReviewQuery>;
export type BookReviewLazyQueryHookResult = ReturnType<typeof useBookReviewLazyQuery>;
export type BookReviewSuspenseQueryHookResult = ReturnType<typeof useBookReviewSuspenseQuery>;
export type BookReviewQueryResult = Apollo.QueryResult<BookReviewQuery, BookReviewQueryVariables>;
export const ShelvesDocument = gql`
    query Shelves {
  shelves {
    id
    name
    _count {
      userBooks
    }
    userId
  }
}
    `;

/**
 * __useShelvesQuery__
 *
 * To run a query within a React component, call `useShelvesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShelvesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShelvesQuery({
 *   variables: {
 *   },
 * });
 */
export function useShelvesQuery(baseOptions?: Apollo.QueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShelvesQuery, ShelvesQueryVariables>(ShelvesDocument, options);
      }
export function useShelvesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShelvesQuery, ShelvesQueryVariables>(ShelvesDocument, options);
        }
export function useShelvesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShelvesQuery, ShelvesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShelvesQuery, ShelvesQueryVariables>(ShelvesDocument, options);
        }
export type ShelvesQueryHookResult = ReturnType<typeof useShelvesQuery>;
export type ShelvesLazyQueryHookResult = ReturnType<typeof useShelvesLazyQuery>;
export type ShelvesSuspenseQueryHookResult = ReturnType<typeof useShelvesSuspenseQuery>;
export type ShelvesQueryResult = Apollo.QueryResult<ShelvesQuery, ShelvesQueryVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    username
    email
    bio
    location
    name
    dob
    isFollowing
    followerCount
    followingCount
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserBookDocument = gql`
    query UserBook($where: BookWhereUniqueInput!) {
  userBook(where: $where) {
    userId
    bookId
    status
    rating
    book {
      id
      title
      authors
      pageCount
      covers {
        url
        size
      }
    }
    shelves {
      shelf {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useUserBookQuery__
 *
 * To run a query within a React component, call `useUserBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBookQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserBookQuery(baseOptions: Apollo.QueryHookOptions<UserBookQuery, UserBookQueryVariables> & ({ variables: UserBookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
      }
export function useUserBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
        }
export function useUserBookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserBookQuery, UserBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserBookQuery, UserBookQueryVariables>(UserBookDocument, options);
        }
export type UserBookQueryHookResult = ReturnType<typeof useUserBookQuery>;
export type UserBookLazyQueryHookResult = ReturnType<typeof useUserBookLazyQuery>;
export type UserBookSuspenseQueryHookResult = ReturnType<typeof useUserBookSuspenseQuery>;
export type UserBookQueryResult = Apollo.QueryResult<UserBookQuery, UserBookQueryVariables>;
export const GetUserBooksDocument = gql`
    query GetUserBooks($where: UserBookWhereInput, $limit: Int! = 100, $offset: Int! = 0, $orderBy: UserBookOrderByWithRelationInput) {
  getUserBooks(where: $where, offset: $offset, limit: $limit, orderBy: $orderBy) {
    userBooks {
      id
      userId
      bookId
      status
      rating
      createdAt
      updatedAt
      order
      book {
        id
        title
        authors
        pageCount
        covers {
          url
          size
        }
        _count {
          userBook
          reviews
        }
      }
      shelves {
        shelf {
          id
          name
        }
      }
      _count {
        shelves
        journalEntry
      }
      journalEntry {
        id
        readingNotes
        dateRead
        currentPage
        currentPercent
      }
    }
    hasMore
    totalBooks
  }
}
    `;

/**
 * __useGetUserBooksQuery__
 *
 * To run a query within a React component, call `useGetUserBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBooksQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetUserBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBooksQuery, GetUserBooksQueryVariables>(GetUserBooksDocument, options);
      }
export function useGetUserBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBooksQuery, GetUserBooksQueryVariables>(GetUserBooksDocument, options);
        }
export function useGetUserBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserBooksQuery, GetUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserBooksQuery, GetUserBooksQueryVariables>(GetUserBooksDocument, options);
        }
export type GetUserBooksQueryHookResult = ReturnType<typeof useGetUserBooksQuery>;
export type GetUserBooksLazyQueryHookResult = ReturnType<typeof useGetUserBooksLazyQuery>;
export type GetUserBooksSuspenseQueryHookResult = ReturnType<typeof useGetUserBooksSuspenseQuery>;
export type GetUserBooksQueryResult = Apollo.QueryResult<GetUserBooksQuery, GetUserBooksQueryVariables>;
export const CountUserBooksDocument = gql`
    query CountUserBooks($where: UserBookWhereInput) {
  countUserBooks(where: $where)
}
    `;

/**
 * __useCountUserBooksQuery__
 *
 * To run a query within a React component, call `useCountUserBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountUserBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountUserBooksQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCountUserBooksQuery(baseOptions?: Apollo.QueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountUserBooksQuery, CountUserBooksQueryVariables>(CountUserBooksDocument, options);
      }
export function useCountUserBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountUserBooksQuery, CountUserBooksQueryVariables>(CountUserBooksDocument, options);
        }
export function useCountUserBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountUserBooksQuery, CountUserBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountUserBooksQuery, CountUserBooksQueryVariables>(CountUserBooksDocument, options);
        }
export type CountUserBooksQueryHookResult = ReturnType<typeof useCountUserBooksQuery>;
export type CountUserBooksLazyQueryHookResult = ReturnType<typeof useCountUserBooksLazyQuery>;
export type CountUserBooksSuspenseQueryHookResult = ReturnType<typeof useCountUserBooksSuspenseQuery>;
export type CountUserBooksQueryResult = Apollo.QueryResult<CountUserBooksQuery, CountUserBooksQueryVariables>;