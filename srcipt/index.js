
let expanddiv = document.getElementById("corona_support")
expanddiv.addEventListener("click", function(){

    console.log("hello");

});

////////////////////////////////////////////////////////

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
  document.querySelector(
    ".container"
  ).style.transform = `translateX(-${val}vw)`;
};

////////////////////////////////////////////////////////////////////////

let count2 = 0;
document.querySelector("#ltexarrow").onclick = () => {
  console.log("clicked");

  if (count2 == 0) {
    return;
  }
  count2--;
  let val = count2 * 100;
  document.querySelector("#explore_container").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtexarrow").onclick = () => {
  if (count2 > 4) {
    return;
  }
  count2++;
  let val = count2 * 100;
  document.querySelector("#explore_container").style.transform = `translateX(-${val}px)`;
};

//////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  if (count8 > 4) {
    return;
  }
  count8++;
  let val = count8 * 60;
  document.querySelector("#travllers_container").style.transform = `translateX(-${val}px)`;
};




