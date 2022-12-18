// data fetching and showing dynamic divs

let app = document.getElementById("app");
let main = document.getElementById("main");
let fetched_flight_data = [];
// let data = [
//     {
//       id: 1,
//       name: "IndiGo",
//       price: 20000,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "09:15 am",
//       arrival_time: "11:15 am",
//       time: "2h",
//       stop: 2,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 2,
//       name: "IndiGo",
//       price: 10000,
//       depature: "DL",
//       arrival: "BBI",
//       depature_time: "09:15 am",
//       arrival_time: "11:15 am",
//       time: "2h",
//       stop: 0,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 3,
//       name: "IndiGo",
//       price: 50000,
//       depature: "DL",
//       arrival: "KOL",
//       depature_time: "09:15 am",
//       arrival_time: "12:15 pm",
//       time: "3h",
//       stop: 0,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 4,
//       name: "IndiGo",
//       price: 10000,
//       depature: "DL",
//       arrival: "IND",
//       depature_time: "09:15 am",
//       arrival_time: "14:15 pm",
//       time: "5h",
//       stop: 1,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 5,
//       name: "IndiGo",
//       price: 5000,
//       depature: "BBI",
//       arrival: "IND",
//       depature_time: "09:15 am",
//       arrival_time: "11:45 pm",
//       time: "5h 30m",
//       stop: 0,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 6,
//       name: "IndiGo",
//       price: 100000,
//       depature: "HYD",
//       arrival: "BGL",
//       depature_time: "09:15 am",
//       arrival_time: "11:45 pm",
//       time: "5h 30m",
//       stop: 1,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 7,
//       name: "IndiGo",
//       price: 70000,
//       depature: "KOH",
//       arrival: "COM",
//       depature_time: "09:15 am",
//       arrival_time: "11:45 pm",
//       time: "5h 30m",
//       stop: 2,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 8,
//       name: "IndiGo",
//       price: 10000,
//       depature: "BGL",
//       arrival: "CNI",
//       depature_time: "01:15 am",
//       arrival_time: "6:45 am",
//       time: "5h 30m",
//       stop: 0,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 9,
//       name: "IndiGo",
//       price: 17000,
//       depature: "RCH",
//       arrival: "LCK",
//       depature_time: "11:15 am",
//       arrival_time: "14:15 pm",
//       time: "3h",
//       stop: 1,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 10,
//       name: "IndiGo",
//       price: 270000,
//       depature: "DEL",
//       arrival: "AMD",
//       depature_time: "01:15 am",
//       arrival_time: "16:45 pm",
//       time: "15h 30m",
//       stop: 2,
//       img: "https://airhex.com/images/airline-logos/indigo.png"
//     },
//     {
//       id: 11,
//       name: "Air Asia India",
//       price: 20906.56,
//       depature: "DEL",
//       arrival: "CCU",
//       depature_time: "8:40 PM",
//       arrival_time: "8:10 AM",
//       time: "11h",
//       stop: 1,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 12,
//       name: "Air Asia India",
//       price: 17906.16,
//       depature: "DEL",
//       arrival: "BOM",
//       depature_time: "7:05 PM PM",
//       arrival_time: "12:40 AM",
//       time: "5h",
//       stop: 1,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 13,
//       name: "Air Asia India",
//       price: 16389.06,
//       depature: "DEL",
//       arrival: "MAA",
//       depature_time: "9:30 AM",
//       arrival_time: "5:05 PM",
//       time: "7h",
//       stop: 1,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 14,
//       name: "Air Asia India",
//       price: 15537.22,
//       depature: "MAA",
//       arrival: "DEL",
//       depature_time: "12:55 PM",
//       arrival_time: "8:45 PM",
//       time: "10h",
//       stop: 2,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 15,
//       name: "Air Asia India",
//       price: 6642.1,
//       depature: "DEL",
//       arrival: "LKO",
//       depature_time: "1:15 PM",
//       arrival_time: "2:25 PM",
//       time: "1h",
//       stop: 0,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 16,
//       name: "Air Asia India",
//       price: 7505.33,
//       depature: "LKO",
//       arrival: "DEL",
//       depature_time: "9:05 PM",
//       arrival_time: "10:15 PM",
//       time: "1h",
//       stop: 0,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 17,
//       name: "Air Asia India",
//       price: 22501.62,
//       depature: "LKO",
//       arrival: "SXR",
//       depature_time: "9:00 AM",
//       arrival_time: "12:50 PM",
//       time: "4h",
//       stop: 3,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 18,
//       name: "Air Asia India",
//       price: 29019.57,
//       depature: "SXR",
//       arrival: "LKO",
//       depature_time: "5:25 PM",
//       arrival_time: "10:40 PM",
//       time: "2h",
//       stop: 0,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 19,
//       name: "Air Asia India",
//       price: 26728.18,
//       depature: "SXR",
//       arrival: "BLR",
//       depature_time: "1:35 PM",
//       arrival_time: "7:20 PM",
//       time: "5h",
//       stop: 2,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 20,
//       name: "Air Asia India",
//       price: 31315.89,
//       depature: "CCU",
//       arrival: "IXZ",
//       depature_time: "5:35 AM",
//       arrival_time: "8:00 AM",
//       time: "2h",
//       stop: 0,
//       img: "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
//     },
//     {
//       id: 21,
//       name: "Air India",
//       price: 23000,
//       depature: "IXC",
//       arrival: "PAT",
//       depature_time: "03:10 am",
//       arrival_time: "6:15 am",
//       time: "3hr",
//       stop: 0,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 22,
//       name: "Air India",
//       price: 24000,
//       depature: "CCU",
//       arrival: "IXC",
//       depature_time: "11:08 am",
//       arrival_time: "02:15 pm",
//       time: "2.5hr",
//       stop: 1,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 23,
//       name: "Air India",
//       price: 20000,
//       depature: "PNQ",
//       arrival: "BOM",
//       depature_time: "10:45 am",
//       arrival_time: "11:15 am",
//       time: "2hr",
//       stop: 1,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 24,
//       name: "Air India",
//       price: 29000,
//       depature: "BOM",
//       arrival: "RAJ",
//       depature_time: "12:50 pm",
//       arrival_time: "03:55 pm",
//       time: "4hr",
//       stop: 1,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 25,
//       name: "Air India",
//       price: 30000,
//       depature: "RAJ",
//       arrival: "CCU",
//       depature_time: "01:55 am",
//       arrival_time: "03:20 am",
//       time: "2h",
//       stop: 2,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 26,
//       name: "Air India",
//       price: 29500,
//       depature: "MAA",
//       arrival: "RAJ",
//       depature_time: "03:35 am",
//       arrival_time: "06:15 am",
//       time: "3hr",
//       stop: 2,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 27,
//       name: "Air India",
//       price: 27000,
//       depature: "LKO",
//       arrival: "MAA",
//       depature_time: "11:20 am",
//       arrival_time: "01:35 pm",
//       time: "2hr",
//       stop: 2,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 28,
//       name: "Air India",
//       price: 19000,
//       depature: "DEL",
//       arrival: "PNQ",
//       depature_time: "04:19 pm",
//       arrival_time: "06:25 am",
//       time: "2.5h",
//       stop: 0,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 29,
//       name: "Air India",
//       price: 21000,
//       depature: "HYD",
//       arrival: "BLR",
//       depature_time: "08:25 pm",
//       arrival_time: "10:15 pm",
//       time: "2.5hr",
//       stop: 0,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 30,
//       name: "Air India",
//       price: 22000,
//       depature: "BLR",
//       arrival: "HYD",
//       depature_time: "10:47 am",
//       arrival_time: "12:15 pm",
//       time: "3h",
//       stop: 0,
//       img: "https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
//     },
//     {
//       id: 31,
//       name: "Vistara",
//       price: 18320,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "12:30 pm",
//       arrival_time: "10:10 pm",
//       time: "9h 40m",
//       stop: 2,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 32,
//       name: "Vistara",
//       price: 18520,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "6:45 am",
//       arrival_time: "12:25 pm",
//       time: "5h 40m",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 33,
//       name: "Vistara",
//       price: 19220,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "10:05 pm",
//       arrival_time: "7:50 am",
//       time: "9h 45m",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 34,
//       name: "Vistara",
//       price: 22420,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "1:30 pm",
//       arrival_time: "11:55 pm",
//       time: "10h 55m",
//       stop: 2,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 35,
//       name: "Vistara",
//       price: 20329,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "10:05 pm",
//       arrival_time: "7:50 am",
//       time: "9h 45m",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 36,
//       name: "Vistara",
//       price: 22820,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "6:45 am",
//       arrival_time: "12:25 pm",
//       time: "5h 40m",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 37,
//       name: "Vistara",
//       price: 24456,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "11:30 pm",
//       arrival_time: "7:55 pm",
//       time: "11h 30m",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 38,
//       name: "Vistara",
//       price: 16020,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "6:45 am",
//       arrival_time: "10:25 pm",
//       time: "3h 40m",
//       stop: 0,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 39,
//       name: "Vistara",
//       price: 23309,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "10:05 pm",
//       arrival_time: "4:40 pm",
//       time: "18h 35m",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     },
//     {
//       id: 40,
//       name: "Vistara",
//       price: 19709,
//       depature: "AMD",
//       arrival: "BBI",
//       depature_time: "7:30 pm",
//       arrival_time: "11:30 pm",
//       time: "4h",
//       stop: 1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
//     }
//   ]
fetch(" http://localhost:3000/flight")

  .then((response)=>{
    return response.json();
  })
  .then((flightsdata)=>{
    fetched_flight_data = flightsdata
    renderlist(flightsdata);
  });

