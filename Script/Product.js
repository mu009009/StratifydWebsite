//Detail Image Mouse Over and Click response
var ProductImageWidth = document.getElementById("DetailImage6").getBoundingClientRect().width;
var ProductImageBoxWidth = document.getElementById("ProductIconDetail32").getBoundingClientRect().width;

AnimationandClickResponse("DetailImage");
AnimationandClickResponse("ContentProDetailText-Left");
AnimationandClickResponse("ContentProDetailTitle-Left");

function AnimationandClickResponse(className)
{
	var KeyClassName = className;
	d3.selectAll("."+KeyClassName)
	.on("mouseover",function()
	{
		var IDname = d3.select(this)[0][0].id;
		var IDLength = IDname.length;
		var KeyValue = IDname.charAt(IDLength-1);

		d3.select("#DetailImage" + KeyValue)
		.transition()
		.duration(MiddleDurationTime)
		.style("margin-left",function()
		{
			var MarginLeftValue = (ProductImageBoxWidth - 1.2*ProductImageWidth)/2;
			return MarginLeftValue + "px";
		})
		.style("width",function()
		{
			var WidthValue = ProductImageWidth * 1.2;
			return WidthValue + "px";
		})

		d3.select('#ProductPop'+KeyValue)
		.transition()
		.duration(MiddleDurationTime)	
		.style("opacity",1)
		.style("margin-top",5+"%");
	})
	.on("mouseout",function()
	{
		var IDname = d3.select(this)[0][0].id;
		var IDLength = IDname.length;
		var KeyValue = IDname.charAt(IDLength-1);

		d3.select("#DetailImage" + KeyValue)
		.transition()
		.duration(MiddleDurationTime)
		.style("margin-left",function()
		{
			var MarginLeftValue = (ProductImageBoxWidth - ProductImageWidth)/2;
			return MarginLeftValue + "px";
		})
		.style("width",function()
		{
			var WidthValue = ProductImageWidth ;
			return WidthValue + "px";
		})

		d3.select('#ProductPop'+KeyValue)
		.transition()
		.duration(MiddleDurationTime)
		.style("opacity",0)
		.style("margin-top",15+"%");
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
					window.location.href = "http://www.stratifyd.com/how-it-works/";
					break;
					case "DetailImage2":
					window.location.href = "http://www.stratifyd.com/easy-to-use/";
					break;
					case "DetailImage3":
					window.location.href = "http://www.stratifyd.com/high-powered-analytics/";
					break;
					case "DetailImage4":
					window.location.href = "http://www.stratifyd.com/intuitive-visualization/";
					break;
					case "DetailImage5":
					window.location.href = "http://blog.stratifyd.com/category/2-0-user-manual/";
					break;
					case "DetailImage6":
					window.location.href = "http://www.stratifyd.com/comprehensive-data/";
					break;		
			}
	})
}

