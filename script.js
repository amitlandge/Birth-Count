let secs=document.querySelector(".countSec");
let min=document.querySelector(".countMinutes");
let hor=document.querySelector(".countHours");
let day=document.querySelector(".countDays")




console.log("lets start count down");
let mydate="2022-06-02";
console.log(mydate);
let date1=new Date();
console.log(date1)
function countDown(){
  let newYearDate=new Date(mydate)
  let currentDate=new Date();
 let seconds=(Math.floor(newYearDate-currentDate)/1000);
 let days=(Math.floor(seconds/3600/24));
 let hours=(Math.floor(seconds/3600)%24);
 let minutes=(Math.floor(seconds/60)%60);
 let totalSec=(Math.floor(seconds)%60);
 secs.innerHTML=totalSec;
 day.innerHTML=days;
 hor.innerHTML=hours;
 min.innerHTML=minutes;
// console.log(days+" "+hours+" "+minutes+" "+" "+totalSec)
//   let getdate=(newYearDate-currentDate.getHours());
//   console.log(getdate)
}
countDown();
setInterval(countDown,1000);