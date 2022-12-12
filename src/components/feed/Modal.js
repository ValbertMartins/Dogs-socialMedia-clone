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
  

  console.log(photo)

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

          <Coment/>
        </div>
      </div>  
    }


    </section>
  )
}

export default Modal
