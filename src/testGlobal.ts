// 以下变了和方法均有类型提示

// function globalFunction(p: string): string
// namespace globalFunction
globalFunction('tom')

// var globalProperty: string
globalProperty

// const globalConstProperty: number
console.log(globalConstProperty);
const tom = new globalClass('tom', 2)
tom.say()

// (enum member) globalEnum.tom = "tom"
console.log(globalEnum.tom)

//const globalFunction.namespacePropertyA: number
console.log(globalFunction.namespacePropertyA)

// const globalFunction.namespacePropertyB: string
console.log(globalFunction.namespacePropertyB)

// interface globalInterface
let jerry:globalInterface
// type number
jerry.age

// type number
let green :globalType

'2'.hello