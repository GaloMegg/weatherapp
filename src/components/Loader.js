import React, { useEffect, useState } from 'react'
const Loader = () => {
  const [time, setTime] = useState(false)
  useEffect(() => {
    setTimeout(() => { setTime(true) }, 6000)
  }, [])
  return (
    <div className='loader'>
      <div className="lds-ripple"><div></div><div></div></div>
      {time && <h1 className='loader__text'>Recuerda encender la ubicacion...</h1>}
    </div>
  )
}

export default Loader