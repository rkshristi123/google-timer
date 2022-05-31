import { useState } from "react";
import style from "./Timer.module.css";
import React from "react"

export default function Timer() {
    const [timerid,SetTimerid] =useState(null)
    const [watch,setWAtch]=useState(0)
    
    const start=() =>{
    if(!timerid){
        let id=setInterval(()=>{
            setWAtch((prev)=>prev+1)
        },1000)
        SetTimerid(id)
    }
    }
    
    const pause=()=>{
        clearInterval(timerid)
        SetTimerid(null)
    }
    
    const reset=()=>{
        clearInterval(timerid)
         setWAtch(0)
    }
 

    return (
        <div className={style.timer}>
             <h1>Timer</h1>
            <div className={style.box}>
            <h1>{watch}s</h1>
            </div>
            <div className={style.b}>
            <button className={style.start} onClick={start}>start</button>
    <button className={style.stop} onClick={pause}>pause</button>
    <button className={style.reset} onClick={reset}>reset</button>
            </div>
        </div>
    )
}