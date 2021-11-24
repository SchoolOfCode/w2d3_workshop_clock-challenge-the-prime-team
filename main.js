const handSeconds = document.querySelector(".hand--seconds");
const handMinutes = document.querySelector(".hand--minutes");
const handHours = document.querySelector(".hand--hours");

let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds(); 
handSeconds.style.transform = `rotate(${second * 6}deg)`; 
handMinutes.style.transform = `rotate(${minute * 6}deg)`;
handHours.style.transform = `rotate(${hour * 6}deg)`;


setInterval(() => {
    const second = new Date().getSeconds();
    handSeconds.style.transform = `rotate(${second * 6}deg)`; 
    if (second === 0) {
        minute = new Date().getMinutes();
        handMinutes.style.transform = `rotate(${minute * 6}deg)`
        if (minute === 0) {
            hour = new Date().getHours();
            handHours.style.transform = `rotate(${hour * 6}deg)`;
        }
    }
}, 1000)