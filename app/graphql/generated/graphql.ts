/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { clearSessionCookie: boolean };

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

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { generateTotpSecret: { qrcodeUrl: string, secret: string } };

export type GetCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentSessionQuery = { getCurrentSession: { id: string, userId: string, metadata: { ip: string, location: { country: string, city: string }, device: { browser: string, os: string } } } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { getMe: { id: string, username: string, email: string, password: string, avatar: string | null, bio: string | null, isVerified: boolean, isEmailVerified: boolean, isTotpEnabled: boolean, totpSecret: string | null, deactivatedAt: unknown, isDeactivated: boolean, createdAt: unknown, updatedAt: unknown } };

export type GetUserSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserSessionsQuery = { getUserSessions: Array<{ id: string, userId: string, metadata: { ip: string, location: { country: string, city: string }, device: { browser: string, os: string } } }> };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const NewPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NewPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerificationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const ChangeEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfileAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeProfileAvatar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeProfileAvatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}}]}]}}]} as unknown as DocumentNode<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const ClearSessionCookieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearSessionCookie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearSessionCookie"}}]}}]} as unknown as DocumentNode<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const DisableTotpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"disableTotp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableTotp"}}]}}]} as unknown as DocumentNode<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EnableTotp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnableTotpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enableTotp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<EnableTotpMutation, EnableTotpMutationVariables>;
export const RemoveProfileAvatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveProfileAvatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProfileAvatar"}}]}}]} as unknown as DocumentNode<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;
export const RemoveSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const GenerateTotpSecretDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GenerateTotpSecret"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateTotpSecret"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"qrcodeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"secret"}}]}}]}}]} as unknown as DocumentNode<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;
export const GetCurrentSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"os"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"isTotpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"totpSecret"}},{"kind":"Field","name":{"kind":"Name","value":"deactivatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"isDeactivated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetUserSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}}]}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browser"}},{"kind":"Field","name":{"kind":"Name","value":"os"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ip"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserSessionsQuery, GetUserSessionsQueryVariables>;
