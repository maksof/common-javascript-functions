function dateFormatSlashDDMM(input) {
	var date = new Date(input);
	return output = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}

function dateFormatSlashMMDD(input) {
	var date = new Date(input);
	return output = (date.getMonth()+1) +"/"+date.getDate()+"/"+date.getFullYear();
}

function dateFormatDashDDMM(input) {
	var date = new Date(input);
	return output = date.getDate()+"-"+(date.getMonth()+1) +"-"+date.getFullYear();
}

function dateFormatDashMMDD(input) {
	var date = new Date(input);
	return output = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
}

function monthNameFormatDate(input) {
	var date = new Date(input);
	return output = date.getDate()+"-"+monthNameWiseFormate((date.getMonth()+1))+"-"+date.getFullYear();
}

function monthNameFormatDateMMDD(input) {
	var date = new Date(input);
	return output = monthNameWiseFormate((date.getMonth()+1))+"-"+date.getDate()+"-"+date.getFullYear();
}

function dayMonthNameFormatDate(input) {
	var date = new Date(input);
	return output = dateFormat(date.getDate())+" "+monthNameWiseFormate((date.getMonth()+1))+" "+date.getFullYear();
}

function dayNameMonthNameFormatDate(input) {
	var date = new Date(input);
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
	return output = days[date.getDay()]+", "+dateFormat(date.getDate()+1)+" "+monthNameWiseFormate((date.getMonth()+1))+" "+date.getFullYear();
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
	var oneDay = 24*60*60*1000;
	return diffDays = Math.round(Math.abs((date.getTime() - date2.getTime())/(oneDay)));
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
	if(date.getFullYear()<date2.getFullYear()){
		var yearDif = date2.getFullYear()-date.getFullYear();
	}
	else{
		var yearDif = date.getFullYear()-date2.getFullYear();
	}
	return yearDif;
}

function monthNameWiseFormate(b) {

	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return months[b+1];
}

function dateFormat(c) {
	var days=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st']
	return days[c+1];
}