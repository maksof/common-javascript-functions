function dateFormatSlashDDMM(a) {
	var dateArray=a;
	var output1 = dateArray[2]+"/"+dateArray[1]+"/"+dateArray[0];
	return output1;
}

function dateFormatSlashMMDD(a) {
	var dateArray=a;
	var output2 = dateArray[1]+"/"+dateArray[2]+"/"+dateArray[0];
	return output2;
}

function dateFormatDashDDMM(a) {
	var dateArray=a;
	var output3 = dateArray[2]+"-"+dateArray[1]+"-"+dateArray[0];
	return output3;
}

function dateFormatDashMMDD(a) {
	var dateArray=a;
	var output4 = dateArray[1]+"-"+dateArray[2]+"-"+dateArray[0];
	return output4;
}

function monthNameFormatDate(a) {
	var dateArray=a;
	var output5 = dateArray[2]+"-"+monthNameWiseFormate(dateArray[1])+"-"+dateArray[0];
	return output5;
}

function monthNameFormatDateMMDD(a) {
	var dateArray=a;
	var output6 = monthNameWiseFormate(dateArray[1])+"-"+dateArray[2]+"-"+dateArray[0];
	return output6;
}

function dayMonthNameFormatDate(a) {
	var dateArray=a;
	var output7 = dateFormat(dateArray[2])+" "+monthNameWiseFormate(dateArray[1])+" "+dateArray[0];
	return output7;
}

function dayNameMonthNameFormatDate(a) {
	var getdate=a;
	var dateArray=a;
	dateArray = getdate.split('-');
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date(getdate);
	var dayName = days[d.getDay()];
	var tem=dateArray[2];
	var output14 = dayName+", "+dateFormat(tem)+" "+monthNameWiseFormate(dateArray[1])+" "+dateArray[0];
	return output14;
}

function dayDiff(a,b) {
	var dateArray=a;
	var dateArray2=b;
	if(dateArray[2]<dateArray2[2]){
		var diffDay = dateArray2[2]-dateArray[2];
	}
	else{
		var diffDay = dateArray[2]-dateArray2[2];
	}
	return diffDay;
}

function monthDiff(a,b) {
	var dateArray=a;
	var dateArray2=b;
	if(dateArray[1]<dateArray2[1]){
		var monthDif = dateArray2[1]-dateArray[1];
	}
	else{
		var monthDif = dateArray[1]-dateArray2[1];
	}
	return monthDif;
}

function yearDiff(a,b) {
	var dateArray=a;
	var dateArray2=b;
	if(dateArray[0]<dateArray2[0]){
		var yearDif = dateArray2[0]-dateArray[0];
	}
	else{
		var yearDif = dateArray[0]-dateArray2[0];
	}
	return yearDif;
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