document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const userInfo = document.getElementById("user-info");

    function updateHeader() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            userInfo.textContent = "中川雅史";
            loginButton.textContent = "ログアウト";
        } else {
            userInfo.textContent = "";
            loginButton.textContent = "ログイン";
        }
    }

    loginButton.addEventListener("click", function () {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            localStorage.setItem("isLoggedIn", "false");
        } else {
            localStorage.setItem("isLoggedIn", "true");
        }
        updateHeader();
    });

    updateHeader();
});