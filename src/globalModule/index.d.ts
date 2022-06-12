declare var globalProperty : string
declare const globalConstProperty : number

declare function globalFunction(p:string):string

declare class globalClass{
    name:string
    age:string
    constructor(name:string, age:number)
    say:()=>void
}
declare enum globalEnum{
    tom='tom',
    jerry='jerry',
    green='green',
}
declare namespace globalFunction{
    const namespacePropertyA :number
    const namespacePropertyB :string
}
interface globalInterface{
    name:string;
    age:number
}
type globalType = number
interface String{
    hello():string
}