// ---------------------------standard ticket variables-------------------

let standard_ticket=document.getElementById('standard_ticket_id')
let standard_ticket_checked= document.getElementById('standard_ticket_checked')
let flexibility_ticket=document.getElementById('flexibility_ticket_id')
let flexibility_ticket_checked=document.getElementById('flexibility_ticket_checked')

// ---------------------------standard ticket variables end-------------------

// ---------------------------top navbar variable
let next_button=document.getElementById('next')
let top_nav_circle=document.querySelectorAll('.child_bottom_nav_bar')
let line_border=document.getElementsByClassName('line_border')
// ------------------------for render data-------------

// let render_data=document.getElementById('#render_data')
// let render_data=document.querySelectorAll(".render_data")
let defaults=document.querySelectorAll('.hello')
// ------------------------functions----------------
// ---------------------------standard ticket functions-------------------
standard_ticket.addEventListener('click',()=>{
    if(standard_ticket_checked.checked ==false){
        standard_ticket_checked.checked =true
        standard_ticket.style.border="2px solid blue";
        flexibility_ticket.style.border="1px solid black"
    }
})

flexibility_ticket.addEventListener('click',()=>{
    if(flexibility_ticket_checked.checked ==false){
        flexibility_ticket_checked.checked =true
        standard_ticket.style.border="1px solid black";
        flexibility_ticket.style.border="2px solid blue"
    }
})
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
        defaults[k].classList.add('no_visible_data')
        defaults[k+1].style.display="flex"
    }

})

// ----------------------------------render function--------------

