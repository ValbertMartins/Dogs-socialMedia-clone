import React from 'react'
import Bone from './svg/Bone'

const Loading = () => {
  return (
    <section style={{
      position: "fixed",
      width: "800px",
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <Bone/>
    </section>
  )
}

export default Loading