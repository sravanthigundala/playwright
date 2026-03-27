//Paramters

function userRegistration(fName:string,lName:string,Year:number,gender?:string,height?:string){
    console.log(`signup with ${fName},${lName},${Year},${gender},${height}`);

}
userRegistration('karan','bala',1995, 'male');

//Default parameter
function profile(userName:string,isvalid:boolean,profilestatus:string="Available",dob?:string){
    console.log(`profileDetails:${userName},${isvalid},${profilestatus},${dob}`);

}
profile("Nitya", true,"Aug4");