// Time for Transition Animation setting
var ShorDurationTime = 200;
var MiddleDurationTime = 500;
var LongDurationTime = 1000;

//Vertical center function part for title text buttons
var FontSizeNumberStr = d3.select(".ButtonText").style("font-size");
var ProductSolutionPartHeight = document.getElementById("ProductSolutionPart").getBoundingClientRect().height;
var FontSizeNumber = parseFloat(ValuewithPxStrtoNumValue(FontSizeNumberStr));

var TextMiddlePosition = (ProductSolutionPartHeight - FontSizeNumber/2)/2;

d3.selectAll(".ButtonText")
.style("padding-top",TextMiddlePosition+"px");


//Vertical center Funcation part for CompanyIcon
var CompanyIconPartHeight = document.getElementById("CompanyIconPart").getBoundingClientRect().height;
var CompanyIconHeight = document.getElementById("CompanyIcon").getBoundingClientRect().height;
var CompanyIconPartWidth = document.getElementById("CompanyIconPart").getBoundingClientRect().width;
var CompanyIconWidth = document.getElementById("CompanyIcon").getBoundingClientRect().width;
d3.select('#CompanyIcon')
	.style("margin-top",function()
	{
		var MargintopValue = (CompanyIconPartHeight - CompanyIconHeight)/2;
		return MargintopValue + "px";
	})

//Vertical center Funcation part for Bottom Icons and CopyRight Statement
var BottomCopyRightPartHeight = document.getElementById("BottomCopyRightPart").getBoundingClientRect().height;
var CopyRightFontSize = d3.select(".CopyRight").style("font-size");
var CopyRightFontSizeValue = parseFloat(ValuewithPxStrtoNumValue(CopyRightFontSize));
var Icons2Heigh = document.getElementById("FacebookIcon").getBoundingClientRect().height;

d3.select('#CopyRight')
.style('margin-top',function(){
	var MarginTopValue = (BottomCopyRightPartHeight - CopyRightFontSizeValue/2)/2;
	return MarginTopValue + "px";
})

d3.selectAll(".Icons2")
	.style("margin-top",function()
	{
		var MarginTopValue = (BottomCopyRightPartHeight - Icons2Heigh/2)/2;
		return MarginTopValue + "px";
	})
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"60,186,234"+')')
		.style("cursor", "pointer")
		
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,255,255"+')')
		.style("cursor", "default")
	})


