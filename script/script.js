// JavaScript Document
$("#nav>li").mouseover(function(){$(this).children(".submenu").stop().slideDown();});
$("#nav>li").mouseleave(function(){$(this).children(".submenu").stop().slideUp();});
$("#imgs>img").eq(0).css({"margin-left":"0px"});
    $("#imgs>img").eq(1).css({"margin-left":"1000px"});
    $("#imgs>img").eq(2).css({"margin-left":"2000px"});
    $("#imgs>img").eq(3).css({"margin-left":"3000px"});
    $("#imgs>img").eq(4).css({"margin-left":"4000px"});
$("#d1").click(function(){
    $("#imgs>img").eq(0).css({"margin-left":"0px"});
    $("#imgs>img").eq(1).css({"margin-left":"1000px"});
    $("#imgs>img").eq(2).css({"margin-left":"2000px"});
    $("#imgs>img").eq(3).css({"margin-left":"3000px"});
    $("#imgs>img").eq(4).css({"margin-left":"4000px"});
    
});
$("#d2").click(function(){
    $("#imgs>img").eq(0).css({"margin-left":"-1000px"});
    $("#imgs>img").eq(1).css({"margin-left":"0px"});
    $("#imgs>img").eq(2).css({"margin-left":"1000px"});
    $("#imgs>img").eq(3).css({"margin-left":"2000px"});
    $("#imgs>img").eq(4).css({"margin-left":"3000px"});
    
});
$("#d3").click(function(){
    $("#imgs>img").eq(0).css({"margin-left":"-2000px"});
    $("#imgs>img").eq(1).css({"margin-left":"-1000px"});
    $("#imgs>img").eq(2).css({"margin-left":"0px"});
    $("#imgs>img").eq(3).css({"margin-left":"1000px"});
    $("#imgs>img").eq(4).css({"margin-left":"2000px"});
    
});
$("#d4").click(function(){
    $("#imgs>img").eq(0).css({"margin-left":"-3000px"});
    $("#imgs>img").eq(1).css({"margin-left":"-2000px"});
    $("#imgs>img").eq(2).css({"margin-left":"-1000px"});
    $("#imgs>img").eq(3).css({"margin-left":"0px"});
    $("#imgs>img").eq(4).css({"margin-left":"1000px"});
    
});
$("#d5").click(function(){
    $("#imgs>img").eq(0).css({"margin-left":"-4000px"});
    $("#imgs>img").eq(1).css({"margin-left":"-3000px"});
    $("#imgs>img").eq(2).css({"margin-left":"-2000px"});
    $("#imgs>img").eq(3).css({"margin-left":"-1000px"});
    $("#imgs>img").eq(4).css({"margin-left":"0px"});
    
});
$("#partner>img").click(function(){$("#up").addClass("on");});
$("#ub>.bt").click(function(){$("#up").removeClass("on");});