//Detail Image Mouse Over and Click response
var ProductImageWidth = null;
var ProductImageBoxWidth = null

if(document.getElementById("DetailImage6")!=null)
	{
		ProductImageWidth = document.getElementById("DetailImage6").getBoundingClientRect().width;
	}

if(document.getElementById("ProductIconDetail32")!=null)
	{
		ProductImageBoxWidth = document.getElementById("ProductIconDetail32").getBoundingClientRect().width;
	}


AnimationandClickResponse("DetailImage");
AnimationandClickResponse("ProductTextDetailTextInforPart");
AnimationandClickResponse("PopoutText");

function AnimationandClickResponse(className)
{
	var KeyClassName = className;
	d3.selectAll("."+KeyClassName)
	.on("mouseover",function()
	{
		var IDname = d3.select(this)[0][0].id;
		var IDLength = IDname.length;
		var KeyValue = IDname.charAt(IDLength-1);

//		d3.select("#DetailImage" + KeyValue)
//		.transition()
//		.duration(MiddleDurationTime)
//		.style("margin-left",function()
//		{
//			var MarginLeftValue = (ProductImageBoxWidth - 1.2*ProductImageWidth)/2;
//			return MarginLeftValue + "px";
//		})
//		.style("width",function()
//		{
//			var WidthValue = ProductImageWidth * 1.2;
//			return WidthValue + "px";
//		})

//		d3.select('#ProductPop'+KeyValue)
//		.transition()
//		.duration(MiddleDurationTime)	
//		.style("opacity",1)
//		.style("margin-top",5+"%");
	})
	.on("mouseout",function()
	{
		var IDname = d3.select(this)[0][0].id;
		var IDLength = IDname.length;
		var KeyValue = IDname.charAt(IDLength-1);

//		d3.select("#DetailImage" + KeyValue)
//		.transition()
//		.duration(MiddleDurationTime)
//		.style("margin-left",function()
//		{
//			var MarginLeftValue = (ProductImageBoxWidth - ProductImageWidth)/2;
//			return MarginLeftValue + "px";
//		})
//		.style("width",function()
//		{
//			var WidthValue = ProductImageWidth ;
//			return WidthValue + "px";
//		})

//		d3.select('#ProductPop'+KeyValue)
//		.transition()
//		.duration(MiddleDurationTime)
//		.style("opacity",0)
//		.style("margin-top",15+"%");
	})
	.on("click",function()
	{
		var IDname = d3.select(this)[0][0].id;
		var IDLength = IDname.length;
		var KeyValue = IDname.charAt(IDLength-1);
		var FinalKeyString = "DetailImage" + KeyValue;

		switch(FinalKeyString)
			{
					case "DetailImage1":
					window.location.href = "HowitWorks.html";
					break;
					case "DetailImage2":
					window.location.href = "Easy%20to%20Use.html";
					break;
					case "DetailImage3":
					window.location.href = "high-powered-analytics.html";
					break;
					case "DetailImage4":
					window.location.href = "IntuitiveVisuaIinterface.html";
					break;
					case "DetailImage5":
					window.location.href = "http://blog.stratifyd.com/category/2-0-user-manual/";
					break;
					case "DetailImage6":
					window.location.href = "Comprehensive_data_analytics_solution.html";
					break;		
			}
	})
}


//Product Free Trial
d3.select('#ProductTryB1')
.on('click',function(){
	window.location.href="https://signals.stratifyd.com/login.html#new";
})


//Jobs Opening Selection
d3.selectAll(".JobsSelectClickable")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style("color","rgb"+"("+"72,168,222"+")")
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style("color","rgb"+"("+"158,158,158"+")")
	})

//Media ReadMore Click
d3.select("#MediaBtn1")
	.on('click',function()
	{
		window.location.href="http://blog.stratifyd.com/2015/11/26/3-companies-that-turn-big-data-into-what-you-need-to-know/";
	})

d3.select("#MediaBtn2")
	.on('click',function()
	{
		window.location.href="https://www.datanami.com/2016/02/19/discover-actionable-insights-from-unstructured-data/";
	})

d3.select("#MediaBtn3")
	.on('click',function()
	{
		window.location.href="http://www.marketwired.com/press-release/no-data-scientist-required-with-launch-of-taste-analytics-signals-2070841.htm";
	})

//Jobs Selection
d3.select('#DirectlyJobs1')
	.on("click",function()
	{
		window.location.href="Senior_Software_Developer.html";
	})

d3.select('#DirectlyJobs2')
	.on("click",function()
	{
		window.location.href="Data_Research_Analyst.html";
	})