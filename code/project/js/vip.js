window.onload = function (){
    let picList = document.querySelector('.pic');
    let index = 0;
    let target,changing,current,pst,prs,timing,speed;
    function  remake(){
        if(index >= 5){
            index = 0;
            speed = 30;
        } else if ( index <= -1 ) {
            index = 4;
            speed = 30;
        }
    }

    function move(){
        speed = 10;
        remake ();
        current = parseFloat(getComputedStyle(picList,null).left);
//        target = -100*in  dex;
        target = -1474.1*index;
        if (current > target){
            speed = -speed;
        }
        changing = setInterval(function (){
             pst = parseFloat(getComputedStyle(picList,null).left);
             prs = pst + speed;
//            picList.style.left = prs+'%';
            picList.style.left = prs+'px';
            if(prs <= target && speed<0 || prs >= target && speed>0){
                clearInterval(changing);
            }
/*     if(prs <-5900.8){
         picList.style.left = -5900.8 + 'px';
         index = 4;
     }
     if(prs >0){
         picList.style.left = 0;
         index = 0;
     }*/
 },1);
}

 function autoChange(){
 timing = setInterval (function (){
     index ++;
     move()
 },5000);
}

autoChange();

let pre = document.querySelector('.pre');
let next = document.querySelector('.next');
picList.onmouseover=function (){
pre.style.opacity = '0.5';
next.style.opacity = '0.5';
}
pre.onmouseover=function (){
pre.style.opacity = '0.5';
next.style.opacity = '0.5';
}
next.onmouseover=function (){
pre.style.opacity = '0.5';
next.style.opacity = '0.5';
}
picList.onmouseout=function (){
pre.style.opacity = '0';
next.style.opacity = '0';
}

pre.addEventListener('click',function (){
index --;
move();
clearInterval(timing);
autoChange()
})
    next.addEventListener('click',function (){
        index ++;
        move();
        clearInterval(timing);
        autoChange()
    })
}
