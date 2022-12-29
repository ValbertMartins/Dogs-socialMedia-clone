import React from 'react'
import styles from "../../../css/MyPictures.module.css"
import Loading from '../../Loading'
import { Auth } from '../../../context/Auth'
import { createRequestPicturesOptions } from '../../../services/api/requestOptions'
import axios from 'axios'
import ImageSkeleton from '../../feed/ImageSkeleton'


const MyPosts = ({setIdModal}) => {
  
  React.useEffect(() => { 
    document.title = `MyPosts | Dogs`
  } , [])

  const [ myPictures , setMyPictures ] = React.useState([])
  const [ currentPage, setCurrentPage ] = React.useState(1)
  const [ nextPageExists, setnextPageExists ] = React.useState(true)
  const { userAuth:user, localToken } = React.useContext(Auth) 
  const [ isLoading , setIsLoading ] = React.useState(true)
  

  React.useEffect(() => {

    function storePicturesAndVerifiyConditionStop(payload){
      if(user?.id && payload){
        setMyPictures( oldPictures => [ ...oldPictures, ...payload]) 
        if(payload.length < 6 && payload.length > 0) {
          setnextPageExists(false)
        }
      }
    }

    async function requestMyPictures(){
      const configRequest = createRequestPicturesOptions(currentPage,user,localToken)
      try { 
        const response = await axios(configRequest)
        const { data:payload } = response
        storePicturesAndVerifiyConditionStop(payload)
      }catch(error){

      } finally { 
        setIsLoading(false)
      }
    }
    requestMyPictures()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage,user])
  

  const handlerOpenModal = (id) => {
    setIdModal(id)
  }
  //infinite scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      
      entries.forEach(entry => {
      
        if(entry.isIntersecting){ 
          nextPageExists ? 
            setCurrentPage( oldValue => oldValue + 1) : 
              observer.unobserve(document.querySelector("footer"))
        }
      })

    }, {
      root:null,
      threshold: 0.8 
    })

    observer.observe(document.querySelector("footer"))
    return () => observer.unobserve(document.querySelector("footer"))

  }, [nextPageExists])
  
  return (
      <section>
        {isLoading && <Loading/>}
        {
          <div className={`animationLeft ${styles.myPicturesContainer}`}>     
            {
              myPictures?.map((picture) => {
                return(
                  <div key={picture.id} className={`animationLeft ${styles.postContainer}`}
                    onClick={() => handlerOpenModal(picture.id)}>
                    <ImageSkeleton post={picture}/>
                    <div className={styles.viewsContainer}>
                    <p className={styles.views}>
                      {picture.acessos}
                    </p>
                    </div>  
                  </div>
                )
              })
            }
          </div>
      }
      </section>
  )
}

export default MyPosts