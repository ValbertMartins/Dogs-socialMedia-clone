import React from 'react'
import { Auth } from '../../context/Auth'
import styles from "../../css/Modal.module.css"
import SendComent from '../svg/SendComent'





const Coment = ({idModal,commentList , setUpdateUseFetch}) => {
  
  const { userAuth , localToken } = React.useContext(Auth)
  const [ comment , setComment ] = React.useState('')
  const { fetchApi } = React.useContext(Auth)
  


  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation();
    
    ( async () => {
          await fetchApi(`https://dogsapi.origamid.dev/json/api/comment/${idModal}`, {
              method: "POST",
              headers: {
                "Content-type" : "application/json",
                Authorization: `Bearer ${localToken}`
              },
              body: JSON.stringify({  
                comment: comment
              })
            })
          setComment("")
          
          setUpdateUseFetch( auxPrev => !auxPrev)
          
    })()  
  }

  
  return (

   
    <section className={styles.comentContainer}>

    
      <article className={styles.comments}>
        {
          commentList?.map( comment => {
            return(
              <p key={comment.comment_ID} >
                <strong>
                  {comment.comment_author}
                </strong>: 
                {comment.comment_content}</p>
            )
          })
        }
      </article>

      { 
        userAuth &&
          <article className={styles.inputComentContainer}>
            <form>
              <textarea 
                placeholder='Comente...' 
                onChange={({target}) => setComment(target.value)}
                value={comment}
              />
              <button onClick={handleSubmit} >
                <SendComent />
              </button>
            </form>
          </article>
      }

    </section>
  )
}

export default Coment