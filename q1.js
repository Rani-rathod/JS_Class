class Employee{
    constructor(givenName,givenExpreince,givenDivision){
        this.name = givenName;
        this.expreince = givenExpreince;
        this.division = givenDivision;
    }
    solgan(){
        return `I am ${this.name} and this comany is the best`;
    }

    joiningYear(){
        return 2020-this.expreince;
    }

    static add(a,b){
        return a+b;
    }
}
a = new Employee("Rani",10,"Division");
console.log(a.joiningYear()); 

// console.log(Employee.add(12,5)) 