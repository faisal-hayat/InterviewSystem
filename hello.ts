import { IPerson } from "./interface/IPerson";

class Person implements IPerson{
    //#region props
    public name: string;
    private age: number;
    gender: IPerson['gender'] = 'M';
    //#endregion

    //#region constrcutor
    constructor(name: string = 'hello', age: number = 10){
        this.age = age;
        this.name = name
    }

    //#region interface implementation
    completeDetail(): void {
        console.log('name is : ' + this.name.toString() + '' + 'age is : ' + this.age.toString())
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

let obj: Person = new Person();
obj.setAge(100);
obj.setName('hello');

console.log('name is : ' + obj.getName().toString())
console.log('age is : ' + obj.getAge().toString())