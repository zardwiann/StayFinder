
export class Usermodule {
    public id: string;
    public fullname: string;
    public password: string;
    public phone: string;
    public housename: string;
    public address: string;
    public rooms: string;
    public price: string;
    public aminities: string;
    public latitude: string;
    public longitude: string;
    public role: string;
    public status:string;




    constructor(
        id: string,
        fullname: string,
        password: string,
        phone: string,
        housename: string,
        address: string,
        rooms: string,
        price: string,
        aminities: string,
        latitude: string,
        longitude: string,
        role: string,
        status:string


    ) {

        this.id = id;
        this.fullname = fullname;
        this.password = password;
        this.phone = phone;
        this.housename = housename;
        this.address = address;
        this.rooms = rooms;
        this.price = price;
        this.aminities = aminities;
        this.latitude = latitude;
        this.longitude = longitude;
        this.role = role;
        this.status = status;


    }
}



