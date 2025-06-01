const loginButton = document.getElementById('login-button');
const userInfo = document.getElementById('user-info');
const logoutButton = document.getElementById('logout-button');

const mobileLoginButton = document.getElementById('mobile-login-button');
const mobileUserInfo = document.getElementById('mobile-user-info');
const mobileLogoutButton = document.getElementById('mobile-logout-button');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const email = user.email || 'Usuário';
        const username = email.includes('@') ? email.substring(0, email.indexOf('@')) : email;

        // Desktop
        loginButton.style.display = 'none';
        userInfo.style.display = 'inline-block';
        userInfo.textContent = `Olá, ${username}`;
        logoutButton.style.display = 'inline-block';

        // Mobile
        mobileLoginButton.style.display = 'none';
        mobileUserInfo.style.display = 'inline-block';
        mobileUserInfo.textContent = `Olá, ${username}`;
        mobileLogoutButton.style.display = 'inline-block';

    } else {
        // Não logado
        loginButton.style.display = 'inline-block';
        userInfo.style.display = 'none';
        logoutButton.style.display = 'none';

        mobileLoginButton.style.display = 'inline-block';
        mobileUserInfo.style.display = 'none';
        mobileLogoutButton.style.display = 'none';
    }
});

// Logout desktop
logoutButton.addEventListener('click', () => {
    firebase.auth().signOut();
});

// Logout mobile
mobileLogoutButton.addEventListener('click', () => {
    firebase.auth().signOut();
});