let name = document.getElementById("name");
let password = document.getElementById("pass");
let submit = document.getElementById("form-submit");
let btn = document.getElementById("btn");

submit.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!name.value) {
        alert("Name is required");
    }
    if (!password.value) {
        alert("Password is required");
    }
    if (name.value && password.value) {
        alert("Login successful");
    }
});