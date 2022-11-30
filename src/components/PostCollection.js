import React from 'react'
import styles from '../css/PostCollection.module.css' 
import { Link } from "react-router-dom"



const PostCollection = ({collectionPosts,index}) => {
    return(
        <section className={`${styles.feed} animationLeft`} key={index}>
           {
            collectionPosts.map((post) => {
              return (
                <Link key={post.id} className={styles.post}>
                    <img  src={post.src} />
                </Link>
              )
            })
          }
        </section>
      )
}

export default PostCollection