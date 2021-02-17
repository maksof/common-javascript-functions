class DataExtractor{
    delFromArray(array, index){
        if(index< array.length)
            array.splice(index,1);
        return array;    
    }
    delMultipleIndexFromArray(array , indexes){
        for (var i=0; i<indexes.length; i++){
                array.splice(indexes[i],1);
        }
        return array;
    }
    mergeArray(array1, array2){
        var array3=[];
        for(var i in array1)
            array3.push(array1[i]); 
        for(var i in array2)
            array3.push(array2[i]);

        return array3;
    }
    maxValueFromArray(array){
        var temp=array[0];
        for(var i in array)
            (temp < array[i])? temp=array[i]:temp;
        
        return temp;
    }
    minValueFromArray(array){
        var temp=array[0];
        for(var i in array)
            (temp > array[i])? temp=array[i]:temp;
        
        return temp;
    }
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
    }
    delKeyFromObj(obj, key){
        delete obj[key];
        return obj;
    }
    findKeyInObject(obj, key){
        if(obj.hasOwnProperty(key))
            return true;
        return false;   
    }
    findPropFromObj(obj, key){
        var temp=[];
        if (this.findKeyInObject(obj, key)){
                temp.push(obj[key]);
            return temp;
        }
        return false;
    }
    sortNumAsc(array){
        return array.sort(function(a, b){return a-b});
    }
    sortNumDes(array){
        return array.sort(function(a, b){return b-a});
    }
    sortData(data){
        return data.sort();
    }
    sortDataRev(data){
        return data.reverse();
    }

}