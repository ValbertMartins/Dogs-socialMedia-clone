import axios from 'axios'
import React from 'react'
import { Auth } from '../../context/Auth'
import styles from "../../css/Modal.module.css"
import { createCommentOptions } from '../../services/api/requestOptions'
import SendComent from '../svg/SendComent'

const Coment = ({idModal}) => {
  
  const { userAuth , localToken } = React.useContext(Auth)
  const [ comment , setComment ] = React.useState('')
  const [ commentList , setCommentList ] = React.useState([])
  const [ updateComments , setUpdateComments ] = React.useState(false)
   
  React.useEffect(() => {
    async function requestComments(){
       const response = await axios.get(`/api/comment/${idModal}`)
       const { data:comments } = response     
       setCommentList(comments)
    }
    requestComments()
  } , [idModal, updateComments])



  const handleSubmitComment = async event => {
    event.preventDefault()
    event.stopPropagation();

    const configRequest = createCommentOptions(comment,localToken, idModal)
    await axios(configRequest)
    setComment("")
    setUpdateComments(!updateComments)
  
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
              <button onClick={handleSubmitComment} >
                <SendComent />
              </button>
            </form>
          </article>
      }
    </section>
  )
}

export default Coment