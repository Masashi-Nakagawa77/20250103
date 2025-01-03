document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const headerLeft = document.getElementById('header-left');

    function updateLoginStatus() {
        if (loginButton.value === 'logged-in') {
            headerLeft.textContent = '中川雅史';
            loginButton.textContent = 'ログアウト';
        } else {
            headerLeft.textContent = '';
            loginButton.textContent = 'ログイン';
        }
    }

    loginButton.addEventListener('click', function() {
        if (loginButton.value === 'logged-in') {
            loginButton.value = 'logged-out';
        } else {
            loginButton.value = 'logged-in';
        }
        updateLoginStatus();
    });

    updateLoginStatus();
});