function showPassword() {
    const password = document.getElementById("password_input");


    if (password.type === "password" ) {
        password.type = "text";
    } else {
        password.type = "password";
    }
}