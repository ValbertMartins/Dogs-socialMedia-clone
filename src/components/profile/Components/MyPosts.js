import React from 'react'
import styles from "../../../css/MyPictures.module.css"
import useFetch from '../../../hooks/useFetch'
import Bone from "../../svg/Bone"


const MyPosts = ({userId,localToken}) => {
  
  const [ myPictures , setMyPictures ] = React.useState([])
  const [ isLoading , setIsLoading ] = React.useState(true)


  console.log(userId)

  const { payload } = 
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
      setIsLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload])


  return (
    <section className={`animationDefault ${styles.myPicturesContainer}`}>
     {
      isLoading ?
       <Bone/> : 
        myPictures && myPictures.map((picture) => {
          return(
            <img 
              src={picture.src} 
              key={picture.id} 
              alt={picture.name}
            />
          )
        })   
     }
    </section>
  )
}

export default MyPosts