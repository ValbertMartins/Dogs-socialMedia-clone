import React from 'react'
import Modal from './feed/Modal'
import PostCollection from './feed/PostCollection'
import styles from "../css/Feed.module.css"
import Loading from './Loading'
const Feed = () => {
   
  React.useEffect(() => { 
    document.title = `Home | Dogs`
  } , [])

  const [ feed, setFeed ] = React.useState([])
  const [ currentPage, setCurrentPage ] = React.useState(1)
  const [ nextPageExists, setnextPageExists ] = React.useState(true)
  const [ isLoading , setIsLoading ] = React.useState(false)
  // const { payload, isLoading } = 
  //   useFetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`, {
  //     cache: "no-store"
  //   })

  // React.useEffect(() => {
  //   if(payload){
  //     setFeed( oldFeed => [...oldFeed, payload ])

  //     if(payload.length < 6 && payload.length > 0) {
  //       setnextPageExists(false)
  //     }
  //   }

  // }, [ payload ])

  React.useEffect(() => { 
    function storePicturesAndVerifiyConditionStop(payload){
      if(payload){
        setFeed( oldFeed => [ ...oldFeed, payload]) 
        if(payload.length < 6 && payload.length > 0) {
          setnextPageExists(false)
        }
      }
    }
    async function requestMyPictures(){
      try { 
        const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`, {
        cache: "no-store"
        })
        const payload  = await response.json()
        if(!response.ok) throw new Error()
        storePicturesAndVerifiyConditionStop(payload)
      }catch(error){
        console.log(error)
      } finally { 
        setIsLoading(false)
      }
    }
    requestMyPictures()
  }, [currentPage])
  

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

  
  const [ activeModal , setActiveModal ] = React.useState(false)  
  const [ idModal , setIdModal ] = React.useState(null)

  return (
    <section className={`${styles.feed} container`}>
      { isLoading && <Loading/>}  
      {
        feed.map( (collectionPosts,index) => {
          return (
            <PostCollection 
              collectionPosts={collectionPosts}
              key={index}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              isLoading={isLoading}
              setIdModal={setIdModal}
            />
          )    
        })
      }
      {!nextPageExists && <p className="contentEnd animationLeft">Não existem mais postagens</p>}
      {
        idModal && 
          <Modal setIdModal={setIdModal} idModal={idModal}/>
      }           
    </section>
    
  )
}

export default Feed