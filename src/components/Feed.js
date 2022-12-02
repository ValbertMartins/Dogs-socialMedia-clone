import React from 'react'
import PostCollection from './feed/PostCollection'
import Bone from "./svg/Bone"

const Feed = () => {
   

    const [ feed, setFeed ] = React.useState([])
    const [ currentPage, setCurrentPage ] = React.useState(1)
    const [ nextPageExists, setnextPageExists ] = React.useState(true)
   
  

    React.useEffect(() => {

      ( async () => {

        try {

          const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`)
          const json = await response.json()
         
          
          json.length == 0 ? setnextPageExists(false) : setFeed( oldFeed => [...oldFeed, json ]) 
         
          if(json.length < 6) {
            setnextPageExists(false)
            
          }
        }catch(erro){

        }
           
      })()

    }, [currentPage])
 

    console.log(nextPageExists)
   
  
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
          
          if(entry.isIntersecting){
            
            console.log('foo')
            nextPageExists ? 
              setCurrentPage( oldValue => oldValue + 1) : 
                observer.unobserve(document.querySelector("footer"))

            // if(nextPageExists){
            //   setCurrentPage( oldValue => oldValue + 1)
            // } else {
            //   observer.unobserve(document.querySelector("#footer"))
      
            // }
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

    <section className={`container feed`}>
       
       {feed.map( (collectionPosts,index) => {
              return <PostCollection collectionPosts={collectionPosts} key={index}/>    
            })}

          {!nextPageExists && <p className="contentEnd animationLeft">Não existem mais postagens</p>}

    </section>

  )

}

export default Feed