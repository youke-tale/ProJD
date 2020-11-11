;
$(function() {
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
    // $("#pro1")
    axios.get("http://localhost:3000/products")
        .then(res => {
            var str = '';
            // var nums = {};
            for (let i = 0; i < 10; i++) {

                // for (;;) {
                //     let num = Math.floor(Math.random() * 12);
                //     if (!nums.num) {
                //         nums += num;
                //         return num;
                //     }
                // }
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
})