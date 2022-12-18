let home = document.getElementById("logo_img").addEventListener("click", function(){
      
    window.location.href = "index.html";
});

let getRegistered = document.getElementById("Reg_bttn").addEventListener("click", ()=>{
   window.location.href = "signup.html";
})

let login = document.getElementById("Sign_bttn").addEventListener("click", ()=>{
   window.location.href = "login.html";
})

let bookAplane = document.getElementById("letsFly").addEventListener("click", ()=>{
   window.location.href = "flight.html";
})

let letsgoGoa = document.getElementById("gotogoa").addEventListener("click", ()=>{
  window.location.href = "productpage.html";
})

let gotodelhi = document.getElementById("gotodelhi").addEventListener("click", ()=>{
   window.location.href = "ProductPage2.html";
})

// ////////////////////////////////////////////////////////////////

// let user = JSON.parse(localStorage.getItem("userDataBase"));
// console.log(user);

// let person = user[0]["userName"];
// console.log(person);

  // if (user != null) {
  //   let log_in = document.querySelector("#Reg_bttn");
  //   let log_out = document.querySelector("#logout_bttn");
  //   let sign_in = document.querySelector("#Sign_bttn");

  //   sign_in.style.display = "none";
  //   log_out.style.display = "inline-block";

  //   log_in.innerHTML = `Welcome, ${name}`;
  //   log_in.style.width = "150px"

    
  //   log_out.onclick = () => {
  //     logout();
  //     window.location.reload();
  //   };
  // }

  // function logout(){
  //   localStorage.removeItem("userDataBase");
  // }

///////////////////////offer carousel/////////////////////////////////

let count1 = 0;
document.querySelector("#ltarrow").onclick = () => {
  console.log("clicked");

  if (count1 <= 0) {
    return;
  }
  count1--;
  let val = count1 * 40;
  document.querySelector(".container").style.transform = `translateX(${val}vw)`;
};

document.querySelector("#rtarrow").onclick = () => {
  if (count1 > 0) {
    return;
  }
  count1++;
  let val = count1 * 40;
  document.querySelector(".container").style.transform = `translateX(-${val}vw)`;
};

//////////////////////////////Explore carousel//////////////////////////////////////////

