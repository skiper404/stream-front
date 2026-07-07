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
    "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data) {\n    id\n    email\n    username\n  }\n}": typeof types.LoginUserDocument,
    "mutation LogoutUser {\n  logoutUser\n}": typeof types.LogoutUserDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": typeof types.NewPasswordDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}": typeof types.VerifyAccountDocument,
    "mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {\n  changeChatSettings(data: $data)\n}": typeof types.ChangeChatSettingsDocument,
    "mutation SendChatMessage($data: SendMessageInput!) {\n  sendChatMessage(data: $data) {\n    id\n    text\n  }\n}": typeof types.SendChatMessageDocument,
    "mutation FollowChannel($channelId: String!) {\n  followChannel(channelId: $channelId)\n}": typeof types.FollowChannelDocument,
    "mutation UnfollowChannel($channelId: String!) {\n  unfollowChannel(channelId: $channelId)\n}": typeof types.UnfollowChannelDocument,
    "mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable) {\n    notificationSettings {\n      siteNotifications\n    }\n  }\n}": typeof types.ChangeNotificationSettingsDocument,
    "mutation CreateStreamStart {\n  createStreamStart {\n    payload\n    isRead\n  }\n}": typeof types.CreateStreamStartDocument,
    "mutation CreateVerifyChannel {\n  createVerifyChannel {\n    payload\n    isRead\n  }\n}": typeof types.CreateVerifyChannelDocument,
    "mutation MarkNotificationsAsRead {\n  markNotificationsAsRead\n}": typeof types.MarkNotificationsAsReadDocument,
    "mutation RemoveNotification($id: String!) {\n  removeNotification(id: $id)\n}": typeof types.RemoveNotificationDocument,
    "mutation CreateIngress {\n  createIngress {\n    serverUrl\n    streamKey\n  }\n}": typeof types.CreateIngressDocument,
    "mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {\n  generateStreamToken(data: $data) {\n    token\n  }\n}": typeof types.GenerateStreamTokenDocument,
    "mutation RemoveIngresses {\n  removeIngresses\n}": typeof types.RemoveIngressesDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": typeof types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": typeof types.ChangePasswordDocument,
    "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}": typeof types.ChangeProfileAvatarDocument,
    "mutation ChangeProfileBio($data: BioInput!) {\n  changeProfileBio(data: $data)\n}": typeof types.ChangeProfileBioDocument,
    "mutation ClearSessionCookie {\n  clearSessionCookie\n}": typeof types.ClearSessionCookieDocument,
    "mutation CreateSocialLink($data: SocialLinkInput!) {\n  createSocialLink(data: $data)\n}": typeof types.CreateSocialLinkDocument,
    "mutation disableTotp {\n  disableTotp\n}": typeof types.DisableTotpDocument,
    "mutation EnableTotp($data: EnableTotpInput!) {\n  enableTotp(data: $data)\n}": typeof types.EnableTotpDocument,
    "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}": typeof types.RemoveProfileAvatarDocument,
    "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}": typeof types.RemoveSessionDocument,
    "mutation RemoveSocialLink($id: String!) {\n  removeSocialLink(id: $id)\n}": typeof types.RemoveSocialLinkDocument,
    "query FindAllCategories {\n  findAllCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": typeof types.FindAllCategoriesDocument,
    "query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": typeof types.FindCategoryBySlugDocument,
    "query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": typeof types.FindRandomCategoriesDocument,
    "query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": typeof types.FindChannelByUsernameDocument,
    "query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}": typeof types.FindFollowersCountByChannelDocument,
    "query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": typeof types.FindRecommendedChannelsDocument,
    "query FindChatMessagesByStream {\n  findChatMessagesByStream(streamId: \"123\") {\n    id\n    text\n  }\n}": typeof types.FindChatMessagesByStreamDocument,
    "query GetAllMessages {\n  getAllMessages {\n    id\n    text\n  }\n}": typeof types.GetAllMessagesDocument,
    "query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}": typeof types.FindMyFollowersDocument,
    "query FindMyFollowings {\n  findMyFollowings {\n    following {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}": typeof types.FindMyFollowingsDocument,
    "query FindNotificationsByUser {\n  findNotificationsByUser {\n    id\n    payload\n    isRead\n    type\n  }\n}": typeof types.FindNotificationsByUserDocument,
    "query FindUnreadNotificationsCount {\n  findUnreadNotificationsCount\n}": typeof types.FindUnreadNotificationsCountDocument,
    "query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    ingressId\n    serverUrl\n    streamKey\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n  }\n}": typeof types.GetAllStreamsDocument,
    "query GetIngresses {\n  getIngresses {\n    ingressId\n    serverUrl\n    streamKey\n  }\n}": typeof types.GetIngressesDocument,
    "query GetRooms {\n  getRooms {\n    name\n  }\n}": typeof types.GetRoomsDocument,
    "query GenerateTotpSecret {\n  generateTotpSecret {\n    qrcodeUrl\n    secret\n  }\n}": typeof types.GenerateTotpSecretDocument,
    "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": typeof types.GetCurrentSessionDocument,
    "query GetSocialLinks {\n  getSocialLinks {\n    id\n    title\n    url\n  }\n}": typeof types.GetSocialLinksDocument,
    "query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetUserDocument,
    "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": typeof types.GetUserSessionsDocument,
    "subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}": typeof types.ChatMessageAddedDocument,
};
const documents: Documents = {
    "mutation CreateUser($data: CreateUserInput!) {\n  createUser(data: $data)\n}": types.CreateUserDocument,
    "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data) {\n    id\n    email\n    username\n  }\n}": types.LoginUserDocument,
    "mutation LogoutUser {\n  logoutUser\n}": types.LogoutUserDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": types.NewPasswordDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}": types.VerifyAccountDocument,
    "mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {\n  changeChatSettings(data: $data)\n}": types.ChangeChatSettingsDocument,
    "mutation SendChatMessage($data: SendMessageInput!) {\n  sendChatMessage(data: $data) {\n    id\n    text\n  }\n}": types.SendChatMessageDocument,
    "mutation FollowChannel($channelId: String!) {\n  followChannel(channelId: $channelId)\n}": types.FollowChannelDocument,
    "mutation UnfollowChannel($channelId: String!) {\n  unfollowChannel(channelId: $channelId)\n}": types.UnfollowChannelDocument,
    "mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable) {\n    notificationSettings {\n      siteNotifications\n    }\n  }\n}": types.ChangeNotificationSettingsDocument,
    "mutation CreateStreamStart {\n  createStreamStart {\n    payload\n    isRead\n  }\n}": types.CreateStreamStartDocument,
    "mutation CreateVerifyChannel {\n  createVerifyChannel {\n    payload\n    isRead\n  }\n}": types.CreateVerifyChannelDocument,
    "mutation MarkNotificationsAsRead {\n  markNotificationsAsRead\n}": types.MarkNotificationsAsReadDocument,
    "mutation RemoveNotification($id: String!) {\n  removeNotification(id: $id)\n}": types.RemoveNotificationDocument,
    "mutation CreateIngress {\n  createIngress {\n    serverUrl\n    streamKey\n  }\n}": types.CreateIngressDocument,
    "mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {\n  generateStreamToken(data: $data) {\n    token\n  }\n}": types.GenerateStreamTokenDocument,
    "mutation RemoveIngresses {\n  removeIngresses\n}": types.RemoveIngressesDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": types.ChangePasswordDocument,
    "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}": types.ChangeProfileAvatarDocument,
    "mutation ChangeProfileBio($data: BioInput!) {\n  changeProfileBio(data: $data)\n}": types.ChangeProfileBioDocument,
    "mutation ClearSessionCookie {\n  clearSessionCookie\n}": types.ClearSessionCookieDocument,
    "mutation CreateSocialLink($data: SocialLinkInput!) {\n  createSocialLink(data: $data)\n}": types.CreateSocialLinkDocument,
    "mutation disableTotp {\n  disableTotp\n}": types.DisableTotpDocument,
    "mutation EnableTotp($data: EnableTotpInput!) {\n  enableTotp(data: $data)\n}": types.EnableTotpDocument,
    "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}": types.RemoveProfileAvatarDocument,
    "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}": types.RemoveSessionDocument,
    "mutation RemoveSocialLink($id: String!) {\n  removeSocialLink(id: $id)\n}": types.RemoveSocialLinkDocument,
    "query FindAllCategories {\n  findAllCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": types.FindAllCategoriesDocument,
    "query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": types.FindCategoryBySlugDocument,
    "query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": types.FindRandomCategoriesDocument,
    "query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": types.FindChannelByUsernameDocument,
    "query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}": types.FindFollowersCountByChannelDocument,
    "query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": types.FindRecommendedChannelsDocument,
    "query FindChatMessagesByStream {\n  findChatMessagesByStream(streamId: \"123\") {\n    id\n    text\n  }\n}": types.FindChatMessagesByStreamDocument,
    "query GetAllMessages {\n  getAllMessages {\n    id\n    text\n  }\n}": types.GetAllMessagesDocument,
    "query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}": types.FindMyFollowersDocument,
    "query FindMyFollowings {\n  findMyFollowings {\n    following {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}": types.FindMyFollowingsDocument,
    "query FindNotificationsByUser {\n  findNotificationsByUser {\n    id\n    payload\n    isRead\n    type\n  }\n}": types.FindNotificationsByUserDocument,
    "query FindUnreadNotificationsCount {\n  findUnreadNotificationsCount\n}": types.FindUnreadNotificationsCountDocument,
    "query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    ingressId\n    serverUrl\n    streamKey\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n  }\n}": types.GetAllStreamsDocument,
    "query GetIngresses {\n  getIngresses {\n    ingressId\n    serverUrl\n    streamKey\n  }\n}": types.GetIngressesDocument,
    "query GetRooms {\n  getRooms {\n    name\n  }\n}": types.GetRoomsDocument,
    "query GenerateTotpSecret {\n  generateTotpSecret {\n    qrcodeUrl\n    secret\n  }\n}": types.GenerateTotpSecretDocument,
    "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": types.GetCurrentSessionDocument,
    "query GetSocialLinks {\n  getSocialLinks {\n    id\n    title\n    url\n  }\n}": types.GetSocialLinksDocument,
    "query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}": types.GetUserDocument,
    "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": types.GetUserSessionsDocument,
    "subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}": types.ChatMessageAddedDocument,
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
export function graphql(source: "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data) {\n    id\n    email\n    username\n  }\n}"): (typeof documents)["mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data) {\n    id\n    email\n    username\n  }\n}"];
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
export function graphql(source: "mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {\n  changeChatSettings(data: $data)\n}"): (typeof documents)["mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {\n  changeChatSettings(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SendChatMessage($data: SendMessageInput!) {\n  sendChatMessage(data: $data) {\n    id\n    text\n  }\n}"): (typeof documents)["mutation SendChatMessage($data: SendMessageInput!) {\n  sendChatMessage(data: $data) {\n    id\n    text\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation FollowChannel($channelId: String!) {\n  followChannel(channelId: $channelId)\n}"): (typeof documents)["mutation FollowChannel($channelId: String!) {\n  followChannel(channelId: $channelId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UnfollowChannel($channelId: String!) {\n  unfollowChannel(channelId: $channelId)\n}"): (typeof documents)["mutation UnfollowChannel($channelId: String!) {\n  unfollowChannel(channelId: $channelId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable) {\n    notificationSettings {\n      siteNotifications\n    }\n  }\n}"): (typeof documents)["mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable) {\n    notificationSettings {\n      siteNotifications\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateStreamStart {\n  createStreamStart {\n    payload\n    isRead\n  }\n}"): (typeof documents)["mutation CreateStreamStart {\n  createStreamStart {\n    payload\n    isRead\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateVerifyChannel {\n  createVerifyChannel {\n    payload\n    isRead\n  }\n}"): (typeof documents)["mutation CreateVerifyChannel {\n  createVerifyChannel {\n    payload\n    isRead\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation MarkNotificationsAsRead {\n  markNotificationsAsRead\n}"): (typeof documents)["mutation MarkNotificationsAsRead {\n  markNotificationsAsRead\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveNotification($id: String!) {\n  removeNotification(id: $id)\n}"): (typeof documents)["mutation RemoveNotification($id: String!) {\n  removeNotification(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateIngress {\n  createIngress {\n    serverUrl\n    streamKey\n  }\n}"): (typeof documents)["mutation CreateIngress {\n  createIngress {\n    serverUrl\n    streamKey\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {\n  generateStreamToken(data: $data) {\n    token\n  }\n}"): (typeof documents)["mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {\n  generateStreamToken(data: $data) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveIngresses {\n  removeIngresses\n}"): (typeof documents)["mutation RemoveIngresses {\n  removeIngresses\n}"];
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
export function graphql(source: "mutation ChangeProfileBio($data: BioInput!) {\n  changeProfileBio(data: $data)\n}"): (typeof documents)["mutation ChangeProfileBio($data: BioInput!) {\n  changeProfileBio(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ClearSessionCookie {\n  clearSessionCookie\n}"): (typeof documents)["mutation ClearSessionCookie {\n  clearSessionCookie\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateSocialLink($data: SocialLinkInput!) {\n  createSocialLink(data: $data)\n}"): (typeof documents)["mutation CreateSocialLink($data: SocialLinkInput!) {\n  createSocialLink(data: $data)\n}"];
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
export function graphql(source: "mutation RemoveSocialLink($id: String!) {\n  removeSocialLink(id: $id)\n}"): (typeof documents)["mutation RemoveSocialLink($id: String!) {\n  removeSocialLink(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindAllCategories {\n  findAllCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"): (typeof documents)["query FindAllCategories {\n  findAllCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"): (typeof documents)["query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"): (typeof documents)["query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}"): (typeof documents)["query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindChatMessagesByStream {\n  findChatMessagesByStream(streamId: \"123\") {\n    id\n    text\n  }\n}"): (typeof documents)["query FindChatMessagesByStream {\n  findChatMessagesByStream(streamId: \"123\") {\n    id\n    text\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllMessages {\n  getAllMessages {\n    id\n    text\n  }\n}"): (typeof documents)["query GetAllMessages {\n  getAllMessages {\n    id\n    text\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}"): (typeof documents)["query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindMyFollowings {\n  findMyFollowings {\n    following {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}"): (typeof documents)["query FindMyFollowings {\n  findMyFollowings {\n    following {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindNotificationsByUser {\n  findNotificationsByUser {\n    id\n    payload\n    isRead\n    type\n  }\n}"): (typeof documents)["query FindNotificationsByUser {\n  findNotificationsByUser {\n    id\n    payload\n    isRead\n    type\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindUnreadNotificationsCount {\n  findUnreadNotificationsCount\n}"): (typeof documents)["query FindUnreadNotificationsCount {\n  findUnreadNotificationsCount\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    ingressId\n    serverUrl\n    streamKey\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n  }\n}"): (typeof documents)["query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    ingressId\n    serverUrl\n    streamKey\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetIngresses {\n  getIngresses {\n    ingressId\n    serverUrl\n    streamKey\n  }\n}"): (typeof documents)["query GetIngresses {\n  getIngresses {\n    ingressId\n    serverUrl\n    streamKey\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRooms {\n  getRooms {\n    name\n  }\n}"): (typeof documents)["query GetRooms {\n  getRooms {\n    name\n  }\n}"];
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
export function graphql(source: "query GetSocialLinks {\n  getSocialLinks {\n    id\n    title\n    url\n  }\n}"): (typeof documents)["query GetSocialLinks {\n  getSocialLinks {\n    id\n    title\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isTotpEnabled\n    totpSecret\n    deactivatedAt\n    isDeactivated\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"): (typeof documents)["query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}"): (typeof documents)["subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;