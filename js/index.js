;
$(function() {
    copy();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            $("#search_float").stop().animate({
                top: 0
            }, 500)
        } else {
            $("#search_float").stop().animate({
                top: -52
            })
        }
    });
    axios.get("http://localhost:3000/products")
        .then(res => {
            var str = '';
            // var nums = {};
            for (let i = 0; i < 10; i++) {
                let num = Math.floor(Math.random() * 12);
                str += `
                        <a href="#">
                            <img class="img1" src="${res.data[num].img1}">
                            <img src="${res.data[num].img2}">
                            <div>
                                <img src="${res.data[num].img3}">
                                <span>${res.data[num].txt1}</span>
                            </div>
                            <span class="title">${res.data[num].txt2}</span>
                        </a>
                        `
            }
            $("#pro1").html(str);
        })
    axios.get("http://localhost:3000/list")
        .then(res => {
            var str = '';
            res.data.forEach(item => {
                str += `
                <li>
                <a data-id="${item.id}" href="html/details.html?id=${item.id}" target="_blank">
                    <img src="${item.img}">
                    <p>
                        <i>自营</i> ${item.txt}
                    </p>
                    <span>
                        <i>¥</i>&nbsp;${item.price}
                    </span>
                </a>
            </li>
                `
            });
            $("#list").html(str);
        })
    $(".iconclose").click(function() {
        $(this).parents("div").parents("div").remove();
    })
})

function copy() {
    let str = '';
    str = `
        <div id="GG">
            <div>
                <img src="http://img30.360buyimg.com/babel/jfs/t1/146991/13/13309/33190/5fa50a6eE1cce4d61/3781154efadb9299.png.webp" alt="">
                <div>
                    <img class="img1" src="http://img14.360buyimg.com/img/jfs/t1/123924/1/16447/25668/5f9780e8Edbb615c8/120c0dfcba897a48.jpg.webp" alt="">
                </div>
                <i class="iconfont iconclose"></i>
                <div class="link">
                    <a href="#"255
                        <img src="//img30.360buyimg.com/babel/jfs/t1/144902/35/13471/118867/5fa51961Ee595c648/553d93381bcee92f.jpg.webp" alt="大促顶部推广1图片">
                    </a>
                    <a href="#">
                        <img src="//img14.360buyimg.com/babel/jfs/t1/129805/9/14609/80390/5fa0b511E33b87252/78687cfec0119996.jpg.webp" alt="大促顶部推广2图片">
                    </a>
                    <a href="#">
                        <img src="//img20.360buyimg.com/babel/jfs/t1/10797/1/6724/87409/5c24083cE09cb99d1/d2ea2265385befbe.jpg.webp" alt="大促顶部推广3图片">
                    </a>
                </div>
            </div>     
        </div>
    `
    $("#GG_wrap").html(str);
}