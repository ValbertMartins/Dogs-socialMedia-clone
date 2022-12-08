import React from 'react'
import { GlobalState } from '../../../context/GlobalState'
import styles from "../../../css/MyPictures.module.css"
import Bone from "../../svg/Bone"
const MyPosts = ({userId,localToken}) => {
  
  const [ myPictures , setMyPictures ] = React.useState([])
  const { fetchApi } = React.useContext(GlobalState)
  const [ isLoading , setIsLoading ] = React.useState(true)
  //request my pictures
  React.useEffect(() => {  
    if(userId) {
      (async () => {
        const [ payload ] = await fetchApi(`https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=${userId}`, {
          method: "GET", 
          headers: {
            "Content-type": "application/json", 
            authorization: `Bearer ${localToken}`
          }
        })        
        setMyPictures(payload)
        setIsLoading(false)
        
      })()
    }
  }, [userId])

  return (

    <section className={`animationDefault ${styles.myPicturesContainer}`}>
     {
      isLoading ?
       <Bone/> : 
        myPictures && myPictures.map((picture) => {
          return(
            <img src={picture.src} key={picture.id}/>
          )
        })   
     }
    </section>
  )
}

export default MyPosts