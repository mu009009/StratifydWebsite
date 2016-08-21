
//Bottom Link Buttons Size Transition
var BottomIconsWidth = document.getElementById("ExecutiveIcon").getBoundingClientRect().width;
var BottomMargineLeftStr = d3.select("#ExecutiveIcon").style("margin-left");
var BottomMargineLeftValue = parseFloat(ValuewithPxStrtoNumValue(BottomMargineLeftStr));

d3.selectAll('.CenterandBoder')
.on("mouseover",function()
{
	d3.select(this)
	.transition()
	.duration(ShorDurationTime)
	.style("background-color",function()
	{
		var Color = "rgb"+"("+"255,255,255"+")";
		return Color;
	})
	
	var SelectKey = d3.select(this)[0][0].id;
	var KeyFr = SelectKey.charAt(SelectKey.length-2);
	var KeySec = SelectKey.charAt(SelectKey.length-1);
	
	d3.select("#LinkCotainMainView"+KeyFr+KeySec)
	.transition()
	.duration(ShorDurationTime)	
	.style("margin-top",-200+"px");
})
.on("mouseout",function()
{
	d3.select(this)
	.transition()
	.duration(ShorDurationTime)
	.style("background-color",function()
	{
		var Color = "rgb"+"("+"99,106,247"+")";
		return Color;
	})
	
	var SelectKey = d3.select(this)[0][0].id;
	var KeyFr = SelectKey.charAt(SelectKey.length-2);
	var KeySec = SelectKey.charAt(SelectKey.length-1);
	
	d3.select("#LinkCotainMainView"+KeyFr+KeySec)
	.transition()
	.duration(ShorDurationTime)	
	.style("margin-top",0+"px");	
})

d3.selectAll('.CenterandBoder2')
.on("mouseover",function()
{
	d3.select(this)
	.transition()
	.duration(ShorDurationTime)
	.style("background-color",function()
	{
		var Color = "rgb"+"("+"255,255,255"+")";
		return Color;
	})
	
	var SelectKey = d3.select(this)[0][0].id;
	var KeyFr = SelectKey.charAt(SelectKey.length-2);
	var KeySec = SelectKey.charAt(SelectKey.length-1);
	
	d3.select("#LinkCotainMainView"+KeyFr+KeySec)
	.transition()
	.duration(ShorDurationTime)	
	.style("margin-top",-200+"px");
	
})
.on("mouseout",function()
{
	d3.select(this)
	.transition()
	.duration(ShorDurationTime)
	.style("background-color",function()
	{
		var Color = "rgb"+"("+"99,106,247"+")";
		return Color;
	})
	
	var SelectKey = d3.select(this)[0][0].id;
	var KeyFr = SelectKey.charAt(SelectKey.length-2);
	var KeySec = SelectKey.charAt(SelectKey.length-1);
	
	d3.select("#LinkCotainMainView"+KeyFr+KeySec)
	.transition()
	.duration(ShorDurationTime)	
	.style("margin-top",0+"px");		
})

//Bottom Link Part buttons First Part 4 buttons
d3.select("#ExecutiveLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Executive.pdf";
	})

d3.select("#BusinessIntLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - BI.pdf";
	})

d3.select("#MarketingLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Marketing.pdf";
	})

d3.select("#CustomerexperienceLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Consumer Products.pdf";
	})

d3.select("#RetailLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Retail.pdf";
	})

d3.select("#UtilitiesLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Utilities.pdf";
	})

d3.select("#HospitalityLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Hospitality for website.pdf";
	})

d3.select("#FinancialLearnMore")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Financial Services.pdf";
	})


//FirstLearn More and FirstWatchVideo Clicks
d3.select("#FirstLearnMore")
	.on("click",function()
	{
		window.location.href="http://www.stratifyd.com/product-page/";
	})

d3.select("#FirstWatchVideo")
	.on("click",function()
	{
		window.location.href="http://www.stratifyd.com/about-us/";
	})

d3.select('#LandingFirstLearnMoreProduct')
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"99,106,247"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"transparent")
		.style('color',"rgb"+'('+"99,106,247"+')')
	})
	.on("click",function()
	{
		window.location.href = "Product.html";
	})

//FirstFreeTrialButton
d3.select('#FirstTry')
	.on("click",function()
	{
//		window.location.href = "https://signals.stratifyd.com/login.html#new";
		window.location.href = "Product.html";
	})


