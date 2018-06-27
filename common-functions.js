function dateFormatSlashDDMM(input) {
	var date = new Date(input);
	return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}

function dateFormatSlashMMDD(input) {
	var date = new Date(input);
	return (date.getMonth()+1) +"/"+date.getDate()+"/"+date.getFullYear();
}

function dateFormatDashDDMM(input) {
	var date = new Date(input);
	return date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear();
}

function dateFormatDashMMDD(input) {
	var date = new Date(input);
	return (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
}

function monthNameFormatDate(input) {
	var date = new Date(input);
	return date.getDate()+"-"+monthNameWiseFormate((date.getMonth()+1))+"-"+date.getFullYear();
}

function monthNameFormatDateMMDD(input) {
	var date = new Date(input);
	return monthNameWiseFormate((date.getMonth()+1))+"-"+date.getDate()+"-"+date.getFullYear();
}

function dayMonthNameFormatDate(input) {
	var date = new Date(input);
	return dateFormat(date.getDate())+" "+monthNameWiseFormate((date.getMonth()+1))+" "+date.getFullYear();
}

function dayNameMonthNameFormatDate(input) {
	var date = new Date(input);
	var days = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[date.getDay()+1]+", "+dateFormat(date.getDate()+1)+" "+monthNameWiseFormate((date.getMonth()+1))+" "+date.getFullYear();
}

function dayDiff(input1,input2) {
	var date = new Date(input1);
	var date2 = new Date(input2);
	if(date.getDate()<date2.getDate()) var diffDay = date2.getDate()-date.getDate();
	else var diffDay = date.getDate()-date2.getDate();
	var oneDay = 24*60*60*1000;
	return Math.round(Math.abs((date.getTime() - date2.getTime())/(oneDay)));
}

function monthDiff(input1,input2) {
	var date1 = new Date(input1);
	var date2 = new Date(input2);
    var months;
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth() + 1;
    months += date2.getMonth();
    return months <= 0 ? 0 : months+1;
}

function yearDiff(input1,input2) {
	var date = new Date(input1);
	var date2 = new Date(input2);
	if(date.getFullYear()<date2.getFullYear()) return date2.getFullYear()-date.getFullYear();
	else return date.getFullYear()-date2.getFullYear();
}

function monthNameWiseFormate(b) {

	var months = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return months[b];
}

function dateFormat(c) {
	var days=['','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st']
	return days[c];
}


function checkArrayEmptyOrNot(array) {
	if (array === undefined || array.length == 0||(array[0]=="" && array.length==1)) return "array is empty";
	else return "array is not empty Array = "+array;}

	function deleteArrayRec(array, delIndex) {
	arr=[];
	for(var i=0;i<array.length;i++){
		if(array[i]==delIndex) continue;
		else {
			arr.push(array[i]);
		}
	}
	return arr;
}

function deleteMultipleRecFromArray(array, delIndex) {
	for(var i=0; i<array.length; i++){
		for(var j=0;j<delIndex.length;j++){
			if(array[i]==delIndex[j]) {
				array.splice(i,1);
			}
		}
	}
	return array;
}

function MergeArray(array1,array2) {
	return array1.concat(","+array2);
}

function IntersectTwoArray(array1,array2) {
	arr=[];
	for(var i=0; i<array1.length; i++){
		for(var j=0;j<array2.length;j++){
			if(array1[i]==array2[j]) {
				arr.push(array2[j]);
			}
		}
	}
	return arr;
}

function DelMultiRecByIndex(array,delIndex) {
	arr=[];
	for(var i=0; i<array.length; i++){
		for(var j=0;j<delIndex.length;j++){
			if(i==delIndex[j]) {
				i+=1;
			}
		}
		arr.push(array[i]);
	}
	return arr;
}	

function DelMultiObjRecByValue(array, delIndex) {
	for(var i=0; i<array.length; i++){
		for(var j=0;j<delIndex.length;j++){
			if(JSON.stringify(array[i])==JSON.stringify(delIndex[j])) {
				array.splice(i,1);
			}
		}
	}
	return array;
}

function findMaxValueFromArray(array){
	return (Math.max.apply(null, array));
}

function findMinValueFromArray(array) {
	return (Math.min.apply(null, array));
}	

function sumUpQuantitySameIDfromObj(object) {
	obj={};
	arr=[];
	for(i=0;i<object.length;i++){
		for(j=i+1;j<object.length;j++){
			if(object[i].id==object[j].id)
			{
				arr.push(obj={
					id: object[i].id,
					count: object[i].count+object[j].count
				});
			}
		}
	}
	return arr;
}

function sumUpQuantityByProvidingIDfromObj(object,id) {
	obj={};
	arr=[];
	for(i=0;i<object.length;i++){
		for(j=i+1;j<object.length;j++){
			if(object[i].id==object[j].id && object[j].id==id )
			{
				arr.push(obj={
					id: object[i].id,
					count: object[i].count+object[j].count
				});
			}
		}
	}
	return arr;	
}

function findObjProvidingIDfromObj(object,id) {
	arr=[];
	for(i=0;i<object.length;i++){
		if(object[i].id==id)
		{
			arr.push(object[i]);
		}
	}
	return arr;
}

function arrayShuffligFunc(array) {
	return array.sort(function(a, b){return 0.5 - Math.random()});
}