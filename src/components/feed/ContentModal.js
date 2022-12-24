import React from 'react'
import styles from "../../css/Modal.module.css"
const ContentModal = ({activeDeleteButton,handlerDeletePost,photo}) => {
  return (
    <>
      <div className={styles.viewsContainer}>
        {
          activeDeleteButton ? 
            <button 
              className={styles.buttonDelete} 
              onClick={handlerDeletePost}>
              deletar
            </button> : 
            <p>@{photo.author}</p>
        }
        <p className={styles.acessos}>{photo.acessos}</p>
      </div>

      <div className={styles.infoContainer}>
        <h1 className={styles.dogName}>{photo.title}</h1>
        <span>{photo.peso} kg</span>
        <span>{photo.idade} anos </span>
      </div>
    </>
  )
}

export default ContentModal