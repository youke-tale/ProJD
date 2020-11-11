"use strict";

;
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $("#search_float").stop().animate({
        top: 0
      }, 500);
    } else {
      $("#search_float").stop().animate({
        top: -52
      });
    }
  }); // $("#pro1")

  axios.get("http://localhost:3000/products").then(function (res) {
    var str = ''; // var nums = {};

    for (var i = 0; i < 10; i++) {
      // for (;;) {
      //     let num = Math.floor(Math.random() * 12);
      //     if (!nums.num) {
      //         nums += num;
      //         return num;
      //     }
      // }
      var num = Math.floor(Math.random() * 12);
      str += "\n                        <a href=\"#\">\n                            <img class=\"img1\" src=\"".concat(res.data[num].img1, "\">\n                            <img src=\"").concat(res.data[num].img2, "\">\n                            <div>\n                                <img src=\"").concat(res.data[num].img3, "\">\n                                <span>").concat(res.data[num].txt1, "</span>\n                            </div>\n                            <span class=\"title\">").concat(res.data[num].txt2, "</span>\n                        </a>\n                        ");
    }

    $("#pro1").html(str);
  });
  axios.get("http://localhost:3000/list").then(function (res) {
    var str = '';
    res.data.forEach(function (item) {
      str += "\n                <li>\n                <a data-id=\"".concat(item.id, "\" href=\"html/details.html?id=").concat(item.id, "\" target=\"_blank\">\n                    <img src=\"").concat(item.img, "\">\n                    <p>\n                        <i>\u81EA\u8425</i> ").concat(item.txt, "\n                    </p>\n                    <span>\n                        <i>\xA5</i>&nbsp;").concat(item.price, "\n                    </span>\n                </a>\n            </li>\n                ");
    });
    $("#list").html(str);
  });
});