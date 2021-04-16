import Cookies from "js-cookie";

class AuthUtils {
    static getAuthToken() {
        let token = "";
        try {
            token = JSON.parse(this.getAuthCookie())?.token
        } catch (e) {}

        return token;
    }

    static getUserID() {
        let id = "";
        try {
            id = JSON.parse(this.getAuthCookie())?.userId
        } catch (e) {}

        return id;
    }

    static getAuthCookie() {
        return decodeURIComponent(Cookies.get('loginAuth') ?? "");
    }

    static processLogout() {
        console.log("logged out");
        Cookies.set("loginAuth", "", {expires: -1, domain: ".minecrossing.xyz"});
        Cookies.set("storeminecrossingxyz_session", "", {expires: -1, domain: ".minecrossing.xyz"});
        Cookies.set("XSRF-TOKEN", "", {expires: -1, domain: ".minecrossing.xyz"});
    }
}

export default AuthUtils
