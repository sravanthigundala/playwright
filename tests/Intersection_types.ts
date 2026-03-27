//Intersection types
//& -->intersection types

type Admin ={
    adminName :string;
    privileges :string[]

};

type Employee ={
    name:string,
    empId : number,
    date :String
}

type QA =Admin & Employee
const user1:QA ={
    adminName :"TestLeaf",
    name : "Arun",
    privileges : ["server"],
    empId :10023,
    date :"03-Aug-2023"
}
console.log(user1.privileges);
console.log(user1.name);
