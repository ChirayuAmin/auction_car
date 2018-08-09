import { makeDecorator } from "@angular/core/src/util/decorators";

export const SERVER_MODE = {
    Local: 'LOCAL'
}
export const CONFIG = {
    deployment: {
        //change this when deployed on demo or production server
        serverMode: SERVER_MODE.Local
    },
    apiUrls: {
        local: 'http://localhost/ProjectManagement.API/api/'
    },
    authApiRoute: {
        authRoute: 'token'
    },
    apiRoutes: {
        cardetail: '',
        createcar: '',
        updatecar: '',
        deletecar: '',
        getcars: '',
        adduser: '',
        updateuser: '',
        bindusers: ''
    },
};