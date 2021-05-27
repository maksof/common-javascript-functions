module.exports= {
    isEmpty(tempString){
        var output=(tempString == "" && tempString == undefined && tempString == null && tempString.search(/^\s+$/)==0)? true : false
        return output;
    },
    isPhoneNumber(tempString){
        var output=(tempString.search(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g) != -1 && tempString.length <= 20)? true : false
        return output;
    },
    isEmail(tempString){
        var output = (tempString.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) != -1) ? true : false;
        return output;
    },
    /*userNamePasswordCheck(userName, password){
        var output = !(!userName && password || userName && !password) ? true : false; 
        return output;
    }*/
    passwordPattrenCheck(password){
        var regex=/(?=^.{8,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z]))((?=(.*\d){1,})|(?=(.*\W){1,}))^.*$/;
        var output = (password.search(regex) != -1)? true : false;
        return output;
    },
    isPasswordConfirmed(password, confirm){
        var output=(password === confirm) ? true: false;
        return output;
    },
    isValidCreditCard(creditCard){
        var regex=/^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
        var output = (creditCard.search(regex) != -1)? true : false;
        return output;
    },
    isValidZipcode(zipCode){
        var regex=/^\d{5}$/;
        var output = (zipCode.search(regex) != -1)? true : false;
        return output;
    },
    isDate(date){
        var output = (new Date(date) != "Invalid Date") ? true : false;
        return output
    },
    isValidDob(dob){ 
        var output = (this.isDate(dob)) ? (new Date(Date.now()) - new Date(dob) > 0) ? true : false : false;
        return output;
    },
    isArrayEmpty(array){
        var output = (array.length==undefined || array.length==0 || array[0]==null)? true : false; 
        return output;
    },
    isObjEmpty(obj) {
        for(var i in obj) {
          if(obj.hasOwnProperty(i)) {
            return false;
          }
        }
        return true;
    },
    isBoolean(value){
        return value === true || value === false || toString.call(value) === '[object Boolean]';
    },
    isNull(value){
        return value === null;
    },
    isNaN(value){
        return value != value;
    },
    isNumber(value){
        return value === parseInt(value);
    },
    isJSON(value){
        return toString.call(value) === '[object Object]';
    },
    isSameType(val1, val2){
        if(this.isNaN(val1) || this.isNaN(val2)) {
            return this.isNaN(val1) === this.isNaN(val2);
           }
           return typeof(val1) === typeof(val2);
    },
    checkValidUsername(username){
        if(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username)) return true
        else return false
    },
    printFieldValidator(){
        return "Field-Validator";
    }
}
