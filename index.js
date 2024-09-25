function updateClock()
{
    const now=new Date();
    let hours=now.getHours()
    const meridiem=hours>=12 ?"PM":"AM";
    hours=hours % 12 || 12
    hours=hours.toString()
    const min=now.getMinutes().toString()
    const sec=now.getSeconds().toString()
    const timestr=`${hours} : ${min} : ${sec}  ${meridiem}`;
    document.getElementById('clock').textContent=timestr;
}
updateClock()
setInterval(updateClock,1000)