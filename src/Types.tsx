export interface IAuthor {
    name: string
}

export interface IBook {
    name: string;
    price: string;
    author: string;
}
export enum option{
    edit,
    delete
}
export  interface ISelector{
    value:string,
    label:string
}
export interface BookName {
    name : string;
}
