import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component ({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
    constructor(private shared_service: SharedService){

    }
    ngOnInit() {
    }
}