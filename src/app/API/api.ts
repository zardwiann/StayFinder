import { Injectable } from "@angular/core";
import { BASE_PATH } from "./api-url-config";


@Injectable({
    providedIn: 'root'
})

export class Api {



    getApi: any = {
        // login api
        login: `${BASE_PATH}login.php`,
        register: `${BASE_PATH}register.php `,
        createaccount: `${BASE_PATH}createaccount.php `,
        update_account: `${BASE_PATH}update_account.php `,
        getowner: `${BASE_PATH}getowner.php`,
        // dashboard

        user_role: `${BASE_PATH}user_role.php `,
        boardinghouselist: `${BASE_PATH}boardinghouselist.php `,
        ownerrecord: `${BASE_PATH}ownerrecord.php `,
        selecttheOwner: `${BASE_PATH}selectOwner.php`,
        updatestatus: `${BASE_PATH}updatestatus.php`,
        addboardinghouse: `${BASE_PATH}addboardinghouse.php `,
        selectboarding: `${BASE_PATH}selectboarding.php `,
        reservationlist: `${BASE_PATH}reservationlist.php `,
        userlist: `${BASE_PATH}userlist.php `,
        boardinghouseownerlist: `${BASE_PATH}boardinghouseownerlist.php `,

        addbooking: `${BASE_PATH}addbooking.php`,

        bookinglist: `${BASE_PATH}bookinglist.php`,

        mapview: `${BASE_PATH}mapview.php`,
        map: `${BASE_PATH}map.php`,
        get_image: `${BASE_PATH}get_image.php`,
        updateboardinghouse:`${BASE_PATH}updateboardinghouse.php`,

        SelectBoardinghouse:`${BASE_PATH}SelectBoardinghouse.php`,
        deleteownerboarding: `${BASE_PATH}deleteownerboarding.php`,
        bookingapproval: `${BASE_PATH}bookingapproval.php`,

        SelectBooking:`${BASE_PATH}SelectBooking.php`,
        UpdateBoardinghouse:`${BASE_PATH}UpdateBoardinghouse.php`,
        deletebooking:`${BASE_PATH}deletebooking.php`,
    }
}