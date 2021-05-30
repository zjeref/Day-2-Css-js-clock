function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.querySelector(".second-hand")
    const minuteHand = document.querySelector(".minute-hand")
    const hourHand = document.querySelector(".hour-hand")


    secondDeg = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg) translateY(-50%)`;

    minuteDeg = ((minutes/60)* 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDeg}deg) translateY(-50%)`;

    hourDeg = ((hours/12)* 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg) translateY(-50%)`;
    
}

setInterval(setTime, 1000);
