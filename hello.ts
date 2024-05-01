class Hello{
    //#region props
    name: string;
    age: number;
    //#endregion

    //#region constrcutor
    constructor(name: string = 'hello', age: number = 10){
        this.age = age;
        this.name = name
    }
    //#endregion

    //#region getter
    getName(): string{
        return this.name;
    }
    getAge(): number{
        return this.age;
    }
    //#endregion

    //#region setters
    setName(name: string): void{
        this.name = name;
    }
    setAge(age: number): void{
        this.age = age;
    }
    //#endregion
}

