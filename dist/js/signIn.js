"use strict";

var btn = document.getElementById("btn");

btn.onclick = function () {
  var flug = true;
  var user = document.getElementById("user").value;
  var paw = document.getElementById("paw").value; // console.log(user, paw)

  if (user == "") {
    alert("用户名不能为空/用户名重复");
    flug = false;
  } else {
    flug = true;
  }

  if (paw == "") {
    // alert("用户密码不能为空");
    flug = false;
  } else {
    flug = true;
  }

  if (flug) {
    axios.post("http://localhost:3000/user", {
      username: user,
      password: paw
    }).then(function (res) {
      su = res.data.length;

      if (su == 0) {
        alert("用户名已存在");
      } else {
        alert("注册成功");
        window.location.href = "login.html";
      }
    })["catch"](function (err) {
      console.log(err);
    });
  }
};