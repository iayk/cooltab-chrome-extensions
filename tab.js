// let num = Math.floor((Math.random() * 10) + 1);
let num = Math.floor(new Date().getSeconds()/6+1);
let dom = document.getElementById("tabbg");
dom.style.background = "url(images/background"+num+".jpg) no-repeat top left/100% 100%";