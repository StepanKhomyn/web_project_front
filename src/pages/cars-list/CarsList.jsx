import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const CarsList = () => {
  return (
    <div>
        <Link to="login"> вихід </Link>
        {/*<Navigate to="/login" />*/}
    </div>
  )
}

export default CarsList