
//  -------------------storage data------------------------------
let flight_amt=sessionStorage.getItem('flight_amt') || 0;
let total_person= sessionStorage.getItem('total-person') || 2 ;
// --------------------------total amount variable----------------------
let flight_amt_totalperson=flight_amt*total_person

let total_amount=document.querySelectorAll('.total_amount') ;
let final_amount=document.querySelectorAll('.final_total_amt') ;
let flight_fare_amount= document.querySelectorAll('.flight_fare')
let tax_fees_amount=document.querySelectorAll('.tax_fees')
let standard_total_amount=document.getElementById('standard_total_amount')
let flexibele_total_amount=document.getElementById('flexibele_total_amount')
let adult_count=document.querySelectorAll('.adult_count')

// ---------------------------standard ticket variables-------------------

let standard_ticket=document.getElementById('standard_ticket_id')
let standard_ticket_checked= document.getElementById('standard_ticket_checked')
let flexibility_ticket=document.getElementById('flexibility_ticket_id')
let flexibility_ticket_checked=document.getElementById('flexibility_ticket_checked')
let flexible_amount_render=document.querySelectorAll('.flexible_amount_render')
// ---------------------------standard ticket variables end-------------------

// ---------------------------top navbar variable ----------------
let next_button=document.getElementById('next')
let top_nav_circle=document.querySelectorAll('.child_bottom_nav_bar')
let line_border=document.getElementsByClassName('line_border')

// ------------------------for render data-------------
let defaults=document.querySelectorAll('.hello')

// --------------------- render innertext--------------------
// ------------------------who's flying with us----------------------

let userNumber= document.getElementById('number');
let userEmail = document.getElementById('email');

flexible_amount_render.innerHTML="" ;
sessionStorage.setItem('flight_amt',1000)

function forloopfun(dataamounts,keyname) {
    for(dataamount of dataamounts){
        dataamount.innerText=keyname
    }
}
function totalAmountender(dataamounts,keyname,person) {
    for(dataamount of dataamounts){
        dataamount.innerText=+keyname+(1589*person)
    }
}
forloopfun(adult_count,total_person)
forloopfun(total_amount,flight_amt_totalperson)
forloopfun(final_amount,flight_amt_totalperson)

// -------------flight amount------------

let flightflare=((+flight_amt_totalperson)*72)/100;
for(flare of flight_fare_amount){
    flare.innerText=flightflare
}

// -----------tax amount----------------

let tax_fees=((+flight_amt_totalperson)*28)/100;
for(tax of tax_fees_amount){
    tax.innerText=tax_fees
}
// 
// -------------------------tickets selection amount
standard_total_amount.innerText=flight_amt_totalperson;

flexibele_total_amount.innerText=flight_amt_totalperson+(1589*(+total_person))
// ------------------------functions----------------


// ---------------------------standard ticket functions-------------------
standard_ticket.addEventListener('click',()=>{
    forloopfun(final_amount,flight_amt_totalperson)
    radioInput(standard_ticket_checked,standard_ticket,flexibility_ticket)
    for(let flexible_amount of flexible_amount_render){
        flexible_amount.style.display='none'
    }
})



flexibility_ticket.addEventListener('click',()=>{
    totalAmountender(final_amount,flight_amt_totalperson,total_person)
    radioInput(flexibility_ticket_checked,flexibility_ticket,standard_ticket)

    for(let flexible_amount of flexible_amount_render){
        flexible_amount.style.display='flex'
        flexible_amount.innerHTML=`
        <p>Flexible ticket</p>
        <p class="amount_color">INR<span class="tax_fees">${1589*(+total_person)}</span></p>`
    }
})

standard_ticket_checked.addEventListener('click',()=>{
    standard_ticket.style.border="2px solid blue"
    flexibility_ticket.style.border="1px solid black"
})

flexibility_ticket_checked.addEventListener('click',()=>{
    flexibility_ticket.style.border="2px solid blue"
    standard_ticket.style.border="1px solid black"
})
function radioInput(input,style,oppInput){
    if(input.checked==false){
        input.checked=true;
        style.style.border="2px solid blue"
        oppInput.style.border="1px solid black"
    }
}

// ---------------------------standard ticket functions end-------------------

// ---------------------------next buttons function for navbar--------------------

// ----------------------------- forms functions----------------------


// ------------------------------------- who's flying--------------------

let renderFrom=document.getElementById('renderFrom')
renderFrom.innerHTML=`${display().map((el)=>{
    return `<div class="adult-person boxborder border_space margin_top">
    <form class="forms">                
        <div>
            <h3>Adult <span>${el}</span></h3>
            <p>Required</p>
            <br>
        </div>
