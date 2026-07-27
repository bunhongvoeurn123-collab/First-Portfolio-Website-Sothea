document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let button = document.getElementById("submitBtn");

    if (username === "Sothea" && password === "sothea123") {
        button.innerHTML = "Verifying...";
        button.disabled = true;

        setTimeout(function () {
            alert("Welcome back, " + username);
            window.location.href = "New Portfolio.html";
        }, 2000);
    } else {
        alert("Wrong password or username!");
    }
});

function showPassword() {
    let pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}