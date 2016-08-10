//Mouse move over on Icons.

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

// Mouse Move On Transition
//Buttons Wranning and Info
d3.selectAll('.btnBlack')
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"81,81,82"+')')
		.style("border-color","rgb"+'('+"81,81,82"+')')
		.style("color","rgb"+'('+"255,255,255"+')');
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color','transparent'/*"rgb"+'('+"255,153,0"+')'*/)
		.style("border-color","rgb"+'('+"56,56,57"+')')
		.style("color","rgb"+'('+"56,56,57"+')');
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
		window.location.href="NewLandingPage.html";
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

//Second Title Bar Clcik
d3.select("#AboutUs")
	.on("click",function()
	{
		window.location.href="http://www.tasteanalytics.com/about-us/";
	})

d3.select("#Product")
	.on("click",function()
	{
		window.location.href="Product.html";
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

//Blog
d3.select("#BlogIext")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/";
	})

//Auton Scroll