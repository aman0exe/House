import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import css from "./Dashboard.module.css"

function Dashboard() {
  const [houses, setHouses] = useState([]) 
  const fetchData = async () => {
    fetch('https://64c257b2eb7fd5d6ebcfa969.mockapi.io/houses')
    .then((res) => res.json)
    // .then((data) =>)
  }
  return (
    <div>
        <Link className={css.addBtn} to="/create">+Add</Link>
    </div>
  )
}

export default Dashboard