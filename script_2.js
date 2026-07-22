let name = document.getElementById("name");
let password = document.getElementById("pass");
let submit = document.getElementById("form-submit");
let btn = document.getElementById("btn");

submit.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!name.value) {
        name.style.border = "1px solid red";
    } else {
        name.style.border = "1px solid green";
    }

    if (!password.value) {
        password.style.border = "1px solid red";
    } else {
        password.style.border = "1px solid green";
    }

    if (name.value && password.value) {
        alert("Login successful");
    }
});