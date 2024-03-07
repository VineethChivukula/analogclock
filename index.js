setInterval(() => {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    hrotation = 30 * hour + minute / 2 + second / 120;
    mrotation = 6 * minute + second / 10;
    srotation = 6 * second;
    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}, 1000);
