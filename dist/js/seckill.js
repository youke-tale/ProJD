"use strict";

function oDate(date) {
  var nowDate = new Date();
  var ss = Math.floor((date - nowDate) / 1000);
  var hour = Math.floor(ss / 3600);
  var minute = Math.floor(ss / 60 % 60);
  var second = Math.floor(ss % 60);

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  h.innerText = hour;
  m.innerText = minute;
  s.innerText = second;

  if (ss <= 0) {
    clearInterval(timer);
    tit.innerText = "倒计时结束";
  }
}

var d = new Date("2020/11/13 10:00:00");
oDate(d);
var timer = setInterval(function () {
  oDate(d);
}, 1000);