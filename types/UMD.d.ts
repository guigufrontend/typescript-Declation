
// foo 可以全局使用
export as namespace globalUMD;

export = globalUMD;
declare namespace globalUMD{
    const globalNumber:number
}

// 扩展已经存在的全局变量
declare global{
    interface String{
        say():string
    }
}
