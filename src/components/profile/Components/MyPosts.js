import React from 'react'
import styles from "../../../css/MyPictures.module.css"
import useFetch from '../../../hooks/useFetch'
import { Link } from "react-router-dom"
import { ModalContext } from '../../../context/ModalState'
import Loading from '../../Loading'
const MyPosts = ({userId,localToken,setActiveModal}) => {
  
  React.useEffect(() => { 
    document.title = `MyPosts | Dogs`
  } , [])

  const [ myPictures , setMyPictures ] = React.useState([])
  const { setIdModal } = React.useContext(ModalContext)
  const [ currentPage, setCurrentPage ] = React.useState(1)
  const [ nextPageExists, setnextPageExists ] = React.useState(true)

  //request my pictures
  const { payload , isLoading } = 
    useFetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=${currentPage}&_total=6&_user=${userId}`, {
      method: "GET", 
          headers: {
            "Content-type": "application/json", 
            authorization: `Bearer ${localToken}`
          }
    })

  
  React.useEffect(() => {  
   if(userId && payload){
      setMyPictures( oldPictures => [ ...oldPictures, ...payload]) 
      if(payload.length < 6 && payload.length > 0) {
        setnextPageExists(false)
      }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload])

  const handleOpenModal = (id) => {
    setActiveModal(true)
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
                    <Link key={picture.id} className="animationLeft"
                      onClick={() => handleOpenModal(picture.id)}>
                      <img 
                        src={picture.src} 
                        alt={picture.name}
                        />
                    </Link>
                  )
                })
              }

              
              
          </div>
      }
      </section>
  )
}

export default MyPosts