import React from 'react'
import styles from "../../../css/MyPictures.module.css"
import useFetch from '../../../hooks/useFetch'
import Bone from "../../svg/Bone"
import { Link } from "react-router-dom"
import { ModalContext } from '../../../context/ModalState'
const MyPosts = ({userId,localToken,setActiveModal}) => {
  
  const [ myPictures , setMyPictures ] = React.useState([])
  const { setIdModal } = React.useContext(ModalContext)


  const { payload , isLoading } = 
    useFetch(`https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=${userId}`, {
      method: "GET", 
          headers: {
            "Content-type": "application/json", 
            authorization: `Bearer ${localToken}`
          }
    })

  //request my pictures
  React.useEffect(() => {  
    if(userId){
      setMyPictures(payload)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload])



  const handleOpenModal = (id) => {
    setActiveModal(true)
    setIdModal(id)
  }

  return (
    
      <section className={styles.myPicturesContainer}>
      {
        isLoading ?
        <Bone/> : 
          <div className="animationLeft">     
              {
                myPictures?.map((picture) => {
                  return(
                    <Link key={picture.id} 
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