<!-- --------------------first name and last name ------------------------->
        <div class="display_flex">
            <div>
                <label>First names</label><br>
                <input type="text" class="fname" required><br>
                <p>Enter exactly what's written on this traveler's travel document</p>
            </div>
            <div>
                <label>Last names</label><br>
                <input type="text" class="lname" required> <br>
                <p>Enter exactly what's written on this traveler's travel document</p>                 
            </div>
        </div><br>
<!-- ---------------------gender date month year----------------- -->
        <div class="display_flex">
            <div style="width: 50%;">
                <label>Gender specified on your travel document*</label>
                <select class="Gender" required>
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>                                                                                  
            </div>
            <div style="width: 50%;">
                <label for="Date of birth">Date of birth</label>
                <div class="display_flex">
                    <input type="number" class="date" placeholder="DD" required>
                    <select class="month" required>
                        <option value="">MM</option>
                        <option value="jan">01</option>
                        <option value="feb">02</option>
                        <option value="mar">03</option>
                        <option value="apr">04</option>
                        <option value="may">05</option>
                        <option value="jun">06</option>
                        <option value="jul">07</option>
                        <option value="aug">08</option>
                        <option value="sep">09</option>                                    
                        <option value="oct">10</option>
                        <option value="nov">11</option>
                        <option value="dec">13</option>
                    </select> 
                    <input type="number" class="year" placeholder="year" required>
                </div>
            </div>
        </div>
    </form>
</div>`
}).join("")}`;

let days=document.querySelectorAll('.date');
let months=document.querySelectorAll('.month');
let year=document.querySelectorAll('.year')

function display(){
    let arr=[]
    for(let i=1;i<=total_person;i++){
        arr.push(i)
    }
    return arr
}

let i=0;
let j=0;
let k=0;
next.addEventListener('click',()=>{

    if(k<=2){
        if(i<=4){
    
            if(k==1){
                let obj={
                    useremail: userEmail.value,
                    userNumber: userNumber.value,
                }
                if(obj.userNumber==""){
                    alert("fill the form")
                }else{
                    defaults[k].style.display='none'
                    defaults[k+1].style.display="flex";
                    i=i+2;
                    top_nav_circle[i].children[0].classList.add('circle_color');
                    let after=line_border[j];
                    j++;
                    after.style.setProperty('--boxAfterBackColor','#006ce4')
                    k++
                }
            }else{
                i=i+2;
                top_nav_circle[i].children[0].classList.add('circle_color');
                let after=line_border[j];
                j++;
                after.style.setProperty('--boxAfterBackColor','#006ce4')

                defaults[k].style.display='none'
                defaults[k+1].style.display="flex";
                k++
            }
        }
    }
})

// -----------------------------bag function----------------------------

let luggage_amounts_render=document.querySelectorAll('.luggage_amounts_render')
let checked_bags_input= document.getElementById('checked_bags');
let no_checked_bags_input= document.getElementById('no_checked_bags');
let luggage_divs= document.getElementById('luggage_div')
let no_luggage_divs= document.getElementById('no_luggage_div')

// luggage_amounts_render.innerHTML="";

luggage_divs.addEventListener('click',()=>{
    radioInput(checked_bags_input,luggage_divs,no_luggage_divs)
    for(let luggage_amounts of luggage_amounts_render){
        luggage_amounts.style.display='none'
    }
})

no_luggage_divs.addEventListener('click',()=>{
    radioInput(no_checked_bags_input,no_luggage_divs,luggage_divs)
    addluggaeAmt(final_amount,total_person)
    for(let luggage_amounts of luggage_amounts_render){

        luggage_amounts.style.display='flex'
        luggage_amounts.innerHTML=`
        <p>Checked bag</p>
        <p class="amount_color">INR<span class="tax_fees">${4425.60}</span></p>`

    }
})

checked_bags_input.addEventListener('click',()=>{
    luggage_divs.style.border="2px solid blue"
    no_luggage_divs.style.border="1px solid black"
})
no_checked_bags_input.addEventListener('click',()=>{
    no_luggage_divs.style.border="2px solid blue"
    luggage_divs.style.border="1px solid black"
})

function addluggaeAmt(dataamounts,person){
        for(dataamount of dataamounts){
            dataamount.innerText=(+dataamount.innerText)+(4425.60*person)
        }
}


function storeData(){
    let arr=[];
    let obj={}
    for(let i=1;i<=count;i++){
        
    }
}