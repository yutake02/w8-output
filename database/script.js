document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginForm = document.querySelector('.login-form');

    // localStorageから保存されたメールアドレスとパスワードを取得
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
    }

    // フォームが送信されたときにメールアドレスとパスワードをlocalStorageに保存
    loginForm.addEventListener('submit', () => {
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        loginForm.submit();
    });
});
