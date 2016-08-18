function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

console.log(d3.select('#dropdownMenu1')[0][0].innerHTML);

d3.selectAll(".dropdownOption")
.on('click',function(){
	
	console.log(d3.select(this)[0][0].innerHTML);
	var ThistextValue = d3.select(this)[0][0].innerHTML;
	d3.select("#dropdownMenu1").attr("value", ThistextValue);
//	d3.select("#dropdownMenu1")[0][0].attr("innerHTML",ThistextValue+"<span class=" + "'caret' id='dropdownSpancaret1'"+">"+"</span>"+')');
	d3.select('#DropDownBoxPlaceTitle')
		.attr('innerHTML',ThistextValue)
		.attr('innerText',ThistextValue)
		.text(ThistextValue);
})

//d3.select('#SendMessageBtn')
//.on('click',function()
//{
//
//	
//})

//SendMessage
d3.select('#FirstSendMessageButton')
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,255,255"+')')
		.style('border-color',"rgb"+'('+"255,255,255"+')')
		.style('color',"rgb"+'('+"98,101,252"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"98,101,252"+')')
		.style('border-color',"rgb"+'('+"98,101,252"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("click",function()
	{
	
		var FirstName = document.getElementById('FirstNameText').value;
		var LastName = document.getElementById('LastNameText').value;
		var EmailAddress = document.getElementById('EmailAddress').value;
		var DropdownSelection = document.getElementById('dropdownMenu1').value;
		var MessageText = document.getElementById('MessageBox').value;

		console.log(document.getElementById('FirstNameText').value);
		console.log(document.getElementById('LastNameText').value);
		console.log(document.getElementById('EmailAddress').value);
		console.log(document.getElementById('dropdownMenu1').value);
		console.log(document.getElementById('MessageBox').value);

		if(((FirstName)=="")
			||((LastName)=="")
			||((EmailAddress)==""))
			{
				alert("Please fill the blanks with *.");
			}
		else
			{
				if(validateEmail(EmailAddress)==false)
					{
						alert("Please write a validated email address.")
					}
				else
					{
						alert("Success");
					}
			}
	})