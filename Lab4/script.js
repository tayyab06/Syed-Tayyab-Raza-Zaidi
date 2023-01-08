function login() {
    document.getElementById("ok-button").style.display = "none";
    document.getElementById("wait-image").style.display = "block";
    setTimeout(function () {
        // Check if Remember Me is checked
        if (document.getElementById("remember-me").checked) {
            // Get student ID and name
            const studentId = document.getElementById("login-id").value;
            const studentName = "Tayyab Raza";
            // Set cookie to expire in 1 day
            const date = new Date();
            date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
            const expires = "; expires=" + date.toGMTString();
            document.cookie = "studentId=" + studentId + expires + "; path=/";
            document.cookie = "studentName=" + studentName + expires + "; path=/";
        }
        window.open("student-profile.html", "_self");
    }, 2000);
}
