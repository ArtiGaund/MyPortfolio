// this file is for author only, no one else can update the data in portfolio, thats why i have created one user in 
// appwrite, no one else can create the account, only login and logout functionality.

import conf from '../conf/conf'
// services of appwrites
import {Client, Account, ID} from "appwrite"
export class AuthService {
    // creating properties
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    // login method
    async login({ email, password }){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log("Appwrite authentication error :: login :: ",error )
        }
    }
    async logout(){
        try {
            return await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite authentication error :: logout:: ",error);
        }
    }
}