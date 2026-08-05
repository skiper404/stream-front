/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BioInput = {
  bio: string;
};

export type ChangeChatSettingsInput = {
  chatMode: string;
};

export type ChangeEmailInput = {
  email: string;
};

export type ChangePasswordInput = {
  newPassword: string;
  oldPassword: string;
};

export type ChangeStreamInfoInput = {
  categoryId: string;
  title: string;
};

export type CreatePlanInput = {
  description?: string | null | undefined;
  price: number;
  title: string;
};

export type CreateUserInput = {
  email: string;
  password: string;
  username: string;
};

export type DeleteAccountInput = {
  password: string;
};

export type FiltersInput = {
  searchTerm?: string | null | undefined;
  skip?: number | null | undefined;
  take?: number | null | undefined;
};

export type GenerateStreamTokenInput = {
  channelId: string;
};

export type LoginUserInput = {
  login: string;
  password: string;
};

export type NewPasswordInput = {
  password: string;
  passwordRepeat: string;
  token: string;
};

export type NotificationType =
  | 'NEW_FOLLOWER'
  | 'NEW_SPONSORSHIP'
  | 'STREAM_START'
  | 'VERIFIED_CHANNEL';

export type ResetPasswordInput = {
  email: string;
};

export type SendMessageInput = {
  streamId: string;
  text: string;
};

export type SocialLinkInput = {
  title: string;
  url: string;
};

export type TransactionStatus =
  | 'EXPIRED'
  | 'FAILED'
  | 'SUCCESS';

export type UsernameInput = {
  username: string;
};

