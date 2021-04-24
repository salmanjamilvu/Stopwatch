import React,{useEffect, useState} from 'react'
import './Main.css'

const Main = () => {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)
    
    const handleReset = () =>{
        setTime(0)
        setTimerOn(false)
    }

    useEffect(() => {
        let interval = null;
        if(timerOn === true){
            interval = setInterval(()=>{
                setTime(prevTime => prevTime + 10)
            }, 10)
        }else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)

    }, [timerOn])
    return (
        <React.Fragment>
            <div className="time-container">
                <p className="timer-text">{( '0' + Math.floor((time / 60000)%60)).slice(-2)}</p>
                <span>:</span>
                <p className="timer-text">{( '0' + Math.floor((time / 1000)%60)).slice(-2)}</p>
                <span>:</span>
                <p className="timer-text">{( '0' + ((time / 10)%100)).slice(-2)}</p>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={ ()=>setTimerOn(true) }>Start</button>
                <button className="btn" onClick={ ()=>setTimerOn(false) }>Stop</button>
                <button className="btn" onClick={handleReset}>Reset</button>
            </div>
        </React.Fragment>
    )
}

export default Main
