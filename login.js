function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "user" && password == "user") {

        window.open("personal.html")
        return false;

    }
    else {
        alert("login failed");
    }


}