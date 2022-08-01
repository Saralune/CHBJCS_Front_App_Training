export class User {
    email:string;
    pwd:string;
    roles:string[];

    constructor(email:string, pwd:string, roles:string[]) {

        this.email=email;
        this.pwd=pwd;
        this.roles= roles;
    }
};