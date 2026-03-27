//Paramters
function userRegistration(fName, lName, Year, gender, height) {
    console.log("signup with ".concat(fName, ",").concat(lName, ",").concat(Year, ",").concat(gender, ",").concat(height));
}
userRegistration('karan', 'bala', 1995, 'male');
//Default parameter
function profile(userName, isvalid, profilestatus, dob) {
    if (profilestatus === void 0) { profilestatus = "Available"; }
    console.log("profileDetails:".concat(userName, ",").concat(isvalid, ",").concat(profilestatus, ",").concat(dob));
}
profile("Nitya", true, "Aug4");