export type VerificationInput = {
  token: string;
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type DeleteAccountMutationVariables = Exact<{
  data: DeleteAccountInput;
}>;


export type DeleteAccountMutation = { deleteAccount: boolean };

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginUserMutation = { loginUser: { id: string, email: string, username: string } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };

export type NewPasswordMutationVariables = Exact<{
  data: NewPasswordInput;
}>;


export type NewPasswordMutation = { newPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type VerifyAccountMutationVariables = Exact<{
  data: VerificationInput;
}>;


export type VerifyAccountMutation = { verifyAccount: boolean };

export type ChangeChatSettingsMutationVariables = Exact<{
  data: ChangeChatSettingsInput;
}>;


export type ChangeChatSettingsMutation = { changeChatSettings: boolean };

export type SendChatMessageMutationVariables = Exact<{
  data: SendMessageInput;
}>;


export type SendChatMessageMutation = { sendChatMessage: { id: string, text: string } };

export type FollowChannelMutationVariables = Exact<{
  channelId: string;
}>;


export type FollowChannelMutation = { followChannel: boolean };

export type UnfollowChannelMutationVariables = Exact<{
  channelId: string;
}>;


export type UnfollowChannelMutation = { unfollowChannel: boolean };

export type ChangeNotificationSettingsMutationVariables = Exact<{
  isEnable: boolean;
}>;


export type ChangeNotificationSettingsMutation = { changeNotificationSettings: boolean };

export type MarkNotificationsAsReadMutationVariables = Exact<{ [key: string]: never; }>;


export type MarkNotificationsAsReadMutation = { markNotificationsAsRead: boolean };

export type RemoveNotificationMutationVariables = Exact<{
  id: string;
}>;


export type RemoveNotificationMutation = { removeNotification: boolean };

export type CreateSponsorshipPlanMutationVariables = Exact<{
  data: CreatePlanInput;
}>;


export type CreateSponsorshipPlanMutation = { createSponsorshipPlan: boolean };

export type RemoveSponsorshipPlanMutationVariables = Exact<{
  planId: string;
}>;


export type RemoveSponsorshipPlanMutation = { removeSponsorshipPlan: boolean };

export type ChangeStreamInfoMutationVariables = Exact<{
  data: ChangeStreamInfoInput;
}>;


export type ChangeStreamInfoMutation = { changeStreamInfo: boolean };

export type ChangeStreamThumbnailMutationVariables = Exact<{
  thumbnail: unknown;
}>;


export type ChangeStreamThumbnailMutation = { changeStreamThumbnail: boolean };

export type CreateIngressMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateIngressMutation = { createIngress: { serverUrl: string | null, streamKey: string | null } };

export type GenerateStreamTokenMutationVariables = Exact<{
  data: GenerateStreamTokenInput;
}>;


export type GenerateStreamTokenMutation = { generateStreamToken: { token: string } };

export type RemoveStreamThumbnailMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveStreamThumbnailMutation = { removeStreamThumbnail: boolean };

export type ChangeEmailMutationVariables = Exact<{
  data: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { changeEmail: boolean };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { changePassword: boolean };

export type ChangeProfileAvatarMutationVariables = Exact<{
  avatar: unknown;
}>;


export type ChangeProfileAvatarMutation = { changeProfileAvatar: boolean };

export type ChangeProfileBioMutationVariables = Exact<{
  data: BioInput;
}>;


export type ChangeProfileBioMutation = { changeProfileBio: boolean };

export type ChangeProfileUsernameMutationVariables = Exact<{
  data: UsernameInput;
}>;


export type ChangeProfileUsernameMutation = { changeProfileUsername: boolean };

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { clearSessionCookie: boolean };

export type CreateSocialLinkMutationVariables = Exact<{
  data: SocialLinkInput;
}>;


export type CreateSocialLinkMutation = { createSocialLink: boolean };

export type RemoveProfileAvatarMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveProfileAvatarMutation = { removeProfileAvatar: boolean };

export type RemoveSessionMutationVariables = Exact<{
  id: string;
}>;


export type RemoveSessionMutation = { removeSession: boolean };

export type RemoveSocialLinkMutationVariables = Exact<{
  id: string;
}>;


export type RemoveSocialLinkMutation = { removeSocialLink: boolean };

export type FindAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoriesQuery = { findAllCategories: Array<{ id: string, title: string, slug: string, description: string, thumbnailUrl: string }> };

export type FindCategoryBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type FindCategoryBySlugQuery = { findCategoryBySlug: { id: string, title: string, slug: string, thumbnailUrl: string, description: string, streams: Array<{ id: string, title: string, thumbnailUrl: string | null, isLive: boolean, chatMode: string, user: { username: string, avatar: string | null, isVerified: boolean }, category: { id: string, title: string, slug: string } | null }> } };

export type FindRandomCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomCategoriesQuery = { findRandomCategories: Array<{ id: string, title: string, slug: string, description: string, thumbnailUrl: string }> };

export type FindChannelByUsernameQueryVariables = Exact<{
  username: string;
}>;


export type FindChannelByUsernameQuery = { findChannelByUsername: { id: string, username: string, email: string, password: string, avatar: string | null, bio: string | null, isNotificationsEnabled: boolean, isVerified: boolean, isEmailVerified: boolean, createdAt: unknown, updatedAt: unknown, sponsorshipPlans: Array<{ id: string, title: string, description: string | null, price: number }>, followings: Array<{ id: string }>, socialLinks: Array<{ id: string, title: string, url: string }>, stream: { id: string, title: string, thumbnailUrl: string | null, isLive: boolean, chatMode: string, category: { id: string, title: string, slug: string, description: string } | null } | null } };

export type FindFollowersCountByChannelQueryVariables = Exact<{
  channelId: string;
}>;


export type FindFollowersCountByChannelQuery = { findFollowersCountByChannel: number };

export type FindRecommendedChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRecommendedChannelsQuery = { findRecommendedChannels: Array<{ id: string, username: string, avatar: string | null, isVerified: boolean, stream: { isLive: boolean } | null }> };

export type FindSponsorsByChannelQueryVariables = Exact<{
  channelId: string;
}>;


export type FindSponsorsByChannelQuery = { findSponsorsByChannel: Array<{ user: { id: string, username: string, avatar: string | null } }> };

export type FindChatMessagesByStreamQueryVariables = Exact<{
  streamId: string;
}>;


export type FindChatMessagesByStreamQuery = { findChatMessagesByStream: Array<{ id: string, text: string, createdAt: unknown, user: { id: string, username: string } }> };

export type FindMyFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyFollowersQuery = { findMyFollowers: Array<{ follower: { id: string, username: string, avatar: string | null, createdAt: unknown } }> };

export type FindMyFollowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyFollowingsQuery = { findMyFollowings: Array<{ following: { id: string, username: string, email: string, avatar: string | null } | null }> };

export type FindNotificationsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindNotificationsByUserQuery = { findNotificationsByUser: Array<{ id: string, payload: unknown, isRead: boolean, type: NotificationType }> };

export type FindUnreadNotificationsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUnreadNotificationsCountQuery = { findUnreadNotificationsCount: number };

export type FindMySponsorshipPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMySponsorshipPlansQuery = { findManySponsorshipPlans: Array<{ id: string, createdAt: unknown, title: string, price: number }> };

export type FindMySponsorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMySponsorsQuery = { findMySponsors: Array<{ expiresAt: unknown, user: { id: string, username: string, avatar: string | null, isVerified: boolean }, plan: { title: string } }> };

export type MakePaymentMutationVariables = Exact<{
  planId: string;
}>;


export type MakePaymentMutation = { makePayment: { url: string } };

export type FindMyTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyTransactionsQuery = { findMyTransactions: Array<{ createdAt: unknown, status: TransactionStatus, amount: number }> };

export type GetAllStreamsQueryVariables = Exact<{
  filters: FiltersInput;
}>;


export type GetAllStreamsQuery = { getAllStreams: Array<{ id: string, title: string, thumbnailUrl: string | null, isLive: boolean, chatMode: string, user: { username: string, avatar: string | null, isVerified: boolean }, category: { id: string, title: string, slug: string } | null }> };

export type FindRandomStreamsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomStreamsQuery = { findRandomStreams: Array<{ id: string, title: string, thumbnailUrl: string | null, isLive: boolean, chatMode: string, user: { username: string, avatar: string | null, isVerified: boolean }, category: { id: string, title: string, slug: string } | null }> };

export type GetCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentSessionQuery = { getCurrentSession: { id: string, userId: string, metadata: { ip: string, location: { country: string, city: string }, device: { browser: string, os: string } } } | null };

export type GetSocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialLinksQuery = { getSocialLinks: Array<{ id: string, title: string, url: string }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { getUser: { id: string, username: string, email: string, password: string, avatar: string | null, bio: string | null, isVerified: boolean, isEmailVerified: boolean, isNotificationsEnabled: boolean, createdAt: unknown, updatedAt: unknown, socialLinks: Array<{ id: string, title: string, url: string }>, stream: { id: string, serverUrl: string | null, streamKey: string | null, chatMode: string } | null, notifications: Array<{ id: string, payload: unknown, isRead: boolean, type: NotificationType }> | null } };

export type GetUserSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSessionsQuery = { getUserSessions: Array<{ id: string, userId: string, metadata: { ip: string, location: { country: string, city: string }, device: { browser: string, os: string } } }> };

export type ChatMessageAddedSubscriptionVariables = Exact<{
  streamId: string;
}>;


export type ChatMessageAddedSubscription = { chatMessageAdded: { id: string, text: string, createdAt: unknown, user: { id: string, username: string, avatar: string | null } } };

export type NotificationAddedSubscriptionVariables = Exact<{
  userId: string;
}>;


export type NotificationAddedSubscription = { notificationAdded: { id: string, type: NotificationType, payload: unknown, isRead: boolean, createdAt: unknown } };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const NewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerificationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const ChangeChatSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeChatSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeChatSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeChatSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeChatSettingsMutation, ChangeChatSettingsMutationVariables>;
export const SendChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<SendChatMessageMutation, SendChatMessageMutationVariables>;
export const FollowChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}]}}]} as unknown as DocumentNode<FollowChannelMutation, FollowChannelMutationVariables>;
export const UnfollowChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfollowChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfollowChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}]}}]} as unknown as DocumentNode<UnfollowChannelMutation, UnfollowChannelMutationVariables>;
export const ChangeNotificationSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeNotificationSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isEnable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeNotificationSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"isEnable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isEnable"}}}]}]}}]} as unknown as DocumentNode<ChangeNotificationSettingsMutation, ChangeNotificationSettingsMutationVariables>;
export const MarkNotificationsAsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MarkNotificationsAsRead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markNotificationsAsRead"}}]}}]} as unknown as DocumentNode<MarkNotificationsAsReadMutation, MarkNotificationsAsReadMutationVariables>;
export const RemoveNotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveNotification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeNotification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveNotificationMutation, RemoveNotificationMutationVariables>;
export const CreateSponsorshipPlanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSponsorshipPlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSponsorshipPlan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateSponsorshipPlanMutation, CreateSponsorshipPlanMutationVariables>;
export const RemoveSponsorshipPlanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSponsorshipPlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"planId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSponsorshipPlan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"planId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"planId"}}}]}]}}]} as unknown as DocumentNode<RemoveSponsorshipPlanMutation, RemoveSponsorshipPlanMutationVariables>;
export const ChangeStreamInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeStreamInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeStreamInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeStreamInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>;
export const ChangeStreamThumbnailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeStreamThumbnail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thumbnail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeStreamThumbnail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"thumbnail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thumbnail"}}}]}]}}]} as unknown as DocumentNode<ChangeStreamThumbnailMutation, ChangeStreamThumbnailMutationVariables>;
export const CreateIngressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateIngress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIngress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"streamKey"}}]}}]}}]} as unknown as DocumentNode<CreateIngressMutation, CreateIngressMutationVariables>;
export const GenerateStreamTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateStreamToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenerateStreamTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateStreamToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>;
export const RemoveStreamThumbnailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveStreamThumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeStreamThumbnail"}}]}}]} as unknown as DocumentNode<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>;
export const ChangeEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfileAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeProfileAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeProfileAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}}]}]}}]} as unknown as DocumentNode<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const ChangeProfileBioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeProfileBio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BioInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeProfileBio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeProfileBioMutation, ChangeProfileBioMutationVariables>;
export const ChangeProfileUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeProfileUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsernameInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeProfileUsername"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeProfileUsernameMutation, ChangeProfileUsernameMutationVariables>;
export const ClearSessionCookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearSessionCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearSessionCookie"}}]}}]} as unknown as DocumentNode<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const CreateSocialLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSocialLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSocialLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;
export const RemoveProfileAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProfileAvatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProfileAvatar"}}]}}]} as unknown as DocumentNode<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;
export const RemoveSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const RemoveSocialLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSocialLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSocialLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;
export const FindAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindCategoryBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindCategoryBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCategoryBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"streams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"chatMode"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>;
export const FindRandomCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRandomCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRandomCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>;
export const FindChannelByUsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindChannelByUsername"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findChannelByUsername"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"isNotificationsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"sponsorshipPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stream"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"chatMode"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>;
export const FindFollowersCountByChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindFollowersCountByChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findFollowersCountByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}]}}]} as unknown as DocumentNode<FindFollowersCountByChannelQuery, FindFollowersCountByChannelQueryVariables>;
export const FindRecommendedChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRecommendedChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRecommendedChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"stream"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLive"}}]}}]}}]}}]} as unknown as DocumentNode<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>;
export const FindSponsorsByChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindSponsorsByChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findSponsorsByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>;
export const FindChatMessagesByStreamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindChatMessagesByStream"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findChatMessagesByStream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"streamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>;
export const FindMyFollowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindMyFollowers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyFollowers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"follower"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyFollowersQuery, FindMyFollowersQueryVariables>;
export const FindMyFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindMyFollowings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyFollowings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>;
export const FindNotificationsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindNotificationsByUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findNotificationsByUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>;
export const FindUnreadNotificationsCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUnreadNotificationsCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUnreadNotificationsCount"}}]}}]} as unknown as DocumentNode<FindUnreadNotificationsCountQuery, FindUnreadNotificationsCountQueryVariables>;
export const FindMySponsorshipPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindMySponsorshipPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManySponsorshipPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<FindMySponsorshipPlansQuery, FindMySponsorshipPlansQueryVariables>;
export const FindMySponsorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindMySponsors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMySponsors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"plan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<FindMySponsorsQuery, FindMySponsorsQueryVariables>;
export const MakePaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MakePayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"planId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"makePayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"planId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"planId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<MakePaymentMutation, MakePaymentMutationVariables>;
export const FindMyTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindMyTransactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findMyTransactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]} as unknown as DocumentNode<FindMyTransactionsQuery, FindMyTransactionsQueryVariables>;
export const GetAllStreamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllStreams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FiltersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllStreams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"chatMode"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllStreamsQuery, GetAllStreamsQueryVariables>;
export const FindRandomStreamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRandomStreams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRandomStreams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chatMode"}}]}}]}}]} as unknown as DocumentNode<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>;
export const GetCurrentSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"os"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>;
export const GetSocialLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSocialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSocialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetSocialLinksQuery, GetSocialLinksQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isNotificationsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stream"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"streamKey"}},{"kind":"Field","name":{"kind":"Name","value":"chatMode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"os"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserSessionsQuery, GetUserSessionsQueryVariables>;
export const ChatMessageAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ChatMessageAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessageAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"streamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ChatMessageAddedSubscription, ChatMessageAddedSubscriptionVariables>;
export const NotificationAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NotificationAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notificationAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<NotificationAddedSubscription, NotificationAddedSubscriptionVariables>;