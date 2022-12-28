import React from 'react'
import styles from '../../css/PostCollection.module.css' 
import ImageSkeleton from './ImageSkeleton'


const Post = ({post,setIdModal}) => {

  const openModal = () => {
    setIdModal(post.id)
  }
  
  return (
    <div 
      onClick={openModal}
      id={post.id}  
      className={styles.post}>
        <ImageSkeleton post={post}/>
        <div className={styles.viewsContainer}>
          <p className={styles.views}>
            {post.acessos}
          </p>
        </div>   
    </div>
  )
}

export default Post