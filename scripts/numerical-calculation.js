class NumericalCalcualtor{
    percentage(output,input){
        var str=(output/input) *100+"";
        return str.substring(0,5)+"%";
    }
    ageCalculator(dob){
        var diff = Date.now() -new Date(dob).getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970)
    }
    gcdCalculate(num1,num2){ ///////// Eucledian Algo
        var R;
        while ((num1 % num2) > 0)  {
          R = num1 % num2;
          num1 = num2;
          num2 = R;
        }
        return num2;
    } 
    dateDiff(date1,date2){
        var val=(new Date(date1) > new Date(date2)) ? (new Date(date1)-new Date(date2)) : (new Date(date2)-new Date(date1))

        var seconds = Math.floor(val/1000);
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
            return Math.floor(seconds) + " seconds";
    }
    monthDiff(input1, input2){
        var date1=new Date(input1);
        var date2=new Date(input2);
        var month= Math.abs(date1-date2);
        return Math.round((month/(1000*60*60*24))/30);

    }
    yearDiff(input1, input2){
        var date1=new Date(input1);
        var date2=new Date(input2);
        var month= Math.abs(date1-date2);
        return Math.round(Math.floor((month/(1000*60*60*24))/28)/12);

    }
    mean(array , n){
        var sum=0;
        for(var i=0; i<array.length;i++){
            sum += array[i];
        }
        return sum/n ;
    }
    factorial(number){
        return (number >= 1)? number*this.factorial(number-1) : 1;
    }

    permutation(number , r){
        return this.factorial(number) / this.factorial(number-r);
    }
    combination(number , r){
        return (parseInt(number)==parseInt(r)) ? 1: this.factorial(number)/(this.factorial(number-r)*this.factorial(r));
    }
    probablity(event, sampleSpace){
        return (parseInt(event) < parseInt(sampleSpace)) ?  (event/sampleSpace)*100+"%" : -1;
    }
    variance(array , n){
        var avg=this.mean(array, n);
        var sum=0;
        for(var i=0; i<array.length; i++){
            sum += Math.pow((array[i]-avg),2);
        }
        return sum/(n-1);
    }
    standardDeviation(array, n){
        return Math.sqrt(this.variance(array, n));
    }
    convertDecimalToBinary(value){
        value = parseInt(value);
        var i=1, bin=0, reminder;
        while(value != 0){
            reminder = value%2;
            value = parseInt(value/2);
            bin += reminder*i
            i *= 10;
        }
        return bin;
    }
    convertBinryToDecimal(value){
        if(value.search(/^[0-1]*$/) != -1){
            var dec=0;
            var i=value.length-1;
             while(i >= 0){
                 dec += value[value.length-(i+1)]*Math.pow(2,i);
                    i--;
                }
            return dec;
        }else return -1;
    }
    convertHexToDecimal(value){
        if(value.search(/^[a-fA-F0-9]+$/) != -1){
            var hex=0, temp;
            var str;
            var i=value.length-1;
             while(i >= 0){
                    str=value[value.length-(i+1)];
                    temp=( str == 'A') ? 10 : (str == 'B') ? 11 : ( str == 'C') ? 12 : (str == 'D') ? 13 : ( str == 'E') ? 14 : (str == 'F') ? 15 : str;
                    hex += temp*Math.pow(16,i);
                    i--;
                }
            return hex;
        }else return -1;
       
    }
    moduloCalculator(num1, num2){
        
    }


}