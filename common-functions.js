var date = new Date();
var dateArray =[];
var dateArray2 =[];
var check=0;
var diffDate=0;
var diffMonth=0;
var yearsDiff=0;
function dateFormatting() {
	var curDate = document.getElementById("userDate").value;
	this.dateArray = curDate.split('.');
	this.check=1;
	checkDate();
	if(this.check!=0){
		var output1 = this.dateArray[0]+"/"+this.dateArray[1]+"/"+this.dateArray[2];
		document.getElementById("op1").innerHTML = output1;
	}
	else{console.log("enter corect format date");}
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
	var curDate = document.getElementById("userDate8").value;
	this.dateArray = curDate.split('.');
	var date2 = document.getElementById("userDate11").value;
	this.dateArray2 = date2.split('.');
	this.check=1;
	checkDate();
	if(this.check!=0){
		if(this.dateArray2[0]<this.dateArray[0]){
			this.diffDate = this.dateArray[0]-this.dateArray2[0];
		}
		else{
			this.diffDate = this.dateArray2[0]-this.dateArray[0];
		}
		document.getElementById("diffOfDate").innerHTML = this.diffDate;
	}
	else{
		window.alert("enter correctdate formate");
	}
}
function monthlyDiff(){
	var curDate = document.getElementById("userDate9").value;
	this.dateArray = curDate.split('.');
	var date2 = document.getElementById("userDate12").value;
	this.dateArray2 = date2.split('.');
	this.check=1;
	checkDate();
	if(this.check!=0){
		if(this.dateArray2[1]<this.dateArray[1]){
			this.diffMonth = this.dateArray[1]-this.dateArray2[1];
		}
		else{
			this.diffMonth = this.dateArray2[1]-this.dateArray[1];
		}
		document.getElementById("diffOfMonth").innerHTML = this.diffMonth;
	}
	else{window.alert("enter correctdate formate");}
}

