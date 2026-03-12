const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {

  const username = document.getElementById("input-username").value;
  const password = document.getElementById("input-password").value;

  if (username === "" || password === "") {
    alert("Please enter username and password");
  }
  else {

    if (username === "admin" && password === "admin123") {

      
      localStorage.setItem("isLoggedIn", "true");

      window.location.assign("home.html");
    }
    else {
      alert("Invalid username or password");
    }

  }

});






