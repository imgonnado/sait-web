import Cookies, { CookieAttributes } from "js-cookie";

export const getUserToken = () => Cookies.get("access_token");
