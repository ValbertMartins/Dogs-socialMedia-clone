import React from 'react'
import styles from "../../css/Modal.module.css"
import ComentModal from "./ComentModal"
import { Auth } from '../../context/Auth'
import Loading from '../Loading'
import ContentModal from './ContentModal'
import axios from 'axios'
import { createDeletePostOptions } from '../../services/api/requestOptions'
import ImageSkeleton from './ImageSkeleton'

const Modal = ({idModal,setIdModal}) => {

  const [ photo , setPhoto ] = React.useState({})
  const [ isLoading , setIsLoading ] = React.useState(true)
  const { userAuth , localToken } = React.useContext(Auth)
  const [ activeDeleteButton , setActiveDeleteButton ] = React.useState(false)
  const [ photoExists , setPhotoExists ] = React.useState(true)
  
  //verify if shows delete btn
  React.useEffect(() => {
    if(userAuth){
      if(photo.author === userAuth.nome){
        setActiveDeleteButton(true)
      }
    }
  } , [photo,userAuth])


  const closeModal = (event) => {
    if(event.target.className.includes('modalContainer')){
      setIdModal(null)
    }
  }

  React.useEffect(() => {
    async function requestPhoto(){
      try {
        const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${idModal}`,{cache: "no-store"})
        if(response.status !== 200) throw new Error()
        const {photo} = await response.json()
        setPhoto(photo)

      } catch(error){
        setPhotoExists(false)

      } finally {
        setIsLoading(false)
      }
    }
    requestPhoto()    
  }, [idModal])
  
  const handlerDeletePost = async () => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?")
    if(confirmed){
      const configRequest = createDeletePostOptions(idModal, localToken)
      await axios(configRequest)
      window.location.reload()
    }
  }

  if(!photoExists) {
    return (
      <div className={styles.modalContainer}  
        onClick={closeModal}
        style={{color: "red"}}>
          Post não encontrado
      </div>
      )
  }

  return (
    <section 
      className={styles.modalContainer}
      onClick={closeModal}>
      {
        isLoading ? <Loading/> :  
        <div className={styles.modalContent}>
          <div className={styles.imagePostContainer}>
            <ImageSkeleton post={photo}/>
          </div>

          <div className={styles.postContent}>
            <ContentModal 
              activeDeleteButton={activeDeleteButton}
              handlerDeletePost={handlerDeletePost}
              photo={photo}
            />
            <ComentModal idModal={idModal}/>
          </div>
        </div>  
      }
    </section>
  )
}

export default Modal
