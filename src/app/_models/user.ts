import { Directive, Input } from "@angular/core";
@Directive()
export class User {
    id: number;
   
    firstName: string;
    lastName: string;
    token?: string;

    _username: string;
    get username(): string {
        return this._username;
    }
    @Input() set username(value: string) {
        this._username = value;
    }
}