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
  isChatEnabled: boolean;
  isChatFollowersOnly: boolean;
  isChatPremiumFollowersOnly: boolean;
};

export type ChangeEmailInput = {
  email: string;
};

export type ChangePasswordInput = {
  newPassword: string;
  oldPassword: string;
};

export type CreateUserInput = {
  email: string;
  password: string;
  username: string;
};

export type EnableTotpInput = {
  pin: string;
  secret: string;
};

export type FiltersInput = {
  searchTerm?: string | null | undefined;
  skip?: number | null | undefined;
  take?: number | null | undefined;
};

export type GenerateStreamTokenInput = {
  channelId: string;
  userId: string;
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

export type VerificationInput = {
  token: string;
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type LoginUserMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginUserMutation = { loginUser: boolean };

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

export type CreateIngressMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateIngressMutation = { createIngress: boolean };

export type GenerateStreamTokenMutationVariables = Exact<{
  data: GenerateStreamTokenInput;
}>;


export type GenerateStreamTokenMutation = { generateStreamToken: { token: string } };

export type RemoveIngressesMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveIngressesMutation = { removeIngresses: boolean };

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

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { clearSessionCookie: boolean };

export type CreateSocialLinkMutationVariables = Exact<{
  data: SocialLinkInput;
}>;


export type CreateSocialLinkMutation = { createSocialLink: boolean };

export type DisableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTotpMutation = { disableTotp: boolean };

export type EnableTotpMutationVariables = Exact<{
  data: EnableTotpInput;
}>;


export type EnableTotpMutation = { enableTotp: boolean };

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


export type FindCategoryBySlugQuery = { findCategoryBySlug: { id: string, title: string, slug: string, description: string, thumbnailUrl: string } };

export type FindRandomCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomCategoriesQuery = { findRandomCategories: Array<{ id: string, title: string, slug: string, description: string, thumbnailUrl: string }> };

export type FindChatMessagesByStreamQueryVariables = Exact<{ [key: string]: never; }>;


export type FindChatMessagesByStreamQuery = { findChatMessagesByStream: Array<{ id: string, text: string }> };

export type GetAllMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMessagesQuery = { getAllMessages: Array<{ id: string, text: string }> };

export type GetAllStreamsQueryVariables = Exact<{
  filters: FiltersInput;
}>;


export type GetAllStreamsQuery = { getAllStreams: Array<{ id: string, title: string, thumbnailUrl: string | null, ingressId: string | null, serverUrl: string | null, streamKey: string | null, isLive: boolean, user: { username: string, avatar: string | null, isVerified: boolean } }> };

export type GetIngressesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIngressesQuery = { getIngresses: Array<{ ingressId: string | null, serverUrl: string | null, streamKey: string | null }> };

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { getRooms: Array<{ name: string }> };

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { generateTotpSecret: { qrcodeUrl: string, secret: string } };

export type GetCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentSessionQuery = { getCurrentSession: { id: string, userId: string, metadata: { ip: string, location: { country: string, city: string }, device: { browser: string, os: string } } } };

export type GetSocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialLinksQuery = { getSocialLinks: Array<{ id: string, title: string, url: string }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { getUser: { id: string, username: string, email: string, password: string, avatar: string | null, bio: string | null, isVerified: boolean, isEmailVerified: boolean, isTotpEnabled: boolean, totpSecret: string | null, deactivatedAt: unknown, isDeactivated: boolean, createdAt: unknown, updatedAt: unknown } };

export type GetUserSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSessionsQuery = { getUserSessions: Array<{ id: string, userId: string, metadata: { ip: string, location: { country: string, city: string }, device: { browser: string, os: string } } }> };

export type ChatMessageAddedSubscriptionVariables = Exact<{
  streamId: string;
}>;


export type ChatMessageAddedSubscription = { chatMessageAdded: { id: string, text: string } };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const NewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerificationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const ChangeChatSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeChatSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeChatSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeChatSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeChatSettingsMutation, ChangeChatSettingsMutationVariables>;
export const SendChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<SendChatMessageMutation, SendChatMessageMutationVariables>;
export const CreateIngressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateIngress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIngress"}}]}}]} as unknown as DocumentNode<CreateIngressMutation, CreateIngressMutationVariables>;
export const GenerateStreamTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateStreamToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenerateStreamTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateStreamToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>;
export const RemoveIngressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveIngresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeIngresses"}}]}}]} as unknown as DocumentNode<RemoveIngressesMutation, RemoveIngressesMutationVariables>;
export const ChangeEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfileAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeProfileAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeProfileAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}}]}]}}]} as unknown as DocumentNode<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const ChangeProfileBioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeProfileBio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BioInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeProfileBio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeProfileBioMutation, ChangeProfileBioMutationVariables>;
export const ClearSessionCookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearSessionCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearSessionCookie"}}]}}]} as unknown as DocumentNode<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const CreateSocialLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSocialLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSocialLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;
export const DisableTotpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"disableTotp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableTotp"}}]}}]} as unknown as DocumentNode<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EnableTotp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnableTotpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enableTotp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<EnableTotpMutation, EnableTotpMutationVariables>;
export const RemoveProfileAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProfileAvatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProfileAvatar"}}]}}]} as unknown as DocumentNode<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;
export const RemoveSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const RemoveSocialLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSocialLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSocialLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;
export const FindAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindCategoryBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindCategoryBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCategoryBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>;
export const FindRandomCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRandomCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRandomCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>;
export const FindChatMessagesByStreamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindChatMessagesByStream"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findChatMessagesByStream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"streamId"},"value":{"kind":"StringValue","value":"123","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>;
export const GetAllMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetAllMessagesQuery, GetAllMessagesQueryVariables>;
export const GetAllStreamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllStreams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FiltersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllStreams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ingressId"}},{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"streamKey"}},{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllStreamsQuery, GetAllStreamsQueryVariables>;
export const GetIngressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIngresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIngresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ingressId"}},{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"streamKey"}}]}}]}}]} as unknown as DocumentNode<GetIngressesQuery, GetIngressesQueryVariables>;
export const GetRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetRoomsQuery, GetRoomsQueryVariables>;
export const GenerateTotpSecretDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GenerateTotpSecret"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateTotpSecret"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"qrcodeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}}]}}]}}]} as unknown as DocumentNode<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;
export const GetCurrentSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"os"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>;
export const GetSocialLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSocialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSocialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetSocialLinksQuery, GetSocialLinksQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isTotpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"totpSecret"}},{"kind":"Field","name":{"kind":"Name","value":"deactivatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isDeactivated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"os"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserSessionsQuery, GetUserSessionsQueryVariables>;
export const ChatMessageAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ChatMessageAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"streamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessageAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"streamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"streamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<ChatMessageAddedSubscription, ChatMessageAddedSubscriptionVariables>;