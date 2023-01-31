

var usrInp=document.getElementById("type");
usrInp.style.display="flex";
usrInp.style.backgroundImage="linear-gradient(to right,#e13e7a99, #00f3ff54)";
usrInp.style.width="50%";
usrInp.style.padding="30px";

var usrAge1=document.createElement("input");

var usrAge2=document.createElement("input");

var usrAge3=document.createElement("input");
var usrBtn=document.createElement("button");

var usrResult=document.createElement("textarea");
usrBtn.innerHTML="Result";

usrResult.setAttribute("id","content");
usrResult.setAttribute("value","");

usrResult.setAttribute("placeholder","OUTPUT VALUE");


usrInp.append(usrAge1,usrAge2,usrAge3,usrBtn,usrResult);

var details1=document.getElementById("box1");
var details2=document.getElementById("box2");

var details3=document.getElementById("box3");
var output=document.getElementById("content");

usrBtn.addEventListener("click",function(){
	
	
	var person1=details1.value;
	
	var person2=details2.value;
	var person3=details3.value;
	details1.value="";
	details2.value="";
	details3.value="";
	

	
	if(person1<person2 && person1<person3){
		if(person2<person3){
			output.value="person1:"+person1+","+"person2:"+person2+","+"person3:"+person3;
		}
		else{
			output.value=person1,person3+",person2:"+person2;
		}
	}
	else if(person2<person1 && person2<person3){
		if(person1<person3){
			output.value="person2:"+person2+","+"person1:"+person1+","+"person3:"+person3;
		}
		else{
			output.value="person2:"+person2+","+"person3:"+person3+","+"person1:"+person1;
		}
	}
	else if(person3<person1 && person3<person2){
		if(person1<person2){
			output.value="person3:"+person3+","+"person1:"+person1+","+"person2:"+person2;
		}
		else{
			output.value="person3:"+person3+","+"person2:"+person2+","+"person1:"+person1;
		}
	}
	
});



//box 1
usrAge1.setAttribute("id","box1");
usrAge1.setAttribute("value","");
usrAge1.style.width="40px";
usrAge1.style.padding="10px";
usrAge1.style.textAlign="center";


//box2
usrAge2.setAttribute("id","box2");
usrAge2.setAttribute("value","");
usrAge2.style.width="40px";
usrAge2.style.padding="10px";
usrAge2.style.textAlign="center";

//box3
usrAge3.setAttribute("id","box3");
usrAge3.setAttribute("value","");
usrAge3.style.width="40px";
usrAge3.style.padding="10px";
usrAge3.style.textAlign="center";


usrResult.style.width="250px";
usrResult.style.textAlign="center";
usrResult.style.paddingTop="11px";


//button
usrBtn.style.padding="5px";
usrBtn.style.borderRadius="16px";
usrBtn.style.backgroundImage="linear-gradient(to right,#c8e13e82, #ff0099)";
