window.onload = function () {

  CountLeftTime();

}

function CountLeftTime(){
  var Daytime = null;
  var Hourtime = null;
  var Minutestime = null;
  var Secondstime = null;

  var StartTime = new Date();
  var EndTime = new Date("2016/09/30");

  var LeftTime = EndTime.getTime() - StartTime.getTime();

  Daytime = Math.floor(LeftTime/(1000*60*60*24));
  Hourtime = Math.floor(LeftTime/(1000*60*60)%24);
  Minutestime = Math.floor(LeftTime/(1000*60)%60);
  Secondstime = Math.floor(LeftTime/(1000)%60);

  document.getElementById("DayTime").innerHTML = Daytime;
  document.getElementById("HourTime").innerHTML = Hourtime;
  document.getElementById("MinutesTime").innerHTML = Minutestime;
  document.getElementById("SecondsTime").innerHTML = Secondstime;

  setTimeout(CountLeftTime,1000);

}
