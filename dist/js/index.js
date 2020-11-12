"use strict";

;
$(function () {
  copy();
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
  });
  axios.get("http://localhost:3000/products").then(function (res) {
    var str = ''; // var nums = {};

    for (var i = 0; i < 10; i++) {
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
  $(".iconclose").click(function () {
    $(this).parents("div").parents("div").remove();
  });
});

function copy() {
  var str = '';
  str = "\n        <div id=\"GG\">\n            <div>\n                <img src=\"http://img30.360buyimg.com/babel/jfs/t1/146991/13/13309/33190/5fa50a6eE1cce4d61/3781154efadb9299.png.webp\" alt=\"\">\n                <div>\n                    <img class=\"img1\" src=\"http://img14.360buyimg.com/img/jfs/t1/123924/1/16447/25668/5f9780e8Edbb615c8/120c0dfcba897a48.jpg.webp\" alt=\"\">\n                </div>\n                <i class=\"iconfont iconclose\"></i>\n                <div class=\"link\">\n                    <a href=\"#\"255\n                        <img src=\"//img30.360buyimg.com/babel/jfs/t1/144902/35/13471/118867/5fa51961Ee595c648/553d93381bcee92f.jpg.webp\" alt=\"\u5927\u4FC3\u9876\u90E8\u63A8\u5E7F1\u56FE\u7247\">\n                    </a>\n                    <a href=\"#\">\n                        <img src=\"//img14.360buyimg.com/babel/jfs/t1/129805/9/14609/80390/5fa0b511E33b87252/78687cfec0119996.jpg.webp\" alt=\"\u5927\u4FC3\u9876\u90E8\u63A8\u5E7F2\u56FE\u7247\">\n                    </a>\n                    <a href=\"#\">\n                        <img src=\"//img20.360buyimg.com/babel/jfs/t1/10797/1/6724/87409/5c24083cE09cb99d1/d2ea2265385befbe.jpg.webp\" alt=\"\u5927\u4FC3\u9876\u90E8\u63A8\u5E7F3\u56FE\u7247\">\n                    </a>\n                </div>\n            </div>     \n        </div>\n    ";
  $("#GG_wrap").html(str);
}