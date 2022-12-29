import React from 'react'
import styles from '../../css/PostCollection.module.css'


const ImageSkeleton = ({post}) => {

  const [ showImage, setShowImage ] = React.useState(false)

  function handleLoader({target}){
    target.style.opacity = 1
    setShowImage(true)
  }
  return (
    <>
      {!showImage && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoader} src={post.src} id={post.id} alt={post.title}/>
    </>
  )
}

export default ImageSkeleton