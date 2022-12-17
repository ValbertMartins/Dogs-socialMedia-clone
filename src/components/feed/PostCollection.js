import React from 'react'
import styles from '../../css/PostCollection.module.css' 
import { Link } from "react-router-dom"
import { ModalContext } from '../../context/ModalState'


const PostCollection = ({collectionPosts , setActiveModal}) => {
    



  const { setIdModal } = React.useContext(ModalContext)
  const [ postId , setPostId ] = React.useState(null)



  const openModal = () => {
    setIdModal(postId)
    setActiveModal(true)
  }
  
  const handleShowViews = (event) => {
    setPostId(Number(event.target.id))
  }
  
  const handleHideViews = () => setPostId(null)


  return(
      <section className={`${styles.postsContainer} animationLeft`} >
          {
          collectionPosts.map((post) => {
            return (
              <Link 
              onMouseEnter={handleShowViews}
              onMouseLeave={handleHideViews}
              onClick={openModal}
              key={post.id} 
              id={post.id}
              className={styles.post}>
                  <img src={post.src} 
                    id={post.id} 
                    alt={post.title}/>

                  {
                    postId === post.id &&
                      <div className={styles.viewsContainer}>
                        <p className={styles.views}>
                          {post.acessos}
                        </p>
                      </div>
                  } 
                
              </Link>
            )
          })
        }
      
      </section>

     
    )
}

export default PostCollection