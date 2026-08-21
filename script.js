document.querySelector("form").addEventListener("submit", function(event) {
    let fullName = document.querySelector('input[name="fullname"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let password = document.querySelector('input[name="password"]').value.trim();

    if (fullName === "" || email === "" || password === "") {
        alert("Please fill in all required fields.");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password gmust be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    alert("Registration Successful!");
});
