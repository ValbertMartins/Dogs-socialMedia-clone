import React from 'react'
import { GlobalState } from '../../context/GlobalState'
import styles from "../../css/Modal.module.css"
import useFetch from '../../hooks/useFetch'
import SendComent from '../svg/SendComent'





const Coment = ({idModal}) => {

  const { userAuth } = React.useContext(GlobalState)
  const [ commentList , setCommentList ] = React.useState([])



  const { payload } = useFetch(`https://dogsapi.origamid.dev/json/api/comment/${idModal}`)

  React.useEffect(() => {
    setCommentList(payload)
  } , [payload])


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