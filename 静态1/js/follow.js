
$(document).ready(function() {


    let footer = `<div class="follow-us"></div>
                    <div class="follow-us-code">
                        <img src="./img/jwerweima.png" alt="">
                        <div class="us-name">
                            长按识别，或搜索‘易教务’
                        </div>
                    </div>`

    $('.banner').append(footer);

    $(window).scroll(function(){
        let top = $(document).scrollTop()
        let codetop = $(window).height() * 0.5 - 201.5 + top
        $('.follow-us').css('top',top)
        $('.follow-us-code').css('top',codetop)
        
    })

    let follow = $('#follow')  //获取 联系我们
    let hidecontact = $('.follow-us')
    let contactcode = $('.follow-us-code')
    let hidebutton = $('.us-button')
    
    follow.click(function(){
        hidecontact.css('display','block')
        contactcode.css('display','block')
    })
    hidebutton.click(function(){
        hidecontact.css('display','none')
        contactcode.css('display','none')
    })
    hidecontact.click(function(){
        hidecontact.css('display','none')
        contactcode.css('display','none')
        $('.process-intro').css('display','none')
    })
})

