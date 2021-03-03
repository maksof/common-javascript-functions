module.exports ={
    delFromArray(array, index){
        if(index< array.length)
            array.splice(index,1);
        return array;    
    },
    delMultipleIndexFromArray(array , indexes){
        for (var i = indexes.length -1; i >= 0; i--){
                array.splice(indexes[i],1);
        }
        return array;
    },
    mergeArray(array1, array2){
        var array3=[];
        for(var i in array1)
            array3.push(array1[i]); 
        for(var i in array2)
            array3.push(array2[i]);

        return array3;
    },
    differnceArray(array1, array2){
        return (array1.filter(x => !array2.includes(x)));
    },
    symetricDifference(array1, array2){
        return array1.filter(x => !array2.includes(x)).concat(array2.filter(x => !array1.includes(x)));
    },
    intersection(array1, array2){
        return array1.filter(x => array2.includes(x))
    },
    maxValueFromArray(array){
        var temp=array[0];
        for(var i in array)
            (temp < array[i])? temp=array[i]:temp;
        
        return temp;
    },
    minValueFromArray(array){
        var temp=array[0];
        for(var i in array)
            (temp > array[i])? temp=array[i]:temp;
        
        return temp;
    },
    arrayShuffle(array){
        var i = array.length, temp, randomIndex;
        while (0 !== i) {
          randomIndex = Math.floor(Math.random() * i);
          i -= 1;
          temp = array[i];
          array[i] = array[randomIndex];
          array[randomIndex] = temp;
        }
        return array;
    },
    delKeyFromObj(obj, key){
        delete obj[key];
        return obj;
    },
    findKeyInObject(obj, key){
        if(obj.hasOwnProperty(key))
            return true;
        return false;   
    },
    staticfindPropFromObj(obj, key){
        var temp=[];
        if (this.findKeyInObject(obj, key)){
                temp.push(obj[key]);
            return temp;
        }
        return false;
    },
    sortNumAsc(array){
        return array.sort(function(a, b){return a-b});
    },
    sortNumDes(array){
        return array.sort(function(a, b){return b-a});
    },
    sortData(data){
        return data.sort();
    },
    sortDataRev(data){
        return data.reverse();
    },
    getCertificateKey(){
        var characters = 'ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210zyxwvutsrqponmlkjihgfedcba';
        var profileKey = '';
        var max = characters.length - 1;
        var sepIndex = [8, 13, 18, 23];
        for (var i = 0; i < 36; i++) {
            if(sepIndex.indexOf(i) != -1) profileKey += '-';
            else profileKey += characters[Math.floor(Math.random() * max) + 1];
        }
        return profileKey;
    },

    sendResponseBack(res, status, message, data) {
        var responseJson = {};
        responseJson.status = status;
        responseJson.message = message;
        if(data) responseJson.data = data;
        res.send(responseJson);
    },
    generateBluffId(){
        var characters = 'ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210zyxwvutsrqponmlkjihgfedcba';
        var token = '';
        var max = characters.length - 1;
        for (var i = 0; i < 32; i++) {
            token += characters[Math.floor(Math.random() * max) + 1];
        }
        return token;
    },
    generatekey(){
        var characters = 'ZYXWVUTSRQPONMLKJIHGFEDCBA0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210';
        var key = '';
        var max = characters.length - 1;
        for (var i = 0; i < 266; i++) {
            key += characters[Math.floor(Math.random() * max) + 1];
        }
        return key;
    },
    generateUniqueProfileKey(){
        var characters = 'ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210zyxwvutsrqponmlkjihgfedcba';
        var profileKey = '';
        var max = characters.length - 1;
        var sepIndex = [8, 13, 18, 23];
        for (var i = 0; i < 36; i++) {
            if(sepIndex.indexOf(i) != -1) profileKey += '-';
            else profileKey += characters[Math.floor(Math.random() * max) + 1];
        }
        return profileKey;
    },
    async sendEmail(email, subject, message, response, action , tokenId) {

        let transporter = nodemailer.createTransport({
            host: config.smtp.host,
            port: 465,
            secure: true,
            auth: {
              user: config.smtp.senderEmail, 
              pass: config.smtp.contactEmailPassword,
            },
            tls: {
                rejectUnauthorized: false,
              },
          });
        transporter.sendMail({
            from: "<"+config.smtp.senderEmail+">",
            to: email, 
            subject: subject,
            html: message,
            },(err,result)=>{
                if(err) console.log(err)
                else if(action == 'SIGN_UP') {common.sendResponseBack(response, 'OK', 'A verification email is sent to your email address. Please activate your account to get started.', null);}
                else if(action == 'SIGN_UP_LINKEDIN') {common.sendResponseBack(response, 'OK', 'Your account is successfully created with Linked In.', tokenId);}
            });
    },
    printDataExtractor(){
        return'data-Extractor';
    }  
}
