import { useEffect, useState } from "react";

const Clock = () => {

    const date = new Date();

    const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

    useEffect(() => {

      const updateTime = setInterval(() => {
        setTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        })
      }, 1000);
    
      return () => clearInterval(updateTime)
    }, [date])

  return (
    <div className='clock-container'>
        <h2>{
                time.hours < 10 ? `0${time.hours}` : time.hours
            } h :
        </h2>
        <h2>
            {
                time.minutes < 10 ? `0${time.minutes}`: time.minutes
            } min :
        </h2>
        <h2>
        {
                time.seconds < 10 ? `0${time.seconds}`: time.seconds
            } s.
        </h2>

    </div>
  )
}

export default Clock