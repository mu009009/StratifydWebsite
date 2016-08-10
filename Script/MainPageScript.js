// Time for Transition Animation setting
var ShorDurationTime = 200;
var MiddleDurationTime = 500;

// GetTime;
var T = 0;
var TimeValue ;
var LoopChangeTime = 3000;
var AdImageBoxNumber = 8;
var StableMarginLeft = 10;
var DirectionJudge = 0;

RecordtheTime();
function RecordtheTime(){
	if(T==AdImageBoxNumber)
	{
		DirectionJudge = 1;
	}
	else if(T==0)
	{
		DirectionJudge = 0;
	}
	
	if(DirectionJudge==0)
	{
		d3.select(("#AdImageBox"+T))
		.transition()
		.duration(MiddleDurationTime)
		.style("margin-left",function()
		{
			var LeftMoveDistance = 0;
			LeftMoveDistance = -((document.getElementById("AdImageBox1").getBoundingClientRect().width) + StableMarginLeft)
			console.log(LeftMoveDistance);
			return LeftMoveDistance + "px";
		})
		T = T + 1;			
	}
	else
	{
		T = T-1;
		d3.select(("#AdImageBox"+T))
		.transition()
		.duration(MiddleDurationTime)
		.style("margin-left",function()
		{
			var LeftMoveDistance = 0;
			console.log(LeftMoveDistance);
			return LeftMoveDistance + StableMarginLeft + "px";
		})
			
	}

	TimeValue = setTimeout("RecordtheTime()",LoopChangeTime);
}




//Vertical center function part for title text buttons
var FontSizeNumberStr = d3.select(".ButtonText").style("font-size");
var ProductSolutionPartHeight = document.getElementById("ProductSolutionPart").getBoundingClientRect().height;
var FontSizeNumber = parseFloat(ValuewithPxStrtoNumValue(FontSizeNumberStr));

var TextMiddlePosition = (ProductSolutionPartHeight - FontSizeNumber/2)/2;
console.log(TextMiddlePosition);

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

var ContentPartWidth = document.getElementById("ContentPart").getBoundingClientRect().width;
var TeamPhotoWidh = document.getElementById("TeamPhoto1").getBoundingClientRect().width;

d3.selectAll(".Icons")
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

// Mouse Move On Transition

//Buttons Wranning and Info
d3.selectAll('.btn-warning')
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,153,0"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,255,255"+')')
		.style('color',"rgb"+'('+"255,153,0"+')')
	})

d3.selectAll('.btn-info')
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"84,114,210"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,255,255"+')')
		.style('color',"rgb"+'('+"84,114,210"+')')
	})

d3.select("#FirstLearnMore")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"224,135,0"+')')
		.style("border-color","rgb"+'('+"224,135,0"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,153,0"+')')
		.style("border-color","rgb"+'('+"255,153,0"+')')
	})

d3.select("#FirstWatchVideo")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"60,94,204"+')')
		.style("border-color","rgb"+'('+"60,94,204"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"84,114,210"+')')
		.style("border-color","rgb"+'('+"84,114,210"+')')
	})

//BottomLink Text Part
d3.selectAll(".SmallButtonTextLeft")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('color',"rgb"+'('+"72,168,222"+')')
	})


//Buttons click response

//Icon Click Jumps
d3.select("#CompanyIcon")
	.on("click",function()
	{
		window.location.reload();
	})

d3.selectAll("#FacebookIcon")
	.on("click",function()
	{
		window.location.href="https://www.facebook.com/stratifyd/";
	})

d3.selectAll("#LinkedinIcon")
	.on("click",function()
	{
		window.location.href="https://www.linkedin.com/company/stratifyd";
	})

d3.selectAll("#TwitterIcon")
	.on("click",function()
	{
		window.location.href="https://twitter.com/StratifydTweets";
	})

d3.selectAll("#YoutubeIcon")
	.on("click",function()
	{
		window.location.href="https://www.youtube.com/channel/UCAkngNoMwJDNjEPzX3lIBsw";
	})
d3.select("#GooglePlusIcon")
	.on("click",function()
	{
		window.location.href="https://plus.google.com/u/0/+Stratifyd/posts";
	})

d3.selectAll("#TumblrIcon")
	.on("click",function()
	{
		window.location.href="http://stratifyd.tumblr.com/";
	})

d3.selectAll("#OnlineIcon")
	.on("click",function()
	{
		window.location.reload();
	})

d3.select("#AboutUs")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/about-us/";
	})

d3.select("#Product")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/product-page/";
	})

d3.select("#Solution")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/";
	})

d3.select("#Blog")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/";
	})

d3.select("#Contactus")
	.on("click",function()
	{
//		window.location.href="http://www.tasteanalytics.com/product-page/";
	})

d3.select("#Login")
	.on("click",function()
	{
		window.location.href="https://signals.stratifyd.com/login.html#sign-in";
	})

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

d3.select("#SecondLearnMore")
	.on("click",function()
	{
		window.location.href="http://www.stratifyd.com/product-page/";
	})

d3.select("#SecondAboutUs")
	.on("click",function()
	{
		window.location.href="http://www.stratifyd.com/about-us/";
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

//Bottom Link Part buttons First Part 4 buttons
d3.select("#RetailIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/24/shall-i-sell-on-walmart-or-amazon/";
	})

d3.select("#RetailTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/24/shall-i-sell-on-walmart-or-amazon/";
	})

d3.select("#UtilitiesIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/04/20/smarter-cities-through-smart-analytics/";
	})

d3.select("#UtilitiesTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/04/20/smarter-cities-through-smart-analytics/";
	})

d3.select("#HospitalityIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/03/29/restaurants-leverage-data-for-customer-insights/";
	})

d3.select("#HospitalityTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/03/29/restaurants-leverage-data-for-customer-insights/";
	})

d3.select("#FinancialIcon")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/25/engaging-your-app-users/";
	})

d3.select("#FinancialTitle")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/2016/02/25/engaging-your-app-users/";
	})

//Bottom Text Link Part
//Product Part
d3.select("#HIWText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/how-it-works/";
	})

d3.select("#ETUText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/easy-to-use/";
	})

d3.select("#INVisText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/intuitive-visualization/";
	})

d3.select("#HPAText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/high-powered-analytics/";
	})

d3.select("#ComDataText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/comprehensive-data/";
	})

//Solution
d3.select("#BIext")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465569127358-0bff86aa-846b";
	})

d3.select("#ExcuText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465569127469-ed2189fe-e679";
	})

d3.select("#MarketText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465570106735-fd86a6b5-8112";
	})

d3.select("#CustomerEXText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465570122963-b046f844-a6b7";
	})

d3.select("#RetailText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465572646633-765b2856-5cb6";
	})
d3.select("#UtilitiesText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465572647477-b998783e-9183";
	})

d3.select("#HospitalityText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465572648366-bfdb60c7-8301";
	})

d3.select("#FinSerText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/solution/#1465572649316-c4a0c801-a7f5";
	})

//Blog
d3.select("#BlogIext")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/";
	})

//Company
d3.select("#OurTeamText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/our-team/";
	})
	
d3.select("#JOppText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/job-opportunities/";
	})
	
d3.select("#MediaText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/media/";
	})	

d3.select("#ContactText")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/contact-us/";
	})	

//Play Video
d3.selectAll(".ContentVideo")
.on("click",function()
	{
		d3.select(this).loop = true;
		d3.select(this).play();
	})

//Auton Scroll
//console.log()