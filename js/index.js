
$(function(){
    var cliH=$(window).height();
    var num=0;
    var flag=true;
    $("#images")[0].onmousedown=function(e){
        e.preventDefault();
    }
    $("#images")[0].onmousemove=function(e){
        e.preventDefault();
    }
   touch.on("body","swipeup","#images",function(){
       if(!flag){
           return;
       }
        num++;
       if(num>=$("section").length){
           num=$("section").length-1;
           return
       }
       flag=false;
       $("#images").css({marginTop:-num*cliH});
   })
    touch.on("body","swipedown","#images",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        flag=false;
        $("#images").css({marginTop:-num*cliH});
    })
    document.getElementById("images").addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
})