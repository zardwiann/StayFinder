import { Injectable } from "@angular/core";
import { BASE_PATH } from "./api-url-config";


@Injectable({
    providedIn: 'root'
})

export class Api {


  
    getApi: any = {
        // login api
        login: `${BASE_PATH}login.php`,
        register: `${BASE_PATH}register.php `


    }
}