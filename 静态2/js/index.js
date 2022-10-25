$(document).ready(function () {

    // 展示联系方式部分
    $('#wecahat').mouseover(function () {
        $('.wechatQRcode').css('display', 'block')
        $("#wecahat img").attr('src', './img/wechat_two.png')
    })
    $('#wecahat').mouseout(function () {
        $('.wechatQRcode').css('display', 'none')
        $("#wecahat img").attr('src', './img/wechat.png')
    })

    $('#tel').mouseover(function () {
        $('.telephone').css('display', 'block')
        $("#tel img").attr('src', './img/tel_two.png')
    })
    $('#tel').mouseout(function () {
        $('.telephone').css('display', 'none')
        $("#tel img").attr('src', './img/telephone.png')
    })

    $('#customer').mouseover(function () {
        $('.customerQRcode').css('display', 'block')
        $("#customer img").attr('src', './img/customer_two.png')
    })
    $('#customer').mouseout(function () {
        $('.customerQRcode').css('display', 'none')
        $("#customer img").attr('src', './img/customer.png')
    })

    // 控制小屏取消动画以及头部导航固定部分
    let width = $(window).width()
    if (width < 768) {
        $("script[src='./js/wow.js']").remove()
        $("link[href='./css/animate.css']").remove()
    }

    $(window).resize(function () {
        var widthresize = $(window).width()
        if (widthresize < 768) {
            $("script[src='./js/wow.js']").remove()
            $("link[href='./css/animate.css']").remove()
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 700 && widthresize > 768) {
                $(".header-fixed-big").css('display', 'block')
            }
        })
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $(".header-fixed-big").css('display', 'block')
        } else {
            $(".header-fixed-big").css('display', 'none')
        }

    })

    // 控制导航下拉部分
    $('.showmenu').click(function () {
        $('#main_nav').css('display', 'block')
        $('body,html').css('overflow', 'hidden')
    })
    $('#hidemenu').click(function () {
        $('#main_nav').css('display', 'none')
        $('body,html').css('overflow', 'auto')
    })

    // 控制小屏点击底部悬浮出现联系方式部分
    let i = 0
    let j = 0
    let k = 0
    $('.wechat-border').click(function () {
        if (i % 2 == 0) {
            $('.wechatQRcode-small').css('display', 'block')
            i++
        } else {
            $('.wechatQRcode-small').css('display', 'none')
            i++
        }
        $('.telephone-small').css('display', 'none')
        $('.customerQRcode-small').css('display', 'none')
        j = 0; k = 0
    })
    $('.tel-border').click(function () {
        if (j % 2 == 0) {
            $('.telephone-small').css('display', 'block')
            j++
        } else {
            $('.telephone-small').css('display', 'none')
            j++
        }
        $('.customerQRcode-small').css('display', 'none')
        $('.wechatQRcode-small').css('display', 'none')
        i = 0; k = 0
    })
    $('.customer-border').click(function () {
        if (k % 2 == 0) {
            $('.customerQRcode-small').css('display', 'block')
            k++
        } else {
            $('.customerQRcode-small').css('display', 'none')
            k++
        }
        $('.telephone-small').css('display', 'none')
        $('.wechatQRcode-small').css('display', 'none')
        i = 0; j = 0
    })




})