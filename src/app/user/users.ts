export class Usermodel{
    constructor(
        public userId:number=0,
        public name:string="",
        public email:string="",
        public password:string="",
        public confirmPassword:string="",
        public isManager:boolean=false
    ){}
}

export class tbluser{
    constructor(
        public userId:number,
        public name:string,
        public email:string,
        public password:string,
        public isManager:boolean
    ){}
}