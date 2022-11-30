import React from 'react'
import {useFetch} from '../hooks/useFetch'
import PostCollection from './PostCollection'
const Feed = () => {

    const [ feed, setFeed ] = React.useState([])
    const [ currentPage, setCurrentPage] = React.useState(1)


    React.useEffect(() => {
      fetch(`https://dogsapi.origamid.dev/json/api/photo/?_total=6&_page=${currentPage}&user=0`)
        .then( response => response.json())
          .then( json => { 
            setFeed( oldFeed => [...oldFeed, json ] )
          })

    }, [currentPage])
 
    console.log(currentPage, feed)
    
    
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        console.log('bar')
        entries.forEach(entry => {

          if(entry.isIntersecting){
            console.log('foo')
            setCurrentPage( oldValue => oldValue + 1)

          }

        })

      }, {
        threshold: 1
        
      })
      
      observer.observe(document.querySelector("#footer"))

      return () => observer.unobserve(document.querySelector("#footer"))
      
    }, [])

    


    

  return (

    <section className={`container feed`}>
       
       {feed.map( (collectionPosts,index) => {
          return (
            <PostCollection collectionPosts={collectionPosts} key={index}/>
            )
          }
        )}
    </section>

  )

}

export default Feed