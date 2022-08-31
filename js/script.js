"use strict";

const div = document.getElementById("div");
const text = document.querySelector("h2");
document.addEventListener("DOMContentLoaded", () => {
    const time = setInterval (function (month=11,day=31) {
    const start = new Date ();
    const end = new Date (2022,month,day,23,59,59);
    const result = end - start;
    const days = Math.floor(result/1000/60/60/24);
	const hours = Math.floor(result/1000/60/60)%24;
	const minutes = Math.floor(result/1000/60)%60;
	const seconds = Math.floor(result/1000)%60;
    text.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
    if (result <=0) {
        clearInterval(time);
        div.classList.add("div_active");
        document.querySelector(".canvas").classList.add("canvas_active");
    }
},1000);
});



