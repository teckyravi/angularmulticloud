import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { MsalService } from '@azure/msal-angular';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    /*
    isLoggedIn() {
        return this.msalService.instance.getActiveAccount() != null
    } 
    */

    logout() {
        /*
        if(this.isLoggedIn() === true){
            this.msalService.instance.logout();
        }
        */

        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}