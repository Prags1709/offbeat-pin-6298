let north_goa = document.getElementById("gotonorthgoa").addEventListener("click",()=>{
  window.location.href = "flights.voyage.html"
})



// owl-carousal------------------------------------------------------------------------

let count = 0;
document.querySelector("#ltexarroww").onclick = () => {
  console.log("clicked");

  if (count == 0) {
    return;
  }
  count--;
  let val = count * 100;
  document.querySelector("#explore_containerr").style.transform = `translateX(-${val}px)`;
};

document.querySelector("#rtexarroww").onclick = () => {
  if (count > 4) {
    return;
  }
  count++;
  let val = count * 100;
  document.querySelector("#explore_containerr").style.transform = `translateX(-${val}px)`;
};

//////////////////////////////////////////////////////////////////////////////////////////

