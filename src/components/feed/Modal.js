import React from 'react'
import styles from "../../css/Modal.module.css"
import { ModalContext } from '../../context/ModalState'
import { GlobalState } from "../../context/GlobalState"
import Coment from "./Coment"
const Modal = ({setActiveModal}) => {


  const { fetchApi } = React.useContext(GlobalState)
  const { idModal } = React.useContext(ModalContext)
  const [ photo , setPhoto ] = React.useState({})
  const [ isLoading , setIsLoading ] = React.useState(true)



  const closeModal = ({target}) => {
      if(target.className.includes('modalContainer')){
        setActiveModal(false)
      }
  }

  

  React.useEffect(() => {
    ( async () => {
      const [ payload , response ] = await fetchApi(`https://dogsapi.origamid.dev/json/api/photo/${idModal}`)
      setPhoto(payload.photo)
      setIsLoading(false)
    } )()
  }, [idModal])
  

  return (
    <section 
      className={styles.modalContainer}
      onClick={closeModal}>

    {
      isLoading ? <div>Loading</div> :  

      <div className={styles.modalContent}>
        <div className={styles.imagePostContainer}>
          <img src={photo.src}/>
        </div>
        <div className={styles.postContent}>
          <div className={styles.viewsContainer}>
              <p>@cat</p>
              <p>10000</p>
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.dogName}>Ellie</h1>
            <span>4kg </span>
            <span>12 anos</span>

            
              <Coment/>
          </div>

        </div>
      </div>  
    }


    </section>
  )
}

export default Modal
