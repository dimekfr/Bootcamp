import { Address } from "./address.model";

export interface User {
    id:number;
    name: string;
    email:string;
    password: string;
    admin: boolean;
    phone: string;
    address: Address;
}
