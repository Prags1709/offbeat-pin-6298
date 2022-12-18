console.log("hi")

let user = JSON.parse(localStorage.getItem("userDataBase"));
console.log(user);

let person = user[0]["name"];
console.log(person);

  if (user != null) {
    let log_in = document.querySelector("#Reg_bttn");
    let log_out = document.querySelector("#logout_bttn");
    let sign_in = document.querySelector("#Sign_bttn");
    let showperson = document.querySelector("#loginface");

    sign_in.style.display = "none";
    log_out.style.display = "inline-block";
    showperson.style.display = "inline-block";

    log_in.innerHTML = `Welcome, ${person}`;
    log_in.style.width = "150px"

    
    log_out.onclick = () => {
      logout();
      window.location.reload();
    };
  }

  function logout(){
    localStorage.removeItem("userDataBase");
  }