document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const headerLeft = document.getElementById('header-left');

    function updateLoginStatus() {
        const loginStatus = localStorage.getItem('loginStatus');
        if (loginStatus === 'logged-in') {
            headerLeft.textContent = '中川雅史';
            loginButton.textContent = 'ログアウト';
            loginButton.value = 'logged-in';
        } else {
            headerLeft.textContent = '';
            loginButton.textContent = 'ログイン';
            loginButton.value = 'logged-out';
        }
    }

    loginButton.addEventListener('click', function() {
        if (loginButton.value === 'logged-in') {
            localStorage.setItem('loginStatus', 'logged-out');
        } else {
            localStorage.setItem('loginStatus', 'logged-in');
        }
        updateLoginStatus();
    });

    updateLoginStatus();
});