var dateArray =[];
var dateArray2 =[];

function setDateDDMM() {
	var curDate = document.getElementById("datepick1").value;
	console.log(curDate);
	this.dateArray = curDate.split('-');
	dateFormatSlashDDMM(this.dateArray);
}

function setDateMMDD(argument) {
	var curDate = document.getElementById("datepick2").value;
	this.dateArray = curDate.split('-');
	dateFormatSlashMMDD(this.dateArray);
}

function setDateDDMMdash() {
	var curDate = document.getElementById("datepick3").value;
	this.dateArray = curDate.split('-');
	dateFormatDashDDMM(this.dateArray);
}

function setDateMMDDdash() {
	var curDate = document.getElementById("datepick4").value;
	this.dateArray = curDate.split('-');
	dateFormatDashMMDD(this.dateArray);
}

function setDateMonthNameWiseDD() {
	var curDate = document.getElementById("datepick5").value;
	this.dateArray = curDate.split('-');
	monthNameFormatDate(this.dateArray);
}

function setDateMonthNameWiseMM() {
	var curDate = document.getElementById("datepick6").value;
	this.dateArray = curDate.split('-');
	monthNameFormatDateMMDD(this.dateArray);
}

function setDateMonthNameWise() {
	var curDate = document.getElementById("datepick7").value;
	this.dateArray = curDate.split('-');
	dayMonthNameFormatDate(this.dateArray);
}

function dayDifference() {
	var curDate = document.getElementById("datepick8").value;
	this.dateArray = curDate.split('-');
	var date2 = document.getElementById("datepick11").value;
	this.dateArray2 = date2.split('-');
	dayDiff(this.dateArray,this.dateArray2);
}

function monthDifference() {
	var curDate = document.getElementById("datepick9").value;
	this.dateArray = curDate.split('-');
	var date2 = document.getElementById("datepick12").value;
	this.dateArray2 = date2.split('-');
	monthDiff(this.dateArray,this.dateArray2);
}

function yearDifference() {
	var curDate = document.getElementById("datepick10").value;
	this.dateArray = curDate.split('-');
	var date2 = document.getElementById("datepick13").value;
	this.dateArray2 = date2.split('-');
	yearDiff(this.dateArray,this.dateArray2);
}

function dayNameWithMonthName() {
	var curDate = document.getElementById("datepick14").value;
	this.dateArray = curDate;
	dayNameMonthNameFormatDate(this.dateArray);
}