import React from 'react'
import styles from '../../css/PostCollection.module.css' 
import { Link } from "react-router-dom"
import  Modal  from './Modal'
import { ModalContext } from '../../context/ModalState'


const PostCollection = ({collectionPosts , setActiveModal}) => {
    

  const { setIdModal } = React.useContext(ModalContext)
  
  const openModal = ({target}) => {
    setIdModal(target.id)
    setActiveModal(true)
  }


  return(
      <section className={`${styles.postsContainer} animationLeft`} >
          {
          collectionPosts.map((post) => {
            return (
              <Link
                key={post.id} 
                className={styles.post} 
                onClick={openModal}>
                <img src={post.src} id={post.id}/>
              </Link>
            )
          })
        }
      
      </section>

     
    )
}

export default PostCollection