$(document).ready(function() {
    $('.login-top-left').click(function(){
        $('.login-top-left').css('border-bottom','2px solid #3a90fd')
        $('.login-top-left').css('color','#3a90fd')
        $('.login-bottom-left').css('display','block')
        $('.login-top-right').css('border-bottom','2px solid white')
        $('.login-top-right').css('color','rgba(0,0,0,0.65)')
        $('.login-bottom-right').css('display','none')
    })

    $('.login-top-right').click(function(){
        $('.login-top-right').css('border-bottom','2px solid #3a90fd')
        $('.login-top-right').css('color','#3a90fd')
        $('.login-bottom-right').css('display','block')
        $('.login-top-left').css('border-bottom','2px solid white')
        $('.login-top-left').css('color','rgba(0,0,0,0.65)')
        $('.login-bottom-left').css('display','none')
    })

    $('.return').click(function () { 
        $('.login').css('display','block')
        $('.login-register').css('display','none') 
    })

    $('.newregister').click(function () {
        $('.login').css('display','none')
        $('.login-register').css('display','none')
        $('.register').css('display','block')
    })

    $('.newforget').click(function () {
        $('.login').css('display','none')
        $('.login-register').css('display','none')
        $('.forget').css('display','block')
    })

    $('select').click(function(){
        $('#selectinput').val($(this).val())
    }) 
    $('select').change(function(){
        $('#selectinput').val($(this).val())
    })
})
