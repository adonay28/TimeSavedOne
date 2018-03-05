import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    private showHeader: boolean = true;
    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log("current url", event.url); // event.url has current url
                if(event.url === "/login")
                    this.showHeader = false;
            }
        });
    }

    ngOnInit() {
        console.log(this.router.url);
    }
}