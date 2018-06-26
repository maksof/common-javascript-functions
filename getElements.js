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