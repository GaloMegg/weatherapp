import React, { useState } from 'react'

const Time = () => {
    const [date, setDate] = useState(new Date())
    setInterval(() => {
        let d = new Date()
        setDate(d)
    }, 10000);
    return (
        <>
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            {date.getHours()}:{date.getMinutes()}
        </>
    )
}

export default Time