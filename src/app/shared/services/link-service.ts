
import { Injectable } from "@angular/core";
import { Link } from "../models/link";

@Injectable({
    providedIn: 'root'
})
export class LinkService {
    linksList: Link[] = [{
        shortenUrl: '12aesedw',
        originalUrl: 'https://www.youtube.com/',
        expiryTime: new Date("2024-04-20T09:30:51.01")
    }];

    updateUrlData() {
        this.linksList.forEach((link) => {
            if (new Date() > link.expiryTime) {
                let index = this.linksList.indexOf(link);
                this.linksList.splice(index, 1);
            }
        })
    }

    addLink(originalUrl: string, shortenUrl: string, expiryTime: Date) {
        this.linksList.push({ shortenUrl, originalUrl, expiryTime });
    }

    getLink(shortenLink: string): any {
        let resLink: any;
        this.linksList.forEach((link) => {
            let d = new Date();
            if (link.shortenUrl === shortenLink && (d < link.expiryTime)) {
                resLink = link;
            }
        });
        return resLink;
    }
}