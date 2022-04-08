var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin123") {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
        window.location = "distribusi1admin.html"; // Redirecting to other page.
        return false;
    } else if (username == "" || password == "") {
        swal("Username atau Pasword Tidak boleh Kosong");
    } else if (username != "admin" && password != "admin123") {
        swal("Username dan Pasword Salah Min");
    } else if (username != "admin") {
        swal("Username Salah");
    } else if (password != "admin123") {
        swal("Pasword Salah");
    } else {
        attempt--; // Decrementing by one.
        swal("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            window.location = "awal.html";
        }
    }
}