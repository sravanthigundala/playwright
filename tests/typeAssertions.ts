//Type Assertions

//using angular brackets

let response:any="Record created sucessfully";
let MyResponse:number =(<string>response).length;
console.log(MyResponse);
console.log(typeof MyResponse);

let response1:any="Record created sucessfully";
let MyResponse1 =(<string>response);
console.log(MyResponse1);
console.log(typeof MyResponse1);

let statuscode: any ='success';
let statuscodelength:string = statuscode as string;
console.log(statuscodelength);
