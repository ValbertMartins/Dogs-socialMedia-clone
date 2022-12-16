import React from 'react'
import { GlobalState } from '../../context/GlobalState'
import styles from "../../css/Modal.module.css"
import SendComent from '../svg/SendComent'





const Coment = ({idModal}) => {
  
  const { userAuth , localToken } = React.useContext(GlobalState)
  const [ commentList , setCommentList ] = React.useState([])
  const [ comment , setComment ] = React.useState('')
  const { fetchApi } = React.useContext(GlobalState)
  const [ auxState , setAuxState ] = React.useState(false)
  //pull the api comments
  //const { payload } = useFetch(`https://dogsapi.origamid.dev/json/api/comment/${idModalState}`)

  console.log(commentList)

  React.useEffect(() => {
    ( async () => {
      const [ payload , response ] = await fetchApi(`https://dogsapi.origamid.dev/json/api/comment/${idModal}`, {
        cache: "no-store"
      })
      console.log(response)
      setCommentList(payload?.reverse())
    })()  
  } , [auxState,fetchApi,idModal])

 
  


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
          setAuxState(!auxState)
          
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