function yearDiff() {
	var curDate = document.getElementById("userDate10").value;
	this.dateArray = curDate.split('.');
	var date2 = document.getElementById("userDate13").value;
	this.dateArray2 = date2.split('.');
	this.check=1;
	checkDate();
	if(this.check!=0){
		if(this.dateArray[2]<this.dateArray2[2]){
			this.yearsDiff = this.dateArray2[2]-this.dateArray[2];
		}
		else{
			this.yearsDiff = this.dateArray[2]-this.dateArray2[2];
		}
		document.getElementById("diffOfYear").innerHTML = this.yearsDiff;
	}
	else{ window.alert("enter correctdate formate"); }
}
function checkDate() {
	if((dateArray[1]==1)||(dateArray2[1]==1)){ 
		if(this.dateArray[0]<1 || this.dateArray[0]>31)
		{
			window.alert("enter correctdate formate");
			return this.check=0;}
			else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
			{
				window.alert("enter correctdate formate");
				return this.check=0;}
			}
			else if((dateArray[1]==2)||(dateArray2[1]==2)){ 
				if(this.dateArray[0]<1 || this.dateArray[0]>28)
				{
					window.alert("enter correctdate formate");
					return this.check=0;}
					else if(this.dateArray2[0]<1 || this.dateArray2[0]>28)
					{ 
						window.alert("enter correctdate formate");
						return this.check=0;}
					}
					else if((dateArray[1]==3)||(dateArray2[1]==3)){ 
						if(this.dateArray[0]<1 || this.dateArray[0]>31)
						{
							window.alert("enter correctdate formate");
							return this.check=0;}
							else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
							{
								window.alert("enter correctdate formate");
								return this.check=0;}
							}
							else if((dateArray[1]==4)||(dateArray2[1]==4)){ 
								if(this.dateArray[0]<1 || this.dateArray[0]>30)
								{
									window.alert("enter correctdate formate");
									return this.check=0;}
									else if(this.dateArray2[0]<1 || this.dateArray2[0]>30)
									{
										window.alert("enter correctdate formate");
										return this.check=0;}
									}
									else if((dateArray[1]==5)||(dateArray2[1]==5)){ 
										if(this.dateArray[0]<1 || this.dateArray[0]>31)
										{
											window.alert("enter correctdate formate");
											return this.check=0;}
											else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
											{
												window.alert("enter correctdate formate");
												return this.check=0;}
											}
											else if((dateArray[1]==6)||(dateArray2[1]==6)){ 
												if(this.dateArray[0]<1 || this.dateArray[0]>30)
												{
													window.alert("enter correctdate formate");
													return this.check=0;}
													else if(this.dateArray2[0]<1 || this.dateArray2[0]>30)
													{
														window.alert("enter correctdate formate");
														return this.check=0;}
													}
													else if((dateArray[1]==7)||(dateArray2[1]==7)){ 
														if(this.dateArray[0]<1 || this.dateArray[0]>31)
														{
															window.alert("enter correctdate formate");
															return this.check=0;}
															else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
															{
																window.alert("enter correctdate formate");
																return this.check=0;}
															}
															else if((dateArray[1]==8)||(dateArray2[1]==8)){ 
																if(this.dateArray[0]<1 || this.dateArray[0]>31)
																{
																	window.alert("enter correctdate formate");
																	return this.check=0;}
																	else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
																	{
																		window.alert("enter correctdate formate");
																		return this.check=0;}
																	}
																	else if((dateArray[1]==9)||(dateArray2[1]==9)){ 
																		if(this.dateArray[0]<1 || this.dateArray[0]>30)
																		{
																			window.alert("enter correctdate formate");
																			return this.check=0;}
																			else if(this.dateArray2[0]<1 || this.dateArray2[0]>30)
																			{
																				window.alert("enter correctdate formate");
																				return this.check=0;}
																			}
																			else if((dateArray[1]==10)||(dateArray2[1]==10)){ 
																				if(this.dateArray[0]<1 || this.dateArray[0]>31)
																				{
																					window.alert("enter correctdate formate");
																					return this.check=0;}
																					else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
																					{
																						window.alert("enter correctdate formate");
																						return this.check=0;}
																					}
																					else if((dateArray[1]==11)||(dateArray2[1]==11)){ 
																						if(this.dateArray[0]<1 || this.dateArray[0]>30)
																						{
																							window.alert("enter correctdate formate");
																							return this.check=0;}
																							else if(this.dateArray2[0]<1 || this.dateArray2[0]>30)
																							{
																								window.alert("enter correctdate formate");
																								return this.check=0;}
																							}
																							else if((dateArray[1]==12)||(dateArray2[1]==12)){ 
																								if(this.dateArray[0]<1 || this.dateArray[0]>31)
																								{
																									window.alert("enter correctdate formate");
																									return this.check=0;}
																									else if(this.dateArray2[0]<1 || this.dateArray2[0]>31)
																									{
																										console.log("enter correct date");
																										window.alert("enter correctdate formate");
																										return this.check=0;}
																									}
																									else if((dateArray[1]<1)||(dateArray[1]>12)){
																										window.alert("enter correct date formate");
																										return this.check=0; }
																										else if((dateArray2[1]<1)||(dateArray2[1]>12)){
																											window.alert("enter correct date formate");
																											return this.check=0;}
																											else if((dateArray[2]<1)||(dateArray2[1]<1)){
																												window.alert("enter correct date formate");
																												return this.check=0;}
																											}

																											function dateFormattingMMdd() {
																												var curDate = document.getElementById("userDate2").value;
																												this.dateArray = curDate.split('.');
																												this.check=1;
																												checkDate();
																												if(this.check!=0){
																													var output2 = this.dateArray[1]+"/"+this.dateArray[0]+"/"+this.dateArray[2];
																													document.getElementById("op2").innerHTML = output2;
																												}
																												else{
																													window.alert("enter correctdate formate");}
																												}

																												function dateFormattingDDmmDash() {
																													var curDate = document.getElementById("userDate3").value;
																													this.dateArray = curDate.split('.');
																													this.check=1;
																													checkDate();
																													if(this.check!=0){
																														var output3 = this.dateArray[0]+"-"+this.dateArray[1]+"-"+this.dateArray[2];
																														document.getElementById("op3").innerHTML = output3;
																													}
																													else{
																														window.alert("enter correctdate formate");}
																													}

																													function dateFormattingMMddDash() {
																														var curDate = document.getElementById("userDate4").value;
																														this.dateArray = curDate.split('.');
																														this.check=1;
																														checkDate();
																														if(this.check!=0){
																															var output4 = this.dateArray[1]+"-"+this.dateArray[0]+"-"+this.dateArray[2];
																															document.getElementById("op4").innerHTML = output4;
																														}
																														else{
																															window.alert("enter correctdate formate");}
																														}

																														function dateFormattingDayMM() {
																															var curDate = document.getElementById("userDate5").value;
																															this.dateArray = curDate.split('.');
																															this.check=1;
																															checkDate();
																															if(this.check!=0){
																																var output5 = this.dateArray[0]+"-"+monthNameWiseFormate()+"-"+this.dateArray[2];
																																document.getElementById("op5").innerHTML = output5;
																															}
																															else{
																																window.alert("enter correctdate formate");}
																															}

																															function dateFormattingMMday() {
																																var curDate = document.getElementById("userDate6").value;
																																this.dateArray = curDate.split('.');
																																this.check=1;
																																checkDate();
																																if(this.check!=0){
																																	var output6 = monthNameWiseFormate()+"-"+this.dateArray[0]+"-"+this.dateArray[2];
																																	document.getElementById("op6").innerHTML = output6;
																																}
																																else{
																																	window.alert("enter correctdate formate");}
																																}

																																function dateFormattingDayMonth() {
																																	var curDate = document.getElementById("userDate7").value;
																																	this.dateArray = curDate.split('.');
																																	this.check=1;
																																	checkDate();
																																	if(this.check!=0){
																																		var output7 = dateFormat()+"-"+monthNameWiseFormate()+"-"+this.dateArray[2];
																																		document.getElementById("op7").innerHTML = output7;
																																	}
																																	else{
																																		window.alert("enter correctdate formate");}
																																	}