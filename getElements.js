function setDateDDMM() {
	var curDate = document.getElementById("datepick1").value;
	var dateArray = curDate.split('-');
	var value1 = dateFormatSlashDDMM(dateArray);
	document.getElementById("op1").innerHTML = value1;
}

function setDateMMDD() {
	var curDate = document.getElementById("datepick2").value;
	var dateArray = curDate.split('-');
	var value2 = dateFormatSlashMMDD(dateArray);
	document.getElementById("op2").innerHTML = value2;
}

function setDateDDMMdash() {
	var curDate = document.getElementById("datepick3").value;
	var dateArray = curDate.split('-');
	var value3 = dateFormatDashDDMM(dateArray);
	document.getElementById("op3").innerHTML = value3;
}

function setDateMMDDdash() {
	var curDate = document.getElementById("datepick4").value;
	var dateArray = curDate.split('-');
	var value4 = dateFormatDashMMDD(dateArray);
	document.getElementById("op4").innerHTML = value4;
}

function setDateMonthNameWiseDD() {
	var curDate = document.getElementById("datepick5").value;
	var dateArray = curDate.split('-');
	var value5 = monthNameFormatDate(dateArray);
	document.getElementById("op5").innerHTML = value5;
}

function setDateMonthNameWiseMM() {
	var curDate = document.getElementById("datepick6").value;
	var dateArray = curDate.split('-');
	var value6 = monthNameFormatDateMMDD(dateArray);
	document.getElementById("op6").innerHTML = value6;
}

function setDateMonthNameWise() {
	var curDate = document.getElementById("datepick7").value;
	var dateArray = curDate.split('-');
	var value7 = dayMonthNameFormatDate(dateArray);
	document.getElementById("op7").innerHTML = value7;
}

function dayNameWithMonthName() {
	var curDate = document.getElementById("datepick14").value;
	var dateArray = curDate;
	var value8 = dayNameMonthNameFormatDate(dateArray);
	document.getElementById("op14").innerHTML = value8;
}

function dayDifference() {
	var curDate = document.getElementById("datepick8").value;
	var dateArray = curDate.split('-');
	var date2 = document.getElementById("datepick11").value;
	var dateArray2 = date2.split('-');
	var value9 = dayDiff(dateArray,dateArray2);
	document.getElementById("diffOfDate").innerHTML = value9;
}

function monthDifference() {
	var curDate = document.getElementById("datepick9").value;
	var dateArray = curDate.split('-');
	var date2 = document.getElementById("datepick12").value;
	var dateArray2 = date2.split('-');
	var value10 = monthDiff(dateArray,dateArray2);
	document.getElementById("diffOfMonth").innerHTML = value10;
}

function yearDifference() {
	var curDate = document.getElementById("datepick10").value;
	var dateArray = curDate.split('-');
	var date2 = document.getElementById("datepick13").value;
	var dateArray2 = date2.split('-');
	var value11 = yearDiff(dateArray,dateArray2);
	document.getElementById("diffOfYear").innerHTML = value11;
}

function checkArrayEmpOrNt() {
	var curData = document.getElementById("arrayfield1").value;
	var dataArray = curData.split(',');
	var getAns = checkArrayEmptyOrNot(dataArray);
	if(getAns==true) displayArray="array is Empty";
	else displayArray="array is not Empty";
	document.getElementById("opArray1").innerHTML = displayArray;
}

function DelArrayRec() {
	var curData = document.getElementById("arrayfield2").value;
	var curData2 = document.getElementById("arrayfield3").value;
	var displayArray = deleteArrayRec(JSON.parse(curData),curData2);
	document.getElementById("opArray2").innerHTML = displayArray;
}

function delMultiRec() {
	var curData = document.getElementById("arrayfield4").value;
	var curData2 = document.getElementById("arrayfield5").value;
	var dataArray2 = curData2.split(',');
	var displayArray = deleteMultipleRecFromArray(JSON.parse(curData),dataArray2);
	document.getElementById("opArray3").innerHTML = displayArray;
}

function MergeTwoArray() {
	var curData = document.getElementById("arrayfield6").value;
	var curData2 = document.getElementById("arrayfield7").value;
	var displayArray = MergeArray(JSON.parse(curData),JSON.parse(curData2));
	document.getElementById("opArray4").innerHTML = JSON.stringify(displayArray);
}

