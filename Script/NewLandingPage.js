d3.select("#FirstLearnMore")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"0,112,121"+')')
		.style("border-color","rgb"+'('+"0,112,121"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"0,161,175"+')')
		.style("border-color","rgb"+'('+"0,161,175"+')')
	})

d3.select("#FirstWatchVideo")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"0,112,121"+')')
		.style("border-color","rgb"+'('+"0,112,121"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"0,161,175"+')')
		.style("border-color","rgb"+'('+"0,161,175"+')')
	})

//Try Now and Watch Introduction Part
//VerticalCenterTry();
//
//function VerticalCenterTry()
//{
//	var TextHeightSt = d3.select("#TryAdText").style("font-size");
//	var TextHeightSizeNumber = parseInt(ValuewithPxStrtoNumValue(TextHeightSt));
//	var ButtonHeight = document.getElementById("MainContentJumpButton1").getBoundingClientRect().height
//	var BoxHeight = document.getElementById("MainContentJumpBox1").getBoundingClientRect().height;
//
//	d3.selectAll('.MainContentJumpBox')
//	.style("padding-top",function()
//	{
//		var PaddingValue = (BoxHeight - TextHeightSizeNumber - ButtonHeight)/2;
//		return PaddingValue + "px";
//	})
//
//
//}

d3.select('#MainContentJumpButton1')
	.on("click",function()
	{
		window.location.href = "https://signals.stratifyd.com/login.html#sign-in";
	})

//Bubble Button Control
VerticalCenterBubble();

function VerticalCenterBubble(){
	var CircleButtonHeight = document.getElementById("CircleBubble1").getBoundingClientRect().height;
	var CircleButtonBoxHeight = document.getElementById("BubbleIconBox1").getBoundingClientRect().height;

	d3.selectAll(".BubblePart")
	.style("margin-top",function()
	{
		var MarginTopValue = (CircleButtonBoxHeight - 1.5*CircleButtonHeight)/2
		return MarginTopValue + "px";
	})
}

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
		var Color = "rgb"+"("+"231,231,231"+")";
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
		var Color = "rgb"+"("+"246,246,248"+")";
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
		var Color = "rgb"+"("+"231,231,231"+")";
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
		var Color = "rgb"+"("+"246,246,248"+")";
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


//Circle Buttons Size Transition
var BubbleButton = document.getElementById("CircleBubble1").getBoundingClientRect().width;
var BubbleBoxWidth = document.getElementById("BubbleIconBox1").getBoundingClientRect().width;

d3.selectAll('.BubblePart')
.on("mouseover",function()
{
	d3.select(this)
	.transition()
	.duration(ShorDurationTime)
//	.style("width",BubbleButton*1.5+"px")
//	.style("margin-left",function()
//	{
//		var marginLeftNum = (BubbleBoxWidth - (BubbleButton*1.5))/2;
//		return marginLeftNum + "px";
//	})
	.style("background-color",function()
	{
		var Color = "rgb"+"("+"0,161,175"+")";
		return Color;
	})
	.style("border-color",function()
	{
		var Color = "rgb"+"("+"0,161,175"+")";
		return Color;
	})
	
//	TforCircleShowOnly = -9999;
})
.on("mouseout",function()
{
	d3.select(this)
	.transition()
	.duration(ShorDurationTime)
//	.style("width",BubbleButton+"px")
	.style("background-color",function()
	{
		var Color = "rgb"+"("+"255,255,255"+")";
		return Color;
	})
	.style("border-color",function()
	{
		var Color = "rgb"+"("+"227,227,227"+")";
		return Color;
	})
	
//	TforCircleShowOnly = -1;
})
.on("click",function()
{
	var ClickObject = d3.select(this);
	var ClickID = ClickObject[0][0].id;
	console.log(ClickID);
	switch (ClickID)
	{
		case "CircleBubble1":
			
		d3.selectAll(".ContinueChangeBox")	
		.style("position","absolute");
			
		d3.select("#ContinueChangeBox1")
		.style("position","relative");	
			
		d3.selectAll(".ContinueChangeBox")
		.transition()
		.duration(ShorDurationTime)
		.style("opacity",0)
		.style("z-index",-1);
			
		d3.select("#ContinueChangeBox1")
		.transition()
		.duration(ShorDurationTime)
		.style('opacity',1)
		.style("z-index",3);
		
		break;
			
		case "CircleBubble2":
			
		d3.selectAll(".ContinueChangeBox")	
		.style("position","absolute");
			
		d3.select("#ContinueChangeBox2")
		.style("position","relative");	
			
		d3.selectAll(".ContinueChangeBox")
		.transition()
		.duration(ShorDurationTime)
		.style("opacity",0)
		.style("z-index",-1)
			
		d3.select("#ContinueChangeBox2")
		.transition()
		.duration(ShorDurationTime)
		.style('opacity',1)
		.style("z-index",3);
		

		
		break;
			
		case "CircleBubble3":
			
		d3.selectAll(".ContinueChangeBox")	
		.style("position","absolute");
			
		d3.select("#ContinueChangeBox3")
		.style("position","relative");				
			
		d3.selectAll(".ContinueChangeBox")
		.transition()
		.duration(ShorDurationTime)
		.style("opacity",0)
		.style("z-index",-1);
			
		d3.select("#ContinueChangeBox3")
		.transition()
		.duration(ShorDurationTime)
		.style('opacity',1)
		.style("z-index",3);
		
		break;	
	}
})

