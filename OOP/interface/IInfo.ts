export default interface IInfo{
    //#region getters
    getMiddleName(): string;
    getEducation(): string;
    //#endregion

    //#region setters
    setMiddleName(name: string): void;
    setEducation(education: string): void;
    //#endregion
}