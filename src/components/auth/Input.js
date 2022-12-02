import React from 'react'
import styles from "../../css/Auth.module.css"
const FormAuth = ({type,name, className , ...props}) => {
  return (
    <>
        <label htmlFor={name} className={styles.inputLabel}>{name}</label>
        <input type={type} id={name} className={styles[className]} {...props}/>
    </>
  )
}

export default FormAuth