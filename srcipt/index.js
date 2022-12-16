
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