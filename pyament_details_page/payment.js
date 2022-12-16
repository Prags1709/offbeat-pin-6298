
//  -------------------storage data------------------------------
let flight_amt=sessionStorage.getItem('flight_amt') || 0;
let flight_flare=sessionStorage.getItem('Flight-fare') || 0;
let taxes_fees=sessionStorage.getItem('taxes-fees') || 0;
let total_person= sessionStorage.getItem('total-person') || 1
// --------------------------total amount variable----------------------

let total_amount=document.querySelectorAll('.total_amount') ;
let final_amount=document.querySelectorAll('.final_total_amt') ;
let flight_fare_amount= document.querySelectorAll('.flight_fare')
let tax_fees_amount=document.querySelectorAll('.tax_fees')
let standard_total_amount=document.getElementById('standard_total_amount')
let flexibele_total_amount=document.getElementById('flexibele_total_amount')
let adult_count=document.querySelectorAll('.adult_count')

// --------------------- render innertext--------------------

// console.log(total_amount)
function forloopfun(dataamounts,keyname) {
    for(dataamount of dataamounts){
        dataamount.innerText=keyname
    }
}
function totalAmountender(dataamounts,keyname) {
    for(dataamount of dataamounts){
        dataamount.innerText=keyname+1589
    }
}
forloopfun(adult_count,total_person)
forloopfun(total_amount,flight_amt)
forloopfun(flight_fare_amount,flight_flare)
forloopfun(tax_fees_amount,taxes_fees)
forloopfun(final_amount,flight_amt)

standard_total_amount.innerText=flight_amt;
flexibele_total_amount.innerText=+flight_amt+1589 * (+total_person)
// ---------------------------standard ticket variables-------------------

let standard_ticket=document.getElementById('standard_ticket_id')
let standard_ticket_checked= document.getElementById('standard_ticket_checked')
let flexibility_ticket=document.getElementById('flexibility_ticket_id')
let flexibility_ticket_checked=document.getElementById('flexibility_ticket_checked')

// ---------------------------standard ticket variables end-------------------

// ---------------------------top navbar variable ----------------
let next_button=document.getElementById('next')
let top_nav_circle=document.querySelectorAll('.child_bottom_nav_bar')
let line_border=document.getElementsByClassName('line_border')

// ------------------------for render data-------------
let defaults=document.querySelectorAll('.hello')
// ------------------------functions----------------
// ---------------------------standard ticket functions-------------------
standard_ticket.addEventListener('click',()=>{
    forloopfun(final_amount,flight_amt)
    radioInput(standard_ticket_checked,standard_ticket,flexibility_ticket)
})

flexibility_ticket.addEventListener('click',()=>{
    totalAmountender(final_amount,flight_amt)
    radioInput(flexibility_ticket_checked,flexibility_ticket,standard_ticket)
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
let i=0;
let j=0;
let k=0
next.addEventListener('click',()=>{
    if(i<=4){
        i=i+2;
        top_nav_circle[i].children[0].classList.add('circle_color');
        let after=line_border[j];
        j++;
        after.style.setProperty('--boxAfterBackColor','#006ce4')
        // defaults[k].classList.remove('render_data')
    }
    if(k<2){
        // defaults[k].classList.add('no_visible_data')
        defaults[k].style.display='none'
        defaults[k+1].style.display="flex";
        k++
    }

})

// ----------------------------------render function--------------

