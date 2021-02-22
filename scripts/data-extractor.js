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
    printDataExtractor(){
        return'data-Extractor';
    }  
}
