import React from 'react'
import styles from "../../css/Profile.module.css"
import { NavLink, Route, Routes } from 'react-router-dom'
const Profile = () => {

  const [ title , setTitle ] = React.useState('Minha conta')

  return (
    <section className={styles.containerProfile}>
      {title}
      <NavLink to="statistics" onClick={event => setTitle("statistics")} >
        <button className={styles.buttonNavLink}></button>
      </NavLink>

      





      <Routes>
          <Route path='statistics' element={<div>Statistics</div>}/>
      </Routes>
    </section>
  )
}

export default Profile