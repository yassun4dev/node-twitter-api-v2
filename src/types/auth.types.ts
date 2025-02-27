import type TwitterApi from '../client';
import { TypeOrArrayOf } from './shared.types';

export type TOAuth2Scope = 'tweet.read' | 'users.read' | 'account.follows.read' | 'account.follows.write'
 | 'offline.access' | 'space.read';

export interface BuildOAuth2RequestLinkArgs {
  scope?: TypeOrArrayOf<TOAuth2Scope> | TypeOrArrayOf<string>;
  state?: string;
}

export interface AccessOAuth2TokenArgs {
  /** The same URI given to generate link at previous step. */
  redirectUri: string;
  /** The code obtained in link generation step. */
  codeVerifier: string;
  /** The code given by Twitter in query string, after redirection to your callback URL. */
  code: string;
}

export interface AccessOAuth2TokenResult {
  token_type: 'bearer';
  expires_in: number;
  access_token: string;
  scope: string;
  refresh_token?: string;
}

export interface RequestTokenArgs {
  authAccessType: 'read' | 'write';
  linkMode: 'authenticate' | 'authorize';
  forceLogin: boolean;
  screenName: string;
}

export interface RequestTokenResult {
  oauth_token: string;
  oauth_token_secret: string;
  oauth_callback_confirmed: 'true';
}

export interface AccessTokenResult {
  oauth_token: string;
  oauth_token_secret: string;
  user_id: string;
  screen_name: string;
}

export interface BearerTokenResult {
  token_type: 'bearer';
  access_token: string;
}

export interface LoginResult {
  userId: string;
  screenName: string;
  accessToken: string;
  accessSecret: string;
  client: TwitterApi;
}
