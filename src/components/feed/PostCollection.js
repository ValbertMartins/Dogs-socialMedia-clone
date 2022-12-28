import React from 'react'
import styles from '../../css/PostCollection.module.css' 
import Post from './Post'


const PostCollection = ({collectionPosts,setIdModal }) => {

  return(
      <section className={`${styles.postsContainer} animationLeft`} > 
        {
          collectionPosts.map((post) => {
            return (
              <Post 
                post={post} 
                key={post.id} 
                setIdModal={setIdModal} 
              />
            )
          })
        }
      </section>
    )
}

export default PostCollection