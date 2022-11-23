import React, { useState, useEffect } from 'react'


const SingleColor = ({ rgb, weight, index, hexcolor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexcolor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor