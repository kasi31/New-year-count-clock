const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minites=document.querySelector('#minites');
const seconds=document.querySelector('#seconds');

function UpdateTime(){
    const currentYear=new Date().getFullYear();
console.log(currentYear)

const newYear=new Date(`January 1 ${currentYear +1} 00:00:00`);
console.log(newYear)

const currentDate=new Date();
console.log(currentDate);

const diff=newYear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;;
minites.innerHTML=m<10?"0"+m:m;;
seconds.innerHTML=s<10?"0"+s:s;;
// console.log(d+" "+h+" "+m+" "+s )

}
UpdateTime();
setInterval(UpdateTime,1000);