import React from 'react'
import styles from '../../css/PostCollection.module.css' 
import { Link } from "react-router-dom"
import  Modal  from './Modal'


const PostCollection = ({collectionPosts, activeModal, setActiveModal}) => {
    
  // const [ activateModal , setActiveModal ] = React.useState(false)

  const openModal = () => {
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
                  <img  src={post.src} />
              </Link>
            )
          })
        }
      
      </section>

     
    )
}

export default PostCollection