function intersectArray() {
	var curData = document.getElementById("arrayfield8").value;
	var dataArray = JSON.parse(curData);
	var curData2 = document.getElementById("arrayfield9").value;
	var dataArray2 = JSON.parse(curData2);
	var displayArray = IntersectTwoArray(dataArray,dataArray2);
	document.getElementById("opArray5").innerHTML = JSON.stringify(displayArray);
}

function delMultiRecbyIndex() {
	var curData = document.getElementById("arrayfield10").value;
	var dataArray = JSON.parse(curData);
	var curData2 = document.getElementById("arrayfield11").value;
	var displayArray = DelMultiRecByIndex(dataArray,curData2);
	document.getElementById("opArray6").innerHTML = JSON.stringify(displayArray);
}

function delMultiRecbyValues() {
	var curData = document.getElementById("arrayfield12").value;
	var dataArray = JSON.parse(curData);
	var curData2 = document.getElementById("arrayfield13").value;
	var dataArray2 = JSON.parse(curData2);
	var displayArray = DelMultiObjRecByValue(dataArray,dataArray2);
	document.getElementById("opArray7").innerHTML = JSON.stringify(displayArray);
}

function maxArrayVales() {
	var curData = document.getElementById("arrayfield14").value;
	var displayArray = findMaxValueFromArray(JSON.parse(curData));
	document.getElementById("opArray8").innerHTML = displayArray;
}

function minArrayVales() {
	var curData = document.getElementById("arrayfield15").value;
	var displayArray = findMinValueFromArray(JSON.parse(curData));
	document.getElementById("opArray9").innerHTML = displayArray;
}

function sumUpQuantitySameId() {
	var curData = document.getElementById("arrayfield16").value;
	dataArray=JSON.parse(curData);
	var displayArray = sumUpQuantitySameIDfromObj(dataArray);
	document.getElementById("opArray10").innerHTML = JSON.stringify(displayArray);
}

function sumUpQuantityByProvidingId() {
	var curData = document.getElementById("arrayfield17").value;
	dataArray=JSON.parse(curData);
	var curData2 = document.getElementById("arrayfield18").value;
	var displayArray = sumUpQuantityByProvidingIDfromObj(dataArray,curData2);
	document.getElementById("opArray11").innerHTML = JSON.stringify(displayArray);	
}

function findObjByGivenId() {
	var curData = document.getElementById("arrayfield19").value;
	dataArray=JSON.parse(curData);
	var curData2 = document.getElementById("arrayfield20").value;
	var displayArray = findObjProvidingIDfromObj(dataArray,curData2);
	document.getElementById("opArray12").innerHTML = JSON.stringify(displayArray);		
}

function arrayShuffle() {
	var curData = document.getElementById("arrayfield21").value;
	var dataArray = curData.split(',');
	var displayArray = arrayShuffligFunc(dataArray);
	document.getElementById("opArray13").innerHTML = displayArray;	
}

function objEmptOrNot() {
	var curData = document.getElementById("objField1").value;
	if(curData=='') document.getElementById("opObj1").innerHTML = "can not be null";
	else{
		var dataArray = JSON.parse(curData);
		var getAns = objectEmptyOrNot(dataArray);
		if(getAns==true) displayArray="Object is Empty";
		else displayArray="object array is not empty";
		document.getElementById("opObj1").innerHTML = displayArray;	
	}
}

function deleteKeyFromObject() {
	var curData1 = document.getElementById("objField2").value;
	var dataArray1 = JSON.parse(curData1);
	var curData2 = document.getElementById("objField3").value;
	var dataArray2 = JSON.parse(curData2);
	var curData3 = document.getElementById("objField4").value;
	var dataArray3 = curData3;
	var displayArray = deleteKeyFromObj(dataArray1,dataArray2,dataArray3);
	document.getElementById("opObj2").innerHTML = JSON.stringify(displayArray);		
}

function cnvtObjectLowerAndUperCase() {
	var curData = document.getElementById("objField5").value;
	var dataArray = JSON.parse(curData);
	var displayArray = convertObjectToUperAndLowerCaseFunc(dataArray);
	document.getElementById("opObj3").innerHTML = displayArray;	
}

function valueAgainsKey() {
	var curData = document.getElementById("objField6").value;
	var dataArray = JSON.parse(curData);
	var curData = document.getElementById("objField7").value;
	var getAns = valueAgainstKeyFunc(dataArray,curData);
	if (getAns==false) displayArray="Key not exist";
	else displayArray=getAns;
	document.getElementById("opObj4").innerHTML = JSON.stringify(displayArray);		
}