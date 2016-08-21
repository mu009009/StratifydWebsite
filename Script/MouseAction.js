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
		.style('background-color',"rgb"+'('+"33,124,186"+')')
		.style('border-color',"rgb"+'('+"33,124,186"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"80,167,224"+')')
		.style('border-color',"rgb"+'('+"80,167,224"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})

//BottomLink Text Part
d3.selectAll(".SmallButtonTextLeft")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('color',"rgb"+'('+"72,168,222"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('color',"#535353"/*"rgb"+'('+"255,255,255"+')'*/)
	})

//Bottom Contact Way Part
d3.selectAll(".Icons2")
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style("background-color","rgb" + "(" + "255,255,255" + ")");
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style("background-color","rgb" + "(" + "5,124,217" + ")");		
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
		window.location.href="HowitWorks.html";
	})

d3.select("#ETUText")
	.on("click",function()
	{
		window.location.href="EasyToUse.html";
	})

d3.select("#INVisText")
	.on("click",function()
	{
		window.location.href="IntuitiveVisuaIinterface.html";
	})

d3.select("#HPAText")
	.on("click",function()
	{
		window.location.href="HighPoweredAnalytics.html";
	})

d3.select("#ComDataText")
	.on("click",function()
	{
		window.location.href="ComprehensiveDataAnalyticsSolution.html";
	})

//Solution
d3.select("#BIext")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - BI.pdf";
	})

d3.select("#ExcuText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Executive.pdf";
	})

d3.select("#MarketText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Marketing.pdf";
	})

d3.select("#CustomerEXText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Consumer Products.pdf";
	})

d3.select("#RetailText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Retail.pdf";
	})
d3.select("#UtilitiesText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Utilities.pdf";
	})

d3.select("#HospitalityText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Hospitality for website.pdf";
	})

d3.select("#FinSerText")
	.on("click",function()
	{
		window.location.href="Resource/PDFResource/Case Study - Financial Services.pdf";
	})

//Company
d3.select("#OurTeamText")
	.on("click",function()
	{
		window.location.href="AboutUsPage.html";
	})
	
d3.select("#JOppText")
	.on("click",function()
	{
		window.location.href="JoinUs.html";
	})
	
d3.select("#MediaText")
	.on("click",function()
	{
		window.location.href="MediaPage.html";
	})	

d3.select("#ContactText")
	.on("click",function()
	{
		Intercom('show');
	})

//Blog
d3.select("#BlogIext")
	.on("click",function()
	{
		window.location.href="http://blog.stratifyd.com/";
	})

//TitleStrtifyd
d3.select('#CompanyIconTitleText')
.on("click",function(){
	window.location.href="index.html";
})

d3.select('#navProduct')
.on("click",function(){
	window.location.href="Product.html";
})

d3.select('#navSolution')
.on("click",function(){
	window.location.href="SolutionPage.html";
})

d3.select('#navBlog')
.on("click",function(){
	window.location.href="http://blog.stratifyd.com/";
})

//d3.select('#navContactUs')
//.on('click',function(){
//	window.location.href="ContactUs.html";
//})

d3.select('#navOurTeam')
.on('click',function(){
	window.location.href="AboutUsPage.html";
})
d3.select('#NavBarLoginButton')
.on('click',function(){
	window.location.href="https://signals.stratifyd.com/login.html#sign-in";
})


//New Log IN not Button
d3.select('#navLogIN')
.on('click',function(){
	window.location.href="https://signals.stratifyd.com/login.html#sign-in";
})

//New Nav Bar Button Change
//Log in Button
d3.select('#NavBarLoginButton')
	.on('mouseover',function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)		
		.style('background-color',function()
		{
			var Color = "rgb" + "(" + "211,210,214" + ")";
			return Color;
		})
		.style('border-color',function()
		{
			var Color = "rgb" + "(" + "211,210,214" + ")";
			return Color;
		})
		.style('color',function()
		{
			var Color = "rgb" + "(" + "255,255,255" + ")";
			return Color;
		})
		
	})
	.on('mouseout',function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',function()
		{
			var Color = "rgb" + "(" + "255,255,255" + ")";
			return Color;
		})
		.style('border-color',function()
		{
			var Color = "rgb" + "(" + "211,210,214" + ")";
			return Color;
		})		
		.style('color',function()
		{
			var Color = "rgb" + "(" + "103,101,181" + ")";
			return Color;
		})			
	})

//Sign Up Button
d3.select('#NavBarSignUpButton')
	.on('mouseover',function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)		
		.style('background-color',function()
		{
			var Color = "rgb" + "(" + "80,167,224" + ")";
			return Color;
		})
		.style('border-color',function()
		{
			var Color = "rgb" + "(" + "80,167,224" + ")";
			return Color;
		})
		.style('color',function()
		{
			var Color = "rgb" + "(" + "255,255,255" + ")";
			return Color;
		})
		
	})
	.on('mouseout',function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',function()
		{
			var Color = "rgb" + "(" + "56,56,158" + ")";
			return Color;
		})
		.style('border-color',function()
		{
			var Color = "rgb" + "(" + "56,56,158" + ")";
			return Color;
		})		
		.style('color',function()
		{
			var Color = "rgb" + "(" + "255,255,255" + ")";
			return Color;
		})			
	})

//Play Video
d3.selectAll(".ContentVideo")
.on("click",function()
	{
		d3.select(this).loop = true;
		d3.select(this).play();
	})


//Auton Scroll

//FirstFreeTrialButton
d3.select('#FirstTry')
	.on("mouseover",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"255,255,255"+')')
		.style('border-color',"rgb"+'('+"255,255,255"+')')
		.style('color',"rgb"+'('+"99,104,247"+')')
	})
	.on("mouseout",function()
	{
		d3.select(this)
		.transition()
		.duration(ShorDurationTime)
		.style('background-color',"rgb"+'('+"99,104,247"+')')
		.style('border-color',"rgb"+'('+"99,104,247"+')')
		.style('color',"rgb"+'('+"255,255,255"+')')
	})
	.on("click",function()
	{
//		window.location.href = "https://signals.stratifyd.com/login.html#new";
		window.location.href = "Product.html";
	})

d3.select('#navContactUs')
.on('click', function(){
	Intercom('show');
})
