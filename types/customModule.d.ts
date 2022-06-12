export const moduleProperty:string;
export function moduleFunction(p:string):string
export let moduleLetProperty:number
export class ModuleAnimal{
    name:string
    age:number
    constructor(name:string, age:number)
    say():void
}
export enum moduleEnum{
    tom='tom',
    jerry='jerry',
    green='green',
}

export namespace moduleFunction{
    const namespacePropertyA :number
    const namespacePropertyB :string
}

declare const defaultProperty: {
    name:string, 
    age:number
}
export default defaultProperty