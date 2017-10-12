import { Injectable } from "@angular/core";


@Injectable()
export class CookieService {

    public getCookie(name: string) {
        let cookieName = `${name}=`;
        for (let cookie of document.cookie.split(/;\s*/)) {
            if (cookie.indexOf(cookieName) == 0) {
                return cookie.substring(cookieName.length);
            }
        }
        return null;
    }

    public deleteCookie(name) {
        this.setCookie(name, "", -1);
    }

    public setCookie(name: string, value: string, expireSeconds: number, path: string = "") {
        let expiration: Date = new Date();
        expiration.setTime(expiration.getTime() + expireSeconds * 1000);

        let expires: string = `expires=${expiration.toUTCString()}`;
        let cpath: string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
}