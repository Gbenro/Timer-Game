import { useRef, useState } from "react"
import ResultModal from "./ResultModal";





export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timerStarted, SetTimerStarted] = useState(false);
    const [timerExpired, SetTimerExpired] = useState(false);


    function handleStart() {
        timer.current = setTimeout(() => {
            SetTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000)

        SetTimerStarted(true)
    }
    function handleStop() {
        clearTimeout(timer.current)
    }

    return <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
        <section className="challenge">
            <h2>{title}</h2>

            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? " Time is running" : "Timer inactive"}
            </p>
        </section>
    </>
}