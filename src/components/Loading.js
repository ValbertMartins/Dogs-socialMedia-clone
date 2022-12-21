import React from 'react'
import Bone from './svg/Bone'
import styles from "../css/Loading.module.css"
const Loading = () => {
  return (
    <section className={styles.containerLoading}>
      <Bone/>
    </section>
  )
}

export default Loading