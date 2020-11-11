"use strict";

$("#btn").click(function () {
  var user = $("#user").val();
  var paw = $("#paw").val();
  axios.get("http://localhost:3000/user", {
    params: {
      username: user,
      password: paw
    }
  }).then(function (res) {
    if (res.data.length) {
      alert("登录成功！");
      window.location.href = "../index.html";
    } else {
      alert("用户名或密码错误！！！");
    }
  });
});