// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBbWnZgvpSbfAi548rVL2SYYLgQ9Q-d1E",
    authDomain: "first-project-d6ca3.firebaseapp.com",
    projectId: "first-project-d6ca3",
    storageBucket: "first-project-d6ca3.appspot.com",
    messagingSenderId: "586425030980",
    appId: "1:586425030980:web:c19f3168c825b8b4029f11",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            Swal.fire({
                icon: 'success',
                title: 'Signup Successful',
                text: 'Please log in with your new account.',
            }).then(() => {
                window.location.href = "index.html";
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Signup Failed',
                text: error.message,
            });
        });
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome to the dashboard!',
            }).then(() => {
                const user = userCredential.user;
                window.localStorage.setItem('username', user.email);
                window.location.href = "dashboard.html";
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.message,
            });
        });
}

function logout() {
    auth.signOut().then(() => {
        Swal.fire({
            icon: 'info',
            title: 'Logged Out',
            text: 'You have been logged out.',
        }).then(() => {
            window.location.href = "index.html";
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const usernameSpan = document.getElementById('username');
    if (usernameSpan) {
        const username = window.localStorage.getItem('username');
        if (username) {
            usernameSpan.textContent = username;
        }
    }
});