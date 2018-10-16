export function timer() {
  let timeend= new Date();
  timeend= new Date(2018, 10, 30, 60);

  let min, hour, day, sec;

  window.setInterval(function () {
    day = new Date();
    day = Math.floor((timeend-day)/1000);
    sec=day%60; day=Math.floor(day/60); if(sec<10)sec='0'+sec;
    min=day%60; day=Math.floor(day/60); if(min<10)min='0'+min;
    hour=day%24; day=Math.floor(day/24);

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("second").innerHTML = sec;
  },1000);
}