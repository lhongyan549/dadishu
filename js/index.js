//当我点击某一个难度病毒图标 ，此图片变成有颜色的
$('.difficulty-img img').click(function () {
    //将三个图片首先统统变为灰色
    var arr = $('.difficulty-img img');
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            $(arr[i]).attr("src", "./Img/b1-gray.png");
        } else if (i == 1) {
            $(arr[i]).attr("src", "./Img/c1-gray.png");
        } else if (i == 2) {
            $(arr[i]).attr("src", "./Img/d1-gray.png");
        }

    }
    //此  this  DOM ==>   $(this)

    //如何将当前元素属性进行设置？
    /* 
        attr();
        获取元素的属性值    对象名.attr("属性名")
        设置元素的属性值    对象名.attr("属性名","属性值")
    */

    //图片对应的变为有颜色的图片

    //1 拿出当前的元素的src值
    var src = $(this).attr('src');
    //2 判断src值得第七个字符到底是b c d
    /* 
        substr(字母索引位置,截取的个数);
        substr(6,1);
    */
    var chary = src.substr(6, 1);
    if (chary == 'b') {
        $(this).attr('src', './Img/b1.png');
    } else if (chary == 'c') {
        $(this).attr('src', './Img/c1.png');
    } else if (chary == 'd') {
        $(this).attr('src', './Img/d1.png');
    }
});
//点击游戏规则后显示
$('#rule-btn').click(function () {
    $('.rule').css('display', 'block');
});
//点击关闭图标后显示
$('#gz_close').click(function () {
    $('.rule').css('display', 'none');
});
//点击开始游戏后显示
$('#start-btn').click(function () {
    $('.init-view').css('display', 'none');
    $('.battle-view').css('display', 'block');
    $('.battle-btn').css('display', 'block');
    $('.prize').css('display', 'none');

    $auDio = new Audio();
    $auDio.src = './mp3/game.mp3';
    $auDio.play();
    function settime() {
        $time = setInterval(function () {
            $a = $('.clock span').text();
            $('.clock span').text(--$a);
            if ($a < 10 && $a > 0) {
                $('.clock span').css('left', '48%');
            } else if ($a == 0) {
                window.clearInterval($time);
                // $('.alert-info').css('display','block');
                // $('.virus').stop(stopAll,goToEnd);
                $('.virusContainer').css('display', 'none');
                $('.prize').css('display', 'block');
            }
        }, 1000);

    }
    settime();
    setInterval(function () {
        var val = Math.floor(Math.random() * 9);
        var randomVal = Math.floor(Math.random() * 4);
        var html = '<img class="virus" src="./Img/b1.png" alt="" srcset="">';
        switch (randomVal) {
            case 0:
                html = '<img class="virus" src="./Img/a1.png" alt="" srcset="">';
                break;
            case 1:
                html = '<img class="virus" src="./Img/b1.png" alt="" srcset="">';
                break;
            case 2:
                html = '<img class="virus" src="./Img/c1.png" alt="" srcset="">';
                break;
            case 3:
                html = '<img class="virus" src="./Img/d1.png" alt="" srcset="">';
                break;
        }
        
        $('.virusContainer')[val].innerHTML = html;
        $('.virus').animate({ 'top': '-12px' }, 1500).animate({ 'top': '50px' }, 1500);
    }, 100);


    $('.virusContainer').click(function () {
        //获取图片 
        //this next()
        var obj = $(this).next('img');
        if ($(this).children('img').length > 0) {
            obj.css('display', 'block');
            //锤子持续的时间
            setTimeout(function () {
                obj.css('display', 'none');
                textObj.css('display', 'none');
            }, 600);

            //锤子点击切换图片
            var src = $($(this).children('img')[0]).attr('src');
            var cur = src.substr(6, 1);
            var curObj = $(this).next("img")
            var textObj = curObj.next('div');
            if (cur == 'a') {
                $($(this).children('img')[0]).attr('src', './Img/a2.png');
                //分值
                textObj.text("-50");
                textObj.css("display", "block");
                //sum = 原来 +当前
                var yuanLai = $($(".score").children('span')[0]).text();
                yuanLai = Number(yuanLai) - 50
                $($(".score").children('span')[0]).text(yuanLai);

            } else if (cur == 'b') {
                $($(this).children('img')[0]).attr('src', './Img/b2.png');
                textObj.text("+20");
                textObj.css("display", "block");

                //sum = 原来 +当前
                var yuanLai = $($(".score").children('span')[0]).text();
                yuanLai = Number(yuanLai) + 20
                $($(".score").children('span')[0]).text(yuanLai);
            }
            else if (cur == 'c') {
                $($(this).children('img')[0]).attr('src', './Img/c2.png');

                textObj.text("+30");
                textObj.css("display", "block");
                //sum = 原来 +当前
                var yuanLai = $($(".score").children('span')[0]).text();
                yuanLai = Number(yuanLai) + 30
                $($(".score").children('span')[0]).text(yuanLai);
            }
            else if (cur == 'd') {
                $($(this).children('img')[0]).attr('src', './Img/d2.png');

                textObj.text("+40");
                textObj.css("display", "block");
                //sum = 原来 +当前
                var yuanLai = $($(".score").children('span')[0]).text();
                yuanLai = Number(yuanLai) + 50
                $($(".score").children('span')[0]).text(yuanLai);
            }

            //放音乐
            var music = new Audio('./mp3/flight.mp3');
            music.play();
        }



    });

});


//点击中奖纪录后显示

