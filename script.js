function handleLogin(event) {
    event.preventDefault(); // stop page refresh

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name === "" || password === "") {
        alert("Please fill all fields");
    } else {
        alert("Login successful!");
    }
}
