console.log("hi")

let user = JSON.parse(localStorage.getItem("userDataBase"));
console.log(user);

let person = user[0]["userName"];
console.log(person);

  if (user != null) {
    let log_in = document.querySelector("#Reg_bttn");
    let log_out = document.querySelector("#logout_bttn");
    let sign_in = document.querySelector("#Sign_bttn");

    sign_in.style.display = "none";
    log_out.style.display = "inline-block";

    log_in.innerHTML = `Welcome, ${name}`;
    log_in.style.width = "150px"

    
    log_out.onclick = () => {
      logout();
      window.location.reload();
    };
  }

  function logout(){
    localStorage.removeItem("userDataBase");
  }