//Play Video
d3.selectAll(".ContentVideo")
.on("click",function()
	{
		d3.select(this).loop = true;
		d3.select(this).play();
	})

//Signals Related Buttons click function
d3.select('#TrySignals1')
.on('click',function()
{
	window.location.href="https://signals.stratifyd.com/login.html#sign-in";
})

d3.select('#TrySignals2')
.on('click',function()
{
	window.location.href="https://signals.stratifyd.com/login.html#sign-in";
})

d3.select('#TrySignals3')
.on('click',function()
{
	window.location.href="https://signals.stratifyd.com/login.html#sign-in";
})

d3.select("#FinSerText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465572649316-c4a0c801-a7f5";
	})

//Bottom Link Part buttons First Part 4 buttons
d3.select("#ExecutiveTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/03/16/customer-insights-for-a-competitive-edge/";
	})

d3.select("#BussinessIntTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/16/bringing-data-silos-together/";
	})

d3.select("#MarketingTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/19/painting-the-competition-picture/";
	})

d3.select("#CustomerEXTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/09/data-analytics-on-chat-sessions-alan-fitzpatrick/";
	})

d3.select("#ExecutiveIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/03/16/customer-insights-for-a-competitive-edge/";
	})

d3.select("#BusinessIntIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/16/bringing-data-silos-together/";
	})

d3.select("#MarketingIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/19/painting-the-competition-picture/";
	})

d3.select("#CustomerExIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/09/data-analytics-on-chat-sessions-alan-fitzpatrick/";
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

//// GetTime Loop for Ad Part;
//var T = 0;
//var TimeValue ;
//var LoopChangeTime = 3000;
//var AdImageBoxNumber = 8;
//var StableMarginLeft = 10;
//var DirectionJudge = 0;
//
////Get Time Loop for CircleButton Part;
//var TforCircleShowOnly = 0;
//
//RecordtheTime();
//function RecordtheTime(){
//	if(T==AdImageBoxNumber)
//	{
//		DirectionJudge = 1;
//	}
//	else if(T==0)
//	{
//		DirectionJudge = 0;
//	}
//	
//	if(DirectionJudge==0)
//	{
//		d3.select(("#AdImageBox"+T))
//		.transition()
//		.duration(MiddleDurationTime)
//		.style("margin-left",function()
//		{
//			var LeftMoveDistance = 0;
//			LeftMoveDistance = -((document.getElementById("AdImageBox1").getBoundingClientRect().width) + StableMarginLeft)
//			console.log(LeftMoveDistance);
//			return LeftMoveDistance + "px";
//		})
//		T = T + 1;			
//	}
//	else
//	{
//		T = T-1;
//		d3.select(("#AdImageBox"+T))
//		.transition()
//		.duration(MiddleDurationTime)
//		.style("margin-left",function()
//		{
//			var LeftMoveDistance = 0;
//			console.log(LeftMoveDistance);
//			return LeftMoveDistance + StableMarginLeft + "px";
//		})
//			
//	}
//	
//	if(TforCircleShowOnly>3)
//	{
//		TforCircleShowOnly = 1;
//	}
//	
//	if(TforCircleShowOnly > 0)
//	{
//		console.log(d3.select('.BubblePart')[0][0]);
//		if(d3.select('.BubblePart')[0][0]!=null)
//		{		
//			d3.selectAll('.BubblePart')
//			.transition()
//			.duration(ShorDurationTime)
//			.style("width",BubbleButton+"px")
//			.style("margin-left",function()
//			{
//				var marginLeftNum = (BubbleBoxWidth - BubbleButton)/2;
//				return marginLeftNum + "px";
//			})
//			.style("background-color",function()
//			{
//				var Color = "rgb"+"("+"255,255,255"+")";
//				return Color;
//			})
//			.style("border-color",function()
//			{
//				var Color = "rgb"+"("+"227,227,227"+")";
//				return Color;
//			});
//
//			d3.select("#"+"CircleBubble"+TforCircleShowOnly)
//			.transition()
//			.duration(ShorDurationTime)
//			.style("width",BubbleButton*1.5+"px")
//			.style("margin-left",function()
//			{
//				var marginLeftNum = (BubbleBoxWidth - (BubbleButton*1.5))/2;
//				return marginLeftNum + "px";
//			})
//			.style("background-color",function()
//			{
//				var Color = "rgb"+"("+"0,161,175"+")";
//				return Color;
//			})
//			.style("border-color",function()
//			{
//				var Color = "rgb"+"("+"0,161,175"+")";
//				return Color;
//			})
//
//			d3.selectAll(".ContinueChangeBox")
//			.transition()
//			.duration(LongDurationTime)
//			.style("opacity",0)
//			.style("z-index",1);
//
//			d3.select("#ContinueChangeBox"+TforCircleShowOnly)
//			.transition()
//			.duration(LongDurationTime)
//			.style('opacity',1)
//			.style("z-index",3);
//		}
//	}
//	
//	TforCircleShowOnly = TforCircleShowOnly + 1;
//
//	TimeValue = setTimeout("RecordtheTime()",LoopChangeTime);
//}





