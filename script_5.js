let input = document.querySelector("input");
let btn2 = document.querySelector(".btn2");
let h2 = document.querySelector("h2");

btn2.addEventListener("click", function () {
    h2.innerHTML = "";
    let namta = input.value;
    for (let i = 1; i <= 10; i++) {
        h2.innerHTML += `${namta} x ${i} = ${namta * i} <br>`;
    }
});