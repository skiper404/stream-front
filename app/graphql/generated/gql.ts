/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateUser($data: CreateUserInput!) {\n  createUser(data: $data)\n}": typeof types.CreateUserDocument,
    "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data)\n}": typeof types.LoginUserDocument,
    "mutation LogoutUser {\n  logoutUser\n}": typeof types.LogoutUserDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": typeof types.NewPasswordDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}": typeof types.VerifyAccountDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": typeof types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": typeof types.ChangePasswordDocument,
    "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}": typeof types.ChangeProfileAvatarDocument,
    "mutation ClearSessionCookie {\n  clearSessionCookie\n}": typeof types.ClearSessionCookieDocument,
    "mutation disableTotp {\n  disableTotp\n}": typeof types.DisableTotpDocument,
    "mutation EnableTotp($data: EnableTotpInput!) {\n  enableTotp(data: $data)\n}": typeof types.EnableTotpDocument,
    "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}": typeof types.RemoveProfileAvatarDocument,
    "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}": typeof types.RemoveSessionDocument,
    "query GenerateTotpSecret {\n  generateTotpSecret {\n    qrcodeUrl\n    secret\n  }\n}": typeof types.GenerateTotpSecretDocument,
    "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": typeof types.GetCurrentSessionDocument,
    "query GetMe {\n  getMe {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetMeDocument,
    "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": typeof types.GetUserSessionsDocument,
};
const documents: Documents = {
    "mutation CreateUser($data: CreateUserInput!) {\n  createUser(data: $data)\n}": types.CreateUserDocument,
    "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data)\n}": types.LoginUserDocument,
    "mutation LogoutUser {\n  logoutUser\n}": types.LogoutUserDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": types.NewPasswordDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}": types.VerifyAccountDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": types.ChangePasswordDocument,
    "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}": types.ChangeProfileAvatarDocument,
    "mutation ClearSessionCookie {\n  clearSessionCookie\n}": types.ClearSessionCookieDocument,
    "mutation disableTotp {\n  disableTotp\n}": types.DisableTotpDocument,
    "mutation EnableTotp($data: EnableTotpInput!) {\n  enableTotp(data: $data)\n}": types.EnableTotpDocument,
    "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}": types.RemoveProfileAvatarDocument,
    "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}": types.RemoveSessionDocument,
    "query GenerateTotpSecret {\n  generateTotpSecret {\n    qrcodeUrl\n    secret\n  }\n}": types.GenerateTotpSecretDocument,
    "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": types.GetCurrentSessionDocument,
    "query GetMe {\n  getMe {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": types.GetMeDocument,
    "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": types.GetUserSessionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($data: CreateUserInput!) {\n  createUser(data: $data)\n}"): (typeof documents)["mutation CreateUser($data: CreateUserInput!) {\n  createUser(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data)\n}"): (typeof documents)["mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LogoutUser {\n  logoutUser\n}"): (typeof documents)["mutation LogoutUser {\n  logoutUser\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}"): (typeof documents)["mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"): (typeof documents)["mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}"): (typeof documents)["mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}"): (typeof documents)["mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}"): (typeof documents)["mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}"): (typeof documents)["mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ClearSessionCookie {\n  clearSessionCookie\n}"): (typeof documents)["mutation ClearSessionCookie {\n  clearSessionCookie\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation disableTotp {\n  disableTotp\n}"): (typeof documents)["mutation disableTotp {\n  disableTotp\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation EnableTotp($data: EnableTotpInput!) {\n  enableTotp(data: $data)\n}"): (typeof documents)["mutation EnableTotp($data: EnableTotpInput!) {\n  enableTotp(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}"): (typeof documents)["mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}"): (typeof documents)["mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GenerateTotpSecret {\n  generateTotpSecret {\n    qrcodeUrl\n    secret\n  }\n}"): (typeof documents)["query GenerateTotpSecret {\n  generateTotpSecret {\n    qrcodeUrl\n    secret\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"): (typeof documents)["query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMe {\n  getMe {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetMe {\n  getMe {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"): (typeof documents)["query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;