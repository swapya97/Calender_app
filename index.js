const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icon span");

// getting new date , current year and month according to the
// setting of your window

let date = new Date(),
currYear = date.getFullYear(),
currMonth =date.getMonth();

// sorting full name of all months in Array 

const months = ["January", "February", "March", "April"
, "May","June", "July","August", "September", "October", "November","December"];

const renderCalender = ()=>{
     let firstDayofMonth =new Date(currYear, currMonth,1).getDay(),
        //  getting firstDayofMonthdayof month
     lastDateofMonth = new Date (currYear, currMonth + 1, 0 ).getDate(),
     lastDayofMonth = new Date(currYear,currMonth,lastDateofMonth).getDay(), 
     lastDateofLastMonth = new Date(currYear,currMonth,0).getDate();
    //  getting last date of previous month

    let liTag = "";
    for(let i = firstDayofMonth; i > 0;i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1 }</li>`;
    }
    for(let i = 1; i <= lastDateofMonth;i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;  
     }
     currentDate.innerText = `${months[currMonth]} ${currYear}`;
     daysTag.innerHTML = liTag; 
    }
renderCalender();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click",()=> {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        
        if(currMonth < 0 || currMonth > 11){
            date = new Date (currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        else {
             date = new Date();
        }
        renderCalender();
    });
});