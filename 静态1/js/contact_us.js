
$(document).ready(function() {


    let footer = `<div class="contact-us"></div>
                    <div class="contact-us-code">
                        <div class="us-title">
                            定制软件、咨询业务
                        </div>
                        <img src="./img/us-img.png" alt="">
                        <div class="us-name">
                            微信联系（薛总）
                        </div>
                        <div class="us-tel">
                            电话：18850331555
                        </div>
                        <div class="us-button">
                            我知道了
                        </div>
                    </div>`

    $('.banner').append(footer);

    $(window).scroll(function(){
        let top = $(document).scrollTop()
        let codetop = $(window).height() * 0.5 - 201.5 + top
        $('.contact-us').css('top',top)
        $('.contact-us-code').css('top',codetop)
        
    })

    let showcontact = $('#showcontact')  //获取 联系我们
    let hidecontact = $('.contact-us')
    let contactcode = $('.contact-us-code')
    let hidebutton = $('.us-button')
    
    showcontact.click(function(){
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

