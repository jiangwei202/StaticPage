// 点击三条线
var  navTab =document.querySelector('.nav-tab')
// 三条线
var  navTabs =document.querySelector('.nav-tab-sub')
// X线
var  navTabx =document.querySelector('.nav-tab-x')
// 一级菜单页面
var mainNav =document.querySelector('.main-nav')
//一级菜单
var mainTitle =document.querySelectorAll('.main-nav-title')
//二级菜单
var mainShow =document.querySelectorAll('.nav-show')
// 正方形点击
navTabs.onclick = function(){
    navTabs.style.display="none"
    navTabx.style.display="block"
    // mainNav.style.display="block"
    $(".main-nav").slideDown(400);
    
}

//叉号点击
navTabx.onclick=function(){
    navTabx.style.display="none"
    navTabs.style.display="block"
    // mainNav.style.display="none"
    $(".main-nav").slideUp(300);
    
}

// 屏幕大于578
window.onresize = function () {
    if(document.body.clientWidth >= 578){
      $(".main-nav").css("display","none");
      navTabx.style.display="none"
        navTabs.style.display="block"
    }
}
