import { useState } from "react"




export default function TimerChallenge({title, targetTime}){
    const [timerStarted, SetTimerStarted]=useState(false);
const [timerExpired, SetTimerExpired] = useState(false);

function handleStart(){
    setTimeout(()=>{
        SetTimerExpired(true)
    },targetTime * 1000)

    SetTimerStarted(true)
}


    return <section className="challenge">  
    <h2>{title}</h2>
    {timerExpired && <p>You Lost!!!</p>}
    <p className="challenge-time"> 
    {targetTime} second{targetTime >1 ? "s":""}
     </p>
     <p>
        <button onClick={handleStart}>
        {timerStarted ?"Stop":"Start"} Challenge
        </button>
     </p>
     <p className={timerStarted?"active": undefined}>
   {timerStarted?" Time is running" : "Timer inactive"}
     </p>
    </section>
}