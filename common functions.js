var date = new Date();
var dateArray =[];
var dateArray2 =[];
function dateFormatting() {
	var curDate = document.getElementById("userDate").value;
	 this.dateArray = curDate.split('.');
	console.log(this.dateArray[0]+"/"+this.dateArray[1]+"/"+this.dateArray[2]);
	console.log(this.dateArray[1]+"/"+this.dateArray[0]+"/"+this.dateArray[2]);
	console.log(this.dateArray[0]+"-"+this.dateArray[1]+"-"+this.dateArray[2]);
	console.log(this.dateArray[1]+"-"+this.dateArray[0]+"-"+this.dateArray[2]);
	console.log(this.dateArray[0]+"-"+monthNameWiseFormate()+"-"+this.dateArray[2]);
	console.log(monthNameWiseFormate()+"-"+this.dateArray[0]+"-"+this.dateArray[2]);
	console.log(dateFormat()+"-"+monthNameWiseFormate()+"-"+this.dateArray[2]);
}

function monthNameWiseFormate() {
	var month = this.dateArray[1];
	if(month==1){return "jan";}
	else if(month==2){return "feb";}
	else if(month==3){return "Mar";}
	else if(month==4){return "Apr";}
	else if(month==5){return "May";}
	else if(month==6){return "Jun";}
	else if(month==7){return "July";}
	else if(month==8){return "Aug";}
	else if(month==9){return "Sep";}
	else if(month==10){return "Oct";}
	else if(month==11){return "Nov";}
	else if(month==12){return "Dec";}
}

function dateFormat() {
	if(this.dateArray[0]==1){return this.dateArray[0]+"st";}
	else if(this.dateArray[0]==2){return this.dateArray[0]+"nd";}
	else if(this.dateArray[0]==3){return this.dateArray[0]+"rd";}
	else if(this.dateArray[0]==4||this.dateArray[0]==5||this.dateArray[0]==6||this.dateArray[0]==7
		||this.dateArray[0]==8||this.dateArray[0]==9||this.dateArray[0]==10||this.dateArray[0]==11
		||this.dateArray[0]==12||this.dateArray[0]==13||this.dateArray[0]==14||this.dateArray[0]==15
		||this.dateArray[0]==16||this.dateArray[0]==17||this.dateArray[0]==18||this.dateArray[0]==19
		||this.dateArray[0]==20){return dateArray[0]+"th";}
		else if(this.dateArray[0]==21){return this.dateArray[0]+"st";}
	else if(this.dateArray[0]==22){return this.dateArray[0]+"nd";}
	else if(this.dateArray[0]==23){return this.dateArray[0]+"rd";}
	else if(this.dateArray[0]==24||this.dateArray[0]==25||this.dateArray[0]==26||this.dateArray[0]==27
		||this.dateArray[0]==28||this.dateArray[0]==29||this.dateArray[0]==30){return this.dateArray[0]+"th";}
		else if(this.dateArray[0]==31){return this.dateArray[0]+"st";}
}

function dateDifference() {
	var date2 = document.getElementById("userDate2").value;
	this.dateArray2 = date2.split('.');
	if(this.dateArray2[0]<this.dateArray[0]){
		var diffDate = this.dateArray[0]-this.dateArray2[0];
	}
	else{
		var diffDate = this.dateArray2[0]-this.dateArray[0];
	}
		console.log("Difference of dates are  "+diffDate);
		monthDiff();
}

function monthDiff() {
	if(this.dateArray2[1]<this.dateArray[1]){
		var monthDiff = this.dateArray[1]-this.dateArray2[1];
	}
	else{
		var monthDiff = this.dateArray2[1]-this.dateArray[1];
	}
	console.log("Difference of months are  "+ monthDiff);
	yearDiff();
}

function yearDiff() {
	if(this.dateArray[2]<this.dateArray2[2]){
		var yearDiff = this.dateArray2[2]-this.dateArray[2];
	}
	else{
		var yearDiff = this.dateArray[2]-this.dateArray2[2];
	}
	console.log("Difference of years are  "+ yearDiff);
}