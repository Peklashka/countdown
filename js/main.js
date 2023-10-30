// определяем действующие элементы на странице
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

// делаем расчёты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`October 20 ${currentYear} 00:00:00`);

// // устанавливаем год на страницу
// year.innerHTML = currentYear > -1 ? currentYear :  currentYear + 1;

function updateCountdown() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    // переводим в секунды / минуты / часы / дни
    // перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // перевод в часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // перевод в минуты
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    // перевод в секунды
    const secondsLeft = Math.floor(diff / 1000) % 60;


    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}

updateCountdown();

// запускаем расчёт раз в секунду
setInterval(updateCountdown, 1000);

setTimeout(function () {
    preloader.remove();
    countdown.style.display = "flex";
}, 1000);



