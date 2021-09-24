document.querySelector('p').onclick = function() {
    alert('你点nm呢。');
}
document.querySelector('ul').onclick = function() {
    alert('你点nm呢。');
}
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/arcaea.jpg') {
      myImage.setAttribute('src', 'images/arcaea2.jpg');
    } else {
        myImage.setAttribute('src', 'images/arcaea.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'welcome to arcaea，' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'welcome to arcaea，'+ storedName ;
}
    myButton.onlick = function () {
        setUserName();
    };