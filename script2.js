const days=document.getElementById('days')
const hours=document.getElementById('hours')
const minutes=document.getElementById('minutes')
const second=document.getElementById('second')
const year=document.getElementById('year')
const countdownmain=document.getElementById('count-down-main')

const currentyear=new Date().getFullYear();

const nextyear=currentyear+1

const NewYearTime=new Date(`January 01 ${nextyear} 00:00:00`)

function update()
{
    const CurrentYearTime=new Date();
    const RemainingYearTime=NewYearTime-CurrentYearTime;

    const d=Math.floor(RemainingYearTime/1000/60/60/24);
    const h=Math.floor(RemainingYearTime/1000/60/60)%24;
    const m=Math.floor(RemainingYearTime/1000/60)%60;
    const s=Math.floor(RemainingYearTime/1000)%60;

    days.innerHTML=d
    hours.innerHTML=h
    minutes.innerHTMLm=m
    second.innerHTML=s
}
setInterval(update,1000);