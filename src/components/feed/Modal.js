import React from 'react'
import styles from "../../css/Modal.module.css"

const Modal = ({setActiveModal}) => {


const closeModal = ({target}) => {
    if(target.className.includes('modalContainer')){
      setActiveModal(false)
    }
}

  return (
    <section className={styles.modalContainer}
    onClick={closeModal}>


      <div className={styles.modalContent}>
      </div>  
    </section>
  )
}

export default Modal
