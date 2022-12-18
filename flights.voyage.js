


// data fetching and showing dynamic divs

let app = document.getElementById("app");
let main = document.getElementById("main");
let fetched_flight_data = [];

let data = [
        
  {
    "id":1,
    "name":"IndiGo",
    "price":20000,
    "depature":"AMD",
    "departure_place": "Ahemdabad",
    "arrival":"BBI",
    "arrival_place": "Bhubaneswar",
    "depature_time":"09:15 am",
    "arrival_time":"11:15 am",
    "time":"2h",
    "stop":"2 Stop",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":2,
    "name":"IndiGo",
    "price":10000,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"BBI",
    "arrival_place": "Bhubaneswar",
    "depature_time":"09:15 am",
    "arrival_time":"11:15 am",
    "time":"2h",
    "stop":"Direct",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":3,
    "name":"IndiGo",
    "price":50000,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"KOL",
    "arrival_place": "Kolkata",
    "depature_time":"09:15 am",
    "arrival_time":"12:15 pm",
    "time":"3h",
    "stop":"Direct",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":4,
    "name":"IndiGo",
    "price":10000,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"IND",
    "arrival_place": "Indore",
    "depature_time":"09:15 am",
    "arrival_time":"14:15 pm",
    "time":"5h",
    "stop":"1 Stop",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":5,
    "name":"IndiGo",
    "price":5000,
    "depature":"BBI",
    "departure_place": "Bhubaneswar",
    "arrival":"IND",
    "arrival_place": "Indore",
    "depature_time":"09:15 am",
    "arrival_time":"11:45 pm",
    "time":"5h 30m",
    "stop":"Direct",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":6,
    "name":"IndiGo",
    "price":100000,
    "depature":"HYD",
    "departure_place": "Hyderabad",
    "arrival":"BLR",
    "arrival_place": "Banglore",
    "depature_time":"09:15 am",
    "arrival_time":"11:45 pm",
    "time":"5h 30m",
    "stop":"1 Stop",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":7,
    "name":"IndiGo",
    "price":70000,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"DMU",
    "arrival_place": "Kohima",
    "depature_time":"09:15 am",
    "arrival_time":"11:45 pm",
    "time":"5h 30m",
    "stop":"2 Stop",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":8,
    "name":"IndiGo",
    "price":10000,
    "depature":"BLR",
    "departure_place": "Banglore",
    "arrival":"PNQ",
    "arrival_place": "Pune",
    "depature_time":"01:15 am",
    "arrival_time":"6:45 am",
    "time":"5h 30m",
    "stop":"Direct",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":9,
    "name":"IndiGo",
    "price":17000,
    "depature":"IXR",
    "departure_place": "Ranchi",
    "arrival":"LKO",
    "arrival_place": "Lucknow",
    "depature_time":"11:15 am",
    "arrival_time":"14:15 pm",
    "time":"3h",
    "stop":"1 Stop",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
    "id":10,
    "name":"IndiGo",
    "price":270000,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"AMD",
    "arrival_place": "Ahmedabad",
    "depature_time":"01:15 am",
    "arrival_time":"16:45 pm",
    "time":"15h 30m",
    "stop":"2 Stop",
    "img":"https://airhex.com/images/airline-logos/indigo.png"
},
{
  "id": 11,
  "name": "Air Asia India",
  "price":20906.56,
  "depature": "DEL",
  "departure_place": "Delhi",
  "arrival": "CCU",
  "arrival_place": "Kolkata",
  "depature_time": "8:40 PM",
  "arrival_time": "8:10 AM",
  "time": "11h",
  "stop": "1 Stop",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 12,
  "name": "Air Asia India",
  "price":17906.16,
  "depature": "DEL",
  "departure_place": "Delhi",
  "arrival": "BOM",
  "arrival_place": "Bombay",
  "depature_time": "7:05 PM PM",
  "arrival_time": "12:40 AM",
  "time": "5h",
  "stop": "1 Stop",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 13,
  "name": "Air Asia India",
  "price":16389.06,
  "depature": "DEL",
  "departure_place": "Delhi",
  "arrival": "MAA",
  "arrival_place": "Chennai",
  "depature_time": "9:30 AM",
  "arrival_time": "5:05 PM",
  "time": "7h",
  "stop": "1 Stop",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 14,
  "name": "Air Asia India",
  "price":15537.22,
  "depature": "MAA",
  "departure_place": "Chennai",
  "arrival": "DEL",
  "arrival_place": "Delhi",
  "depature_time": "12:55 PM",
  "arrival_time": "8:45 PM",
  "time": "10h",
  "stop": 2,
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 15,
  "name": "Air Asia India",
  "price":6642.10,
  "depature": "DEL",
  "departure_place": "Delhi",
  "arrival": "LKO",
  "arrival_place": "Lucknow",
  "depature_time": "1:15 PM",
  "arrival_time": "2:25 PM",
  "time": "1h",
  "stop": "Direct",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 16,
  "name": "Air Asia India",
  "price":7505.33,
  "depature": "LKO",
  "deparure_place": "Lucknow",
  "arrival": "DEL",
  "arrival_place": "Delhi",
  "depature_time": "9:05 PM",
  "arrival_time": "10:15 PM",
  "time": "1h",
  "stop": "Direct",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 17,
  "name": "Air Asia India",
  "price":22501.62,
  "depature": "LKO",
  "depature_place": "Lucknow",
  "arrival": "SXR",
  "arrival_place": "Srinagar",
  "depature_time": "9:00 AM",
  "arrival_time": "12:50 PM",
  "time": "4h",
  "stop": 2,
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 18,
  "name": "Air Asia India",
  "price":29019.57,
  "depature": "SXR",
  "depature_place": "Srinagar",
  "arrival": "LKO",
  "arrival_place": "Lucknow",
  "depature_time": "5:25 PM",
  "arrival_time": "10:40 PM",
  "time": "2h",
  "stop": "Direct",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 19,
  "name": "Air Asia India",
  "price":26728.18,
  "depature": "SXR",
  "depature_place": "Srinagar",
  "arrival": "BLR",
  "arrival_place": "Banglore",
  "depature_time": "1:35 PM",
  "arrival_time": "7:20 PM",
  "time": "5h",
  "stop": 2,
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
{
  "id": 20,
  "name": "Air Asia India",
  "price":31315.89,
  "depature": "CCU",
  "depature_place": "Kolkata",
  "arrival": "IXZ",
  "arrival_place": "Andaman & Nicobar",
  "depature_time": "5:35 AM",
  "arrival_time": "8:00 AM",
  "time": "2h",
  "stop": "Direct",
  "img": "https://r-xx.bstatic.com/data/airlines_logo/I5.png"
},
  {"id":21,
  "name":"Air India",
  "price":23000,
  "depature":"IXC",
  "depature_place": "Chandigarh",
  "arrival":"PAT",
  "arrival_place": "Patna",
  "depature_time":"03:10 am",
  "arrival_time":"6:15 am",
  "time":"3hr",
  "stop":"1 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":22,
  "name":"Air India",
  "price":24000,
  "depature":"CCU",
  "depature_place": "Kolkata",
  "arrival":"IXC",
  "arrival_place": "Chandigarh",
  "depature_time":"11:08 am",
  "arrival_time":"02:15 pm",
  "time":"2.5hr",
  "stop":"2 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":23,
  "name":"Air India",
  "price":20000,
  "depature":"PNQ",
  "depature_place": "Pune",
  "arrival":"BOM",
  "arrival_place": "Bombay",
  "depature_time":"10:45 am",
  "arrival_time":"11:15 am",
  "time":"2hr",
  "stop":"2 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":24,
  "name":"Air India",
  "price":29000,
  "depature":"BOM",
  "depature_place": "Bombay",
  "arrival":"RAJ",
  "arrival_place": "Rajkot",
  "depature_time":"12:50 pm",
  "arrival_time":"03:55 pm",
  "time":"4hr",
  "stop":"2 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":25,
  "name":"Air India",
  "price":30000,
  "depature":"RAJ",
  "depature_place": "Rajkot",
  "arrival":"CCU",
  "arrival_place": "Kolkata",
  "depature_time":"01:55 am",
  "arrival_time":"03:20 am",
  "time":"2h",
  "stop":"Direct",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":26,
  "name":"Air India",
  "price":29500,
  "depature":"MAA",
  "depature_place": "Chennai",
  "arrival":"RAJ",
  "arrival_place": "Rajkot",
  "depature_time":"03:35 am",
  "arrival_time":"06:15 am",
  "time":"3hr",
  "stop":"Direct",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":27,
  "name":"Air India",
  "price":27000,
  "depature":"LKO",
  "depature_place": "Lucknow",
  "arrival":"MAA",
  "arrival_place": "Chennai",
  "depature_time":"11:20 am",
  "arrival_time":"01:35 pm",
  "time":"2hr",
  "stop":"Direct",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":28,
  "name":"Air India",
  "price":19000,
  "depature":"DEL",
  "depature_place": "Delhi",
  "arrival":"PNQ",
  "arrival_place": "Pune",
  "depature_time":"04:19 pm",
  "arrival_time":"06:25 am",
  "time":"2.5h",
  "stop":"1 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":29,
  "name":"Air India",
  "price":21000,
  "depature":"HYD",
  "depature_place": "Hyderabad",
  "arrival":"BLR",
  "arrival_place": "Banglore",
  "depature_time":"08:25 pm",
  "arrival_time":"10:15 pm",
  "time":"2.5hr",
  "stop":"1 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
{
  "id":30,
  "name":"Air India",
  "price":22000,
  "depature":"BLR",
  "depature_place": "Banglore",
  "arrival":"HYD",
  "arrival_place": "Hyderabad",
  "depature_time":"10:47 am",
  "arrival_time":"12:15 pm",
  "time":"3h",
  "stop":"1 Stop",
  "img":"https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png"
},
  {
    "id":31,
    "name":"Vistara",
    "price":18320,
    "depature":"AMD",
    "departure_place": "Ahemdabad",
    "arrival":"BBI",
    "arrival_place": "Bhubaneswar",
    "depature_time":"12:30 pm",
    "arrival_time":"10:10 pm",
    "time":"9h 40m",
    "stop":"2 Stop",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":32,
    "name":"Vistara",
    "price":18520,
    "depature":"AMD",
    "departure_place": "Ahemdabad",
    "arrival":"BBI",
    "arrival_place": "Bhubaneswar",
    "depature_time":"6:45 am",
    "arrival_time":"12:25 pm",
    "time":"5h 40m",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":33,
    "name":"Vistara",
    "price":19220,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"BBI",
    "arrival_place": "Bhubaneswar",
    "depature_time":"10:05 pm",
    "arrival_time":"7:50 am",
    "time":"9h 45m",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":34,
    "name":"Vistara",
    "price":22420,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"KOL",
    "arrival_place": "Kolkata",
    "depature_time":"1:30 pm",
    "arrival_time":"11:55 pm",
    "time":"10h 55m",
    "stop":"2 Stop",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":35,
    "name":"Vistara",
    "price":20329,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"IND",
    "arrival_place": "Indore",
    "depature_time":"10:05 pm",
    "arrival_time":"7:50 am",
    "time":"9h 45m",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":36,
    "name":"Vistara",
    "price":22820,
    "depature":"BBI",
    "departure_place": "Bhubaneswar",
    "arrival":"IND",
    "arrival_place": "Indore",
    "depature_time":"6:45 am",
    "arrival_time":"12:25 pm",
    "time":"5h 40m",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":37,
    "name":"Vistara",
    "price":24456,
    "depature":"HYD",
    "departure_place": "Hyderabad",
    "arrival":"BLR",
    "arrival_place": "Banglore",
    "depature_time":"11:30 pm",
    "arrival_time":"7:55 pm",
    "time":"11h 30m",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":38,
    "name":"Vistara",
    "price":16020,
    "depature":"DEL",
    "departure_place": "Delhi",
    "arrival":"DMU",
    "arrival_place": "Kohima",
    "depature_time":"6:45 am",
    "arrival_time":"10:25 pm",
    "time":"3h 40m",
    "stop":"Direct",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":39,
    "name":"Vistara",
    "price":23309,
    "depature":"BLR",
    "departure_place": "Banglore",
    "arrival":"PNQ",
    "arrival_place": "Pune",
    "depature_time":"10:05 pm",
    "arrival_time":"4:40 pm",
    "time":"18h 35m",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
},
{
    "id":40,
    "name":"Vistara",
    "price":19709,
    "depature":"IXR",
    "departure_place": "Ranchi",
    "arrival":"LKO",
    "arrival_place": "Lucknow",
    "depature_time":"7:30 pm",
    "arrival_time":"11:30 pm",
    "time":"4h",
    "stop":1,
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePLvy3J8rPDWSRBKgbT73siFiCFCIA4pZ1Q&usqp=CAU"
}





] 

// let data = [];
fetch("http://localhost:3000/flight")

  .then((response)=>{
    return response.json();
  })
  .then((flightsdata)=>{
    fetched_flight_data = flightsdata
    // data = flightsdata
    renderlist(flightsdata);
  })
  .catch((error)=>{
    console.log(error);
  })
  
  let i = 1;
function getascard(name,price,depature,arrival,depature_time,arrival_time,time,stop,img){
   
   let createData = `
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
      <button class="totalprice_btn" data-id = ${i}>See flight</button>
   </div>

  </div> ` 
    i++;
  return createData; 
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

 console.log(data)
 
     let info_btn = document.querySelectorAll(".totalprice_btn")

     for(let fbtn of info_btn){
     // console.log(fbtn);
      fbtn.addEventListener("click", (event)=>{
         console.log(event.target.dataset.id)
         console.log(data[event.target.dataset.id-1]["price"])
         let finfo_obj = data[event.target.dataset.id-1];
         let finfo_price = data[event.target.dataset.id-1]["price"]; 

         sessionStorage.setItem("destination_part", JSON.stringify(finfo_obj));
         sessionStorage.setItem("flight_amt",JSON.stringify(finfo_price));

         window.location.href = "./pyament_details_page/pay.html";
         


      })
     }
}

// filter-function

let filter_flights = document.querySelectorAll(".filterbtn")

for(let filterbtn of filter_flights){
    filterbtn.addEventListener("click",(e)=>{
      console.log(e)
      
      let filter_value = e.target.value;
      let airasiaindia = e.path[1].children[1].checked;
      let airindia = e.path[1].children[4].checked;
      let Indigo = e.path[1].children[7].checked;
      // let vistaraa = e.path[1].children[10].checked; 
      let direct = e.path[2].children[1][1].checked;
      let onestop = e.path[2].children[1][2].checked;
      

       
      if(filter_value=="air-asia-india" && airasiaindia==true){
         let Airasiaindia = data.filter((item)=>{
            return item.name=="Air Asia India"
         })
         // console.log(airasiaindia)
         renderlist(Airasiaindia)
      }else if(filter_value=="air-india" && airindia==true){
         let Airindia = data.filter((item)=>{
            return item.name=="Air India"
         })
         renderlist(Airindia)
      }else if(filter_value=="indigo" && Indigo==true){
         let Indigo = data.filter((item)=>{
            return item.name=="IndiGo"
         })
         renderlist(Indigo)
      }else if(filter_value=="vistara" && vistaraa==true){
         let Vistara = data.filter((item)=>{
            return item.name=="Vistara"
         })
         renderlist(Vistara)
      }
      else if(filter_value=="0" && direct==true){
        let Direct = data.filter((item)=>{
          return item.stop=="Direct"
        })
        renderlist(Direct)
      }else if(filter_value=="1" && onestop==true){
        let Onestop = data.filter((item)=>{
          return (item.stop=="1 Stop" || item.stop=="Direct")
        })
        renderlist(Onestop)
      }else{
        renderlist(data)
      }

    })
}