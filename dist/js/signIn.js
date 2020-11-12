"use strict";

var btn = document.getElementById("btn");
var flex1 = true;
var flex2 = true;
var su = "";

btn.onclick = function () {
  var user = document.getElementById("user").value;
  var paw = document.getElementById("paw").value;

  if (user == "") {
    alert("用户名不能为空");
    flex1 = false;
  } else {
    flex1 = true;
  }

  if (paw == "") {
    alert("用户密码不能为空");
    flex2 = false;
  } else {
    flex2 = true;
  }

  if (flex1 && flex2) {
    axios.post("http://localhost:3000/user", {
      username: user,
      password: paw
    }).then(function (res) {
      // su = res.data.length;
      // if (su) {
      alert("注册成功");
      window.location.href = "login.html"; // }
    });
  }
};