let count2 = 0;
document.querySelector("#ltexarrow").onclick = () => {
  console.log("clicked");

  if (count2 == 0) {
    return;
  }
  count2--;
  let val = count2 * 180;
  document.querySelector("#explore_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtexarrow").onclick = () => {
  if (count2 > 4) {
    return;
  }
  count2++;
  let val = count2 * 180;
  document.querySelector("#explore_container").style.transform = `translateX(-${val}px)`;
};

////////////////////////////////////////Browse by property type//////////////////////////////////////////////////

let count3 = 0;
document.querySelector("#ltbrarrow").onclick = () => {
  console.log("clicked");

  if (count3 == 0) {
    return;
  }
  count3--;
  let val = count3 * 1100;
  document.querySelector("#browse_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtbrarrow").onclick = () => {
  if (count3 > 4) {
    return;
  }
  count3++;
  let val = count3 * 1100;
  document.querySelector("#browse_container").style.transform = `translateX(-${val}px)`;
};

////////////////////////////////////////////Travel around Europe//////////////////////////////////////////////////////////////

let count4 = 0;
document.querySelector("#ltTRarrow").onclick = () => {
  console.log("clicked");

  if (count4 == 0) {
    return;
  }
  count4--;
  let val = count4 * 220;
  document.querySelector("#Travel_carousel_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtTRarrow").onclick = () => {
  if (count4 > 4) {
    return;
  }
  count4++;
  let val = count4 * 220;
  document.querySelector("#Travel_carousel_container").style.transform = `translateX(-${val}px)`;
};


///////////////////////////Stay at our top unique properties///////////////////////////////////////////////////////

let count5 = 0;
document.querySelector("#ltuparrow").onclick = () => {
  console.log("clicked");

  if (count5 == 0) {
    return;
  }
  count5--;
  let val = count5 * 550;
  document.querySelector("#unique_properties_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtuparrow").onclick = () => {
  if (count5 > 4) {
    return;
  }
  count5++;
  let val = count5 * 550;
  document.querySelector("#unique_properties_container").style.transform = `translateX(-${val}px)`;
};


////////////////////////////////////////////////Get inspiration for your next trip///////////////////////////////////////////////////

let count6 = 0;
document.querySelector("#ltinsarrow").onclick = () => {
  console.log("clicked");

  if (count6 == 0) {
    return;
  }
  count6--;
  let val = count6 * 130;
  document.querySelector("#inspiration_carousel_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtinsarrow").onclick = () => {
  if (count6 > 4) {
    return;
  }
  count6++;
  let val = count6 * 130;
  document.querySelector("#inspiration_carousel_container").style.transform = `translateX(-${val}px)`;
};

////////////////////////////////////////////Homes guests love///////////////////////////////////////////////////////

let count7 = 0;
document.querySelector("#lthgarrow").onclick = () => {
  console.log("clicked");

  if (count7 == 0) {
    return;
  }
  count7--;
  let val = count7 * 390;
  document.querySelector("#home_guests_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rthgarrow").onclick = () => {
  if (count7 > 4) {
    return;
  }
  count7++;
  let val = count7 * 390;
  document.querySelector("#home_guests_container").style.transform = `translateX(-${val}px)`;
};

///////////////////////////////////////Connect with other travellers//////////////////////////////////////////////////

let count8 = 0;
document.querySelector("#ltCTarrow").onclick = () => {
  console.log("clicked");

  if (count8 == 0) {
    return;
  }
  count8--;
  let val = count8 * 60;
  document.querySelector("#travllers_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtCTarrow").onclick = () => {
  console.log("clicked");
  if (count8 > 4) {
    return;
  }
  count8++;
  let val = count8 * 60;
  document.querySelector("#travllers_container").style.transform = `translateX(-${val}px)`;
};

///////////////////////////////////////////////Destinations we love////////////////////////////////////////////////////
let d1 = document.getElementById("destinations_categorie1");
let d2 = document.getElementById("destinations_categorie2");
let d3 = document.getElementById("destinations_categorie3");

let cate1 = document.getElementById("des_cate1")
let cate2 = document.getElementById("des_cate2")
let cate3 = document.getElementById("des_cate3")

cate1.addEventListener("click", function(){
  console.log("clicked1");
  d1.style.display = "inline-flex";
  d3.style.display = "none"
  d2.style.display = "none";

  cate1.style.color = "#0071c2";
  cate1.style.background = "#ecf4f8";
  cate1.style.border = "1px solid #0071c2";

  cate2.style.color = "#262626";
  cate2.style.background = "none";
  cate2.style.border = "none";

  cate3.style.color = "#262626";
  cate3.style.background = "none";
  cate3.style.border = "none";
})
cate2.addEventListener("click", function(){
  console.log("clicked2");
  d1.style.display = "none";
  d3.style.display = "none"
  d2.style.display = "inline-flex";
  
  cate2.style.color = "#0071c2";
  cate2.style.background = "#ecf4f8";
  cate2.style.border = "1px solid #0071c2";

  cate1.style.color = "#262626";
  cate1.style.background = "none";
  cate1.style.border = "none";

  cate3.style.color = "#262626";
  cate3.style.background = "none";
  cate3.style.border = "none";
})
cate3.addEventListener("click", function(){
  console.log("clicked3");
  d1.style.display = "none";
  d3.style.display = "inline-flex"
  d2.style.display = "none";

  cate3.style.color = "#0071c2";
  cate3.style.background = "#ecf4f8";
  cate3.style.border = "1px solid #0071c2";

  cate1.style.color = "#262626";
  cate1.style.background = "none";
  cate1.style.border = "none";

  cate2.style.color = "#262626";
  cate2.style.background = "none";
  cate2.style.border = "none";
})





