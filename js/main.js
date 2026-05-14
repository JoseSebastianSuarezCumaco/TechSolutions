// Validación Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const mensaje = document.getElementById('mensaje');

        if (email === '') {
            mensaje.innerHTML = '<p class="msg-error">El correo no puede estar vacío</p>';
            return;
        }
        if (!email.includes('@')) {
            mensaje.innerHTML = '<p class="msg-error">Ingresa un correo electrónico válido</p>';
            return;
        }
        if (password === '') {
            mensaje.innerHTML = '<p class="msg-error">La contraseña no puede estar vacía</p>';
            return;
        }
        if (password.length < 6) {
            mensaje.innerHTML = '<p class="msg-error">La contraseña debe tener mínimo 6 caracteres</p>';
            return;
        }

        mensaje.innerHTML = '<p class="msg-success">✓ Ingreso exitoso. Bienvenido.</p>';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}