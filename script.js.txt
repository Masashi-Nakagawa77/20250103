// script.js
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const userInfo = document.getElementById('user-info');

    function updateLoginStatus() {
        const isLoggedIn = loginButton.getAttribute('data-logged-in') === 'true';
        if (isLoggedIn) {
            userInfo.innerHTML = '<span>中川雅史</span>';
            loginButton.textContent = 'ログアウト';
        } else {
            userInfo.innerHTML = '';
            loginButton.textContent = 'ログイン';
        }
    }

    loginButton.addEventListener('click', function () {
        const isLoggedIn = loginButton.getAttribute('data-logged-in') === 'true';
        loginButton.setAttribute('data-logged-in', !isLoggedIn);
        updateLoginStatus();
    });

    updateLoginStatus();
});