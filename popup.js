document.addEventListener('DOMContentLoaded', function() {

  setInterval(function() {
    var d = new Date();
    var suf, monthword, allmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = d.getDate();
    if(date % 10 == 1) {
      suf = `st`;
    }
    else if(date % 10 == 2) {
      suf = `nd`;
    }
    else if(date % 10 == 3) {
      suf = `rd`;
    }
    else {
      suf = `th`;
    }
    var month = d.getMonth();
    monthword = allmonths[month];
    var year = d.getFullYear();
    var fulldate = `${date}${suf} ${monthword} ${year}`;
    document.getElementById('dates').innerHTML = `${date}${suf}`;
    document.getElementById('month').innerHTML = `${monthword}`;
    document.getElementById('year').innerHTML = `${year}`;

    hoursTime = d.getHours().toString();
    minutesTime = d.getMinutes().toString();
    secondsTime = d.getSeconds().toString();
    if(hoursTime.length == 1) {
      hoursTime = '0' + hoursTime;
    }
    if(minutesTime.length == 1) {
      minutesTime = '0' + minutesTime;
    }
    if(secondsTime.length == 1) {
      secondsTime = '0' + secondsTime;
    }

    document.getElementById('hours').innerHTML = `${hoursTime}`;
    document.getElementById('minutes').innerHTML = `${minutesTime}`;
    document.getElementById('seconds').innerHTML = `${secondsTime}`;
  }, 1000);

});