function getascard(name,price,depature,arrival,depature_time,arrival_time,time,stop,img){
   return `
   <div class="tab-content" id="nav-tabContent_timings">
   <div class="tab-pane fade show active" id="best-home" role="tabpanel" aria-labelledby="best-home-tab">      
   <div id="flight-timing">
      <div id="img_flight-timing">
       
      <div id="flight_img"> <img src= ${img} alt= ${name}'s image> </div>
          <p>${name}</p>
      </div>
      <div id="details_flight-timing">
           <div>
              <h6>${depature_time}</h6>
              <p>${depature}</p>
           </div>
           <div>
              <p>${time}</p>
              <hr>
              <p>${stop}</p>
           </div>
           <div>
              <h6>${arrival_time}</h6>
              <p>${arrival}</p>
           </div>
      </div>
   </div>
   <div id="total-price">
      <span class="material-symbols-outlined">
          luggage
          </span>
          <span class="material-symbols-outlined">
              backpack
              </span>
      <p>Included: carry-on bag, checked bag</p>
      <h4>INR ${price}</h4>
      <p>Total price for all travelers</p>
      <button id="totalprice_btn">See flight</button>
   </div>

  </div>
  ` 
}

function renderlist(data){
main.innerHTML = `
<div class="tab-content" id="nav-tabContent_timings">

      ${
          data.map((item)=>{

           let name = item.name;
           let price = item.price;
           let depature = item.depature;
           let arrival = item.arrival;
           let depature_time = item.depature_time;
           let arrival_time = item.arrival_time;
           let time = item.time;
           let stop = item.stop;
           let img = item.img;

        return getascard(name,price,depature,arrival,depature_time,arrival_time,time,stop,img);
          }).join('')
      }

</div>
`
}