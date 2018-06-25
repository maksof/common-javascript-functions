function dateFormatSlashDDMM(input) {
	var date = new Date(input);
	var output1 = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
	return output1;
}

function dateFormatSlashMMDD(input) {
	var date = new Date(input);
	var output2 = (date.getMonth()+1) +"/"+date.getDate()+"/"+date.getFullYear();
	return output2;
}

function dateFormatDashDDMM(input) {
	var date = new Date(input);
	var output3 = date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear();
	return output3;
}

function dateFormatDashMMDD(input) {
	var date = new Date(input);
	var output4 = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
	return output4;
}

function monthNameFormatDate(input) {
	var date = new Date(input);
	var output5 = date.getDate()+"-"+monthNameWiseFormate((date.getMonth()+1))+"-"+date.getFullYear();
	return output5;
}

function monthNameFormatDateMMDD(input) {
	var date = new Date(input);
	var output6 = monthNameWiseFormate((date.getMonth()+1))+"-"+date.getDate()+"-"+date.getFullYear();
	return output6;
}

function dayMonthNameFormatDate(input) {
	var date = new Date(input);
	var output7 = dateFormat(date.getDate())+" "+monthNameWiseFormate((date.getMonth()+1))+" "+date.getFullYear();
	return output7;
}

function dayNameMonthNameFormatDate(input) {
	var date = new Date(input);
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
	var output14 = days[date.getDay()]+", "+dateFormat(date.getDate()+1)+" "+monthNameWiseFormate((date.getMonth()+1))+" "+date.getFullYear();
	return output14;
}

function dayDiff(input1,input2) {
	var date = new Date(input1);
	var date2 = new Date(input2);
	if(date.getDate()<date2.getDate()){
		var diffDay = date2.getDate()-date.getDate();
	}
	else{
		var diffDay = date.getDate()-date2.getDate();
	}
	// return diffDay;
	var oneDay = 24*60*60*1000;
	var diffDays = Math.round(Math.abs((date.getTime() - date2.getTime())/(oneDay)));
	return diffDays;
}

function monthDiff(input1,input2) {
	var date = new Date(input1);
	var date2 = new Date(input2);
	if((date.getMonth()+1) < date2.getMonth()+1){
		var monthDif = (date2.getMonth()+1)-(date.getMonth()+1);
	}
	else{
		var monthDif = (date.getMonth()+1)- (date2.getMonth()+1);
	}

	if(date.getFullYear()<date2.getFullYear()){
		var yearDif = date2.getFullYear()-date.getFullYear();
	}
	else{
		var yearDif = date.getFullYear()-date2.getFullYear();
	}
		var preMonth= 12-date2.getMonth();
		if(yearDif>=1){
		return preMonth +(12*(yearDif-1))+date.getMonth();
	}
	else{ return monthDif; }
}

function yearDiff(input1,input2) {
	var date = new Date(input1);
	var date2 = new Date(input2);
	if(date.getFullYear()<date2.getFullYear()){
		var yearDif = date2.getFullYear()-date.getFullYear();
	}
	else{
		var yearDif = date.getFullYear()-date2.getFullYear();
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