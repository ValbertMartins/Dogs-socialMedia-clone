import React from 'react'
import styles from "../../css/Modal.module.css"
import { ModalContext } from '../../context/ModalState'
import Coment from "./Coment"
import useFetch from '../../hooks/useFetch'
const Modal = ({setActiveModal}) => {

  const { idModal } = React.useContext(ModalContext)
  const [ photo , setPhoto ] = React.useState({})
  const [ isLoading , setIsLoading ] = React.useState(true)



  const closeModal = ({target}) => {
      if(target.className.includes('modalContainer')){
        setActiveModal(false)
      }
  }
  
  
  const { payload } = useFetch(`https://dogsapi.origamid.dev/json/api/photo/${idModal}`, {
    cache: "no-store"
  })

  React.useEffect(() => {
    if(payload){
      setPhoto(payload.photo)
      setIsLoading(false)
    }
    
  }, [payload])
  


  

  return (
    <section 
      className={styles.modalContainer}
      onClick={closeModal}>
        
    {
      isLoading ? <div>Loading</div> :  

      <div className={styles.modalContent}>
        <div className={styles.imagePostContainer}>
          <img src={photo.src} alt={photo.title}/>
        </div>
        <div className={styles.postContent}>
          <div className={styles.viewsContainer}>
              <p>@{photo.author}</p>
              <p className={styles.acessos}>{photo.acessos}</p>
          </div>

          <div className={styles.infoContainer}>
            <h1 className={styles.dogName}>{photo.title}</h1>
            <span>{photo.peso} kg</span>
            <span>{photo.idade} anos </span>
          </div>

          <Coment idModal={idModal}/>
        </div>
      </div>  
    }


    </section>
  )
}

export default Modal
