const pic = document.querySelector('.header-user-pic')
const userTab = document.querySelector('.header-user-detail');
pic.addEventListener('click', function (event) {
    if(userTab.style.display === 'none'){
        userTab.style.display = 'block';
    }else{
        userTab.style.display = 'none';
    }
});



let approve = document.querySelectorAll('.赞成');
let disagree = document.querySelectorAll('.反对');
let content = new Array();
let status = new Array();
let appSvg = new Array();
let disSvg = new Array();
for (let i = 0 ;i<approve.length;i++){
    content[i] = approve[i].querySelector('span');
    appSvg[i] = approve[i].querySelector('svg');
    disSvg[i] = disagree[i].querySelector('svg');
    status[i] = 'normal';
    approve[i].addEventListener('click',function (e){
        switch (status[i]){
            case 'normal':
                content[i].textContent = '已赞成  2333';
                approve[i].style.background = 'rgba(0,102,255,1)';
                approve[i].style.color = '#fff';
                appSvg[i].style.fill = '#fff';
                status[i] = 'approved';
                break;
            case 'approved':
                content[i].textContent = '赞成  2332';
                approve[i].style.background = 'rgba(0,102,255,.1)';
                approve[i].style.color = '#06f';
                appSvg[i].style.fill = '#06f';
                status[i] = 'normal';
                break;
            case 'disagreed':
                content[i].textContent = '已赞成  2333';
                approve[i].style.background = 'rgba(0,102,255,1)';
                appSvg[i].style.fill = '#fff';
                approve[i].style.color = '#fff';
                disagree[i].style.background = 'rgba(0,102,255,.1)';
                disSvg[i].style.fill = '#06f';
                status[i] = 'approved';
        }
    });
    disagree[i].addEventListener('click',function (e){
        switch (status[i]){
            case 'normal':
                disagree[i].style.background = 'rgba(0,102,255,1)';
                disSvg[i].style.fill = '#fff';
                status[i] = 'disagreed';
                break;
            case 'disagreed':
                disagree[i].style.background = 'rgba(0,102,255,.1)';
                disSvg[i].style.fill = '#06f';
                status[i] = 'normal';
                break;
            case 'approved':
                disagree[i].style.background = 'rgba(0,102,255,1)';
                content[i].textContent = '赞成  2332';
                approve[i].style.background = 'rgba(0,102,255,.1)';
                approve[i].style.color = '#06f';
                appSvg[i].style.fill = '#06f';
                disSvg[i].style.fill = '#fff';
                status[i] = 'disagreed';
        }
    });
}




let zhezhao = document.querySelector('.zhezhao');
let collect = document.querySelectorAll('.收藏');
let close = document.querySelectorAll('.header-right')
function appear(){
    zhezhao.style.display="block";
}
function fade(){
    zhezhao.style.display="none";
}
for (let i = 0;i<collect.length;i++){
    collect[i].addEventListener('click',function (){
        appear();
    })
    close[i].addEventListener('click',function (){
        fade();
    })
}




let collect2 = document.querySelectorAll('.az');
for (let i = 0;i<collect2.length;i++){
    collect2[i].addEventListener('click',function (){
        collect2[i].style.color ='#fff';
        collect2[i].style.background ='#8590a6';
    })
}