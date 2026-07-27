const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("username").value;

        alert("Message sent successfully! Thank you, " + username);

        form.reset();
    });
}