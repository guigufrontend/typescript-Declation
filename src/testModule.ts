import module,{
    moduleFunction, ModuleAnimal, moduleLetProperty, moduleEnum, moduleProperty
} from 'customModule'
console.log(moduleProperty)
console.log(module.age)
console.log(module.name)
console.log(moduleLetProperty)

moduleFunction('tom')
console.log(moduleFunction.namespacePropertyA)
console.log(moduleFunction.namespacePropertyB)
const tom = new ModuleAnimal('tom', 2)
tom.say()
console.log(moduleEnum.green)