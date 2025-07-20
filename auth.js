
function register(event) {
  event.preventDefault();
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login.html";
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if(email && password) {
    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } else {
    alert("Email dan password harus diisi.");
  }
}
