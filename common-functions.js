var dateArray =[];
var dateArray2 =[];

function dateFormatSlashDDMM(a) {
	this.dateArray=a;
	var output1 = this.dateArray[2]+"/"+this.dateArray[1]+"/"+this.dateArray[0];
	document.getElementById("op1").innerHTML = output1;
}

function dateFormatSlashMMDD(a) {
	this.dateArray=a;
	var output2 = this.dateArray[1]+"/"+this.dateArray[2]+"/"+this.dateArray[0];
	document.getElementById("op2").innerHTML = output2;
}

function dateFormatDashDDMM(a) {
	this.dateArray=a;
	var output3 = this.dateArray[2]+"-"+this.dateArray[1]+"-"+this.dateArray[0];
	document.getElementById("op3").innerHTML = output3;
}

function dateFormatDashMMDD(a) {
	this.dateArray=a;
	var output4 = this.dateArray[1]+"-"+this.dateArray[2]+"-"+this.dateArray[0];
	document.getElementById("op4").innerHTML = output4;
}

function monthNameFormatDate(a) {
	this.dateArray=a;
	var output5 = this.dateArray[2]+"-"+monthNameWiseFormate(this.dateArray[1])+"-"+this.dateArray[0];
	document.getElementById("op5").innerHTML = output5;
}

function monthNameFormatDateMMDD(a) {
	var output6 = monthNameWiseFormate(this.dateArray[1])+"-"+this.dateArray[2]+"-"+this.dateArray[0];
	document.getElementById("op6").innerHTML = output6;
}

function dayMonthNameFormatDate(a) {
	var output7 = dateFormat(this.dateArray[2])+" "+monthNameWiseFormate(this.dateArray[1])+" "+this.dateArray[0];
	document.getElementById("op7").innerHTML = output7;
}

function dayNameMonthNameFormatDate(a) {
	var getdate=a;
	this.dateArray = getdate.split('-');
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date(getdate);
	var dayName = days[d.getDay()];
	var tem=this.dateArray[2];
	var output14 = dayName+", "+dateFormat(tem)+" "+monthNameWiseFormate(this.dateArray[1])+" "+this.dateArray[0];
	document.getElementById("op14").innerHTML = output14;
}

function dayDiff(a,b) {
	this.dateArray=a;
	this.dateArray2=b;
	if(this.dateArray[2]<this.dateArray2[2]){
		var diffDay = this.dateArray2[2]-this.dateArray[2];
	}
	else{
		var diffDay = this.dateArray[2]-this.dateArray2[2];
	}
	document.getElementById("diffOfDate").innerHTML = diffDay;
}

function monthDiff(a,b) {
	this.dateArray=a;
	this.dateArray2=b;
	if(this.dateArray[1]<this.dateArray2[1]){
		var monthDif = this.dateArray2[1]-this.dateArray[1];
	}
	else{
		var monthDif = this.dateArray[1]-this.dateArray2[1];
	}
	document.getElementById("diffOfMonth").innerHTML = monthDif;
}

function yearDiff(a,b) {
	this.dateArray=a;
	this.dateArray2=b;
	if(this.dateArray[0]<this.dateArray2[0]){
		var yearDif = this.dateArray2[0]-this.dateArray[0];
	}
	else{
		var yearDif = this.dateArray[0]-this.dateArray2[0];
	}
	document.getElementById("diffOfYear").innerHTML = yearDif;
}

function monthNameWiseFormate(b) {

	var month = b;
	if(month==1){return "January";}
	else if(month==2){return "February";}
	else if(month==3){return "March";}
	else if(month==4){return "April";}
	else if(month==5){return "May";}
	else if(month==6){return "June";}
	else if(month==7){return "July";}
	else if(month==8){return "August";}
	else if(month==9){return "September";}
	else if(month==10){return "October";}
	else if(month==11){return "November";}
	else if(month==12){return "December";}
}

function dateFormat(c) {
	console.log(c);
	var day = c;
	if(day==1){return day+"st";}
	else if(day==2){return day+"nd";}
	else if(day==3){return day+"rd";}
	else if(day==4||day==5||day==6||day==7
		||day==8||day==9||day==10||day==11
		||day==12||day==13||day==14||day==15
		||day==16||day==17||day==18||day==19
		||day==20){return day+"th";}
		else if(day==21){return day+"st";}
	else if(day==22){return day+"nd";}
	else if(day==23){return day+"rd";}
	else if(day==24||day==25||day==26||day==27
		||day==28||day==29||day==30){return day+"th";}
		else if(day==31){return day+"st";}
}