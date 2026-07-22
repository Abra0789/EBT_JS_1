let name = document.getElementById("name");
let password = document.getElementById("pass");
let submit = document.getElementById("form-submit");
let btn = document.getElementById("btn");

submit.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!name.value) {
        btn.style.display = "none";
    }
    if (!password.value) {
        btn.style.display = "none";
    }
    if (name.value && password.value) {
        btn.style.display = "block";
        alert("Login successful");
    }
});