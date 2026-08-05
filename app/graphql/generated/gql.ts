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
    "mutation DeleteAccount($data: DeleteAccountInput!) {\n  deleteAccount(data: $data)\n}": typeof types.DeleteAccountDocument,
    "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data) {\n    id\n    email\n    username\n  }\n}": typeof types.LoginUserDocument,
    "mutation LogoutUser {\n  logoutUser\n}": typeof types.LogoutUserDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": typeof types.NewPasswordDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": typeof types.ResetPasswordDocument,
    "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}": typeof types.VerifyAccountDocument,
    "mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {\n  changeChatSettings(data: $data)\n}": typeof types.ChangeChatSettingsDocument,
    "mutation SendChatMessage($data: SendMessageInput!) {\n  sendChatMessage(data: $data) {\n    id\n    text\n  }\n}": typeof types.SendChatMessageDocument,
    "mutation FollowChannel($channelId: String!) {\n  followChannel(channelId: $channelId)\n}": typeof types.FollowChannelDocument,
    "mutation UnfollowChannel($channelId: String!) {\n  unfollowChannel(channelId: $channelId)\n}": typeof types.UnfollowChannelDocument,
    "mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable)\n}": typeof types.ChangeNotificationSettingsDocument,
    "mutation MarkNotificationsAsRead {\n  markNotificationsAsRead\n}": typeof types.MarkNotificationsAsReadDocument,
    "mutation RemoveNotification($id: String!) {\n  removeNotification(id: $id)\n}": typeof types.RemoveNotificationDocument,
    "mutation CreateSponsorshipPlan($data: CreatePlanInput!) {\n  createSponsorshipPlan(data: $data)\n}": typeof types.CreateSponsorshipPlanDocument,
    "mutation RemoveSponsorshipPlan($planId: String!) {\n  removeSponsorshipPlan(planId: $planId)\n}": typeof types.RemoveSponsorshipPlanDocument,
    "mutation changeStreamInfo($data: ChangeStreamInfoInput!) {\n  changeStreamInfo(data: $data)\n}": typeof types.ChangeStreamInfoDocument,
    "mutation ChangeStreamThumbnail($thumbnail: Upload!) {\n  changeStreamThumbnail(thumbnail: $thumbnail)\n}": typeof types.ChangeStreamThumbnailDocument,
    "mutation CreateIngress {\n  createIngress {\n    serverUrl\n    streamKey\n  }\n}": typeof types.CreateIngressDocument,
    "mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {\n  generateStreamToken(data: $data) {\n    token\n  }\n}": typeof types.GenerateStreamTokenDocument,
    "mutation RemoveStreamThumbnail {\n  removeStreamThumbnail\n}": typeof types.RemoveStreamThumbnailDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": typeof types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": typeof types.ChangePasswordDocument,
    "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}": typeof types.ChangeProfileAvatarDocument,
    "mutation ChangeProfileBio($data: BioInput!) {\n  changeProfileBio(data: $data)\n}": typeof types.ChangeProfileBioDocument,
    "mutation ChangeProfileUsername($data: UsernameInput!) {\n  changeProfileUsername(data: $data)\n}": typeof types.ChangeProfileUsernameDocument,
    "mutation ClearSessionCookie {\n  clearSessionCookie\n}": typeof types.ClearSessionCookieDocument,
    "mutation CreateSocialLink($data: SocialLinkInput!) {\n  createSocialLink(data: $data)\n}": typeof types.CreateSocialLinkDocument,
    "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}": typeof types.RemoveProfileAvatarDocument,
    "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}": typeof types.RemoveSessionDocument,
    "mutation RemoveSocialLink($id: String!) {\n  removeSocialLink(id: $id)\n}": typeof types.RemoveSocialLinkDocument,
    "query FindAllCategories {\n  findAllCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": typeof types.FindAllCategoriesDocument,
    "query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    thumbnailUrl\n    description\n    streams {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      user {\n        username\n        avatar\n        isVerified\n      }\n      category {\n        id\n        title\n        slug\n      }\n    }\n  }\n}": typeof types.FindCategoryBySlugDocument,
    "query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": typeof types.FindRandomCategoriesDocument,
    "query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isNotificationsEnabled\n    isVerified\n    isEmailVerified\n    sponsorshipPlans {\n      id\n      title\n      description\n      price\n    }\n    followings {\n      id\n    }\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      category {\n        id\n        title\n        slug\n        description\n      }\n    }\n    createdAt\n    updatedAt\n  }\n}": typeof types.FindChannelByUsernameDocument,
    "query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}": typeof types.FindFollowersCountByChannelDocument,
    "query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    avatar\n    isVerified\n    stream {\n      isLive\n    }\n  }\n}": typeof types.FindRecommendedChannelsDocument,
    "query FindSponsorsByChannel($channelId: String!) {\n  findSponsorsByChannel(channelId: $channelId) {\n    user {\n      id\n      username\n      avatar\n    }\n  }\n}": typeof types.FindSponsorsByChannelDocument,
    "query FindChatMessagesByStream($streamId: String!) {\n  findChatMessagesByStream(streamId: $streamId) {\n    id\n    text\n    createdAt\n    user {\n      id\n      username\n    }\n  }\n}": typeof types.FindChatMessagesByStreamDocument,
    "query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      avatar\n      createdAt\n    }\n  }\n}": typeof types.FindMyFollowersDocument,
    "query FindMyFollowings {\n  findMyFollowings {\n    following {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}": typeof types.FindMyFollowingsDocument,
    "query FindNotificationsByUser {\n  findNotificationsByUser {\n    id\n    payload\n    isRead\n    type\n  }\n}": typeof types.FindNotificationsByUserDocument,
    "query FindUnreadNotificationsCount {\n  findUnreadNotificationsCount\n}": typeof types.FindUnreadNotificationsCountDocument,
    "query FindMySponsorshipPlans {\n  findManySponsorshipPlans {\n    id\n    createdAt\n    title\n    price\n  }\n}": typeof types.FindMySponsorshipPlansDocument,
    "query FindMySponsors {\n  findMySponsors {\n    expiresAt\n    user {\n      id\n      username\n      avatar\n      isVerified\n    }\n    plan {\n      title\n    }\n  }\n}": typeof types.FindMySponsorsDocument,
    "mutation MakePayment($planId: String!) {\n  makePayment(planId: $planId) {\n    url\n  }\n}": typeof types.MakePaymentDocument,
    "query FindMyTransactions {\n  findMyTransactions {\n    createdAt\n    status\n    amount\n  }\n}": typeof types.FindMyTransactionsDocument,
    "query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    isLive\n    chatMode\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n  }\n}": typeof types.GetAllStreamsDocument,
    "query FindRandomStreams {\n  findRandomStreams {\n    id\n    title\n    thumbnailUrl\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n    chatMode\n  }\n}": typeof types.FindRandomStreamsDocument,
    "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": typeof types.GetCurrentSessionDocument,
    "query GetSocialLinks {\n  getSocialLinks {\n    id\n    title\n    url\n  }\n}": typeof types.GetSocialLinksDocument,
    "query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isNotificationsEnabled\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      serverUrl\n      streamKey\n      chatMode\n    }\n    notifications {\n      id\n      payload\n      isRead\n      type\n    }\n    createdAt\n    updatedAt\n  }\n}": typeof types.GetUserDocument,
    "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": typeof types.GetUserSessionsDocument,
    "subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}": typeof types.ChatMessageAddedDocument,
    "subscription NotificationAdded($userId: String!) {\n  notificationAdded(userId: $userId) {\n    id\n    type\n    payload\n    isRead\n    createdAt\n  }\n}": typeof types.NotificationAddedDocument,
};
const documents: Documents = {
    "mutation CreateUser($data: CreateUserInput!) {\n  createUser(data: $data)\n}": types.CreateUserDocument,
    "mutation DeleteAccount($data: DeleteAccountInput!) {\n  deleteAccount(data: $data)\n}": types.DeleteAccountDocument,
    "mutation LoginUser($data: LoginUserInput!) {\n  loginUser(data: $data) {\n    id\n    email\n    username\n  }\n}": types.LoginUserDocument,
    "mutation LogoutUser {\n  logoutUser\n}": types.LogoutUserDocument,
    "mutation NewPassword($data: NewPasswordInput!) {\n  newPassword(data: $data)\n}": types.NewPasswordDocument,
    "mutation ResetPassword($data: ResetPasswordInput!) {\n  resetPassword(data: $data)\n}": types.ResetPasswordDocument,
    "mutation VerifyAccount($data: VerificationInput!) {\n  verifyAccount(data: $data)\n}": types.VerifyAccountDocument,
    "mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {\n  changeChatSettings(data: $data)\n}": types.ChangeChatSettingsDocument,
    "mutation SendChatMessage($data: SendMessageInput!) {\n  sendChatMessage(data: $data) {\n    id\n    text\n  }\n}": types.SendChatMessageDocument,
    "mutation FollowChannel($channelId: String!) {\n  followChannel(channelId: $channelId)\n}": types.FollowChannelDocument,
    "mutation UnfollowChannel($channelId: String!) {\n  unfollowChannel(channelId: $channelId)\n}": types.UnfollowChannelDocument,
    "mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable)\n}": types.ChangeNotificationSettingsDocument,
    "mutation MarkNotificationsAsRead {\n  markNotificationsAsRead\n}": types.MarkNotificationsAsReadDocument,
    "mutation RemoveNotification($id: String!) {\n  removeNotification(id: $id)\n}": types.RemoveNotificationDocument,
    "mutation CreateSponsorshipPlan($data: CreatePlanInput!) {\n  createSponsorshipPlan(data: $data)\n}": types.CreateSponsorshipPlanDocument,
    "mutation RemoveSponsorshipPlan($planId: String!) {\n  removeSponsorshipPlan(planId: $planId)\n}": types.RemoveSponsorshipPlanDocument,
    "mutation changeStreamInfo($data: ChangeStreamInfoInput!) {\n  changeStreamInfo(data: $data)\n}": types.ChangeStreamInfoDocument,
    "mutation ChangeStreamThumbnail($thumbnail: Upload!) {\n  changeStreamThumbnail(thumbnail: $thumbnail)\n}": types.ChangeStreamThumbnailDocument,
    "mutation CreateIngress {\n  createIngress {\n    serverUrl\n    streamKey\n  }\n}": types.CreateIngressDocument,
    "mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {\n  generateStreamToken(data: $data) {\n    token\n  }\n}": types.GenerateStreamTokenDocument,
    "mutation RemoveStreamThumbnail {\n  removeStreamThumbnail\n}": types.RemoveStreamThumbnailDocument,
    "mutation ChangeEmail($data: ChangeEmailInput!) {\n  changeEmail(data: $data)\n}": types.ChangeEmailDocument,
    "mutation ChangePassword($data: ChangePasswordInput!) {\n  changePassword(data: $data)\n}": types.ChangePasswordDocument,
    "mutation ChangeProfileAvatar($avatar: Upload!) {\n  changeProfileAvatar(avatar: $avatar)\n}": types.ChangeProfileAvatarDocument,
    "mutation ChangeProfileBio($data: BioInput!) {\n  changeProfileBio(data: $data)\n}": types.ChangeProfileBioDocument,
    "mutation ChangeProfileUsername($data: UsernameInput!) {\n  changeProfileUsername(data: $data)\n}": types.ChangeProfileUsernameDocument,
    "mutation ClearSessionCookie {\n  clearSessionCookie\n}": types.ClearSessionCookieDocument,
    "mutation CreateSocialLink($data: SocialLinkInput!) {\n  createSocialLink(data: $data)\n}": types.CreateSocialLinkDocument,
    "mutation RemoveProfileAvatar {\n  removeProfileAvatar\n}": types.RemoveProfileAvatarDocument,
    "mutation RemoveSession($id: String!) {\n  removeSession(id: $id)\n}": types.RemoveSessionDocument,
    "mutation RemoveSocialLink($id: String!) {\n  removeSocialLink(id: $id)\n}": types.RemoveSocialLinkDocument,
    "query FindAllCategories {\n  findAllCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": types.FindAllCategoriesDocument,
    "query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    thumbnailUrl\n    description\n    streams {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      user {\n        username\n        avatar\n        isVerified\n      }\n      category {\n        id\n        title\n        slug\n      }\n    }\n  }\n}": types.FindCategoryBySlugDocument,
    "query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}": types.FindRandomCategoriesDocument,
    "query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isNotificationsEnabled\n    isVerified\n    isEmailVerified\n    sponsorshipPlans {\n      id\n      title\n      description\n      price\n    }\n    followings {\n      id\n    }\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      category {\n        id\n        title\n        slug\n        description\n      }\n    }\n    createdAt\n    updatedAt\n  }\n}": types.FindChannelByUsernameDocument,
    "query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}": types.FindFollowersCountByChannelDocument,
    "query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    avatar\n    isVerified\n    stream {\n      isLive\n    }\n  }\n}": types.FindRecommendedChannelsDocument,
    "query FindSponsorsByChannel($channelId: String!) {\n  findSponsorsByChannel(channelId: $channelId) {\n    user {\n      id\n      username\n      avatar\n    }\n  }\n}": types.FindSponsorsByChannelDocument,
    "query FindChatMessagesByStream($streamId: String!) {\n  findChatMessagesByStream(streamId: $streamId) {\n    id\n    text\n    createdAt\n    user {\n      id\n      username\n    }\n  }\n}": types.FindChatMessagesByStreamDocument,
    "query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      avatar\n      createdAt\n    }\n  }\n}": types.FindMyFollowersDocument,
    "query FindMyFollowings {\n  findMyFollowings {\n    following {\n      id\n      username\n      email\n      avatar\n    }\n  }\n}": types.FindMyFollowingsDocument,
    "query FindNotificationsByUser {\n  findNotificationsByUser {\n    id\n    payload\n    isRead\n    type\n  }\n}": types.FindNotificationsByUserDocument,
    "query FindUnreadNotificationsCount {\n  findUnreadNotificationsCount\n}": types.FindUnreadNotificationsCountDocument,
    "query FindMySponsorshipPlans {\n  findManySponsorshipPlans {\n    id\n    createdAt\n    title\n    price\n  }\n}": types.FindMySponsorshipPlansDocument,
    "query FindMySponsors {\n  findMySponsors {\n    expiresAt\n    user {\n      id\n      username\n      avatar\n      isVerified\n    }\n    plan {\n      title\n    }\n  }\n}": types.FindMySponsorsDocument,
    "mutation MakePayment($planId: String!) {\n  makePayment(planId: $planId) {\n    url\n  }\n}": types.MakePaymentDocument,
    "query FindMyTransactions {\n  findMyTransactions {\n    createdAt\n    status\n    amount\n  }\n}": types.FindMyTransactionsDocument,
    "query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    isLive\n    chatMode\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n  }\n}": types.GetAllStreamsDocument,
    "query FindRandomStreams {\n  findRandomStreams {\n    id\n    title\n    thumbnailUrl\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n    chatMode\n  }\n}": types.FindRandomStreamsDocument,
    "query GetCurrentSession {\n  getCurrentSession {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": types.GetCurrentSessionDocument,
    "query GetSocialLinks {\n  getSocialLinks {\n    id\n    title\n    url\n  }\n}": types.GetSocialLinksDocument,
    "query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isNotificationsEnabled\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      serverUrl\n      streamKey\n      chatMode\n    }\n    notifications {\n      id\n      payload\n      isRead\n      type\n    }\n    createdAt\n    updatedAt\n  }\n}": types.GetUserDocument,
    "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}": types.GetUserSessionsDocument,
    "subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}": types.ChatMessageAddedDocument,
    "subscription NotificationAdded($userId: String!) {\n  notificationAdded(userId: $userId) {\n    id\n    type\n    payload\n    isRead\n    createdAt\n  }\n}": types.NotificationAddedDocument,
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
export function graphql(source: "mutation DeleteAccount($data: DeleteAccountInput!) {\n  deleteAccount(data: $data)\n}"): (typeof documents)["mutation DeleteAccount($data: DeleteAccountInput!) {\n  deleteAccount(data: $data)\n}"];
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
export function graphql(source: "mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable)\n}"): (typeof documents)["mutation ChangeNotificationSettings($isEnable: Boolean!) {\n  changeNotificationSettings(isEnable: $isEnable)\n}"];
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
export function graphql(source: "mutation CreateSponsorshipPlan($data: CreatePlanInput!) {\n  createSponsorshipPlan(data: $data)\n}"): (typeof documents)["mutation CreateSponsorshipPlan($data: CreatePlanInput!) {\n  createSponsorshipPlan(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveSponsorshipPlan($planId: String!) {\n  removeSponsorshipPlan(planId: $planId)\n}"): (typeof documents)["mutation RemoveSponsorshipPlan($planId: String!) {\n  removeSponsorshipPlan(planId: $planId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation changeStreamInfo($data: ChangeStreamInfoInput!) {\n  changeStreamInfo(data: $data)\n}"): (typeof documents)["mutation changeStreamInfo($data: ChangeStreamInfoInput!) {\n  changeStreamInfo(data: $data)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeStreamThumbnail($thumbnail: Upload!) {\n  changeStreamThumbnail(thumbnail: $thumbnail)\n}"): (typeof documents)["mutation ChangeStreamThumbnail($thumbnail: Upload!) {\n  changeStreamThumbnail(thumbnail: $thumbnail)\n}"];
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
export function graphql(source: "mutation RemoveStreamThumbnail {\n  removeStreamThumbnail\n}"): (typeof documents)["mutation RemoveStreamThumbnail {\n  removeStreamThumbnail\n}"];
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
export function graphql(source: "mutation ChangeProfileUsername($data: UsernameInput!) {\n  changeProfileUsername(data: $data)\n}"): (typeof documents)["mutation ChangeProfileUsername($data: UsernameInput!) {\n  changeProfileUsername(data: $data)\n}"];
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
export function graphql(source: "query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    thumbnailUrl\n    description\n    streams {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      user {\n        username\n        avatar\n        isVerified\n      }\n      category {\n        id\n        title\n        slug\n      }\n    }\n  }\n}"): (typeof documents)["query FindCategoryBySlug($slug: String!) {\n  findCategoryBySlug(slug: $slug) {\n    id\n    title\n    slug\n    thumbnailUrl\n    description\n    streams {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      user {\n        username\n        avatar\n        isVerified\n      }\n      category {\n        id\n        title\n        slug\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"): (typeof documents)["query FindRandomCategories {\n  findRandomCategories {\n    id\n    title\n    slug\n    description\n    thumbnailUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isNotificationsEnabled\n    isVerified\n    isEmailVerified\n    sponsorshipPlans {\n      id\n      title\n      description\n      price\n    }\n    followings {\n      id\n    }\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      category {\n        id\n        title\n        slug\n        description\n      }\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query FindChannelByUsername($username: String!) {\n  findChannelByUsername(username: $username) {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isNotificationsEnabled\n    isVerified\n    isEmailVerified\n    sponsorshipPlans {\n      id\n      title\n      description\n      price\n    }\n    followings {\n      id\n    }\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      title\n      thumbnailUrl\n      isLive\n      chatMode\n      category {\n        id\n        title\n        slug\n        description\n      }\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}"): (typeof documents)["query FindFollowersCountByChannel($channelId: String!) {\n  findFollowersCountByChannel(channelId: $channelId)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    avatar\n    isVerified\n    stream {\n      isLive\n    }\n  }\n}"): (typeof documents)["query FindRecommendedChannels {\n  findRecommendedChannels {\n    id\n    username\n    avatar\n    isVerified\n    stream {\n      isLive\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindSponsorsByChannel($channelId: String!) {\n  findSponsorsByChannel(channelId: $channelId) {\n    user {\n      id\n      username\n      avatar\n    }\n  }\n}"): (typeof documents)["query FindSponsorsByChannel($channelId: String!) {\n  findSponsorsByChannel(channelId: $channelId) {\n    user {\n      id\n      username\n      avatar\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindChatMessagesByStream($streamId: String!) {\n  findChatMessagesByStream(streamId: $streamId) {\n    id\n    text\n    createdAt\n    user {\n      id\n      username\n    }\n  }\n}"): (typeof documents)["query FindChatMessagesByStream($streamId: String!) {\n  findChatMessagesByStream(streamId: $streamId) {\n    id\n    text\n    createdAt\n    user {\n      id\n      username\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      avatar\n      createdAt\n    }\n  }\n}"): (typeof documents)["query FindMyFollowers {\n  findMyFollowers {\n    follower {\n      id\n      username\n      avatar\n      createdAt\n    }\n  }\n}"];
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
export function graphql(source: "query FindMySponsorshipPlans {\n  findManySponsorshipPlans {\n    id\n    createdAt\n    title\n    price\n  }\n}"): (typeof documents)["query FindMySponsorshipPlans {\n  findManySponsorshipPlans {\n    id\n    createdAt\n    title\n    price\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindMySponsors {\n  findMySponsors {\n    expiresAt\n    user {\n      id\n      username\n      avatar\n      isVerified\n    }\n    plan {\n      title\n    }\n  }\n}"): (typeof documents)["query FindMySponsors {\n  findMySponsors {\n    expiresAt\n    user {\n      id\n      username\n      avatar\n      isVerified\n    }\n    plan {\n      title\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation MakePayment($planId: String!) {\n  makePayment(planId: $planId) {\n    url\n  }\n}"): (typeof documents)["mutation MakePayment($planId: String!) {\n  makePayment(planId: $planId) {\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindMyTransactions {\n  findMyTransactions {\n    createdAt\n    status\n    amount\n  }\n}"): (typeof documents)["query FindMyTransactions {\n  findMyTransactions {\n    createdAt\n    status\n    amount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    isLive\n    chatMode\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n  }\n}"): (typeof documents)["query GetAllStreams($filters: FiltersInput!) {\n  getAllStreams(filters: $filters) {\n    id\n    title\n    thumbnailUrl\n    isLive\n    chatMode\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindRandomStreams {\n  findRandomStreams {\n    id\n    title\n    thumbnailUrl\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n    chatMode\n  }\n}"): (typeof documents)["query FindRandomStreams {\n  findRandomStreams {\n    id\n    title\n    thumbnailUrl\n    isLive\n    user {\n      username\n      avatar\n      isVerified\n    }\n    category {\n      id\n      title\n      slug\n    }\n    chatMode\n  }\n}"];
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
export function graphql(source: "query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isNotificationsEnabled\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      serverUrl\n      streamKey\n      chatMode\n    }\n    notifications {\n      id\n      payload\n      isRead\n      type\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetUser {\n  getUser {\n    id\n    username\n    email\n    password\n    avatar\n    bio\n    isVerified\n    isEmailVerified\n    isNotificationsEnabled\n    socialLinks {\n      id\n      title\n      url\n    }\n    stream {\n      id\n      serverUrl\n      streamKey\n      chatMode\n    }\n    notifications {\n      id\n      payload\n      isRead\n      type\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"): (typeof documents)["query GetUserSessions {\n  getUserSessions {\n    id\n    userId\n    metadata {\n      location {\n        country\n        city\n      }\n      device {\n        browser\n        os\n      }\n      ip\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}"): (typeof documents)["subscription ChatMessageAdded($streamId: String!) {\n  chatMessageAdded(streamId: $streamId) {\n    id\n    text\n    user {\n      id\n      username\n      avatar\n    }\n    createdAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription NotificationAdded($userId: String!) {\n  notificationAdded(userId: $userId) {\n    id\n    type\n    payload\n    isRead\n    createdAt\n  }\n}"): (typeof documents)["subscription NotificationAdded($userId: String!) {\n  notificationAdded(userId: $userId) {\n    id\n    type\n    payload\n    isRead\n    createdAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;