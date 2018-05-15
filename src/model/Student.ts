export class Student implements IPerson {
    private _studentId: string;
    constructor(public _firstName: string, public _lastName: string, public _age: number){
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
    }


    get studentId(): string {
        return this._studentId;
    }

    set studentId(value: string) {
        this._studentId = value;
    }


    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }
}