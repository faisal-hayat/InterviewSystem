import Person from "./Person";
import IInfo from "./interface/IInfo";

class Ali extends Person implements IInfo{
    private middleName: string;
    private education: string;
    constructor(middleName:string = '', education: string = ''){
        super();
        this.middleName = middleName;
        this.education = education;
    }
    getMiddleName(): string {
        throw new Error("Method not implemented.");
    }
    getEducation(): string {
        throw new Error("Method not implemented.");
    }
    setMiddleName(name: string): void {
        throw new Error("Method not implemented.");
    }
    setEducation(education: string): void {
        throw new Error("Method not implemented.");
    }
}

let obj: Ali = new Ali();

obj.setName('Ali');
obj.setAge(10);

obj.completeDetail();

export default Ali;