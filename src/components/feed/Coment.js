import React from 'react'
import { GlobalState } from '../../context/GlobalState'
import styles from "../../css/Modal.module.css"
import SendComent from '../svg/SendComent'





const Coment = ({idModal}) => {

  const { userAuth , fetchApi } = React.useContext(GlobalState)
  const [ commentList , setCommentList ] = React.useState([])

  React.useEffect(() => {

    ( async () => {
      const [ payload ] = await fetchApi(`https://dogsapi.origamid.dev/json/api/comment/${idModal}`)
      console.log(payload)
      setCommentList(payload)
      
    })()
  } , [])


  return (
    <section className={styles.comentContainer}>


      <article className={styles.comments}>
        {
          commentList.map( comment => {
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
              <textarea placeholder='Comente...' />
              <button>
                <SendComent/>
              </button>
            </form>
          </article>
      }

    </section>
  )
}

export default Coment