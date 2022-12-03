export const IS_DEBUG = process.env.NEXT_PUBLIC_IS_DEBUG;

export const API_SERVER_SOCIAL_URL_BASE =
  process.env.NEXT_PUBLIC_AUTH_SOCIAL_URL_BASE;

export const API_SERVER_URL_BASE = process.env.NEXT_PUBLIC_AUTH_URL_BASE;

export const COMMERCE_USER_TOKEN_COOKIE =
  process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY;

export const STORE_DOMAIN = process.env.NEXT_PUBLIC_COMMERCE_STORE_DOMAIN;

export const COMMERCE_COOKIE_EXPIRE = 30;

export const API_URL = `${IS_DEBUG ? "http" : "https"}://${STORE_DOMAIN}/gql`;

export const API_TOKEN =
  process.env.NEXT_PUBLIC_COMMERCE_STOREFRONT_ACCESS_TOKEN;

export const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID ?? "";
