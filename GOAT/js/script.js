// topページ
$(function () {
    $(window).scroll(function () {
        var obj = $('.mv__button');
        scroll = $(window).scrollTop();
        if (scroll > 100) {
            obj.addClass('isSmall');
        } else {
            obj.removeClass('isSmall');
        }
    })
});

//ゆっくりスクロールトップ
$(function () {
    $('.footer__button').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


// $(function(){
//     $(window).scroll(function(){
//       var obj = $('.mv__button');
//       scroll = $(window).scrollTop();
//       if (scroll > 1) {
//         obj.addClass('isSmall');
//       } else{
//         obj.removeClass('isSmall');
//       }
//     })
//   });

// $(function () {
//     $(".faq__ttl dt").on("click", function () {
//         $(this).next().slideToggle(300);
//         $(this).toggleClass("active"); //追加部分
//     });
// });

// $(function () {
//     $(".faq2__ttl dt").on("click", function () {
//         $(this).next().slideToggle(300);
//         $(this).toggleClass("active"); //追加部分
//     });
// });

// $(function () {
//     $(".faq3__ttl dt").on("click", function () {
//         $(this).next().slideToggle(300);
//         $(this).toggleClass("active"); //追加部分
//     });
// });

$(function () {
    // topのキャッチコピーをフェードイン
    $(".mv__copy").hide().fadeIn(1800);
    // 下層ページのfvの項目をスライドイン　mv__catchboxに含まれるため記述不要。
    // $(".mv__sub").hide().fadeIn();

    //上の機能をまとめてできるのでは？？検証中→できたけどmv__copyは必要
    $(".mv__catchbox").hide().fadeIn(900);
});

//スクロールで説明会リンクボタン縮小
$(function () {
    $(window).scroll(function () {
        var obj = $('#index .mv__button');
        scroll = $(window).scrollTop();
        if (scroll > 100) {
            obj.addClass('isSmall');
        } else {
            obj.removeClass('isSmall');
        }
    })
});

//JOB 画像が下からフェードインしてくる
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});

//top,下層ページの画像フェードイン
$(function () {
    $(window).scroll(function () {
        $('.fadein2').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 150) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});

//セレクタ（faq__q）に変更
$(function () {
    $("#faq .faq__q").on("click", function () {
        $(this).next().slideToggle(300); //回答部分がスライドしてきて、表示非表示が切り替わる
        $(this).toggleClass("active"); //クリックしたら矢印の向きが変わる
    });
});

//Q&Aのアコーディオン
$(function () {
    $("#faq .faq__q").on("click", function () {
        $("#faq .faq__a").addClass("active");
    });
});