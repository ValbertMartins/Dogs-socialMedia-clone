import React from 'react'
import { ModalProvider } from '../context/ModalState'
import useFetch from '../hooks/useFetch'
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


  const { payload, isLoading } = 
    useFetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`, {
      cache: "no-store"
    })

  React.useEffect(() => {
    if(payload){
      setFeed( oldFeed => [...oldFeed, payload ]) 
      if(payload.length < 6 && payload.length > 0) {
        setnextPageExists(false)
      }
    }

  }, [ payload ])
  

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
  

  return (
    <ModalProvider>
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
              />
              )    
              })
        }
        {!nextPageExists && <p className="contentEnd animationLeft">Não existem mais postagens</p>}
        {
          activeModal && 
            <Modal setActiveModal={setActiveModal}/>
        }           
      </section>
    </ModalProvider>
  )

}

export default Feed