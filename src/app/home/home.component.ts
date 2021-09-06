import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService,  private router: Router) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
            //this.router.navigate(['/']);
        });
    }

    GetGCP(){
        this.router.navigate(['/gcp']);
    }

    GetAzure(){
        this.router.navigate(['/azure']);
    }

    GetStock(){
        this.router.navigate(['/stock']);
    }
}