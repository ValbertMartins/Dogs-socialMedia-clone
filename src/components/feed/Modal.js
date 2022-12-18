import React from 'react'
import styles from "../../css/Modal.module.css"
import { ModalContext } from '../../context/ModalState'
import ComentModal from "./ComentModal"
import useFetch from '../../hooks/useFetch'
import Bone from "../svg/Bone"
import { Link } from "react-router-dom"
const Modal = ({setActiveModal}) => {

  const { idModal } = React.useContext(ModalContext)
  const [ photo , setPhoto ] = React.useState({})
  const [ isLoading , setIsLoading ] = React.useState(true)
  const [ commentList , setCommentList ] = React.useState([])
  const [ updateUseFetch , setUpdateUseFetch ] = React.useState(false)

  
  const closeModal = (event) => {
    
    if(event.target.className.includes('modalContainer')){
      setActiveModal(false)
    }
  }


  //fetch to modal infos
  const { payload } = useFetch(`https://dogsapi.origamid.dev/json/api/photo/${idModal}`, {
    cache: "no-store"
  })

  React.useEffect(() => {
    if(payload){
      setPhoto(payload.photo)
      setIsLoading(false)
    }
    
  }, [payload])
  
  
  //request the comments

  const { payload:comments } = useFetch(`https://dogsapi.origamid.dev/json/api/comment/${idModal}`, {
    cache: "no-store"
  }, updateUseFetch)
  
  
  React.useEffect(() => {
    setCommentList(comments)
  } , [comments])



 
  if(!photo) {
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
      isLoading ? <Bone/> :  

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

            <Link to={`photo/${photo.id}`}>
              <h1 className={styles.dogName}>{photo.title}</h1>
            </Link>
            <span>{photo.peso} kg</span>
            <span>{photo.idade} anos </span>
          </div>

          <ComentModal idModal={idModal} setCommentlist={setCommentList} commentList={commentList} 
            setUpdateUseFetch={setUpdateUseFetch}
            updateUseFetch={updateUseFetch}
          />
        </div>
      </div>  
    }


    </section>
  )
}

export default Modal
