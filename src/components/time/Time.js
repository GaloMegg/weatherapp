import React, { useState } from 'react'

const Time = () => {
    const [date, setDate] = useState(new Date())
    setInterval(() => {
        let d = new Date()
        setDate(d)
    }, 10000);
    return (
        <>
            <p>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
            <p>
                {date.getHours()}:{date.getMinutes()}
            </p>

        </>
    )
}

export default Time