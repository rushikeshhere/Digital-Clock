const hoursEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

console.log(ampmEl);


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    hoursEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    document.getElementById("ampm").textContent = h >= 12 ? "PM" : "AM"
    setTimeout(() => {
        updateClock()
    }, 1000);

}
updateClock();